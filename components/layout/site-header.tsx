import Link from 'next/link';
import { routes } from '@/lib/routes';
import { Container } from '@/components/ui/container';
import { EnterpriseButtonLink } from '@/components/ui/enterprise-button';

export function SiteHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border)] bg-[rgba(8,8,8,0.88)] backdrop-blur-none md:backdrop-blur-sm">
      <Container>
        <div className="flex items-center justify-between gap-4 py-4">
          <Link href="/" className="group flex items-center gap-4">
            <span className="font-display text-2xl font-light tracking-[0.2em] text-[var(--gold-light)]">NOVA SHIFT</span>
            <span className="hidden border-l border-[var(--border)] pl-4 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-[var(--text-dim)] md:block">
              Full-Service Creative Agency
            </span>
          </Link>

          <details className="group relative lg:hidden ds-disclosure">
            <summary
              className="ds-button ds-button--secondary text-[0.62rem] px-4 py-2.5 cursor-pointer select-none"
              aria-label="Navigation öffnen"
            >
              Menu
            </summary>

            <div className="pb-5 pt-4">
              <div className="ds-surface ds-surface--glass grid gap-2 p-3">
                {routes.map((route) => (
                  <EnterpriseButtonLink key={route.href} href={route.href} variant="ghost" className="justify-start">
                    {route.label}
                  </EnterpriseButtonLink>
                ))}
                <EnterpriseButtonLink href="/contact" variant="primary" className="justify-center">
                  Projekt anfragen
                </EnterpriseButtonLink>
              </div>
            </div>
          </details>

          <nav className="hidden items-center gap-2 lg:flex">
            {routes.map((route) => {
              return (
                <EnterpriseButtonLink
                  key={route.href}
                  href={route.href}
                  variant="pill"
                  size="sm"
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