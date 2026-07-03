import type { LocaleCopy } from '@/lib/types';
import { BodyCopy, CardTitle, Caption, Eyebrow, SectionTitle } from '@/components/ui/typography';
import { LayoutGrid } from '@/components/ui/layout-grid';
import { EnterpriseCard } from '@/components/ui/enterprise-card';
import { MotionReveal, MotionSequence, MotionSequenceItem } from '@/components/motion/motion-system';

type SectionHeadingProps = {
  label?: string;
  title: LocaleCopy;
  body?: LocaleCopy;
  align?: 'left' | 'center';
};

export function SectionHeading({ label, title, body, align = 'left' }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <MotionSequence className={`ds-stack ${alignClass}`} style={{ ['--stack-gap' as string]: '1rem' }} itemScope itemType="https://schema.org/CreativeWork">
      {label ? (
        <MotionSequenceItem>
          <Eyebrow as="p">{label}</Eyebrow>
        </MotionSequenceItem>
      ) : null}
      <MotionSequenceItem>
        <MotionReveal kind="mask">
          <SectionTitle as="h2" className="max-w-4xl whitespace-pre-line" itemProp="headline">
            {title.de}
          </SectionTitle>
        </MotionReveal>
      </MotionSequenceItem>
      {body ? (
        <MotionSequenceItem>
          <BodyCopy className="max-w-3xl whitespace-pre-line" itemProp="description">{body.de}</BodyCopy>
        </MotionSequenceItem>
      ) : null}
      <MotionSequenceItem>
        <LayoutGrid className="mt-3" minWidth="16rem" gap="normal">
          <EnterpriseCard variant="surface" className="p-5 md:p-6">
            <Caption as="p">DE</Caption>
            <CardTitle as="h3" className="mt-4 whitespace-pre-line text-[1.6rem] md:text-[1.95rem]">
              {title.de}
            </CardTitle>
            {body ? <BodyCopy className="mt-4 whitespace-pre-line ds-body-copy--dense">{body.de}</BodyCopy> : null}
          </EnterpriseCard>
          <EnterpriseCard variant="surface" className="p-5 md:p-6">
            <Caption as="p">EN</Caption>
            <CardTitle as="h3" className="mt-4 whitespace-pre-line text-[1.6rem] md:text-[1.95rem]">
              {title.en}
            </CardTitle>
            {body ? <BodyCopy className="mt-4 whitespace-pre-line ds-body-copy--dense">{body.en}</BodyCopy> : null}
          </EnterpriseCard>
        </LayoutGrid>
      </MotionSequenceItem>
    </MotionSequence>
  );
}