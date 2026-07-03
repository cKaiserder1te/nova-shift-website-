import type { Metadata } from 'next';
import { HomePage } from '@/components/pages/home-page';
import { siteMeta } from '@/lib/site-content';
import { FaqJsonLd } from '@/components/seo/faq-json-ld';
import { PageJsonLd } from '@/components/seo/page-json-ld';

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  alternates: {
    canonical: siteMeta.url,
  },
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: siteMeta.url,
  },
  twitter: {
    title: siteMeta.title,
    description: siteMeta.description,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd
        url={siteMeta.url}
        title={siteMeta.title}
        description={siteMeta.description}
        breadcrumbs={[{ name: 'Home', url: siteMeta.url }]}
      />
      <FaqJsonLd pageUrl={siteMeta.url} />
      <HomePage />
    </>
  );
}