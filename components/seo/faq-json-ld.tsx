import type { FaqItem } from '@/lib/types';
import { croContent, siteMeta } from '@/lib/site-content';

type FaqJsonLdProps = {
  pageUrl?: string;
  faqs?: FaqItem[];
  language?: 'de' | 'en';
};

export function FaqJsonLd({ pageUrl = siteMeta.url, faqs = croContent.faqs, language = 'de' }: FaqJsonLdProps) {
  const normalizedPageUrl = pageUrl.replace(/#.*$/, '');
  const pick = (copy: { de: string; en: string }) => (language === 'en' ? copy.en : copy.de);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${normalizedPageUrl}#faq`,
    inLanguage: language,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: pick(faq.question),
      acceptedAnswer: {
        '@type': 'Answer',
        text: pick(faq.answer),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}