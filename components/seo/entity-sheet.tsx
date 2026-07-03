import React from 'react';
import { EnterpriseCard } from '@/components/ui/enterprise-card';
import { Caption, CardTitle, BodyCopy } from '@/components/ui/typography';

type Props = {
  name: string;
  type?: string;
  definition?: string;
  aliases?: string[];
  url?: string;
  properties?: Record<string, string>;
};

export function EntitySheet({ name, type = 'Entity', definition, aliases = [], url, properties }: Props) {
  const itemType =
    type === 'Organization'
      ? 'https://schema.org/Organization'
      : type === 'Service'
      ? 'https://schema.org/Service'
      : 'https://schema.org/Thing';

  return (
    <EnterpriseCard variant="glass" className="p-6 md:p-8" data-entity-type={type}>
      <div itemScope itemType={itemType}>
        <Caption as="p">{type}</Caption>
        <CardTitle as="h3" className="mt-3" itemProp="name">
          {name}
        </CardTitle>

        {definition ? (
          <BodyCopy className="mt-4 ds-body-copy--dense whitespace-pre-line" itemProp="description">
            {definition}
          </BodyCopy>
        ) : null}

        {aliases && aliases.length ? (
          <div className="mt-4">
            <Caption as="p">Aliases</Caption>
            <BodyCopy className="mt-2">{aliases.join(', ')}</BodyCopy>
          </div>
        ) : null}

        {properties && Object.keys(properties).length ? (
          <div className="mt-4">
            <Caption as="p">Eigenschaften</Caption>
            <ul className="mt-2 list-disc pl-5 text-sm leading-6 text-[var(--text-muted)]">
              {Object.entries(properties).map(([k, v]) => (
                <li key={k}>
                  <strong>{k}:</strong> <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {url ? (
          <p className="mt-6 text-sm text-[var(--text-dim)]">
            <a href={url} className="underline" itemProp="url">
              {url}
            </a>
          </p>
        ) : null}
      </div>
    </EnterpriseCard>
  );
}
