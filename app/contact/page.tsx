import type { Metadata } from 'next';
import { ContactForm } from '@/components/sections/contact-form';
import { FaqSection, FunnelSection } from '@/components/sections/cro-sections';
import { Container } from '@/components/ui/container';
import { EnterpriseButtonLink } from '@/components/ui/enterprise-button';
import { BodyCopy, DisplayTitle, Eyebrow } from '@/components/ui/typography';
import { ShortAnswer } from '@/components/seo/short-answer';
import { StatStrip } from '@/components/sections/stat-strip';
import { homeStats, siteMeta } from '@/lib/site-content';
import { MotionSection } from '@/components/motion/motion-system';
import { FaqJsonLd } from '@/components/seo/faq-json-ld';
import { PageJsonLd } from '@/components/seo/page-json-ld';
import { EntitySheet } from '@/components/seo/entity-sheet';
import { companyEntity } from '@/lib/site-content';

const canonicalUrl = new URL('contact', siteMeta.url).toString();

export const metadata: Metadata = {
  title: 'Nova Shift – Kontakt',
  description: 'Starte dein Projekt mit Nova Shift. Premium Creative Agency für Werbung, Content, Web und Branding.',
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: 'Nova Shift – Kontakt',
    description: 'Starte dein Projekt mit Nova Shift. Premium Creative Agency für Werbung, Content, Web und Branding.',
    url: canonicalUrl,
  },
  twitter: {
    title: 'Nova Shift – Kontakt',
    description: 'Starte dein Projekt mit Nova Shift. Premium Creative Agency für Werbung, Content, Web und Branding.',
  },
};

export default function ContactPage() {
  const pageUrl = canonicalUrl;

  return (
    <>
      <PageJsonLd
        url={pageUrl}
        title="Nova Shift – Kontakt"
        description="Starte dein Projekt mit Nova Shift. Premium Creative Agency für Werbung, Content, Web und Branding."
        pageType="ContactPage"
        breadcrumbs={[
          { name: 'Home', url: siteMeta.url },
          { name: 'Kontakt', url: pageUrl },
        ]}
      />
      <FaqJsonLd pageUrl={pageUrl} />

      <main className="ds-page">
        <section id="contact" className="pt-28 pb-16 md:pt-36 md:pb-24">
          <Container>
            <div className="ds-stack max-w-4xl" style={{ ['--stack-gap' as string]: '1.5rem' }}>
              <Eyebrow as="p">Kontakt / Project Brief</Eyebrow>
              <DisplayTitle as="h1" className="max-w-3xl whitespace-pre-line">
                {`Projekt starten.\nSchnell, klar, präzise.`}
              </DisplayTitle>
              <BodyCopy className="max-w-2xl text-[1.02rem] md:text-lg">
                Wir antworten mit einer klaren nächsten Aktion. Kein unstrukturierter Ping-Pong, sondern ein Setup für den Start.
              </BodyCopy>
              <ShortAnswer text="Wir melden uns werktags innerhalb von 24 Stunden mit der nächsten sinnvollen Aktion." />
              <div className="ds-cluster pt-2">
                <EnterpriseButtonLink href="/#services" variant="secondary">
                  Leistungen ansehen
                </EnterpriseButtonLink>
                <EnterpriseButtonLink href="/advertising" variant="ghost">
                  Beispiel ansehen
                </EnterpriseButtonLink>
              </div>
            </div>

            <div className="mt-10 max-w-5xl">
              <ContactForm />
            </div>
          </Container>
        </section>

        <MotionSection className="ds-section-tight">
          <Container>
            <EntitySheet
              name={companyEntity.name}
              type="Organization"
              definition={companyEntity.description}
              aliases={[companyEntity.name]}
              url={companyEntity.url}
              properties={{ Email: companyEntity.email, Languages: (companyEntity.availableLanguages || []).join(', ') }}
            />
          </Container>
        </MotionSection>

        <MotionSection className="ds-section-tight">
          <Container>
            <StatStrip stats={homeStats} />
          </Container>
        </MotionSection>

        <FunnelSection />

        <FaqSection />
      </main>
    </>
  );
}