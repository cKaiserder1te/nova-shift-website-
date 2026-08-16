import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { companyEntity } from '@/lib/site-content';
import {
  contactBudgetLabels,
  contactServiceLabels,
  escapeHtml,
  parseContactSubmission,
  type ContactSubmissionRecord,
} from '@/lib/contact-form';

const supabaseUrl = process.env.SUPABASE_URL?.replace(/\/$/, '');
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const resendApiKey = process.env.RESEND_API_KEY;
const resendFrom = process.env.RESEND_FROM_EMAIL ?? 'Nova Shift <hello@nova-shift.website>';
const recipientEmail = process.env.CONTACT_TO_EMAIL ?? companyEntity.email;

function isConfigured() {
  return Boolean(supabaseUrl && supabaseServiceRoleKey && resendApiKey);
}

function buildEmailText(record: ContactSubmissionRecord) {
  return [
    'Neue Kontaktanfrage über nova-shift.website',
    '',
    `Name: ${record.name}`,
    `E-Mail: ${record.email}`,
    `Service: ${contactServiceLabels[record.service] ?? record.service}`,
    `Budget: ${contactBudgetLabels[record.budget] ?? record.budget}`,
    `Quelle: ${record.source_path || '/contact'}`,
    `Status: ${record.status}`,
    record.project ? `Briefing: ${record.project}` : 'Briefing: -',
    record.user_agent ? `User-Agent: ${record.user_agent}` : 'User-Agent: -',
  ].join('\n');
}

function buildEmailHtml(record: ContactSubmissionRecord) {
  const project = record.project ? escapeHtml(record.project).replaceAll('\n', '<br />') : '-';

  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111827;">
      <h2 style="margin: 0 0 16px;">Neue Kontaktanfrage</h2>
      <p style="margin: 0 0 8px;"><strong>Name:</strong> ${escapeHtml(record.name)}</p>
      <p style="margin: 0 0 8px;"><strong>E-Mail:</strong> ${escapeHtml(record.email)}</p>
      <p style="margin: 0 0 8px;"><strong>Service:</strong> ${escapeHtml(contactServiceLabels[record.service] ?? record.service)}</p>
      <p style="margin: 0 0 8px;"><strong>Budget:</strong> ${escapeHtml(contactBudgetLabels[record.budget] ?? record.budget)}</p>
      <p style="margin: 0 0 8px;"><strong>Quelle:</strong> ${escapeHtml(record.source_path || '/contact')}</p>
      <p style="margin: 0 0 8px;"><strong>Briefing:</strong><br />${project}</p>
    </div>
  `;
}

async function insertSubmission(record: ContactSubmissionRecord) {
  const response = await fetch(`${supabaseUrl}/rest/v1/contact_submissions`, {
    method: 'POST',
    headers: {
      apikey: supabaseServiceRoleKey as string,
      Authorization: `Bearer ${supabaseServiceRoleKey}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(record),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(details || 'Supabase insert failed');
  }
}

async function updateSubmissionStatus(id: string, patch: Partial<ContactSubmissionRecord>) {
  await fetch(`${supabaseUrl}/rest/v1/contact_submissions?id=eq.${encodeURIComponent(id)}`, {
    method: 'PATCH',
    headers: {
      apikey: supabaseServiceRoleKey as string,
      Authorization: `Bearer ${supabaseServiceRoleKey}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(patch),
  });
}

export async function POST(request: Request) {
  const parsed = parseContactSubmission(await request.json().catch(() => null));

  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.errors[0] ?? 'Ungültige Anfrage.' }, { status: 400 });
  }

  if (!isConfigured()) {
    return NextResponse.json(
      { error: 'Kontaktformular ist serverseitig nicht konfiguriert.' },
      { status: 500 },
    );
  }

  const requestHeaders = await headers();
  const now = new Date().toISOString();
  const submissionId = crypto.randomUUID();
  const record: ContactSubmissionRecord = {
    id: submissionId,
    service: parsed.data.service,
    budget: parsed.data.budget,
    name: parsed.data.name,
    email: parsed.data.email,
    project: parsed.data.project,
    source_path: parsed.data.sourcePath || '/contact',
    status: 'received',
    user_agent: requestHeaders.get('user-agent'),
    email_sent_at: null,
    email_error: null,
    created_at: now,
  };

  try {
    await insertSubmission(record);
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Die Anfrage konnte nicht gespeichert werden.',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 502 },
    );
  }

  const emailPayload = {
    from: resendFrom,
    to: [recipientEmail],
    reply_to: parsed.data.email,
    subject: `Neue Kontaktanfrage: ${contactServiceLabels[parsed.data.service] ?? parsed.data.service} / ${parsed.data.name}`,
    text: buildEmailText(record),
    html: buildEmailHtml(record),
  };

  const emailResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(emailPayload),
  });

  if (emailResponse.ok) {
    await updateSubmissionStatus(submissionId, {
      status: 'sent',
      email_sent_at: new Date().toISOString(),
      email_error: null,
    });

    return NextResponse.json({ ok: true, submissionId }, { status: 200 });
  }

  const emailError = await emailResponse.text();
  await updateSubmissionStatus(submissionId, {
    status: 'email_failed',
    email_error: emailError || 'Resend request failed',
  });

  return NextResponse.json(
    {
      ok: true,
      submissionId,
      warning: 'Die Anfrage wurde gespeichert, aber die Mail konnte nicht ausgeliefert werden.',
    },
    { status: 200 },
  );
}
