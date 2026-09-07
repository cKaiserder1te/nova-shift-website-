import { homeCards, homeStats } from '@/lib/site-content';
import { Container } from '@/components/ui/container';
import { HomeHero } from '@/components/sections/home-hero';
import { ContactForm } from '@/components/sections/contact-form';
import { LogoTicker } from '@/components/sections/logo-ticker';
import { ThreeCardGrid } from '@/components/sections/three-card-grid';
import { StatStrip } from '@/components/sections/stat-strip';
import { MotionSection } from '@/components/motion/motion-system';
import { BodyCopy, DisplayTitle, Eyebrow } from '@/components/ui/typography';
import { CaseStudySection, FaqSection, FunnelSection, TestimonialSection } from '@/components/sections/cro-sections';

export function HomePage() {
  return (
    <main className="ds-page">
      <HomeHero />
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

      <MotionSection id="contact" className="ds-section">
        <Container>
          <div className="ds-stack max-w-4xl" style={{ ['--stack-gap' as string]: '1rem' }}>
            <Eyebrow as="p">Kontakt / Project Brief</Eyebrow>
            <DisplayTitle as="h2" className="whitespace-pre-line">
              {`Projekt starten.
Schnell, klar, präzise.`}
            </DisplayTitle>
            <BodyCopy className="max-w-2xl text-[1.02rem] md:text-lg">
              Das Formular ist hier direkt eingebettet, damit der Einstieg ohne Umweg möglich ist.
            </BodyCopy>
          </div>

          <div className="mt-10 max-w-5xl">
            <ContactForm />
          </div>
        </Container>
      </MotionSection>

      <CaseStudySection />
      <TestimonialSection />
      <FaqSection />
      <FunnelSection />
    </main>
  );
}