import { renderSitemapIndex, sitemapIndexEntries } from '@/lib/sitemap-data';

export const runtime = 'nodejs';

export function GET() {
  return new Response(renderSitemapIndex(sitemapIndexEntries), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}
