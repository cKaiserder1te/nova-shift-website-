import { coreServices, type CoreServiceSlug, siteMeta } from '@/lib/site-content';

type ServiceJsonLdProps = {
  slug: CoreServiceSlug;
  inLanguage?: 'de' | 'en';
};

export function ServiceJsonLd({ slug, inLanguage = 'de' }: ServiceJsonLdProps) {
  const organizationId = `${siteMeta.url}#organization`;

  const service = coreServices.find((item) => item.slug === slug);
  if (!service) {
    return null;
  }

  const absoluteUrl = new URL(service.urlPath.replace(/^\/+/, ''), siteMeta.url).toString();
  const serviceId = `${absoluteUrl}#service`;

  const deliverables = inLanguage === 'en' ? service.deliverables.en : service.deliverables.de;
  const audience = inLanguage === 'en' ? service.audience.en : service.audience.de;
  const serviceType = inLanguage === 'en' ? service.serviceType.en : service.serviceType.de;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': serviceId,
    name: service.name,
    url: absoluteUrl,
    description: service.description,
    inLanguage,
    serviceType,
    provider: { '@id': organizationId },
    audience: { '@type': 'Audience', audienceType: audience },
    serviceOutput: deliverables.map((name) => ({ '@type': 'Thing', name })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
