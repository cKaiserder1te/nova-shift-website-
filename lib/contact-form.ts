import { z } from 'zod';

export const contactServices = [
  { id: 'advertising', label: 'Advertising', desc: 'Paid Social, Search & Scaling' },
  { id: 'cast', label: 'Cast & UGC', desc: 'Creators & Performance Content' },
  { id: 'web', label: 'Web & CRO', desc: 'High-Converting Landingpages' },
  { id: 'aura', label: 'Aura', desc: 'Branding & Identity System' },
  { id: 'production', label: 'Production', desc: 'High-End Video & Photo' },
] as const;

export const contactBudgets = ['< 5k', '5k - 15k', '15k - 50k', '50k+'] as const;
export type ContactServiceId = (typeof contactServices)[number]['id'];
export const contactServiceIds = contactServices.map((service) => service.id) as [
  ContactServiceId,
  ...ContactServiceId[],
];

export type ContactBudget = (typeof contactBudgets)[number];

export const contactSubmissionSchema = z.object({
  service: z.enum(contactServiceIds),
  budget: z.enum(contactBudgets),
  name: z.string().trim().min(2, 'Bitte gib einen gültigen Namen an.').max(100, 'Bitte überprüfe deine Eingaben.'),
  email: z.string().trim().email('Bitte gib eine gültige E-Mail-Adresse an.').max(254, 'Bitte überprüfe deine Eingaben.'),
  project: z.string().trim().max(5000, 'Bitte überprüfe deine Eingaben.').default(''),
  privacyAccepted: z.boolean().refine((value) => value, {
    message: 'Bitte bestätige die Datenschutzerklärung.',
  }),
  website: z.string().trim().max(0, 'Ungültige Anfrage.').default(''),
  sourcePath: z.string().trim().max(2048, 'Bitte überprüfe deine Eingaben.').default(''),
}).strict();

export type ContactSubmissionInput = z.infer<typeof contactSubmissionSchema>;

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
  const result = contactSubmissionSchema.safeParse(value);

  if (!result.success) {
    return {
      ok: false,
      errors: result.error.issues.map((issue) => issue.message),
    };
  }

  return { ok: true, data: result.data };
}

export function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
