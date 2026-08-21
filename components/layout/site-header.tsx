'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { routes } from '@/lib/routes';
import { Container } from '@/components/ui/container';
import { EnterpriseButtonLink } from '@/components/ui/enterprise-button';

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const isActiveRoute = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!mobileMenuRef.current) return;

      if (!mobileMenuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((current) => !current);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border)] bg-[rgba(5,5,6,0.84)] backdrop-blur-md">
      <Container>
        <div className="flex items-center justify-between gap-4 py-4">
          <Link href="/" onClick={closeMenu} className="group flex items-center gap-4">
            <span className="font-display text-2xl font-semibold tracking-[0.16em] text-[var(--text-primary)]">NOVA SHIFT</span>
            <span className="hidden border-l border-[var(--border)] pl-4 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-[var(--text-dim)] md:block">
              Full-Service Creative Agency
            </span>
          </Link>

          <div ref={mobileMenuRef} className="group relative lg:hidden">
            <button
              type="button"
              className="ds-button ds-button--secondary text-[0.62rem] px-4 py-2.5 cursor-pointer select-none"
              aria-label={isMenuOpen ? 'Navigation schließen' : 'Navigation öffnen'}
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              Menu
            </button>

            {isMenuOpen && (
              <div className="pb-5 pt-4">
                <div className="ds-surface ds-surface--glass grid gap-2 p-3">
                  {routes.map((route) => (
                    <EnterpriseButtonLink
                      key={route.href}
                      href={route.href}
                      variant="ghost"
                      className="justify-start"
                      aria-current={isActiveRoute(route.href) ? 'page' : undefined}
                      onClick={closeMenu}
                    >
                      {route.label}
                    </EnterpriseButtonLink>
                  ))}
                  <EnterpriseButtonLink href="/contact" variant="primary" className="justify-center" onClick={closeMenu}>
                    Projekt anfragen
                  </EnterpriseButtonLink>
                </div>
              </div>
            )}
          </div>

          <nav className="hidden items-center gap-2 lg:flex">
            {routes.map((route) => {
              return (
                <EnterpriseButtonLink
                  key={route.href}
                  href={route.href}
                  variant="pill"
                  size="sm"
                  aria-current={isActiveRoute(route.href) ? 'page' : undefined}
                >
                  {route.label}
                </EnterpriseButtonLink>
              );
            })}
            <EnterpriseButtonLink href="/contact" variant="primary" size="sm" className="ml-2">
              Projekt anfragen
            </EnterpriseButtonLink>
          </nav>
        </div>
      </Container>
    </header>
  );
}