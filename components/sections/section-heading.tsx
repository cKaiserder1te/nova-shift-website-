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
    </MotionSequence>
  );
}