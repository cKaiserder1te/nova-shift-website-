import type { LocaleCopy, ServiceCard } from '@/lib/types';
import { CardTitle, Caption, BodyCopy } from '@/components/ui/typography';
import { LayoutGrid } from '@/components/ui/layout-grid';
import { EnterpriseCard } from '@/components/ui/enterprise-card';
import { MotionSequence, MotionSequenceItem } from '@/components/motion/motion-system';

type ThreeCardGridProps = {
  cards: ServiceCard[];
};

function CardCopy({ title, body }: { title: LocaleCopy; body: LocaleCopy }) {
  return (
    <LayoutGrid minWidth="12rem" className="gap-5">
      <div>
        <Caption as="p">DE</Caption>
        <CardTitle as="h3" className="mt-4" itemProp="name">
          {title.de}
        </CardTitle>
        <BodyCopy className="mt-4 ds-body-copy--dense" itemProp="description">{body.de}</BodyCopy>
      </div>
      <div>
        <Caption as="p">EN</Caption>
        <CardTitle as="h3" className="mt-4" itemProp="name">
          {title.en}
        </CardTitle>
        <BodyCopy className="mt-4 ds-body-copy--dense" itemProp="description">{body.en}</BodyCopy>
      </div>
    </LayoutGrid>
  );
}

export function ThreeCardGrid({ cards }: ThreeCardGridProps) {
  return (
    <MotionSequence>
      <LayoutGrid minWidth="19rem" className="service-grid-shell">
        {cards.map((card) => (
          <MotionSequenceItem key={`${card.tag}-${card.title.de}`}>
            <EnterpriseCard as="article" variant="lift" className="service-card-base p-8 lg:p-10" itemScope itemType="https://schema.org/CreativeWork">
              <Caption as="p" className="text-[rgba(239,207,135,0.84)]">
                {card.tag}
              </Caption>
              <div className="mt-6">
                <CardCopy title={card.title} body={card.body} />
              </div>
            </EnterpriseCard>
          </MotionSequenceItem>
        ))}
      </LayoutGrid>
    </MotionSequence>
  );
}