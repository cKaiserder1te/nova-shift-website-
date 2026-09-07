import type { MetadataRoute } from 'next';
import { flatSitemapEntries } from '@/lib/sitemap-data';

export default function sitemap(): MetadataRoute.Sitemap {
  return flatSitemapEntries.map((entry) => ({
    url: entry.loc,
    lastModified: new Date(entry.lastmod),
    changeFrequency: entry.changefreq,
    priority: entry.priority,
  }));
}