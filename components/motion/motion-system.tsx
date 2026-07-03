import type { ComponentPropsWithoutRef, ReactNode } from 'react';

// -----------------------------------------------------------------------------
// MOTION SYSTEM (PERF MODE)
//
// This project originally used Framer Motion for scroll reveals, sequencing and
// parallax. For Lighthouse-first performance (low JS, low hydration, low GPU),
// these components are now lightweight wrappers that keep the same public API
// but render plain HTML elements.
// -----------------------------------------------------------------------------

type MotionKind = 'fade' | 'mask';

export function MotionSection({
  children,
  className = '',
  delay: _delay = 0,
  ...rest
}: ComponentPropsWithoutRef<'section'> & { delay?: number; children: ReactNode }) {
  return (
    <section className={className} {...rest}>
      {children}
    </section>
  );
}

export function MotionReveal({
  children,
  className = '',
  kind: _kind = 'fade',
  delay: _delay = 0,
  duration: _duration,
  viewportAmount: _viewportAmount = 0.2,
  ...rest
}: ComponentPropsWithoutRef<'div'> & {
  children: ReactNode;
  kind?: MotionKind;
  delay?: number;
  duration?: number;
  viewportAmount?: number;
}) {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}

export function MotionSequence({
  children,
  className = '',
  delay: _delay = 0,
  viewportAmount: _viewportAmount = 0.2,
  ...rest
}: ComponentPropsWithoutRef<'div'> & { children: ReactNode; delay?: number; viewportAmount?: number }) {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}

export function MotionSequenceItem({
  children,
  className = '',
  ...rest
}: ComponentPropsWithoutRef<'div'> & { children: ReactNode }) {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}

export function MotionParallax({
  children,
  className = '',
  strength: _strength = 30,
  ...rest
}: ComponentPropsWithoutRef<'div'> & { children: ReactNode; strength?: number }) {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}