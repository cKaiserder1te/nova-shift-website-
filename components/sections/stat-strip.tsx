import type { StatItem } from '@/lib/types';
import { Caption, MetricValue, BodyCopy } from '@/components/ui/typography';
import { LayoutGrid } from '@/components/ui/layout-grid';
import { EnterpriseCard } from '@/components/ui/enterprise-card';
import { MotionSequence, MotionSequenceItem } from '@/components/motion/motion-system';

type StatStripProps = {
  stats: StatItem[];
};

export function StatStrip({ stats }: StatStripProps) {
  return (
    <MotionSequence>
      <LayoutGrid minWidth="12rem" className="service-grid-two">
        {stats.map((stat) => (
          <MotionSequenceItem key={`${stat.value}-${stat.label.de}`}>
            <EnterpriseCard as="article" variant="metric" className="px-6 py-8 md:px-8 md:py-10" itemScope itemType="https://schema.org/PropertyValue">
              <MetricValue as="p" itemProp="value">{stat.value}</MetricValue>
              <div className="mt-4 grid gap-2 md:grid-cols-2 md:gap-4">
                <Caption as="p" className="justify-self-center text-[var(--accent-light)]">DE</Caption>
                <Caption as="p" className="justify-self-center text-[var(--accent-light)]">EN</Caption>
              </div>
              <div className="mt-4 grid gap-2 md:grid-cols-2 md:gap-4">
                <BodyCopy className="ds-body-copy--dense text-center" itemProp="name">{stat.label.de}</BodyCopy>
                <BodyCopy className="ds-body-copy--dense text-center" itemProp="alternateName">{stat.label.en}</BodyCopy>
              </div>
            </EnterpriseCard>
          </MotionSequenceItem>
        ))}
      </LayoutGrid>
    </MotionSequence>
  );
}