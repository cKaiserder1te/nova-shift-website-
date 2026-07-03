'use client';

import type { RefObject } from 'react';
import { useEffect } from 'react';

export function useOutsideClick<T extends HTMLElement>(
  ref: RefObject<T | null>,
  onOutsideClick: () => void,
) {
  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      const node = ref.current;
      if (!node || node.contains(event.target as Node)) {
        return;
      }
      onOutsideClick();
    }

    document.addEventListener('pointerdown', handlePointerDown);

    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [onOutsideClick, ref]);
}