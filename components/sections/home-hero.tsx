import { Container } from '@/components/ui/container';
import { homeHero } from '@/lib/site-content';
import { EnterpriseButtonLink } from '@/components/ui/enterprise-button';
import { BodyCopy, DisplayTitle, Eyebrow } from '@/components/ui/typography';
import { ShortAnswer } from '@/components/seo/short-answer';
import { EnterpriseCard } from '@/components/ui/enterprise-card';
import { MotionReveal, MotionSequence, MotionSequenceItem, MotionSection } from '@/components/motion/motion-system';

const serviceRoutes = [
  { href: '/advertising', label: 'Nova Advertising' },
  { href: '/cast', label: 'Nova Cast' },
  { href: '/web', label: 'Nova Web' },
  { href: '/aura', label: 'Nova Aura' },
  { href: '/production', label: 'Nova Production' },
];

export function HomeHero() {
  return (
    <MotionSection className="relative overflow-hidden pt-32 pb-14 md:pt-40 md:pb-20">
      <Container>
        <div className="ds-split-grid">
          <MotionSequence className="ds-stack" style={{ ['--stack-gap' as string]: '2rem' }}>
            <MotionSequenceItem>
              <Eyebrow as="p">{homeHero.label}</Eyebrow>
            </MotionSequenceItem>
            <MotionSequenceItem>
              <MotionReveal kind="mask">
                <DisplayTitle as="h1" className="max-w-4xl whitespace-pre-line">
                  {homeHero.title.de}
                </DisplayTitle>
              </MotionReveal>
            </MotionSequenceItem>
            <MotionSequenceItem>
              <BodyCopy className="max-w-2xl text-[1.02rem] md:text-lg">{homeHero.meta.de}</BodyCopy>
            </MotionSequenceItem>
            <MotionSequenceItem>
              <ShortAnswer text={homeHero.subtitle.de} />
            </MotionSequenceItem>
            <MotionSequenceItem>
              <div className="ds-cluster pt-2">
                <EnterpriseButtonLink href="/contact" variant="primary">
                  Projekt starten
                </EnterpriseButtonLink>
                <EnterpriseButtonLink href="#cases" variant="secondary">
                  Case Studies ansehen
                </EnterpriseButtonLink>
                <EnterpriseButtonLink href="#services" variant="ghost">
                  Services entdecken
                </EnterpriseButtonLink>
              </div>
            </MotionSequenceItem>
            <MotionSequenceItem>
              <div className="ds-cluster">
                {serviceRoutes.map((pill) => (
                  <EnterpriseButtonLink key={pill.href} href={pill.href} variant="pill" size="sm">
                    {pill.label}
                  </EnterpriseButtonLink>
                ))}
              </div>
            </MotionSequenceItem>
          </MotionSequence>

          <MotionReveal kind="mask" delay={0.12}>
            <EnterpriseCard variant="glass" className="p-6 md:p-8">
              <Eyebrow as="p">DE</Eyebrow>
              <BodyCopy className="mt-4 whitespace-pre-line">{homeHero.subtitle.de}</BodyCopy>
              <Eyebrow as="p" className="mt-8">
                EN
              </Eyebrow>
              <BodyCopy className="mt-4 whitespace-pre-line">{homeHero.subtitle.en}</BodyCopy>
            </EnterpriseCard>
          </MotionReveal>
        </div>
      </Container>
    </MotionSection>
  );
}