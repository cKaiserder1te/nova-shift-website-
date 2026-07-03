import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServicePage } from '@/components/pages/service-page';
import { coreServiceSlugs, getPageContent, servicePages, siteMeta, type CoreServiceSlug } from '@/lib/site-content';
import { FaqJsonLd } from '@/components/seo/faq-json-ld';
import { PageJsonLd } from '@/components/seo/page-json-ld';
import { ServiceJsonLd } from '@/components/seo/service-json-ld';

type PageParams = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(servicePages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageContent(slug);

  if (!page) {
    return {
      title: 'Nova Shift',
    };
  }

  const canonicalUrl = new URL(slug, siteMeta.url).toString();

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: canonicalUrl,
    },
    twitter: {
      title: page.title,
      description: page.description,
    },
  };
}

export default async function SlugPage({ params }: PageParams) {
  const { slug } = await params;
  const page = getPageContent(slug);

  if (!page) {
    notFound();
  }

  const pageUrl = new URL(slug, siteMeta.url).toString();

  const isCoreServiceSlug = (value: string): value is CoreServiceSlug =>
    (coreServiceSlugs as readonly string[]).includes(value);

  const isCoreService = isCoreServiceSlug(slug);
  const pageType = slug === 'about' ? 'AboutPage' : slug === 'contact' ? 'ContactPage' : 'WebPage';

  const mainEntityId = isCoreService ? `${pageUrl}#service` : undefined;

  return (
    <>
      <PageJsonLd
        url={pageUrl}
        title={page.title}
        description={page.description}
        pageType={pageType}
        breadcrumbs={[
          { name: 'Home', url: siteMeta.url },
          { name: page.title, url: pageUrl },
        ]}
        mainEntityId={mainEntityId}
      />

      {isCoreService ? <ServiceJsonLd slug={slug} /> : null}
      <FaqJsonLd pageUrl={pageUrl} />

      <ServicePage page={page} />
    </>
  );
}