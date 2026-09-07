import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { BodyCopy, DisplayTitle, Eyebrow, SectionTitle } from '@/components/ui/typography';
import { PageJsonLd } from '@/components/seo/page-json-ld';
import { companyEntity, siteMeta } from '@/lib/site-content';

const canonicalUrl = new URL('datenschutz', siteMeta.url).toString();

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzhinweise für die Website von Nova Shift.',
  alternates: {
    canonical: canonicalUrl,
  },
};

export default function DatenschutzPage() {
  return (
    <>
      <PageJsonLd
        url={canonicalUrl}
        title="Datenschutzerklärung"
        description="Datenschutzhinweise für die Website von Nova Shift."
        pageType="WebPage"
        breadcrumbs={[
          { name: 'Home', url: siteMeta.url },
          { name: 'Datenschutzerklärung', url: canonicalUrl },
        ]}
      />

      <main className="ds-page">
        <section className="pt-28 pb-16 md:pt-36 md:pb-24">
          <Container>
            <div className="ds-stack max-w-4xl" style={{ ['--stack-gap' as string]: '1.25rem' }}>
              <Eyebrow as="p">Rechtliches</Eyebrow>
              <DisplayTitle as="h1" className="whitespace-pre-line">
                {`Datenschutzerklärung`}
              </DisplayTitle>
              <BodyCopy className="max-w-3xl text-[1.02rem] md:text-lg">
                Diese Seite beschreibt, wie wir personenbezogene Daten verarbeiten, wenn du uns über das Kontaktformular oder per E-Mail kontaktierst.
              </BodyCopy>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
              <article className="ds-stack" style={{ ['--stack-gap' as string]: '1rem' }}>
                <section className="ds-stack" style={{ ['--stack-gap' as string]: '0.75rem' }}>
                  <SectionTitle as="h2">1. Verantwortlicher</SectionTitle>
                  <BodyCopy>
                    {companyEntity.name}
                    <br />
                    {companyEntity.email}
                  </BodyCopy>
                </section>

                <section className="ds-stack" style={{ ['--stack-gap' as string]: '0.75rem' }}>
                  <SectionTitle as="h2">2. Kontaktformular</SectionTitle>
                  <BodyCopy>
                    Wenn du das Formular nutzt, verarbeiten wir die von dir eingegebenen Daten zur Bearbeitung deiner Anfrage, zur Kontaktaufnahme und zur Vorbereitung eines Angebots.
                    Dazu gehören insbesondere Name, E-Mail-Adresse, gewählte Leistung, Budgetrahmen und dein Briefing.
                  </BodyCopy>
                  <BodyCopy>
                    Die Verarbeitung erfolgt auf Grundlage deiner Einwilligung und zur Durchführung vorvertraglicher Maßnahmen. Pflichtangaben sind im Formular gekennzeichnet.
                  </BodyCopy>
                </section>

                <section className="ds-stack" style={{ ['--stack-gap' as string]: '0.75rem' }}>
                  <SectionTitle as="h2">3. Technische Empfänger</SectionTitle>
                  <BodyCopy>
                    Formularübermittlungen werden über unsere eigene Server-Route verarbeitet und anschließend an die internen Systeme Supabase und Resend übergeben, um die Anfrage zu speichern und per E-Mail zuzustellen.
                    Die Verarbeitung erfolgt zweckgebunden und auf das notwendige Minimum beschränkt.
                  </BodyCopy>
                </section>

                <section className="ds-stack" style={{ ['--stack-gap' as string]: '0.75rem' }}>
                  <SectionTitle as="h2">4. Speicherdauer und Rechte</SectionTitle>
                  <BodyCopy>
                    Wir speichern Anfragen nur so lange, wie sie für die Bearbeitung erforderlich sind oder gesetzliche Pflichten dies verlangen. Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Widerspruch.
                  </BodyCopy>
                  <BodyCopy>
                    Wenn du Fragen zum Datenschutz hast, melde dich direkt per E-Mail an {companyEntity.email}.
                  </BodyCopy>
                </section>
              </article>

              <aside className="ds-stack ds-surface ds-surface--glass p-6 md:p-8" style={{ ['--stack-gap' as string]: '0.9rem' }}>
                <Eyebrow as="p">Kurzfassung</Eyebrow>
                <BodyCopy>
                  Das Formular speichert nur die für die Anfrage nötigen Angaben und nutzt eine separate Checkbox mit Link auf diese Datenschutzerklärung.
                </BodyCopy>
                <BodyCopy>
                  Wenn du uns nicht über das Formular schreiben möchtest, erreichst du uns jederzeit auch direkt per E-Mail.
                </BodyCopy>
                <Link href="/contact#contact" className="text-sm text-[var(--accent-light)] underline underline-offset-4 transition-colors hover:text-[var(--text-primary)]">
                  Zurück zum Kontaktformular
                </Link>
              </aside>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}