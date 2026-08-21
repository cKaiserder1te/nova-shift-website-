import type { CaseStudy, FaqItem, FunnelStep, LocaleCopy, PageContent, ServiceCard, StatItem, Testimonial } from '@/lib/types';

export const siteMeta = {
  title: 'Nova Shift – Creative Agency für Performance-Brands',
  description:
    'Nova Shift verbindet Performance, UGC, Webdesign und Branding in einem klaren System für D2C- und E-Commerce-Brands.',
  url: 'https://nova-shift.website/',
};

export const companyEntity = {
  name: 'Nova Shift',
  url: siteMeta.url,
  foundingDate: '2025',
  email: 'nova.shift.wk@gmail.com',
  availableLanguages: ['de', 'en'] as const,
  description: siteMeta.description,
} as const;

export const coreServiceSlugs = ['advertising', 'cast', 'web', 'aura', 'production'] as const;
export type CoreServiceSlug = (typeof coreServiceSlugs)[number];

export const glossaryTerms: Array<{ term: string; definition: LocaleCopy }> = [
  {
    term: 'Creative Agency',
    definition: {
      de: 'Eine Creative Agency entwickelt Strategie, Konzepte und Inhalte (Design, Copy, Assets) für Marketing, Werbung und Markenaufbau — mit dem Ziel, Sichtbarkeit und Conversion zu steigern.',
      en: 'A creative agency builds strategy, concepts and content (design, copy, assets) for marketing, advertising and brand building — with the goal of increasing visibility and conversion.',
    },
  },
  {
    term: 'UGC (User-Generated Content)',
    definition: {
      de: 'UGC sind Creator-Videos im authentischen Stil, die wie echte Nutzer-Erfahrungen wirken und als Werbe- oder Social-Assets für Performance-Kampagnen genutzt werden.',
      en: 'UGC is creator-made video content in an authentic style that resembles real user experiences and is used as ad or social assets for performance campaigns.',
    },
  },
  {
    term: 'D2C (Direct-to-Consumer)',
    definition: {
      de: 'D2C beschreibt Brands, die direkt an Endkund:innen verkaufen (z. B. über eigenen Onlineshop) statt über Handelspartner.',
      en: 'D2C describes brands that sell directly to end customers (e.g. via their own online shop) instead of relying on retail partners.',
    },
  },
  {
    term: 'ROAS (Return on Ad Spend)',
    definition: {
      de: 'ROAS ist eine Kennzahl für Werbe-Effizienz: Umsatz geteilt durch Werbekosten. Beispiel: 4,0 bedeutet 4 € Umsatz pro 1 € Spend.',
      en: 'ROAS is an advertising efficiency metric: revenue divided by ad spend. Example: 4.0 means €4 revenue per €1 spend.',
    },
  },
  {
    term: 'Landing Page',
    definition: {
      de: 'Eine Landing Page ist eine fokussierte Seite mit einem klaren Ziel (z. B. Anfrage, Kauf, Newsletter) und möglichst wenig Ablenkung.',
      en: 'A landing page is a focused page with a single primary goal (e.g. inquiry, purchase, newsletter) and minimal distraction.',
    },
  },
  {
    term: 'AI-Produktion',
    definition: {
      de: 'AI-Produktion bedeutet: Inhalte werden mit KI-Tools schneller skaliert (z. B. Varianten, Hintergrund, Voice, Schnitt), ohne den kreativen Kern (Konzept, Story, Stil) zu verlieren.',
      en: 'AI production means scaling content faster with AI tools (e.g. variants, backgrounds, voice, editing) without losing the creative core (concept, story, style).',
    },
  },
];

export const homeHero: {
  label: string;
  title: LocaleCopy;
  subtitle: LocaleCopy;
  meta: LocaleCopy;
  servicePills: string[];
} = {
  label: 'Creative Agency – Est. 2025',
  title: {
    de: 'We Shift\nthe Way Brands\nAre Seen',
    en: 'We Shift\nthe Way Brands\nAre Seen',
  },
  subtitle: {
    de: 'Full-Service Creative Agency für Performance-Brands, die spürbar wachsen wollen.',
    en: 'Full-service creative agency for performance brands that want to grow exponentially.',
  },
  meta: {
    de: 'Nova Shift verbindet Content, Performance und Design in einem System – für Brands, die schneller sichtbar und effizient skalieren wollen.',
    en: 'Nova Shift combines content, performance and design in one system for brands that want to grow faster and more efficiently.',
  },
  servicePills: ['Nova Advertising', 'Nova Cast', 'Nova Web', 'Nova Aura', 'Nova Production'],
};

export const homeCards: ServiceCard[] = [
  {
    tag: '01',
    title: { de: 'Nova Advertising', en: 'Nova Advertising' },
    body: {
      de: 'Performance-Kampagnen für Meta, Google und TikTok mit klarer Test- und Optimierungslogik.',
      en: 'Performance campaigns for Meta, Google and TikTok with a clear testing and optimization logic.',
    },
  },
  {
    tag: '02',
    title: { de: 'Nova Cast', en: 'Nova Cast' },
    body: {
      de: 'Authentischer UGC-Content, der schnell getestet, iteriert und skaliert werden kann.',
      en: 'Authentic UGC content that can be tested, iterated and scaled quickly.',
    },
  },
  {
    tag: '03',
    title: { de: 'Nova Web', en: 'Nova Web' },
    body: {
      de: 'Conversion-orientierte Websites und Landing Pages mit klarer Struktur und schneller Umsetzung.',
      en: 'Conversion-focused websites and landing pages with clear structure and fast implementation.',
    },
  },
  {
    tag: '04',
    title: { de: 'Nova Aura', en: 'Nova Aura' },
    body: {
      de: 'Positionierung und Markenidentität mit klarer visueller Sprache und Wirkung.',
      en: 'Positioning and brand identity with a clear visual language and impact.',
    },
  },
  {
    tag: '05',
    title: { de: 'Nova Production', en: 'Nova Production' },
    body: {
      de: 'Produkt- und Content-Production mit KI-Workflows für mehr Varianten und schnelleren Output.',
      en: 'Product and content production with AI workflows for more variants and faster output.',
    },
  },
];

export const homeStats: StatItem[] = [
  { value: '24h', label: { de: 'Antwortzeit', en: 'Response time' } },
  { value: 'DE / EN', label: { de: 'Sprache', en: 'Language' } },
  { value: '2', label: { de: 'Co-Founder', en: 'Co-founders' } },
  { value: '7-14d', label: { de: 'Launch-Fenster', en: 'Launch window' } },
];

export const croContent: {
  caseStudies: CaseStudy[];
  testimonials: Testimonial[];
  faqs: FaqItem[];
  funnelSteps: FunnelStep[];
} = {
  caseStudies: [
    {
      tag: 'Nova Web',
      title: { de: '7 Tage bis live.', en: 'Live in 7 days.' },
      summary: {
        de: 'Strategie, Copy und Design wurden in einem kompakten Sprint zusammengesetzt, damit aus Interesse schneller eine Anfrage wird.',
        en: 'Strategy, copy and design were assembled in one focused sprint so interest could turn into inquiries faster.',
      },
      proofPoints: [
        { value: '7d', label: { de: 'Launch', en: 'Launch' } },
        { value: 'SEO', label: { de: 'Ready', en: 'Ready' } },
        { value: 'GDPR', label: { de: 'Ready', en: 'Ready' } },
      ],
      cta: { href: '/web', label: 'Nova Web ansehen' },
    },
    {
      tag: 'Nova Cast',
      title: { de: 'Ein Dreh. Fünfzig Assets.', en: 'One shoot. Fifty assets.' },
      summary: {
        de: 'UGC und AI-Postproduktion liefern deutlich mehr Hooks, Formate und Varianten aus einem einzigen Setup.',
        en: 'UGC and AI post-production deliver more hooks, formats and variants from a single setup.',
      },
      proofPoints: [
        { value: '1', label: { de: 'Shoot', en: 'Shoot' } },
        { value: '50+', label: { de: 'Assets', en: 'Assets' } },
        { value: '10', label: { de: 'Hooks', en: 'Hooks' } },
      ],
      cta: { href: '/cast', label: 'Nova Cast ansehen' },
    },
    {
      tag: 'Nova Advertising',
      title: { de: 'Kreativ + Performance.', en: 'Creative + performance.' },
      summary: {
        de: 'Kampagnen werden so aufgebaut, dass Content, Distribution und Optimierung direkt zusammenarbeiten.',
        en: 'Campaigns are built so content, distribution and optimization work together from day one.',
      },
      proofPoints: [
        { value: 'Meta', label: { de: 'Stack', en: 'Stack' } },
        { value: 'TikTok', label: { de: 'Stack', en: 'Stack' } },
        { value: 'ROAS', label: { de: 'Fokus', en: 'Focus' } },
      ],
      cta: { href: '/advertising', label: 'Nova Advertising ansehen' },
    },
  ],
  testimonials: [
    {
      quote: {
        de: 'Wir mussten nicht lange erklären, was wir brauchen. Die nächste Aktion war sofort klar und die Kommunikation blieb extrem sauber.',
        en: 'We did not have to explain our needs for long. The next action was obvious and communication stayed very clean.',
      },
      author: 'Marketing Lead',
      role: { de: 'D2C Brand', en: 'D2C brand' },
      result: { de: 'Mehr Klarheit im Funnel.', en: 'More clarity in the funnel.' },
    },
    {
      quote: {
        de: 'Ein Shoot hat uns endlich genug Material für echte Tests geliefert. Genau das hat uns im Alltag gefehlt.',
        en: 'One shoot finally gave us enough material for real testing. That was the gap we had been missing.',
      },
      author: 'Founder',
      role: { de: 'E-Commerce Brand', en: 'E-commerce brand' },
      result: { de: 'Schnelleres Creative-Learning.', en: 'Faster creative learning.' },
    },
    {
      quote: {
        de: 'Die Website war nicht nur schöner. Sie hat unser Angebot viel schneller und präziser erklärt.',
        en: 'The website was not just prettier. It explained our offer much faster and with more precision.',
      },
      author: 'Operations Lead',
      role: { de: 'Service Brand', en: 'Service brand' },
      result: { de: 'Mehr qualifizierte Anfragen.', en: 'More qualified inquiries.' },
    },
  ],
  faqs: [
    {
      question: { de: 'Wie schnell antwortet ihr?', en: 'How fast do you respond?' },
      answer: {
        de: 'Wir melden uns werktags innerhalb von 24 Stunden mit der nächsten sinnvollen Aktion.',
        en: 'We reply within 24 hours on weekdays with the next sensible step.',
      },
    },
    {
      question: { de: 'Arbeitet ihr zweisprachig?', en: 'Do you work bilingually?' },
      answer: {
        de: 'Ja. Deutsch und Englisch gehören bei uns fest zum Prozess und zum Output.',
        en: 'Yes. German and English are part of our process and our deliverables.',
      },
    },
    {
      question: { de: 'Kann ich nur einen Service buchen?', en: 'Can I book only one service?' },
      answer: {
        de: 'Ja. Advertising, Cast, Web, Aura und Production sind einzeln oder kombiniert buchbar.',
        en: 'Yes. Advertising, Cast, Web, Aura and Production can be booked individually or combined.',
      },
    },
    {
      question: { de: 'Was, wenn ich noch kein Material habe?', en: 'What if I do not have any material yet?' },
      answer: {
        de: 'Dann starten wir mit Strategie und Produktion. Genau dafür sind die modularen Services da.',
        en: 'Then we start with strategy and production. That is exactly what the modular services are for.',
      },
    },
    {
      question: { de: 'Wie laufen Budgets bei euch?', en: 'How do budgets work?' },
      answer: {
        de: 'Wir fragen das Budget früh ab, damit Scope, Tempo und Umfang sauber gesetzt sind.',
        en: 'We ask about budget early so scope, timing and scope stay clear.',
      },
    },
    {
      question: { de: 'Wie startet ein Projekt?', en: 'How does a project start?' },
      answer: {
        de: 'Mit einem kurzen Erstgespräch, dann Briefing, Umsetzung und Übergabe ohne Reibungsverluste.',
        en: 'With a short intro call, then briefing, production and handoff without friction.',
      },
    },
  ],
  funnelSteps: [
    {
      step: '01',
      title: { de: 'Erstgespräch', en: 'Intro call' },
      body: {
        de: 'Wir klären Ziel, Timing und den besten Einstieg. Kostenlos und ohne Aufwand.',
        en: 'We clarify goal, timing and the best entry point. Free and low friction.',
      },
    },
    {
      step: '02',
      title: { de: 'Projekt-Brief', en: 'Project brief' },
      body: {
        de: 'Wir verdichten das Briefing zu einer klaren Richtung und einem realistischen Scope.',
        en: 'We distill the briefing into a clear direction and a realistic scope.',
      },
    },
    {
      step: '03',
      title: { de: 'Produktion', en: 'Production' },
      body: {
        de: 'Design, Content und Setup laufen im gleichen System zusammen.',
        en: 'Design, content and setup are produced in the same system.',
      },
    },
    {
      step: '04',
      title: { de: 'Launch & Optimierung', en: 'Launch & optimization' },
      body: {
        de: 'Wir liefern, begleiten den Start und optimieren auf Wunsch weiter.',
        en: 'We deliver, support the launch and keep optimizing on request.',
      },
    },
  ],
};

export const servicePages: Record<string, PageContent> = {
  about: {
    slug: 'about',
    title: 'Nova Shift – Über uns',
    description:
      'Nova Shift entsteht aus der Partnerschaft zwischen Strategie und Umsetzung. Klar, direkt, zweisprachig und auf messbare Ergebnisse ausgelegt.',
    heroLabel: 'Über uns / Our Story',
    heroTitle: {
      de: 'Zwei Gründer.\nEine Obsession.',
      en: 'Two founders.\nOne obsession.',
    },
    heroTagline: {
      de: 'Nova Shift ist die Antwort auf gute Produkte mit schwachem Content.',
      en: 'Nova Shift is the answer to great products with weak content.',
    },
    intro: {
      label: 'Warum Nova Shift?',
      title: { de: 'Vertrauen + Performance', en: 'Trust + Performance' },
      body: {
        de: 'Wir verbinden Strategie, Umsetzung und Performance in einem klaren System.',
        en: 'We combine strategy, execution and performance in one clear system.',
      },
    },
    cards: [
      {
        tag: 'Arbeitsweise',
        title: { de: 'Klar statt kompliziert', en: 'Clear, not complicated' },
        body: {
          de: 'Wir arbeiten direkt, transparent und mit klarer Roadmap. Keine Umwege, keine unnötige Komplexität, nur saubere Entscheidungen.',
          en: 'We work directly, transparently and with a clear roadmap. No detours, no unnecessary complexity, only clean decisions.',
        },
      },
      {
        tag: 'Sprachen',
        title: { de: 'DE / EN', en: 'DE / EN' },
        body: {
          de: 'Zweisprachig gedacht, immer in dieser Reihenfolge.',
          en: 'Bilingual by design, always in this order.',
        },
      },
      {
        tag: '2025',
        title: { de: 'Gegründet in Deutschland', en: 'Founded in Germany' },
        body: {
          de: 'Gegründet 2025 mit Fokus auf AI-getriebene Inhalte und Performance Marketing.',
          en: 'Founded in 2025 with a focus on AI-driven content and performance marketing.',
        },
      },
    ],
    usp: {
      label: 'Founder Stats',
      title: { de: 'Ein Team, viele Disziplinen.', en: 'One team, many disciplines.' },
      items: [
        {
          icon: '[ 01 ]',
          title: { de: '2 Co-Founder', en: '2 Co-founders' },
          body: { de: 'Strategie und Umsetzung sitzen im selben System.', en: 'Strategy and execution sit inside one system.' },
        },
        {
          icon: '[ 02 ]',
          title: { de: 'Deutschland', en: 'Germany' },
          body: { de: 'Bilingual, präzise und marktnah.', en: 'Bilingual, precise and close to market reality.' },
        },
        {
          icon: '[ 03 ]',
          title: { de: '2025', en: '2025' },
          body: { de: 'Neu gebaut für den KI-First-Workflow.', en: 'Built for an AI-first workflow.' },
        },
        {
          icon: '[ 04 ]',
          title: { de: 'AI-driven', en: 'AI-driven' },
          body: { de: 'Content, Performance und Branding denken wir integriert.', en: 'We think content, performance and branding as one stack.' },
        },
      ],
    },
    stats: [
      { value: '2', label: { de: 'Co-Founder', en: 'Co-founders' } },
      { value: '2025', label: { de: 'Gegründet', en: 'Founded' } },
      { value: 'DE', label: { de: 'Standort', en: 'Location' } },
      { value: 'AI', label: { de: 'Spezialität', en: 'Speciality' } },
    ],
    feature: {
      src: '/bilder/Gemini_Generated_Image_fwqvz0fwqvz0fwqv.png',
      alt: 'Zwei Geschäftspartner beim Handschlag über einer strategischen Roadmap',
      badge: 'Einblick',
      title: {
        de: 'Vertrauen wird zu Strategie.',
        en: 'Trust becomes strategy.',
      },
      caption: {
        de: 'Partnerschaft mit klarer Richtung.',
        en: 'Partnership with a clear direction.',
      },
    },
  },
  advertising: {
    slug: 'advertising',
    title: 'Nova Advertising – Kampagnen & Performance Ads',
    description:
      'Kampagnen für Meta, Google und TikTok – kreativ geplant und messbar optimiert.',
    heroLabel: '01 / Nova Advertising',
    heroTitle: { de: 'Werbung, die\nbewegt.', en: 'Advertising that\nmoves.' },
    heroTagline: {
      de: 'Kampagnen, die Marken sichtbar machen und Umsätze treiben.',
      en: 'Attention-driven advertising built for measurable performance.',
    },
    intro: {
      label: 'Leistung',
      title: { de: 'Strategie, Creative & Skalierung', en: 'Strategy, creative & scaling' },
      body: {
        de: 'Wir bauen Performance-Kampagnen mit klarer Strategie, relevanten Assets und messbarer Optimierung über den kompletten Funnel.',
        en: 'We build performance campaigns with clear strategy, relevant assets and measurable optimization across the full funnel.',
      },
    },
    cards: [
      {
        tag: 'Leistungsmodell',
        title: { de: 'Kreativ + Daten', en: 'Creative + data' },
        body: {
          de: 'Strategie, Creative und Optimierung laufen auf einem Messkreuz und werden in jedem Sprint verbessert.',
          en: 'Strategy, creative and optimization run in one loop and improve with every sprint.',
        },
      },
      {
        tag: 'Kanal-Stack',
        title: { de: 'Meta, TikTok, Google', en: 'Meta, TikTok, Google' },
        body: {
          de: 'Ein Setup, mehrere Kanäle, ein klarer Testplan und schnellere Entscheidungen auf Basis von Daten.',
          en: 'One setup, multiple channels, one clear testing plan and faster decisions based on data.',
        },
      },
      {
        tag: 'Skalierung',
        title: { de: 'Testen statt raten', en: 'Test instead of guessing' },
        body: {
          de: 'Wir lernen aus den ersten Resultaten und skalieren nur das, was wirklich trägt.',
          en: 'We learn from the first results and scale only what actually works.',
        },
      },
    ],
    usp: {
      label: 'Unsere Stärken',
      title: { de: 'Warum Brands uns wählen', en: 'Why brands choose us' },
      items: [
        { icon: '[ 01 ]', title: { de: 'Full-Service Produktion', en: 'End-to-end production' }, body: { de: 'Konzept bis Ausspielung aus einer Hand.', en: 'Concept through distribution from one team.' } },
        { icon: '[ 02 ]', title: { de: 'Plattform-Expertise', en: 'Platform expertise' }, body: { de: 'IG, TikTok, Google, YouTube, LinkedIn.', en: 'IG, TikTok, Google, YouTube, LinkedIn.' } },
        { icon: '[ 03 ]', title: { de: 'Schnelle Lieferung', en: 'Fast delivery' }, body: { de: 'Tempo ohne Qualitätsverlust.', en: 'Speed without compromise.' } },
        { icon: '[ 04 ]', title: { de: 'ROI-Fokus', en: 'ROI focus' }, body: { de: 'Wir denken in ROAS, nicht in Klicks.', en: 'We think in ROAS, not clicks.' } },
      ],
    },
    stats: [
      { value: '7d', label: { de: 'erste Creatives', en: 'first creatives' } },
      { value: '14d', label: { de: 'Live-Kampagne', en: 'live campaign' } },
      { value: 'ROAS', label: { de: 'Fokus', en: 'focus' } },
      { value: 'Full', label: { de: 'Funnel', en: 'funnel' } },
    ],
    feature: {
      src: '/bilder/Gemini_Generated_Image_mzzpuqmzzpuqmzzp.png',
      alt: 'Nova Advertising Kampagnen-Visual',
      badge: 'Case Focus',
      title: { de: 'Multi-Channel Launch-Kampagne.', en: 'Multi-channel launch campaign.' },
      caption: { de: 'Film, Social Media, Performance — koordiniert.', en: 'Film, social media, performance — coordinated.' },
    },
  },
  cast: {
    slug: 'cast',
    title: 'Nova Cast – UGC Agentur & AI Ad Production',
    description:
      'Authentischer UGC- und AI-Content für D2C-Brands mit schnell testbarem Output.',
    heroLabel: '02 / Nova Cast',
    heroTitle: { de: 'Content der\nkonvertiert.', en: 'Content that\nconverts.' },
    heroTagline: {
      de: 'UGC-Content und KI-generierte Ad-Creatives für D2C-Brands.',
      en: 'Creator-first content production powered by AI.',
    },
    intro: {
      label: 'Leistung',
      title: { de: 'UGC-Workflow & Asset-Engine', en: 'UGC workflow & asset engine' },
      body: {
        de: 'Ein Setup liefert Creator-Content, Varianten und Ad-Assets für Meta, TikTok und Instagram – schnell testbar und skalierbar.',
        en: 'One setup delivers creator content, variants and ad assets for Meta, TikTok and Instagram – fast to test and easy to scale.',
      },
    },
    cards: [
      {
        tag: 'Workflow',
        title: { de: 'UGC, die testbar ist', en: 'UGC that is testable' },
        body: {
          de: 'Authentische Creator-Videos mit klaren Hooks, sauberem Storytelling und sofort nutzbaren Varianten.',
          en: 'Authentic creator videos with clear hooks, strong storytelling and immediately usable variants.',
        },
      },
      {
        tag: 'Output',
        title: { de: '1 Shoot → 50 Assets', en: '1 shoot → 50 assets' },
        body: {
          de: 'Hooks, Hintergründe, Musik, Untertitelstile und Formate werden in der Post-Production systematisch erzeugt.',
          en: 'Hooks, backgrounds, music, subtitle styles and formats are systematically created in post-production.',
        },
      },
      {
        tag: 'AI + Authentizität',
        title: { de: 'Technik ohne Verlust', en: 'Tech without losing the human feel' },
        body: {
          de: 'Die KI skaliert die Produktion, aber der echte Creator-Auftakt bleibt der entscheidende Faktor.',
          en: 'AI scales production, but the real creator presence remains the deciding factor.',
        },
      },
    ],
    usp: {
      label: 'Warum Nova Cast',
      title: { de: 'Der Unterschied den KI macht', en: 'The difference AI makes' },
      items: [
        { icon: '01', title: { de: 'Hook-Testing Engine', en: 'Hook testing engine' }, body: { de: '10 Hook-Varianten pro Kampagne.', en: 'Ten hook variants per campaign.' } },
        { icon: '02', title: { de: 'Authentizität by Design', en: 'Authenticity by design' }, body: { de: 'Brandmessage und echter Auftritt passen zusammen.', en: 'Brand message and natural delivery align.' } },
        { icon: '03', title: { de: 'Plug-in Ad Management', en: 'Plug-in ad management' }, body: { de: 'Vom Content zum laufenden Kampagnen-Management.', en: 'From content to live campaign management.' } },
        { icon: '04', title: { de: 'Scale-first Workflow', en: 'Scale-first workflow' }, body: { de: 'Creatives, die sofort testbar sind.', en: 'Creatives that are test-ready from day one.' } },
      ],
    },
    stats: [
      { value: '50+', label: { de: 'Projekte', en: 'Projects' } },
      { value: '7d', label: { de: 'Lieferzeit', en: 'Delivery' } },
      { value: '25–50', label: { de: 'Assets / Shoot', en: 'assets / shoot' } },
      { value: '90%', label: { de: 'AI-Workflow', en: 'AI workflow' } },
    ],
    feature: {
      src: '/bilder/Gemini_Generated_Image_uu2x9puu2x9puu2x.png',
      alt: 'Nova Cast Produktion am Set',
      badge: 'Case Einblick',
      title: { de: 'Ein Dreh, viele Assets.', en: 'One shoot, many assets.' },
      caption: { de: 'Set, Shot, Scale.', en: 'Set, shoot, scale.' },
    },
  },
  web: {
    slug: 'web',
    title: 'Nova Web – Webdesign Agentur für KMU & Brands',
    description:
      'Websites, Shops und Landing Pages mit klarer Conversion-Architektur und schneller Umsetzung.',
    heroLabel: '03 / Nova Web Solutions',
    heroTitle: { de: 'Digitale Präsenz,\nneu definiert.', en: 'Digital presence,\nredefined.' },
    heroTagline: {
      de: 'Websites, Shops und Landing Pages mit klarer Conversion-Architektur.',
      en: 'Experience-led web design built for performance and growth.',
    },
    intro: {
      label: 'Leistung',
      title: { de: 'Websites, die verkaufen', en: 'Websites that sell' },
      body: {
        de: 'Von der Struktur bis zum Launch planen wir jede Seite mit Conversion, Speed und Klarheit im Blick.',
        en: 'From structure to launch, we design every page around conversion, speed and clarity.',
      },
    },
    cards: [
      {
        tag: 'Konversion',
        title: { de: 'Conversion über Ästhetik', en: 'Conversion over decoration' },
        body: {
          de: 'Wir bauen auf klarer Struktur, starkem CTA und sauberer Nutzerführung statt auf reinem Styling.',
          en: 'We build around clear structure, strong CTAs and smooth user flow instead of pure styling.',
        },
      },
      {
        tag: 'System',
        title: { de: 'Alles aus einer Hand', en: 'Everything in one system' },
        body: {
          de: 'Design, Texte, Aufbau und technische Umsetzung entstehen aus einem gemeinsamen Prozess.',
          en: 'Design, copy, structure and technical execution come from one shared process.',
        },
      },
      {
        tag: 'Geschwindigkeit',
        title: { de: 'Live in 7 Tagen', en: 'Live in 7 days' },
        body: {
          de: 'Ein klarer Fokus auf das Wesentliche macht schnelle Umsetzung und frühen Start möglich.',
          en: 'A clear focus on the essentials makes fast delivery and early launch possible.',
        },
      },
    ],
    usp: {
      label: 'Unsere Stärken',
      title: { de: 'Websites die für euch arbeiten', en: 'Websites that work for you' },
      items: [
        { icon: '01', title: { de: 'AI-gestützter Aufbau', en: 'AI-assisted build' }, body: { de: 'Texte entstehen aus dem Onboarding.', en: 'Copy is generated from onboarding inputs.' } },
        { icon: '02', title: { de: 'Conversion-Architektur', en: 'Conversion architecture' }, body: { de: 'Above the fold, Social Proof, klare CTAs.', en: 'Above the fold, social proof, clear CTAs.' } },
        { icon: '03', title: { de: 'DSGVO aus der Box', en: 'GDPR by default' }, body: { de: 'Cookie-Banner, Datenschutz, Impressum.', en: 'Cookie banner, privacy policy, imprint.' } },
        { icon: '04', title: { de: 'Live in 7 Tagen', en: 'Live in 7 days' }, body: { de: 'Schnell sichtbar sein hat einen Wert.', en: 'Being visible quickly has value.' } },
      ],
    },
    stats: [
      { value: '7d', label: { de: 'Launch', en: 'launch' } },
      { value: 'SEO', label: { de: 'Ready', en: 'ready' } },
      { value: 'CMS', label: { de: 'Optional', en: 'optional' } },
      { value: 'GDPR', label: { de: 'Ready', en: 'ready' } },
    ],
    feature: {
      src: '/bilder/Gemini_Generated_Image_om7mvkom7mvkom7m.png',
      alt: 'Laptop mit Webdesign-Wireframe und Layout-Skizze',
      badge: 'Einblick',
      title: { de: 'Vom Wireframe zur fertigen Website.', en: 'From wireframe to live website.' },
      caption: { de: 'Typografie, Struktur, Interaktion.', en: 'Typography, structure, interaction.' },
    },
  },
  aura: {
    slug: 'aura',
    title: 'Nova Aura – Branding & Markenidentität',
    description:
      'Branding mit klarer Positionierung, Stil und Markenwirkung.',
    heroLabel: '04 / Nova Aura',
    heroTitle: { de: 'Deine Marke.\nUnvergesslich.', en: 'Your brand.\nUnforgettable.' },
    heroTagline: {
      de: 'Branding, Positionierung und Markenidentität für Brands mit Ambitionen.',
      en: 'Brand strategy and identity systems built to endure.',
    },
    intro: {
      label: 'Leistung',
      title: { de: 'Positionierung & visuelle Klarheit', en: 'Positioning & visual clarity' },
      body: {
        de: 'Wir entwickeln Marken, die sich in Positionierung, Typografie und Kommunikation klar von der Masse abheben.',
        en: 'We develop brands that stand out through positioning, typography and a clear communication system.',
      },
    },
    cards: [
      {
        tag: 'Positionierung',
        title: { de: 'Strategie vor Stil', en: 'Strategy before style' },
        body: {
          de: 'Wir bauen die Markenidentität auf einer klaren Haltung und einer verständlichen Positionierung auf.',
          en: 'We build the brand identity on a clear point of view and a precise positioning.',
        },
      },
      {
        tag: 'System',
        title: { de: 'Logo, Typografie, Stimme', en: 'Logo, typography, voice' },
        body: {
          de: 'Die visuelle Sprache und die Markenstimme werden als ein konsistentes System entwickelt.',
          en: 'The visual language and brand voice are built as one consistent system.',
        },
      },
      {
        tag: 'Wirkung',
        title: { de: 'Erkennbar statt generisch', en: 'Recognizable instead of generic' },
        body: {
          de: 'Ein guter Brand fühlt sich nachweislich passend an — und bleibt in Erinnerung.',
          en: 'A strong brand feels distinctly right and remains memorable over time.',
        },
      },
    ],
    usp: {
      label: 'Was ihr bekommt',
      title: { de: 'Das vollständige Marken-System', en: 'The complete brand system' },
      items: [
        { icon: '01', title: { de: 'Positionierung', en: 'Positioning' }, body: { de: 'Messaging-Framework und Markenstimme.', en: 'Messaging framework and brand voice.' } },
        { icon: '02', title: { de: 'Identität', en: 'Identity' }, body: { de: 'Logo, Typografie, Farben und Regeln.', en: 'Logo, typography, color and rules.' } },
        { icon: '03', title: { de: 'Guidelines', en: 'Guidelines' }, body: { de: 'PDF und Templates für alle Touchpoints.', en: 'PDF and templates for every touchpoint.' } },
        { icon: '04', title: { de: 'Optional Web', en: 'Optional web' }, body: { de: 'Brand-starke Website im Aura-Stil.', en: 'A brand-led website in the Aura style.' } },
      ],
    },
    stats: [
      { value: 'Brand', label: { de: 'System', en: 'system' } },
      { value: 'Logo', label: { de: 'Set', en: 'set' } },
      { value: 'Voice', label: { de: 'Guide', en: 'guide' } },
      { value: 'PDF', label: { de: 'Ready', en: 'ready' } },
    ],
    feature: {
      src: '/bilder/Gemini_Generated_Image_e54jbke54jbke54j.png',
      alt: 'Nahaufnahme eines Auges mit warmem Lichtreflex',
      badge: 'Einblick',
      title: { de: 'Ein Markenbild, das Vertrauen aufbaut.', en: 'A brand image that builds trust.' },
      caption: { de: 'Klarheit im Blick. Präsenz im Auftritt.', en: 'Clarity in view. Presence in the brand.' },
    },
  },
  production: {
    slug: 'production',
    title: 'Nova Production – AI-Content & Produktshooting',
    description:
      'Produkt- und Content-Production mit KI für schnellere Varianten und mehr Output.',
    heroLabel: '05 / Nova Production',
    heroTitle: { de: 'Content der\nnächsten Generation.', en: 'Content of\nthe next generation.' },
    heroTagline: {
      de: 'KI-gestützte Produktionsverfahren für visuellen Premium-Content.',
      en: 'Production accelerated by AI without compromising quality.',
    },
    intro: {
      label: 'Leistung',
      title: { de: 'Mehr Output aus einem Setup', en: 'More output from one setup' },
      body: {
        de: 'Aus einem Shoot entstehen Varianten, Formate und Produktvisuals für Social, Ads und Web – mit einheitlichem Stil und höherer Geschwindigkeit.',
        en: 'One shoot becomes multiple variants, formats and product visuals for social, ads and web with a consistent style and faster delivery.',
      },
    },
    cards: [
      {
        tag: 'Workflow',
        title: { de: 'Vom Setup zur Asset-Bibliothek', en: 'From setup to asset library' },
        body: {
          de: 'Ein Drehtag liefert nicht nur einen Content-Block, sondern viele Formate, Variationen und Nutzungskontexte.',
          en: 'One shoot does not just produce one asset; it creates multiple formats, variations and use cases.',
        },
      },
      {
        tag: 'Output',
        title: { de: 'Mehr Formate. Mehr Varianten.', en: 'More formats. More variants.' },
        body: {
          de: 'KI-Remixing, Format-Adaptierung und Batch-Export machen aus einem Setup schnell mehrere Nutzungsmöglichkeiten.',
          en: 'AI remixing, format adaptation and batch export turn one setup into several usable outputs fast.',
        },
      },
      {
        tag: 'Tools',
        title: { de: 'Praxis statt Laboreffekt', en: 'Practical, not theoretical' },
        body: {
          de: 'Die Tools dienen dem Zweck: schnellere Varianten, bessere Ausspielung und mehr konsistente Produktionen.',
          en: 'The tools exist to produce faster variants, cleaner distribution and more consistent output.',
        },
      },
    ],
    usp: {
      label: 'Unser Tech-Stack',
      title: { de: 'Die Tools hinter unserem Prozess', en: 'The tools behind our process' },
      items: [
        { icon: 'AI', title: { de: 'Video', en: 'Video' }, body: { de: 'AI-Avatar-Videos und Hintergrund-Remixing.', en: 'AI avatar videos and background remixing.' } },
        { icon: 'TXT', title: { de: 'Audio & Copy', en: 'Audio & copy' }, body: { de: 'Voice-over, Transkription und Untertitel.', en: 'Voice-over, transcription and subtitles.' } },
        { icon: 'IMG', title: { de: 'Image', en: 'Image' }, body: { de: 'Produkt-Mockups und Bildgenerierung.', en: 'Product mockups and image generation.' } },
        { icon: 'EXP', title: { de: 'Export', en: 'Export' }, body: { de: 'Short-form Varianten aus Long-Content.', en: 'Short-form variants from long content.' } },
      ],
    },
    stats: [
      { value: '48h', label: { de: 'Varianz', en: 'variation' } },
      { value: '12', label: { de: 'Assets', en: 'assets' } },
      { value: 'AI', label: { de: 'Driven', en: 'driven' } },
      { value: 'Prod', label: { de: 'Ready', en: 'ready' } },
    ],
    feature: {
      src: '/bilder/Gemini_Generated_Image_j4o6g2j4o6g2j4o6.png',
      alt: 'Production content setup mit Smartphone, Licht und Analytics-Overlays',
      badge: 'Einblick',
      title: { de: 'Ein Setup, viele Assets.', en: 'One setup, many assets.' },
      caption: { de: 'Produktion, die wie ein System wirkt.', en: 'Production that feels like a system.' },
    },
  },
  contact: {
    slug: 'contact',
    title: 'Nova Shift – Kontakt',
    description: 'Erzähl uns von deinem Projekt. Wir melden uns innerhalb von 24 Stunden mit einem ersten Konzept.',
    heroLabel: 'Kontakt',
    heroTitle: { de: 'Lass uns deinen\nnächsten Shift planen.', en: 'Let\'s plan your\nnext shift.' },
    heroTagline: {
      de: 'Erzähl uns von deinem Projekt. Wir melden uns innerhalb von 24 Stunden.',
      en: 'Tell us about your project. We will respond within 24 hours.',
    },
    intro: {
      label: 'Kontaktformular',
      title: { de: 'Brief uns direkt', en: 'Brief us directly' },
      body: {
        de: 'Die Felder sind so strukturiert, dass wir euer Ziel, Budget und den passenden Service schnell erfassen.',
        en: 'The form is structured so we can quickly capture your goal, budget and the right service.',
      },
    },
    cards: [
      {
        tag: 'Service',
        title: { de: 'Alle Packages', en: 'All packages' },
        body: {
          de: 'Advertising, Cast, Web, Aura und Production — einzeln oder kombiniert.',
          en: 'Advertising, Cast, Web, Aura and Production — individually or combined.',
        },
      },
      {
        tag: 'Budget',
        title: { de: 'Transparent', en: 'Transparent' },
        body: {
          de: 'Wir fragen Budgets früh ab, um den Scope präzise zu setzen.',
          en: 'We capture budgets early so scope can be set precisely.',
        },
      },
      {
        tag: 'Response',
        title: { de: 'Antwort in 24h', en: 'Reply in 24h' },
        body: {
          de: 'Wir melden uns werktags innerhalb eines Tages.',
          en: 'We reply within one business day.',
        },
      },
    ],
    usp: {
      label: 'Kontakt',
      title: { de: 'Lass uns deinen nächsten Shift planen', en: 'Let\'s plan your next shift' },
      items: [
        { icon: 'MAIL', title: { de: 'nova.shift.wk@gmail.com', en: 'nova.shift.wk@gmail.com' }, body: { de: 'Direkter Kontakt für Anfragen.', en: 'Direct contact for inquiries.' } },
        { icon: 'TIME', title: { de: '< 24h', en: '< 24h' }, body: { de: 'Antwortzeit werktags.', en: 'Weekday response time.' } },
        { icon: 'LANG', title: { de: 'DE / EN', en: 'DE / EN' }, body: { de: 'Bilingual by design.', en: 'Bilingual by design.' } },
        { icon: 'FORM', title: { de: 'Formular', en: 'Form' }, body: { de: 'Service- und Budget-Auswahl inklusive.', en: 'Service and budget selection included.' } },
      ],
    },
    stats: [
      { value: '24h', label: { de: 'Antwort', en: 'reply' } },
      { value: 'DE', label: { de: 'Sprache', en: 'language' } },
      { value: 'EN', label: { de: 'Sprache', en: 'language' } },
      { value: '∞', label: { de: 'Möglichkeiten', en: 'possibilities' } },
    ],
    feature: {
      src: '/bilder/Gemini_Generated_Image_fwqvz0fwqvz0fwqv.png',
      alt: 'Nova Shift Contact Visual',
      badge: 'Kontakt',
      title: { de: 'Bereit für den nächsten Shift?', en: 'Ready for the next shift?' },
      caption: { de: 'Erzähl uns von deinem Projekt.', en: 'Tell us about your project.' },
    },
  },
};

export const coreServices: Array<{
  slug: CoreServiceSlug;
  name: string;
  urlPath: `/${CoreServiceSlug}`;
  serviceType: LocaleCopy;
  definition: LocaleCopy;
  audience: LocaleCopy;
  deliverables: { de: string[]; en: string[] };
  description: string;
}> = [
  {
    slug: 'advertising',
    name: 'Nova Advertising',
    urlPath: '/advertising',
    serviceType: { de: 'Performance Ads & Kampagnen', en: 'Performance ads and campaigns' },
    definition: {
      de: 'Performance-Kampagnen für Meta, Google und TikTok – strategisch geplant, kreativ produziert und messbar optimiert.',
      en: 'Performance campaigns for Meta, Google and TikTok – planned strategically, produced creatively and optimized for measurable results.',
    },
    audience: {
      de: 'D2C- und E-Commerce-Brands, die Creatives systematisch testen und skalieren wollen.',
      en: 'D2C and e-commerce brands that want to test creatives systematically and scale.',
    },
    deliverables: {
      de: ['Kampagnen-Strategie & Messaging', 'Ad Creatives (Video/Static) + Variationen', 'Setup & Ausspielung (Meta/Google/TikTok)', 'Testing-Plan, Iteration & Optimierung', 'Reporting + Learnings'],
      en: ['Campaign strategy and messaging', 'Ad creatives (video/static) + variants', 'Setup and distribution (Meta/Google/TikTok)', 'Testing plan, iteration and optimization', 'Reporting and learnings'],
    },
    description: servicePages.advertising.description,
  },
  {
    slug: 'cast',
    name: 'Nova Cast',
    urlPath: '/cast',
    serviceType: { de: 'UGC & AI Ad Production', en: 'UGC and AI ad production' },
    definition: {
      de: 'UGC- und AI-Content für D2C-Brands mit hohem Variationspotenzial und schnellem Test-Workflow.',
      en: 'UGC and AI content for D2C brands with high variation potential and a fast testing workflow.',
    },
    audience: {
      de: 'Brands, die mehr performante Video-Assets für Meta, TikTok und Instagram benötigen.',
      en: 'Brands that need more high-performing video assets for Meta, TikTok and Instagram.',
    },
    deliverables: {
      de: ['Creator-Content (UGC) inkl. Briefing & Skript', 'Dreh/Produktion (On-Set oder Remote)', 'Schnitt, Untertitel, Sound', 'Hook-Varianten & Format-Adaptionen', 'AI-gestützte Post-Production (Variationen/Batch-Exports)'],
      en: ['Creator content (UGC) with briefing and script', 'Production (on-set or remote)', 'Editing, captions, sound', 'Hook variants and format adaptations', 'AI-assisted post-production (variants/batch exports)'],
    },
    description: servicePages.cast.description,
  },
  {
    slug: 'web',
    name: 'Nova Web',
    urlPath: '/web',
    serviceType: { de: 'Webdesign & Conversion-Architektur', en: 'Web design and conversion architecture' },
    definition: {
      de: 'Websites, Shops und Landing Pages mit klarer Conversion-Architektur und schneller Umsetzung.',
      en: 'Websites, shops and landing pages with clear conversion architecture and fast implementation.',
    },
    audience: {
      de: 'KMU und Brands, die schneller sichtbar sein und mehr qualifizierte Anfragen oder Käufe erzielen wollen.',
      en: 'SMBs and brands that want to become visible faster and generate more qualified inquiries or purchases.',
    },
    deliverables: {
      de: ['Informationsarchitektur & Wireframes', 'Designsystem (Typografie, Komponenten)', 'Umsetzung (Webflow/Shopify/WordPress/Next.js je nach Setup)', 'SEO-Basics (Struktur, Meta, Performance)', 'Launch & Übergabe (Dokumentation/Training optional)'],
      en: ['Information architecture and wireframes', 'Design system (typography, components)', 'Implementation (Webflow/Shopify/WordPress/Next.js depending on setup)', 'SEO fundamentals (structure, meta, performance)', 'Launch and handoff (documentation/training optional)'],
    },
    description: servicePages.web.description,
  },
  {
    slug: 'aura',
    name: 'Nova Aura',
    urlPath: '/aura',
    serviceType: { de: 'Branding & Markenidentität', en: 'Branding and brand identity' },
    definition: {
      de: 'Markenidentität mit klarer Positionierung, Formensprache und konsistentem Brand-System.',
      en: 'Brand identity with a clear positioning, visual language and consistent brand system.',
    },
    audience: {
      de: 'Brands, die ein klares Profil, Wiedererkennbarkeit und ein konsistentes Brand-System brauchen.',
      en: 'Brands that need clarity, recognition and a consistent identity system.',
    },
    deliverables: {
      de: ['Positionierung & Messaging-Framework', 'Logo-System + Anwendungen', 'Typografie- und Farb-System', 'Brand Voice (Ton & Beispiele)', 'Guidelines (PDF) + Templates'],
      en: ['Positioning and messaging framework', 'Logo system and applications', 'Typography and color system', 'Brand voice (tone and examples)', 'Guidelines (PDF) and templates'],
    },
    description: servicePages.aura.description,
  },
  {
    slug: 'production',
    name: 'Nova Production',
    urlPath: '/production',
    serviceType: { de: 'AI-Content & Produktproduktion', en: 'AI content and product production' },
    definition: {
      de: 'Produkt- und Content-Production mit KI für schnellere Varianten, mehr Output und skalierbaren Premium-Content.',
      en: 'Product and content production with AI for faster variants, more output and scalable premium content.',
    },
    audience: {
      de: 'Brands mit Bedarf an hochwertigen Visuals, die in mehreren Formaten und Kanälen schnell ausspielbar sein müssen.',
      en: 'Brands that need high-quality visuals that can be shipped fast across formats and channels.',
    },
    deliverables: {
      de: ['Produktshooting / Set-Setup', 'KI-generierte Visuals & Environments', 'Video- und Bild-Varianten (Batch)', 'Format-Adaptionen (Short/Long, Social, Ads)', 'Asset-Bibliothek + Übergabe'],
      en: ['Product shooting and setup', 'AI-generated visuals and environments', 'Batch variants for video and images', 'Format adaptations (short/long, social, ads)', 'Asset library and handoff'],
    },
    description: servicePages.production.description,
  },
];

export const serviceSlugs = Object.keys(servicePages) as Array<keyof typeof servicePages>;

export function getPageContent(slug: string): PageContent | undefined {
  return servicePages[slug];
}