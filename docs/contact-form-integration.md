# Kontaktformular Integration

Das Kontaktformular ist als gemeinsame Komponente umgesetzt und wird auf der Startseite, den Service-Seiten und auf `/contact` verwendet. Es sendet nach dem letzten Schritt an `POST /api/contact`.

## Ablauf

1. Der Client sammelt `service`, `budget`, `name`, `email`, `project` und den aktuellen `sourcePath`.
2. Ein kleiner Honeypot-Feldschutz blockiert einfache Bot-Submits.
3. Die Route prüft die Eingaben serverseitig.
4. Die Anfrage wird in Supabase gespeichert.
5. Danach sendet die Route die Mail über Resend.
6. Der Datensatz bekommt den E-Mail-Status `pending`, `sent` oder `failed`.

## Benötigte Env Vars

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY` oder als Legacy-Fallback `SUPABASE_SECRET_KEY`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL` oder als Legacy-Fallback `CONTACT_FROM_EMAIL`, Standard ist `Nova Shift <hello@nova-shift.website>`
- `CONTACT_TO_EMAIL` oder als Legacy-Fallback `CONTACT_EMAIL`, Standard ist `hello@nova-shift.website`

## Supabase Tabelle

Verwendete Tabelle: `contact_requests`

Minimalfelder:

- `id` uuid primary key
- `service` text
- `budget` text
- `name` text
- `email` text
- `project` text
- `source_path` text
- `privacy_accepted` boolean
- `email_status` text
- `resend_email_id` text nullable
- `created_at` timestamptz

## Hinweise

- Die Route läuft serverseitig und nutzt nur Secret-Keys auf dem Server.
- Wenn Resend fehlt oder den Versand ablehnt, bleibt der Datensatz in Supabase erhalten und bekommt `failed`.