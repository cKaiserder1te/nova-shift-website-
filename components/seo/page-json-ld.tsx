import { siteMeta } from '@/lib/site-content';

export type BreadcrumbItem = {
  name: string;
  url: string;
};

type PageJsonLdProps = {
  url: string;
  title: string;
  description: string;
  pageType?: 'WebPage' | 'AboutPage' | 'ContactPage';
  inLanguage?: 'de' | 'en';
  breadcrumbs?: BreadcrumbItem[];
  mainEntityId?: string;
};

export function PageJsonLd({
  url,
  title,
  description,
  pageType = 'WebPage',
  inLanguage = 'de',
  breadcrumbs,
  mainEntityId,
}: PageJsonLdProps) {
  const organizationId = `${siteMeta.url}#organization`;
  const webSiteId = `${siteMeta.url}#website`;

  const normalizedUrl = url.replace(/#.*$/, '');
  const webPageId = `${normalizedUrl}#webpage`;
  const breadcrumbId = breadcrumbs?.length ? `${normalizedUrl}#breadcrumb` : undefined;

  const graph: unknown[] = [
    {
      '@type': pageType,
      '@id': webPageId,
      url: normalizedUrl,
      name: title,
      description,
      inLanguage,
      isPartOf: { '@id': webSiteId },
      about: { '@id': organizationId },
      ...(mainEntityId ? { mainEntity: { '@id': mainEntityId } } : {}),
      ...(breadcrumbId ? { breadcrumb: { '@id': breadcrumbId } } : {}),
    },
  ];

  if (breadcrumbId && breadcrumbs) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': breadcrumbId,
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    });
  }

  const schema = {
    '@context': 'https://schema.org',
    '@graph': graph,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
