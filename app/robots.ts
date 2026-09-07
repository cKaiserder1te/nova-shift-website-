import type { MetadataRoute } from 'next';
import { siteMeta } from '@/lib/site-content';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'Anthropic-ai',
        allow: '/',
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
      },
    ],
    sitemap: [
      new URL('/sitemap-index.xml', siteMeta.url).toString(),
      new URL('/sitemap.xml', siteMeta.url).toString(),
    ],
    host: siteMeta.url,
  };
}