import { homeCards, homeStats } from '@/lib/site-content';
import { Container } from '@/components/ui/container';
import { HomeHero } from '@/components/sections/home-hero';
import { LogoTicker } from '@/components/sections/logo-ticker';
import { ThreeCardGrid } from '@/components/sections/three-card-grid';
import { StatStrip } from '@/components/sections/stat-strip';
import { MotionSection } from '@/components/motion/motion-system';
import { CaseStudySection, FaqSection, FunnelSection, TestimonialSection } from '@/components/sections/cro-sections';
import { EntitySheet } from '@/components/seo/entity-sheet';
import { companyEntity, siteMeta } from '@/lib/site-content';

export function HomePage() {
  return (
    <main className="ds-page">
      <HomeHero />
      <MotionSection className="ds-section-tight">
        <Container>
          <EntitySheet
            name={companyEntity.name}
            type="Organization"
            definition={companyEntity.description}
            url={companyEntity.url}
            properties={{ Founded: companyEntity.foundingDate, Languages: (companyEntity.availableLanguages || []).join(', ') }}
          />
        </Container>
      </MotionSection>
      <LogoTicker />

      <MotionSection className="ds-section-tight">
        <Container>
          <StatStrip stats={homeStats} />
        </Container>
      </MotionSection>

      <MotionSection id="services" className="ds-section">
        <Container>
          <div className="ds-stack" style={{ ['--stack-gap' as string]: '1rem' }}>
            <p className="ds-eyebrow">Nova Shift / Services</p>
            <h2 className="ds-section-title max-w-4xl whitespace-pre-line">Fünf Disziplinen. Ein System.</h2>
            <p className="ds-body-copy max-w-3xl whitespace-pre-line">
              Jede Disziplin ist eigenständig – gemeinsam bilden sie ein skalierbares Wachstumssystem.
            </p>
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="ds-section-tight">
        <ThreeCardGrid cards={homeCards} />
      </MotionSection>

      <CaseStudySection />
      <TestimonialSection />
      <FaqSection />
      <FunnelSection />
    </main>
  );
}