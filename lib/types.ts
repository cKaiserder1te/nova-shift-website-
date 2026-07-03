export type LocaleCopy = {
  de: string;
  en: string;
};

export type ServiceCard = {
  tag: string;
  title: LocaleCopy;
  body: LocaleCopy;
};

export type StatItem = {
  value: string;
  label: LocaleCopy;
};

export type FeatureImage = {
  src: string;
  alt: string;
  caption: LocaleCopy;
  title: LocaleCopy;
  badge: string;
};

export type CaseStudy = {
  tag: string;
  title: LocaleCopy;
  summary: LocaleCopy;
  proofPoints: StatItem[];
  cta: {
    href: string;
    label: string;
  };
};

export type Testimonial = {
  quote: LocaleCopy;
  author: string;
  role: LocaleCopy;
  result: LocaleCopy;
};

export type FaqItem = {
  question: LocaleCopy;
  answer: LocaleCopy;
};

export type FunnelStep = {
  step: string;
  title: LocaleCopy;
  body: LocaleCopy;
};

export type PageContent = {
  slug: string;
  title: string;
  description: string;
  heroLabel: string;
  heroTitle: LocaleCopy;
  heroTagline: LocaleCopy;
  intro: {
    label: string;
    title: LocaleCopy;
    body: LocaleCopy;
  };
  cards: ServiceCard[];
  usp: {
    label: string;
    title: LocaleCopy;
    items: Array<{
      icon: string;
      title: LocaleCopy;
      body: LocaleCopy;
    }>;
  };
  stats: StatItem[];
  feature: FeatureImage;
  extra?: {
    label: string;
    title: LocaleCopy;
    body: LocaleCopy;
  };
};