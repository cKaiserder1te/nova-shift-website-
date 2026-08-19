import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getSupabaseAdmin } from '@/lib/supabase-admin';

export const runtime = 'nodejs';

const allowedServices = ['advertising', 'cast', 'web', 'aura', 'production'] as const;
const allowedBudgets = ['< 5k', '5k - 15k', '15k - 50k', '50k+'] as const;

type ContactPayload = {
  service?: unknown;
  budget?: unknown;
  name?: unknown;
  email?: unknown;
  project?: unknown;
  privacyAccepted?: unknown;
  website?: unknown;
};

const isAllowedValue = <T extends readonly string[]>(value: unknown, allowed: T): value is T[number] =>
  typeof value === 'string' && allowed.includes(value);

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Ungültige Anfrage.' }, { status: 400 });
  }

  const service = payload.service;
  const budget = payload.budget;
  const name = typeof payload.name === 'string' ? payload.name.trim() : '';
  const email = typeof payload.email === 'string' ? payload.email.trim() : '';
  const project = typeof payload.project === 'string' ? payload.project.trim() : '';
  const website = typeof payload.website === 'string' ? payload.website.trim() : '';

  if (
    website ||
    !isAllowedValue(service, allowedServices) ||
    !isAllowedValue(budget, allowedBudgets) ||
    !name || name.length > 100 ||
    !email || email.length > 254 || !isEmail(email) ||
    project.length > 5000 ||
    payload.privacyAccepted !== true
  ) {
    return NextResponse.json({ error: 'Bitte überprüfe deine Eingaben.' }, { status: 400 });
  }

  let supabase;
  let requestId: string;

  try {
    supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from('contact_requests')
      .insert({
        service,
        budget,
        name,
        email,
        project,
        privacy_accepted: true,
        email_status: 'pending',
      })
      .select('id')
      .single();

    if (error || !data) {
      if (error) {
        console.error('Supabase insert failed:', error);
      } else {
        console.error('Supabase insert failed without error object.');
      }
      return NextResponse.json({ error: 'Die Anfrage konnte nicht gespeichert werden.' }, { status: 500 });
    }

    requestId = String(data.id);
  } catch (insertException) {
    console.error('Unexpected exception during Supabase insert:', insertException);
    return NextResponse.json({ error: 'Die Anfrage konnte nicht gespeichert werden.' }, { status: 500 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !contactEmail || !fromEmail) {
    await supabase
      .from('contact_requests')
      .update({ email_status: 'failed' })
      .eq('id', requestId);

    return NextResponse.json({ error: 'Der E-Mail-Versand ist derzeit nicht verfügbar.' }, { status: 500 });
  }

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      replyTo: email,
      subject: `Neue Projektanfrage: ${name}`,
      text: [
        `Name: ${name}`,
        `E-Mail: ${email}`,
        `Service: ${service}`,
        `Budget: ${budget}`,
        '',
        'Briefing:',
        project || 'Kein Briefing angegeben.',
      ].join('\n'),
    });

    if (error || !data?.id) {
      throw new Error('Resend did not return an email id.');
    }

    const { error: updateError } = await supabase
      .from('contact_requests')
      .update({ email_status: 'sent', resend_email_id: data.id })
      .eq('id', requestId);

    if (updateError) {
      return NextResponse.json({ error: 'Die Anfrage wurde gesendet, konnte aber nicht abschließend verarbeitet werden.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    await supabase
      .from('contact_requests')
      .update({ email_status: 'failed' })
      .eq('id', requestId);

    return NextResponse.json({ error: 'Die Anfrage konnte nicht per E-Mail versendet werden.' }, { status: 502 });
  }
}