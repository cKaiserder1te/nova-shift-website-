import type { HTMLAttributes, ReactNode } from 'react';

type CardVariant = 'surface' | 'glass' | 'metric' | 'lift';
type CardAs = 'article' | 'div' | 'section' | 'aside';

type EnterpriseCardProps = HTMLAttributes<HTMLElement> & {
  as?: CardAs;
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
};

const variantClassNames: Record<CardVariant, string> = {
  surface: 'ds-surface',
  glass: 'ds-surface ds-surface--glass',
  metric: 'ds-surface ds-surface--metric',
  lift: 'ds-surface ds-surface--lift',
};

export function EnterpriseCard({ as = 'div', children, className = '', variant = 'surface', ...rest }: EnterpriseCardProps) {
  const Component = as;

  return (
    <Component className={[variantClassNames[variant], className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </Component>
  );
}