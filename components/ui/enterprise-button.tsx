import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'pill';
type ButtonSize = 'sm' | 'md' | 'lg';

type SharedButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

const variantClassNames: Record<ButtonVariant, string> = {
  primary: 'ds-button ds-button--primary',
  secondary: 'ds-button ds-button--secondary',
  ghost: 'ds-button ds-button--ghost',
  pill: 'ds-button ds-button--pill',
};

const sizeClassNames: Record<ButtonSize, string> = {
  sm: 'text-[0.62rem] px-4 py-2.5',
  md: '',
  lg: 'px-6 py-4 text-[0.72rem]',
};

function composeButtonClassName(variant: ButtonVariant, size: ButtonSize, className: string | undefined, fullWidth: boolean | undefined) {
  return [variantClassNames[variant], sizeClassNames[size], fullWidth ? 'w-full' : '', className].filter(Boolean).join(' ');
}

export type EnterpriseButtonProps = SharedButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function EnterpriseButton({ children, className, variant = 'primary', size = 'md', fullWidth, ...props }: EnterpriseButtonProps) {
  return (
    <button className={composeButtonClassName(variant, size, className, fullWidth)} {...props}>
      {children}
    </button>
  );
}

export type EnterpriseButtonLinkProps = SharedButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children' | 'href'> & {
    href: string;
  };

export function EnterpriseButtonLink({ children, className, href, variant = 'primary', size = 'md', fullWidth, ...props }: EnterpriseButtonLinkProps) {
  return (
    <Link className={composeButtonClassName(variant, size, className, fullWidth)} href={href} {...props}>
      {children}
    </Link>
  );
}