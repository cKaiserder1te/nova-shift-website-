import React from 'react';
import { BodyCopy } from '@/components/ui/typography';

type ShortAnswerProps = {
  text?: string;
  id?: string;
};

export function ShortAnswer({ text, id }: ShortAnswerProps) {
  if (!text) return null;

  return (
    <div id={id} role="region" aria-label="Kurzantwort" className="ds-stack max-w-3xl" itemScope itemType="https://schema.org/CreativeWork">
      <BodyCopy className="ds-body-copy--dense whitespace-pre-line" itemProp="text">{text}</BodyCopy>
    </div>
  );
}
