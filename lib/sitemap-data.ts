import { routes } from '@/lib/routes';
import { servicePages, siteMeta } from '@/lib/site-content';

type SitemapChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

export type SitemapUrlEntry = {
  loc: string;
  lastmod: string;
  changefreq: SitemapChangeFrequency;
  priority: number;
  images?: Array<{
    loc: string;
    title?: string;
    caption?: string;
  }>;
};

export type SitemapIndexEntry = {
  loc: string;
  lastmod: string;
};

const currentDate = new Date().toISOString();

const absoluteUrl = (path: string) => new URL(path.replace(/^\/+/, ''), siteMeta.url).toString();

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export const sitemapIndexEntries: SitemapIndexEntry[] = [
  '/sitemaps/pages.xml',
  '/sitemaps/services.xml',
  '/sitemaps/images.xml',
].map((path) => ({
  loc: absoluteUrl(path),
  lastmod: currentDate,
}));

export const pageSitemapEntries: SitemapUrlEntry[] = routes
  .filter((route) => route.href === '/' || route.href === '/about' || route.href === '/contact')
  .map((route) => ({
    loc: absoluteUrl(route.href),
    lastmod: currentDate,
    changefreq: route.href === '/' ? 'daily' : 'weekly',
    priority: route.href === '/' ? 1 : 0.8,
  }));

export const serviceSitemapEntries: SitemapUrlEntry[] = routes
  .filter((route) => ['advertising', 'cast', 'web', 'aura', 'production'].includes(route.href.replace(/^\//, '')))
  .map((route) => ({
    loc: absoluteUrl(route.href),
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: route.href === '/aura' ? 0.8 : 0.9,
  }));

export const imageSitemapEntries: SitemapUrlEntry[] = Object.values(servicePages)
  .filter((page) => page.feature)
  .map((page) => ({
    loc: absoluteUrl(`/${page.slug}`),
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.7,
    images: [
      {
        loc: absoluteUrl(page.feature.src),
        title: page.title,
        caption: page.feature.caption.de,
      },
    ],
  }));

export const flatSitemapEntries: SitemapUrlEntry[] = [...pageSitemapEntries, ...serviceSitemapEntries];

export function renderUrlSet(entries: SitemapUrlEntry[]) {
  const urlNodes = entries
    .map((entry) => {
      const imageNodes = entry.images
        ? entry.images
            .map(
              (image) => `
    <image:image>
      <image:loc>${escapeXml(image.loc)}</image:loc>
      ${image.title ? `<image:title>${escapeXml(image.title)}</image:title>` : ''}
      ${image.caption ? `<image:caption>${escapeXml(image.caption)}</image:caption>` : ''}
    </image:image>`,
            )
            .join('')
        : '';

      return `
  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <lastmod>${escapeXml(entry.lastmod)}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>${imageNodes}
  </url>`;
    })
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${urlNodes}
</urlset>`;
}

export function renderSitemapIndex(entries: SitemapIndexEntry[]) {
  const sitemapNodes = entries
    .map(
      (entry) => `
  <sitemap>
    <loc>${escapeXml(entry.loc)}</loc>
    <lastmod>${escapeXml(entry.lastmod)}</lastmod>
  </sitemap>`,
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemapNodes}
</sitemapindex>`;
}
