import type { MetadataRoute } from 'next';
import { routes } from '@/lib/routes';
import { siteMeta } from '@/lib/site-content';

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route.href, siteMeta.url).toString(),
    lastModified: new Date(),
    changeFrequency: route.href === '/' ? 'daily' : 'weekly',
    priority: route.href === '/' ? 1.0 : 0.8,
  }));
}