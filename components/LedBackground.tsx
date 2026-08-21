'use client';

import { useCallback, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

type LedRouteStyle = {
  color: string;
  light: string;
  glow: string;
};

const MIN_VISIBLE_PROGRESS = 0.14;

const ledRouteStyles: Record<string, LedRouteStyle> = {
  '/': { color: '#2E6BFF', light: '#69A4FF', glow: 'rgba(46,107,255,0.45)' },
  '/about': { color: '#7B3DFF', light: '#B36DFF', glow: 'rgba(123,61,255,0.45)' },
  '/advertising': { color: '#FF3B3B', light: '#FF6A6A', glow: 'rgba(255,59,59,0.45)' },
  '/cast': { color: '#F5A623', light: '#FFD15A', glow: 'rgba(245,166,35,0.40)' },
  '/web': { color: '#2E6BFF', light: '#69A4FF', glow: 'rgba(46,107,255,0.45)' },
  '/aura': { color: '#7B3DFF', light: '#B36DFF', glow: 'rgba(123,61,255,0.45)' },
  '/production': { color: '#00E58B', light: '#5EFFB4', glow: 'rgba(0,229,139,0.40)' },
  '/contact': { color: '#2E6BFF', light: '#69A4FF', glow: 'rgba(46,107,255,0.45)' },
  fallback: { color: '#2E6BFF', light: '#69A4FF', glow: 'rgba(46,107,255,0.45)' },
};

export function LedBackground() {
  const pathname = usePathname();
  const pathRef = useRef<SVGPathElement | null>(null);
  const pathLengthRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  const getTopLevelPath = useCallback((value: string) => {
    if (value === '/') {
      return '/';
    }

    const [firstSegment] = value.split('/').filter(Boolean);
    return firstSegment ? `/${firstSegment}` : '/';
  }, []);

  const updatePathMetrics = useCallback(() => {
    const path = pathRef.current;
    if (!path) {
      return;
    }

    const pathLength = path.getTotalLength();
    pathLengthRef.current = pathLength;
    path.style.strokeDasharray = `${pathLength}`;
  }, []);

  const applyScrollProgress = useCallback(() => {
    const path = pathRef.current;
    if (!path) {
      frameRef.current = null;
      return;
    }

    const root = document.documentElement;
    const maxScroll = root.scrollHeight - root.clientHeight;
    const progress = maxScroll > 0 ? Math.min(Math.max(root.scrollTop / maxScroll, 0), 1) : 0;
    const visibleProgress = MIN_VISIBLE_PROGRESS + progress * (1 - MIN_VISIBLE_PROGRESS);
    path.style.strokeDashoffset = `${pathLengthRef.current * (1 - visibleProgress)}`;
    frameRef.current = null;
  }, []);

  const scheduleScrollProgressUpdate = useCallback(() => {
    if (frameRef.current !== null) {
      return;
    }

    frameRef.current = window.requestAnimationFrame(applyScrollProgress);
  }, [applyScrollProgress]);

  useEffect(() => {
    updatePathMetrics();
    scheduleScrollProgressUpdate();

    const onScroll = () => {
      scheduleScrollProgressUpdate();
    };

    const onResize = () => {
      updatePathMetrics();
      scheduleScrollProgressUpdate();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [scheduleScrollProgressUpdate, updatePathMetrics]);

  useEffect(() => {
    const routeStyle = ledRouteStyles[getTopLevelPath(pathname)] ?? ledRouteStyles.fallback;
    document.documentElement.style.setProperty('--led-color', routeStyle.color);
    document.documentElement.style.setProperty('--accent', routeStyle.color);
    document.documentElement.style.setProperty('--accent-light', routeStyle.light);
    document.documentElement.style.setProperty('--gold', routeStyle.color);
    document.documentElement.style.setProperty('--gold-light', routeStyle.light);
    document.documentElement.style.setProperty('--led-glow', routeStyle.glow);
    document.documentElement.style.setProperty('--accent-glow', routeStyle.glow);

    // After route transitions, Next.js may reset scroll position; sync line length + progress post-navigation.
    let rafA = 0;
    let rafB = 0;

    rafA = window.requestAnimationFrame(() => {
      rafB = window.requestAnimationFrame(() => {
        updatePathMetrics();
        scheduleScrollProgressUpdate();
      });
    });

    return () => {
      window.cancelAnimationFrame(rafA);
      window.cancelAnimationFrame(rafB);
    };
  }, [getTopLevelPath, pathname, scheduleScrollProgressUpdate, updatePathMetrics]);

  return (
    <div className="fixed top-0 left-0 h-full w-full pointer-events-none -z-10" aria-hidden="true">
      <svg className="h-full w-full" viewBox="0 0 100 1000" preserveAspectRatio="none">
        <path
          ref={pathRef}
          d="M 12 0 C 88 80, 18 180, 82 280 C 14 370, 90 470, 20 560 C 84 650, 10 740, 86 835 C 24 905, 72 960, 18 1000"
          fill="none"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-colors duration-500"
          style={{
            stroke: 'var(--led-color, #00e5ff)',
            filter: 'drop-shadow(0 0 2px var(--led-glow, rgba(0, 229, 255, 0.56)))',
            willChange: 'stroke-dashoffset',
            transition: 'filter 180ms var(--ease-out), stroke 180ms var(--ease-out)',
          }}
        />
      </svg>
    </div>
  );
}
