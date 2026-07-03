export const routes = [
  { href: '/', label: 'Home', navLabel: 'Startseite' },
  { href: '/about', label: 'Über uns' },
  { href: '/advertising', label: 'Nova Advertising' },
  { href: '/cast', label: 'Nova Cast' },
  { href: '/web', label: 'Nova Web' },
  { href: '/aura', label: 'Nova Aura' },
  { href: '/production', label: 'Nova Production' },
  { href: '/contact', label: 'Kontakt' },
] as const;

export type RouteHref = (typeof routes)[number]['href'];