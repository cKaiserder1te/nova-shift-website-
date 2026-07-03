import type { LocaleCopy } from '@/lib/types';
import { Container } from '@/components/ui/container';
import { EnterpriseButtonLink } from '@/components/ui/enterprise-button';
import { BodyCopy, DisplayTitle, Eyebrow } from '@/components/ui/typography';
import { ShortAnswer } from '@/components/seo/short-answer';
import { EnterpriseCard } from '@/components/ui/enterprise-card';
import { MotionReveal, MotionSequence, MotionSequenceItem, MotionSection } from '@/components/motion/motion-system';

type ServiceHeroProps = {
  label: string;
  title: LocaleCopy;
  tagline: LocaleCopy;
};

export function ServiceHero({ label, title, tagline }: ServiceHeroProps) {
  return (
    <MotionSection className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <Container>
        <div className="ds-split-grid">
          <MotionSequence className="ds-stack" style={{ ['--stack-gap' as string]: '1.5rem' }}>
            <MotionSequenceItem>
              <Eyebrow as="p">{label}</Eyebrow>
            </MotionSequenceItem>
            <MotionSequenceItem>
              <MotionReveal kind="mask">
                <DisplayTitle as="h1" className="max-w-4xl whitespace-pre-line">
                  {title.de}
                </DisplayTitle>
              </MotionReveal>
            </MotionSequenceItem>
            <MotionSequenceItem>
              <BodyCopy className="max-w-2xl whitespace-pre-line text-[1.02rem] md:text-lg">{tagline.de}</BodyCopy>
            </MotionSequenceItem>
            <MotionSequenceItem>
              <ShortAnswer text={tagline.de} />
            </MotionSequenceItem>
            <MotionSequenceItem>
              <div className="ds-cluster pt-2">
                <EnterpriseButtonLink href="/contact" variant="primary">
                  Projekt starten
                </EnterpriseButtonLink>
                <EnterpriseButtonLink href="#cases" variant="secondary">
                  Case Studies ansehen
                </EnterpriseButtonLink>
                <EnterpriseButtonLink href="#faq" variant="ghost">
                  FAQ lesen
                </EnterpriseButtonLink>
              </div>
            </MotionSequenceItem>
            <MotionSequenceItem>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.34em] text-[var(--text-dim)]">
                Antwort in 24h · Erstgespräch kostenlos · DE / EN
              </p>
            </MotionSequenceItem>
          </MotionSequence>

          <MotionReveal kind="mask" delay={0.12}>
            <EnterpriseCard variant="glass" className="p-6 md:p-8">
              <Eyebrow as="p">DE</Eyebrow>
              <BodyCopy className="mt-4 whitespace-pre-line">{title.de}</BodyCopy>
              <Eyebrow as="p" className="mt-8">
                EN
              </Eyebrow>
              <BodyCopy className="mt-4 whitespace-pre-line">{title.en}</BodyCopy>
              <div className="mt-8 border-t border-[var(--border)] pt-6">
                <BodyCopy className="ds-body-copy--dense whitespace-pre-line">{tagline.de}</BodyCopy>
              </div>
            </EnterpriseCard>
          </MotionReveal>
        </div>
      </Container>
    </MotionSection>
  );
}