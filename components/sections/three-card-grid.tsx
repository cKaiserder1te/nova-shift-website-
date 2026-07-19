import type { LocaleCopy, ServiceCard } from '@/lib/types';
import type { CSSProperties } from 'react';
import { CardTitle, Caption, BodyCopy } from '@/components/ui/typography';
import { LayoutGrid } from '@/components/ui/layout-grid';
import { EnterpriseCard } from '@/components/ui/enterprise-card';
import { MotionSequence, MotionSequenceItem } from '@/components/motion/motion-system';

type ThreeCardGridProps = {
  cards: ServiceCard[];
};

const serviceAccentMap: Record<string, { accent: string; light: string }> = {
  'Nova Web': { accent: '#2E6BFF', light: '#69A4FF' },
  'Nova Aura': { accent: '#7B3DFF', light: '#B36DFF' },
  'Nova Cast': { accent: '#F5A623', light: '#FFD15A' },
  'Nova Production': { accent: '#00E58B', light: '#5EFFB4' },
  'Nova Advertising': { accent: '#FF3B3B', light: '#FF6A6A' },
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
        {cards.map((card) => {
          const serviceAccent = serviceAccentMap[card.title.de];
          const serviceStyle = serviceAccent
            ? ({
                ['--accent' as string]: serviceAccent.accent,
                ['--accent-light' as string]: serviceAccent.light,
              } as CSSProperties)
            : undefined;

          return (
            <MotionSequenceItem key={`${card.tag}-${card.title.de}`}>
              <EnterpriseCard as="article" variant="lift" className="service-card-base p-8 lg:p-10" itemScope itemType="https://schema.org/CreativeWork" style={serviceStyle}>
                <Caption as="p" className="text-[var(--accent-light)]">
                  {card.tag}
                </Caption>
                <div className="mt-6">
                  <CardCopy title={card.title} body={card.body} />
                </div>
              </EnterpriseCard>
            </MotionSequenceItem>
          );
        })}
      </LayoutGrid>
    </MotionSequence>
  );
}