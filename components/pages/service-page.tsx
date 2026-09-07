import { ContactForm } from '@/components/sections/contact-form';
import { CaseStudySection, FaqSection, FunnelSection, TestimonialSection } from '@/components/sections/cro-sections';
import { ImageFeature } from '@/components/sections/image-feature';
import { SectionHeading } from '@/components/sections/section-heading';
import { ServiceHero } from '@/components/sections/service-hero';
import { StatStrip } from '@/components/sections/stat-strip';
import { ThreeCardGrid } from '@/components/sections/three-card-grid';
import { Container } from '@/components/ui/container';
import { MotionSection, MotionSequence, MotionSequenceItem, MotionReveal } from '@/components/motion/motion-system';
import type { PageContent } from '@/lib/types';
import { EntitySheet } from '@/components/seo/entity-sheet';
import { coreServices, siteMeta, companyEntity } from '@/lib/site-content';

type ServicePageProps = {
  page: PageContent;
};

export function ServicePage({ page }: ServicePageProps) {
  return (
    <main className="ds-page">
      <ServiceHero label={page.heroLabel} title={page.heroTitle} tagline={page.heroTagline} />

      <MotionSection className="ds-section">
        <Container>
          <SectionHeading label={page.intro.label} title={page.intro.title} body={page.intro.body} />
        </Container>
      </MotionSection>

      {page.slug === 'contact' ? (
        <MotionSection className="py-10 md:py-16">
          <Container>
            <ContactForm />
          </Container>
        </MotionSection>
      ) : null}

      {page.slug === 'about' ? (
        <MotionSection className="ds-section-tight">
          <Container>
            <EntitySheet
              name={companyEntity.name}
              type="Organization"
              definition={companyEntity.description}
              aliases={[companyEntity.name]}
              url={companyEntity.url}
              properties={{ Founded: companyEntity.foundingDate, Languages: (companyEntity.availableLanguages || []).join(', ') }}
            />
          </Container>
        </MotionSection>
      ) : null}

      {/* Entity sheet for machines and humans to extract */}
      <MotionSection className="ds-section-tight">
        <Container>
          {(() => {
            const service = coreServices.find((s) => s.slug === (page.slug as any));
            if (!service) return null;

            const absoluteUrl = new URL(service.urlPath.replace(/^\/+/, ''), siteMeta.url).toString();

            return (
              <EntitySheet
                name={service.name}
                type="Service"
                definition={service.definition.de}
                aliases={[service.name]}
                url={absoluteUrl}
                properties={{ Audience: service.audience.de, Deliverables: service.deliverables.de.join('; ') }}
              />
            );
          })()}
        </Container>
      </MotionSection>

      <MotionSection className="ds-section-tight">
        <ThreeCardGrid cards={page.cards} />
      </MotionSection>

      <MotionSection className="ds-section">
        <Container>
          <SectionHeading label={page.usp.label} title={page.usp.title} />
          <MotionSequence className="mt-10 grid gap-px bg-[var(--border)] md:grid-cols-2 xl:grid-cols-4">
            {page.usp.items.map((item) => (
              <MotionSequenceItem key={`${item.icon}-${item.title.de}`}>
                <article className="bg-[var(--bg2)] p-6 md:p-8">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.35em] text-[var(--accent-light)]">{item.icon}</p>
                  <MotionReveal kind="mask" viewportAmount={0.4}>
                    <h3 className="mt-5 text-2xl font-light tracking-[0.03em] text-[var(--text)]">{item.title.de}</h3>
                  </MotionReveal>
                  <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">{item.body.de}</p>
                </article>
              </MotionSequenceItem>
            ))}
          </MotionSequence>
        </Container>
      </MotionSection>

      <MotionSection className="py-10 md:py-16">
        <Container>
          <StatStrip stats={page.stats} />
        </Container>
      </MotionSection>

      <ImageFeature feature={page.feature} />

      <CaseStudySection />
      <TestimonialSection />
      <FaqSection />
      <FunnelSection />
    </main>
  );
}