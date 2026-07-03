import type { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'default' | 'compact' | 'wide' | 'none';
};

const sizeClasses = {
  sm: 'max-w-5xl',
  md: 'max-w-6xl',
  lg: 'max-w-7xl',
  xl: 'max-w-[90rem]',
  full: 'max-w-none',
};

const paddingClasses = {
  default: '',
  compact: 'px-4 sm:px-6',
  wide: 'px-5 sm:px-8 lg:px-12',
  none: 'px-0',
};

export function Container({ children, className = '', size = 'xl', padding = 'default' }: ContainerProps) {
  const composedClassName = ['section-shell', sizeClasses[size], paddingClasses[padding], className].filter(Boolean).join(' ');

  return <div className={composedClassName}>{children}</div>;
}