import { Container } from '@/components/ui/container';
import { EnterpriseCard } from '@/components/ui/enterprise-card';
import { EnterpriseButtonLink } from '@/components/ui/enterprise-button';
import { BodyCopy, CardTitle, Caption, Eyebrow, SectionTitle } from '@/components/ui/typography';
import { MotionReveal, MotionSection, MotionSequence, MotionSequenceItem } from '@/components/motion/motion-system';
import { croContent } from '@/lib/site-content';

function SectionLead({ label, title, body }: { label: string; title: string; body: string }) {
  return (
    <div className="ds-stack max-w-4xl" style={{ ['--stack-gap' as string]: '1rem' }}>
      <Eyebrow as="p">{label}</Eyebrow>
      <MotionReveal kind="mask">
        <SectionTitle as="h2" className="whitespace-pre-line">
          {title}
        </SectionTitle>
      </MotionReveal>
      <BodyCopy className="max-w-3xl whitespace-pre-line">{body}</BodyCopy>
    </div>
  );
}

function BilingualCard({
  leftLabel = 'DE',
  rightLabel = 'EN',
  title,
  body,
}: {
  leftLabel?: string;
  rightLabel?: string;
  title: { de: string; en: string };
  body: { de: string; en: string };
}) {
  return (
    <div className="grid gap-px bg-[var(--border)] md:grid-cols-2">
      <div className="bg-[var(--bg2)] p-5 md:p-6">
        <Caption as="p">{leftLabel}</Caption>
        <CardTitle as="h3" className="mt-4 whitespace-pre-line text-[1.55rem] md:text-[1.85rem]">
          {title.de}
        </CardTitle>
        <BodyCopy className="mt-4 whitespace-pre-line ds-body-copy--dense">{body.de}</BodyCopy>
      </div>
      <div className="bg-[var(--bg2)] p-5 md:p-6">
        <Caption as="p">{rightLabel}</Caption>
        <CardTitle as="h3" className="mt-4 whitespace-pre-line text-[1.55rem] md:text-[1.85rem]">
          {title.en}
        </CardTitle>
        <BodyCopy className="mt-4 whitespace-pre-line ds-body-copy--dense">{body.en}</BodyCopy>
      </div>
    </div>
  );
}

export function CaseStudySection() {
  return (
    <MotionSection id="cases" className="ds-section">
      <Container>
        <SectionLead
          label="Proof / Case Studies"
          title="Beweise statt Behauptungen."
          body="Diese Module zeigen, wie sich das System auf echte Projektziele übersetzt: schneller launch, mehr Assets, klarere Conversion."
        />

        <MotionSequence className="mt-10 grid gap-6 xl:grid-cols-3" viewportAmount={0.18}>
          {croContent.caseStudies.map((study) => (
            <MotionSequenceItem key={study.tag}>
                <EnterpriseCard variant="lift" className="p-6 md:p-8" itemScope itemType="https://schema.org/CreativeWork">
                <Caption as="p">{study.tag}</Caption>
                <BilingualCard title={study.title} body={study.summary} leftLabel="DE" rightLabel="EN" />

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {study.proofPoints.map((stat) => (
                    <div key={`${study.tag}-${stat.value}-${stat.label.de}`} className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[rgba(255,255,255,0.02)] p-4 text-center">
                      <p className="font-display text-2xl font-light tracking-[0.06em] text-[var(--accent-light)]">{stat.value}</p>
                      <Caption as="p" className="mt-2">
                        {stat.label.de}
                      </Caption>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <EnterpriseButtonLink href={study.cta.href} variant="secondary" size="sm">
                    {study.cta.label}
                  </EnterpriseButtonLink>
                </div>
              </EnterpriseCard>
            </MotionSequenceItem>
          ))}
        </MotionSequence>
      </Container>
    </MotionSection>
  );
}

export function TestimonialSection() {
  return (
    <MotionSection id="proof" className="ds-section">
      <Container>
        <SectionLead
          label="Social Proof"
          title="Vertrauen aus der Praxis."
          body="Kurze Aussagen, die zeigen, wie Zusammenarbeit und Ergebnis im Alltag wahrgenommen werden."
        />

        <MotionSequence className="mt-10 grid gap-6 xl:grid-cols-3" viewportAmount={0.18}>
          {croContent.testimonials.map((testimonial) => (
            <MotionSequenceItem key={testimonial.author}>
                <EnterpriseCard variant="lift" className="p-6 md:p-8" itemScope itemType="https://schema.org/Review">
                <blockquote className="grid gap-6">
                  <BilingualCard title={{ de: 'Zitat', en: 'Quote' }} body={testimonial.quote} />
                  <div className="grid gap-px bg-[var(--border)] md:grid-cols-2">
                    <div className="bg-[var(--bg2)] p-5 md:p-6">
                      <Caption as="p">DE</Caption>
                      <BodyCopy className="mt-4 ds-body-copy--dense whitespace-pre-line">{testimonial.result.de}</BodyCopy>
                    </div>
                    <div className="bg-[var(--bg2)] p-5 md:p-6">
                      <Caption as="p">EN</Caption>
                      <BodyCopy className="mt-4 ds-body-copy--dense whitespace-pre-line">{testimonial.result.en}</BodyCopy>
                    </div>
                  </div>
                </blockquote>
                <div className="mt-6 border-t border-[var(--border)] pt-5">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[var(--accent-light)]">{testimonial.author}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{testimonial.role.de}</p>
                  <p className="text-sm leading-6 text-[var(--text-muted)]">{testimonial.role.en}</p>
                </div>
              </EnterpriseCard>
            </MotionSequenceItem>
          ))}
        </MotionSequence>
      </Container>
    </MotionSection>
  );
}

export function FaqSection() {
  return (
    <MotionSection id="faq" className="ds-section">
      <Container>
        <SectionLead
          label="FAQ"
          title="Die Antworten auf die echten Einwände."
          body="Diese Fragen entfernen Reibung, bevor sie im Funnel auftaucht."
        />

        <MotionSequence className="mt-10 grid gap-4 xl:grid-cols-2" viewportAmount={0.18}>
          {croContent.faqs.map((item) => (
            <MotionSequenceItem key={item.question.de}>
              <EnterpriseCard variant="lift" className="p-0">
                <details className="ds-disclosure group p-6 md:p-8" itemScope itemType="https://schema.org/Question">
                  <summary className="cursor-pointer list-none">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Caption as="p">DE / EN</Caption>
                        <CardTitle as="h3" className="mt-3 whitespace-pre-line text-[1.45rem] md:text-[1.75rem]" itemProp="name">
                          {item.question.de}
                        </CardTitle>
                      </div>
                      <span className="font-mono text-[0.85rem] uppercase tracking-[0.3em] text-[var(--accent-light)] transition-transform duration-300 group-open:rotate-45">
                        +
                      </span>
                    </div>
                  </summary>
                  <div className="mt-6 grid gap-px bg-[var(--border)] md:grid-cols-2">
                    <div className="bg-[var(--bg2)] p-5 md:p-6" itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                      <Caption as="p">DE</Caption>
                      <BodyCopy className="mt-4 ds-body-copy--dense whitespace-pre-line" itemProp="text">{item.answer.de}</BodyCopy>
                    </div>
                    <div className="bg-[var(--bg2)] p-5 md:p-6" itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                      <Caption as="p">EN</Caption>
                      <BodyCopy className="mt-4 ds-body-copy--dense whitespace-pre-line" itemProp="text">{item.answer.en}</BodyCopy>
                    </div>
                  </div>
                </details>
              </EnterpriseCard>
            </MotionSequenceItem>
          ))}
        </MotionSequence>
      </Container>
    </MotionSection>
  );
}

export function FunnelSection() {
  return (
    <MotionSection id="conversion" className="ds-section">
      <Container>
        <SectionLead
          label="Conversion Funnel"
          title="Vom ersten Kontakt zum Launch."
          body="Ein klarer Ablauf macht den nächsten Schritt leicht. Kein offener Bauchladen, sondern eine nachvollziehbare Reihenfolge."
        />

        <MotionSequence className="mt-10 grid gap-px bg-[var(--border)] xl:grid-cols-4" viewportAmount={0.18}>
          {croContent.funnelSteps.map((step) => (
            <MotionSequenceItem key={step.step}>
                <EnterpriseCard variant="lift" className="h-full p-6 md:p-8" itemScope itemType="https://schema.org/HowToStep">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.35em] text-[var(--accent-light)]">{step.step}</p>
                <BilingualCard title={step.title} body={step.body} />
              </EnterpriseCard>
            </MotionSequenceItem>
          ))}
        </MotionSequence>

        <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="ds-stack max-w-2xl" style={{ ['--stack-gap' as string]: '0.65rem' }}>
            <BodyCopy className="text-[1.02rem] md:text-lg">
              Erstgespräch kostenlos. Antwort in {'<24h'}. Danach entscheiden wir gemeinsam, ob und wie das Projekt skaliert.
            </BodyCopy>
          </div>
          <div className="ds-cluster">
            <EnterpriseButtonLink href="/contact" variant="primary">
              Projekt starten
            </EnterpriseButtonLink>
            <EnterpriseButtonLink href="/contact#faq" variant="secondary">
              Fragen klären
            </EnterpriseButtonLink>
          </div>
        </div>
      </Container>
    </MotionSection>
  );
}
