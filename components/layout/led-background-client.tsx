'use client';

import dynamic from 'next/dynamic';

const LedBackground = dynamic(
  () => import('@/components/LedBackground').then((module) => module.LedBackground),
  { ssr: false },
);

export function LedBackgroundClient() {
  return <LedBackground />;
}