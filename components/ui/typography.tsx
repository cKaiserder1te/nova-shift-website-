import type { ElementType, HTMLAttributes, ReactNode } from 'react';

type TypographyProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

function renderTypography({ as = 'p', className = '', children, ...rest }: TypographyProps, baseClassName: string) {
  const Component = as as ElementType;

  return (
    <Component className={`${baseClassName} ${className}`.trim()} {...rest}>
      {children}
    </Component>
  );
}

export function Eyebrow(props: TypographyProps) {
  return renderTypography(props, 'ds-eyebrow');
}

export function DisplayTitle(props: TypographyProps) {
  return renderTypography(props, 'ds-display-title');
}

export function SectionTitle(props: TypographyProps) {
  return renderTypography(props, 'ds-section-title');
}

export function CardTitle(props: TypographyProps) {
  return renderTypography(props, 'ds-card-title');
}

export function BodyCopy(props: TypographyProps) {
  return renderTypography(props, 'ds-body-copy');
}

export function MetricValue(props: TypographyProps) {
  return renderTypography(props, 'ds-metric-value');
}

export function Caption(props: TypographyProps) {
  return renderTypography(props, 'ds-caption');
}