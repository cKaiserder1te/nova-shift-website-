export const contactServices = [
  { id: 'advertising', label: 'Advertising', desc: 'Paid Social, Search & Scaling' },
  { id: 'cast', label: 'Cast & UGC', desc: 'Creators & Performance Content' },
  { id: 'web', label: 'Web & CRO', desc: 'High-Converting Landingpages' },
  { id: 'aura', label: 'Aura', desc: 'Branding & Identity System' },
  { id: 'production', label: 'Production', desc: 'High-End Video & Photo' },
] as const;

export const contactBudgets = ['< 5k', '5k - 15k', '15k - 50k', '50k+'] as const;

export type ContactServiceId = (typeof contactServices)[number]['id'];
export type ContactBudget = (typeof contactBudgets)[number];

export type ContactSubmissionInput = {
  service: string;
  budget: string;
  name: string;
  email: string;
  project: string;
  website?: string;
  sourcePath?: string;
};

export type ContactSubmissionRecord = {
  id: string;
  service: string;
  budget: string;
  name: string;
  email: string;
  project: string;
  source_path: string;
  status: 'received' | 'sent' | 'email_failed';
  user_agent: string | null;
  email_sent_at: string | null;
  email_error: string | null;
  created_at: string;
};

export const contactServiceLabels = Object.fromEntries(contactServices.map((service) => [service.id, service.label])) as Record<string, string>;
export const contactBudgetLabels = Object.fromEntries(contactBudgets.map((budget) => [budget, budget])) as Record<string, string>;

export function parseContactSubmission(value: unknown):
  | { ok: true; data: ContactSubmissionInput }
  | { ok: false; errors: string[] } {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return { ok: false, errors: ['Ungültige Anfrage.'] };
  }

  const data = value as Partial<Record<keyof ContactSubmissionInput, unknown>>;
  const errors: string[] = [];

  const service = typeof data.service === 'string' ? data.service.trim() : '';
  const budget = typeof data.budget === 'string' ? data.budget.trim() : '';
  const name = typeof data.name === 'string' ? data.name.trim() : '';
  const email = typeof data.email === 'string' ? data.email.trim() : '';
  const project = typeof data.project === 'string' ? data.project.trim() : '';
  const website = typeof data.website === 'string' ? data.website.trim() : '';
  const sourcePath = typeof data.sourcePath === 'string' ? data.sourcePath.trim() : '';

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!contactServices.some((item) => item.id === service)) {
    errors.push('Bitte wähle einen gültigen Service aus.');
  }

  if (!contactBudgets.includes(budget as ContactBudget)) {
    errors.push('Bitte wähle einen gültigen Budgetrahmen aus.');
  }

  if (name.length < 2) {
    errors.push('Bitte gib einen gültigen Namen an.');
  }

  if (!emailPattern.test(email)) {
    errors.push('Bitte gib eine gültige E-Mail-Adresse an.');
  }

  if (website.length > 0) {
    errors.push('Ungültige Anfrage.');
  }

  if (errors.length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: {
      service,
      budget,
      name,
      email,
      project,
      website,
      sourcePath,
    },
  };
}

export function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
