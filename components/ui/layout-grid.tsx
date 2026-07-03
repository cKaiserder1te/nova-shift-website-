import type { CSSProperties, ReactNode } from 'react';

type LayoutGridProps = {
  children: ReactNode;
  className?: string;
  gap?: 'tight' | 'normal' | 'loose';
  minWidth?: string;
};

const gapValues = {
  tight: 'var(--grid-gap-tight)',
  normal: 'var(--grid-gap)',
  loose: 'var(--grid-gap-loose)',
};

export function LayoutGrid({ children, className = '', gap = 'normal', minWidth = '16rem' }: LayoutGridProps) {
  const style = {
    '--grid-gap': gapValues[gap],
    '--grid-min': minWidth,
  } as CSSProperties;

  return (
    <div className={`ds-auto-grid ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}