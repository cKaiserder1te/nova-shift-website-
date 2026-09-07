import { imageSitemapEntries, renderUrlSet } from '@/lib/sitemap-data';

export const runtime = 'nodejs';

export function GET() {
  return new Response(renderUrlSet(imageSitemapEntries), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}
