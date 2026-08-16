# Kontaktformular Integration

Das Kontaktformular sendet nach dem letzten Schritt an `POST /api/contact`.

## Ablauf

1. Der Client sammelt `service`, `budget`, `name`, `email`, `project`.
2. Ein kleiner Honeypot-Feldschutz blockiert einfache Bot-Submits.
3. Die Route prüft die Eingaben serverseitig.
4. Die Anfrage wird in Supabase gespeichert.
5. Danach sendet die Route die Mail über Resend.
6. Der Datensatz bekommt den Status `sent` oder `email_failed`.

## Benötigte Env Vars

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL` optional, Standard ist `Nova Shift <hello@nova-shift.website>`
- `CONTACT_TO_EMAIL` optional, Standard ist `hello@nova-shift.website`

## Supabase Tabelle

Empfohlene Tabelle: `contact_submissions`

Minimalfelder:

- `id` uuid primary key
- `service` text
- `budget` text
- `name` text
- `email` text
- `project` text
- `source_path` text
- `status` text
- `user_agent` text nullable
- `email_sent_at` timestamptz nullable
- `email_error` text nullable
- `created_at` timestamptz

## Hinweise

- Die Route läuft serverseitig und nutzt nur Secret-Keys auf dem Server.
- Wenn Resend fehlschlägt, bleibt der Datensatz in Supabase erhalten und bekommt `email_failed`.