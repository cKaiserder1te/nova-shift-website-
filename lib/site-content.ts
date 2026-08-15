import type { CaseStudy, FaqItem, FunnelStep, LocaleCopy, PageContent, ServiceCard, StatItem, Testimonial } from '@/lib/types';

export const siteMeta = {
  title: 'Nova Shift – Full-Service Creative Agency für Werbung, UGC, Web & Branding',
  description:
    'Nova Shift ist eine Full-Service Creative Agency (DE/EN) für D2C- und E-Commerce-Brands. Leistungen: Performance Ads & Kampagnen, UGC & AI Content, Webdesign, Branding und AI-Produktion aus einer Hand.',
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
    de: 'Nova Shift vereint datengetriebene Ad-Kampagnen, authentischen Creator-Content (UGC), hochkonvertierendes Webdesign, strategisches Branding und effiziente KI-Produktion zu einem einzigen, synergistischen System. Perfekt für D2C und E-Commerce.',
    en: 'We turn brand ambition into visibility, user-generated content, and conversion across every digital channel, powered by smart design and AI automation.',
  },
  servicePills: ['Nova Advertising', 'Nova Cast', 'Nova Web', 'Nova Aura', 'Nova Production'],
};

export const homeCards: ServiceCard[] = [
  {
    tag: '01',
    title: { de: 'Nova Advertising', en: 'Nova Advertising' },
    body: {
      de: 'Performancegetriebene Kampagnen für Meta, Google und TikTok. Kreative Exzellenz trifft datenbasierte Optimierung.',
      en: 'Performance-driven campaigns for Meta, Google and TikTok. Creative excellence meets data-based optimization.',
    },
  },
  {
    tag: '02',
    title: { de: 'Nova Cast', en: 'Nova Cast' },
    body: {
      de: 'UGC und KI-generierter Ad-Content für D2C-Brands und ambitionierte Marken. Das Herzstück von Nova Shift.',
      en: 'UGC and AI-generated ad content for D2C brands. The creative engine of Nova Shift.',
    },
  },
  {
    tag: '03',
    title: { de: 'Nova Web', en: 'Nova Web' },
    body: {
      de: 'Hochkonvertierende Websites, Shops und Landing Pages für KMUs und Brands. DSGVO-konform, mobil-optimiert, live in 7–14 Tagen.',
      en: 'High-converting websites, shops and landing pages. GDPR-compliant, mobile-first, live in 7–14 days.',
    },
  },
  {
    tag: '04',
    title: { de: 'Nova Aura', en: 'Nova Aura' },
    body: {
      de: 'Markenidentitäten, die in Erinnerung bleiben. Von der Positionierung über Logo und Typografie bis zum vollständigen Brand-System.',
      en: 'Brand identities that endure. From positioning and logo to a complete brand system.',
    },
  },
  {
    tag: '05',
    title: { de: 'Nova Production', en: 'Nova Production' },
    body: {
      de: 'KI-gestützte Content-Produktion und Produkt-Shootings. Studioqualität, deutlich schnellere Lieferung, mehr Variationen.',
      en: 'AI-assisted content production and product shootings. Studio quality, faster delivery, more variations.',
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
        de: 'Gute Zusammenarbeit beginnt mit Vertrauen und endet mit messbaren Ergebnissen. Wir verbinden Haltung, Strategie und Umsetzung zu einem System.',
        en: 'Great collaboration starts with trust and ends with measurable results. We combine attitude, strategy and execution into one system.',
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
      'Nova Advertising konzipiert und schaltet Werbekampagnen für Meta, Google und TikTok. Kreative Exzellenz trifft datengetriebene Optimierung.',
    heroLabel: '01 / Nova Advertising',
    heroTitle: { de: 'Werbung, die\nbewegt.', en: 'Advertising that\nmoves.' },
    heroTagline: {
      de: 'Kampagnen, die Marken sichtbar machen und Umsätze treiben.',
      en: 'Attention-driven advertising built for measurable performance.',
    },
    intro: {
      label: 'Was wir machen',
      title: { de: 'Kampagnen mit Wirkung', en: 'Campaigns with impact' },
      body: {
        de: 'Wir übernehmen Konzeption, Produktion und Distribution eurer Kampagnen — von der Strategie bis zur Ausspielung auf allen relevanten Kanälen.',
        en: 'We handle concept, production and distribution from strategy to live across all relevant channels.',
      },
    },
    cards: [
      {
        tag: 'Unsere Stärken',
        title: { de: 'Kreativ & datengetrieben', en: 'Creative and data-led' },
        body: {
          de: 'Jede Kampagne verbindet kreative Exzellenz mit messbaren Daten. Wir testen, optimieren und skalieren kontinuierlich.',
          en: 'Every campaign combines creative excellence with measurable data. We test, optimize and scale continuously.',
        },
      },
      {
        tag: 'Warum Nova Advertising',
        title: { de: 'Full-Service aus einer Hand', en: 'Full service under one roof' },
        body: {
          de: 'Strategie, Creatives, Setup, Optimierung und Reporting kommen aus einem System.',
          en: 'Strategy, creatives, setup, optimization and reporting come from one system.',
        },
      },
      {
        tag: 'Kanal-Stack',
        title: { de: 'Multi-Channel', en: 'Multi-channel' },
        body: {
          de: 'Meta, Google, TikTok, YouTube und LinkedIn mit nativem Setup.',
          en: 'Meta, Google, TikTok, YouTube and LinkedIn with native execution.',
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
      'Nova Cast produziert authentischen UGC-Content und AI-generierte Ad-Creatives für D2C-Brands. 1 Shooting liefert viele Assets für Meta, TikTok und Instagram.',
    heroLabel: '02 / Nova Cast',
    heroTitle: { de: 'Content der\nkonvertiert.', en: 'Content that\nconverts.' },
    heroTagline: {
      de: 'UGC-Content und KI-generierte Ad-Creatives für D2C-Brands.',
      en: 'Creator-first content production powered by AI.',
    },
    intro: {
      label: 'Was ist Nova Cast?',
      title: { de: 'Das Content-Betriebssystem', en: 'The content operating system' },
      body: {
        de: 'Nova Cast ist die UGC- und AI-Content-Abteilung von Nova Shift. Ein Shooting liefert über unsere AI-gestützte Nachproduktion bis zu 50 fertige Ad-Assets.',
        en: 'Nova Cast is the UGC and AI content division of Nova Shift. One shoot can deliver up to 50 ad assets through our AI-powered post-production.',
      },
    },
    cards: [
      {
        tag: 'Was wir machen',
        title: { de: 'UGC & AI Content', en: 'UGC and AI content' },
        body: {
          de: 'Authentische Creator-Videos und KI-generierte Ad-Creatives in einem integrierten System.',
          en: 'Authentic creator videos and AI-generated ad creatives in one integrated system.',
        },
      },
      {
        tag: 'Unser Ansatz',
        title: { de: '1 Shoot → 50 Assets', en: '1 shoot → 50 assets' },
        body: {
          de: 'Hooks, Hintergründe, Musik, Untertitel-Stile und Formate entstehen in der Post-Production.',
          en: 'Hooks, backgrounds, music, subtitle styles and formats are created in post-production.',
        },
      },
      {
        tag: 'Warum Nova Cast',
        title: { de: 'Authentizität trifft Technologie', en: 'Authenticity meets technology' },
        body: {
          de: 'Die KI skaliert den Content, ersetzt aber nicht die Creator-Attitüde.',
          en: 'AI scales the content, but does not replace creator authenticity.',
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
      'Nova Web erstellt hochkonvertierende Websites, Shops und Landing Pages. Webflow, Shopify, WordPress – mobil-optimiert, SEO-ready und DSGVO-konform.',
    heroLabel: '03 / Nova Web Solutions',
    heroTitle: { de: 'Digitale Präsenz,\nneu definiert.', en: 'Digital presence,\nredefined.' },
    heroTagline: {
      de: 'Websites, Shops und Landing Pages mit klarer Conversion-Architektur.',
      en: 'Experience-led web design built for performance and growth.',
    },
    intro: {
      label: 'Was wir machen',
      title: { de: 'Websites die wirken', en: 'Websites that work' },
      body: {
        de: 'Strategie, Design und Umsetzung aus einer Hand. Von der Landing Page bis zum vollständigen E-Commerce-Shop.',
        en: 'Strategy, design and execution under one roof. From landing pages to full e-commerce shops.',
      },
    },
    cards: [
      {
        tag: 'Unsere Ziele',
        title: { de: 'Conversion über Ästhetik', en: 'Conversion over decoration' },
        body: {
          de: 'Schön ist Pflicht. Funktionieren ist das Ziel.',
          en: 'Beauty is mandatory. Function is the goal.',
        },
      },
      {
        tag: 'Warum Nova Web',
        title: { de: 'Alles aus einer Hand', en: 'Everything in one system' },
        body: {
          de: 'Design, Entwicklung, Texte, Bilder und Hosting kommen von uns.',
          en: 'Design, development, copy, imagery and hosting come from us.',
        },
      },
      {
        tag: 'Geschwindigkeit',
        title: { de: 'Live in 7 Tagen', en: 'Live in 7 days' },
        body: {
          de: 'Nova Landing ist in einer Woche live.',
          en: 'Nova Landing is live in one week.',
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
      'Nova Aura entwickelt starke Markenidentitäten: Logo, Typografie, Farbsystem, Positionierung und Markenstimme. Für Brands, die in Erinnerung bleiben wollen.',
    heroLabel: '04 / Nova Aura',
    heroTitle: { de: 'Deine Marke.\nUnvergesslich.', en: 'Your brand.\nUnforgettable.' },
    heroTagline: {
      de: 'Branding, Positionierung und Markenidentität für Brands mit Ambitionen.',
      en: 'Brand strategy and identity systems built to endure.',
    },
    intro: {
      label: 'Was wir machen',
      title: { de: 'Brand Identity', en: 'Brand identity' },
      body: {
        de: 'Wir entwickeln das vollständige visuelle und kommunikative Erscheinungsbild eurer Marke.',
        en: 'We develop the full visual and verbal expression of your brand.',
      },
    },
    cards: [
      {
        tag: 'Unser Ansatz',
        title: { de: 'Strategie vor Ästhetik', en: 'Strategy before aesthetics' },
        body: {
          de: 'Ein Logo ohne Haltung ist ein Bild. Die visuelle Identität folgt der Positionierung.',
          en: 'A logo without a point of view is just a picture. Visual identity follows positioning.',
        },
      },
      {
        tag: 'Warum Nova Aura',
        title: { de: 'Design mit Haltung', en: 'Design with conviction' },
        body: {
          de: 'Keine Trends, keine generischen Systeme — ein Auftritt, der wirklich zu euch gehört.',
          en: 'No trends, no generic systems — a presence that truly belongs to you.',
        },
      },
      {
        tag: 'Lieferumfang',
        title: { de: 'Das vollständige Marken-System', en: 'The complete brand system' },
        body: {
          de: 'Positionierung, Logo-System, Typografie, Farbwelt, Brand Voice und Guidelines.',
          en: 'Positioning, logo system, typography, color world, brand voice and guidelines.',
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
      'Nova Production kombiniert KI-generierte Visuals mit professionellen Produkt-Shootings. Studioqualität, schnellere Lieferung und mehr Variationen.',
    heroLabel: '05 / Nova Production',
    heroTitle: { de: 'Content der\nnächsten Generation.', en: 'Content of\nthe next generation.' },
    heroTagline: {
      de: 'KI-gestützte Produktionsverfahren für visuellen Premium-Content.',
      en: 'Production accelerated by AI without compromising quality.',
    },
    intro: {
      label: 'Was wir machen',
      title: { de: 'KI trifft Realität', en: 'AI meets reality' },
      body: {
        de: 'Produktvisuals, virtuelle Sets und AI-generierte Environments. Wir verbinden Shooting und KI zu einem System, das aus einem Setup mehr macht.',
        en: 'Product visuals, virtual sets and AI-generated environments. We combine shooting and AI into a system that gets more from one setup.',
      },
    },
    cards: [
      {
        tag: 'Unser Ansatz',
        title: { de: 'Vom Setup zur Asset-Bibliothek', en: 'From setup to asset library' },
        body: {
          de: 'Ein Drehtag wird zum Ausgangspunkt für viele Formate, Perspektiven und Nutzungen.',
          en: 'One shoot day becomes the starting point for many formats, perspectives and uses.',
        },
      },
      {
        tag: 'Warum Nova Production',
        title: { de: 'Studioqualität, smart', en: 'Studio quality, smarter' },
        body: {
          de: 'KI-Remixing, automatische Formatanpassung und Batch-Export arbeiten zusammen.',
          en: 'AI remixing, automatic format adaptation and batch export work together.',
        },
      },
      {
        tag: 'Tools',
        title: { de: 'Die Tools hinter unserem Prozess', en: 'The tools behind our process' },
        body: {
          de: 'HeyGen, Runway, Descript, ElevenLabs, Whisper, Midjourney und Flux.',
          en: 'HeyGen, Runway, Descript, ElevenLabs, Whisper, Midjourney and Flux.',
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
      de: 'Nova Advertising ist der Performance-Advertising-Service von Nova Shift: Kampagnenstrategie, Creative-Produktion und Distribution auf Meta, Google und TikTok.',
      en: 'Nova Advertising is Nova Shift’s performance advertising service: campaign strategy, creative production and distribution across Meta, Google and TikTok.',
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
      de: 'Nova Cast ist die UGC- und AI-Content-Unit von Nova Shift. Ein Setup liefert mehrere Creator-Assets inklusive KI-gestützter Post-Production und Varianten.',
      en: 'Nova Cast is Nova Shift’s UGC and AI content unit. One setup yields multiple creator assets with AI-assisted post-production and variants.',
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
      de: 'Nova Web ist der Webdesign- und Development-Service von Nova Shift: Websites, Shops und Landing Pages mit klarer Struktur, SEO-Basics und Conversion-Fokus.',
      en: 'Nova Web is Nova Shift’s web design and development service: websites, shops and landing pages with clear structure, SEO fundamentals and conversion focus.',
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
      de: 'Nova Aura entwickelt Markenidentitäten: Positionierung, Brand Voice, visuelles System (Logo, Typografie, Farben) und Guidelines.',
      en: 'Nova Aura builds brand identities: positioning, brand voice, visual system (logo, typography, colors) and guidelines.',
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
      de: 'Nova Production kombiniert Produkt-Shootings mit KI-Workflows für schnellere Varianten, virtuelle Sets und skalierbaren Premium-Content.',
      en: 'Nova Production combines product shoots with AI workflows for faster variants, virtual sets and scalable premium content.',
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