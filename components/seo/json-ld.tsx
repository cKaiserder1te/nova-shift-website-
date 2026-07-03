import { companyEntity, coreServices, glossaryTerms, siteMeta } from '@/lib/site-content';

export function JsonLd() {
  const organizationId = `${siteMeta.url}#organization`;
  const webSiteId = `${siteMeta.url}#website`;

  const absoluteUrl = (path: string) => new URL(path.replace(/^\/+/, ''), siteMeta.url).toString();

  const graph = [
    {
      '@type': 'Organization',
      '@id': organizationId,
      name: companyEntity.name,
      url: companyEntity.url,
      description: companyEntity.description,
      foundingDate: companyEntity.foundingDate,
      email: companyEntity.email,
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: companyEntity.email,
          availableLanguage: companyEntity.availableLanguages,
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': webSiteId,
      name: companyEntity.name,
      url: siteMeta.url,
      description: siteMeta.description,
      inLanguage: companyEntity.availableLanguages,
      publisher: { '@id': organizationId },
    },
    {
      '@type': 'ItemList',
      '@id': `${siteMeta.url}#services`,
      name: 'Nova Shift – Services',
      description: 'Strukturierter Leistungskatalog von Nova Shift.',
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      itemListElement: coreServices.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          '@id': `${absoluteUrl(service.urlPath)}#service`,
          name: service.name,
          url: absoluteUrl(service.urlPath),
          description: service.description,
          serviceType: service.serviceType.de,
          provider: { '@id': organizationId },
          audience: { '@type': 'Audience', audienceType: service.audience.de },
          serviceOutput: service.deliverables.de.map((name) => ({ '@type': 'Thing', name })),
        },
      })),
    },
    {
      '@type': 'DefinedTermSet',
      '@id': `${siteMeta.url}#glossary`,
      name: 'Nova Shift – Begriffe & Definitionen',
      description: 'Begriffe, die auf der Website verwendet werden, mit präzisen Definitionen.',
      inLanguage: companyEntity.availableLanguages,
      hasDefinedTerm: glossaryTerms.map((item) => ({
        '@type': 'DefinedTerm',
        name: item.term,
        description: item.definition.de,
        inLanguage: 'de',
      })),
    },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': graph,
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}