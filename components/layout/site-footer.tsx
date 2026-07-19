import { MotionReveal } from '@/components/motion/motion-system';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { EnterpriseButtonLink } from '@/components/ui/enterprise-button';
import { routes } from '@/lib/routes';

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[rgba(5,5,6,0.72)] pt-16 pb-8 backdrop-blur-sm">
      <Container>
        <MotionReveal className="grid gap-8 md:grid-cols-2 lg:grid-cols-4" kind="fade" viewportAmount={0.18}>
          <div className="lg:col-span-2">
            <p className="font-display text-3xl font-semibold tracking-[0.08em] text-[var(--text-primary)]">NOVA SHIFT</p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--text-muted)]">
              Nova Shift ist die Full-Service Creative Agency für Performance-Marketing, User Generated Content (UGC), hochkonvertierendes Webdesign und ganzheitliches Branding. Entwickelt für ambitionierte D2C Brands und skalierende E-Commerce Unternehmen.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-[var(--accent-light)] uppercase mb-4">Services</h3>
            <nav className="flex flex-col gap-3">
              {routes.filter(r => r.href !== '/' && r.href !== '/about' && r.href !== '/contact').map((route) => (
                <Link key={route.href} href={route.href} className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-light)] transition-colors">
                  {route.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-[var(--accent-light)] uppercase mb-4">Unternehmen</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/about" className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-light)] transition-colors">
                Über uns
              </Link>
              <Link href="/contact" className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-light)] transition-colors">
                Kontakt
              </Link>
              <Link href="/sitemap.xml" className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-light)] transition-colors">
                Sitemap
              </Link>
            </nav>
          </div>
        </MotionReveal>
        <MotionReveal className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4" kind="fade" delay={0.2}>
          <p className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} Nova Shift. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="text-xs text-[var(--text-muted)] hover:text-[var(--accent-light)] transition-colors">
              Impressum & Datenschutz (tba)
            </Link>
          </div>
        </MotionReveal>
      </Container>
    </footer>
  );
}