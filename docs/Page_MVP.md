# NOVA SHIFT — MVP WEBSITE BLUEPRINT v1.0
## Vollständige Inhaltsdatei für Vibecoding & Website-Perfektion

> **Zweck dieser Datei:** Komplette Content-Grundlage für den Website-Rebuild von nova-shift.website.
> Alle Texte, SEO-Metadaten, Seitenstrukturen, Service-Beschreibungen und Komponenten-Inhalte
> sind hier vollständig ausgearbeitet. Beim Vibecoding direkt referenzieren.

---

## 1. MARKENARCHITEKTUR & POSITIONIERUNG

### Hierarchie

```
NOVA SHIFT                          ← Dachmarke / Full-Service Creative Agency
├── Nova Advertising                ← 01 Performance-Kampagnen & Paid Media
├── Nova Cast                       ← 02 UGC / AI Content Production (Sub-Brand)
│   ├── UGC Production
│   ├── AI-Enhanced Ads
│   ├── Performance Ad Management
│   └── Creator Network
├── Nova Web                        ← 03 Webdesign & digitale Infrastruktur
├── Nova Aura                       ← 04 Branding & Markenidentität
└── Nova Production                 ← 05 AI-Content & Foto/Video-Produktion
```

### Positionierungsstatement (intern, für alle Texte als Grundlage)

Nova Shift ist eine Full-Service Creative Agency die Brands durch die Kombination aus
kreativer Exzellenz, datengetriebener Performance und generativer KI von unsichtbar zu
unübersehbar macht. Wir sind keine klassische Agentur — wir sind das vollständige
digitale Betriebssystem für ambitionierte Marken.

**Tagline:** We Shift the Way Brands Are Seen.
**Sub-Tagline DE:** Von Strategie bis Conversion — alles aus einer Hand.
**Sub-Tagline EN:** Strategy to scale. Creative to convert.

### Tone of Voice

- Selbstbewusst ohne arrogant zu sein
- Präzise und direkt — keine Agentur-Worthülsen
- Zweisprachig (DE/EN) — immer in dieser Reihenfolge
- Statements klingen wie Überzeugungen, nicht wie Versprechen
- Zahlen und Ergebnisse werden konkret benannt, nie vage

---

## 2. DESIGN-SYSTEM (bestehend, beibehalten)

### Farben
```css
--gold:        #c9a84c   /* Primary Accent — CTAs, Headlines em, Icons */
--gold-light:  #e8cc80   /* Hover States */
--gold-dim:    #a08442   /* Labels, Mono-Text, Borders aktiv */
--bg:          #080808   /* Body Background */
--bg2:         #0f0f0f   /* Cards, Service-Sections */
--bg3:         #141414   /* Hover-Zustand Cards */
--surface:     #1a1a1a   /* USP-Items, Form-Rows */
--border:      rgba(201,168,76,0.18)   /* Alle Trennlinien */
--border-bright: rgba(201,168,76,0.5) /* Hover-Borders */
--text:        #f0ede4   /* Body Text */
--text-muted:  #b0aa9a   /* Sekundär-Text */
--text-dim:    #7d7870   /* Meta, Labels, Footer */
```

### Typografie
```
--font-display: 'Cormorant Garamond', serif     → Headlines, Service-Titel, H1/H2
--font-ui:      'Rajdhani', sans-serif           → Body Text, CTAs, Navigation
--font-mono:    'Space Mono', monospace          → Labels, Nummern, Tags, Preise
```

### Schlüssel-Komponenten
- **service-tag**: Mono / 0.75rem / letter-spacing 0.25em / gold-dim / uppercase + 30px Linie
- **service-title**: Cormorant Garamond / clamp(2.5rem, 6vw, 5.5rem) / weight 300 / em = gold
- **info-card**: bg2 + linker 2px gold-Border on hover / card-number in mono/gold-dim
- **btn-primary**: gold-BG / polygon clip-path (10px corner cut) / uppercase / letter-spacing 0.2em
- **btn-outline**: transparent / border var(--border) / hover: gold text + gold border
- **stat-bar**: 4-col grid / Cormorant Garamond stat-number / Space Mono stat-label
- **usp-section**: bg2 / 2-col grid (1fr 2fr) / usp-list 2×2 grid
- **service-hero**: min-height 55vh / gold-grid-bg / gradient overlay to --bg bottom

---

## 3. SEO-METADATEN (vollständig, pro Seite)

### Home / Nova Shift (Hauptseite)
```html
<title>Nova Shift – Full-Service Creative Agency für Werbung, UGC, Web & Branding</title>
<meta name="description" content="Nova Shift ist die Full-Service Creative Agency für ambitionierte Brands. Wir liefern Kampagnen, UGC-Content, Webdesign, Branding und AI-Produktion aus einer Hand. Sichtbar werden. Konvertieren. Wachsen.">
<meta name="keywords" content="Creative Agency Deutschland, UGC Agentur, Webdesign Agentur, Branding Agentur, AI Content Agentur, Social Media Ads, Meta Ads Agentur, Performance Marketing, Nova Shift">
<link rel="canonical" href="https://nova-shift.website/">
<meta property="og:title" content="Nova Shift – Creative Agency für Brands die auffallen">
<meta property="og:description" content="Von Kampagnen über UGC bis zu Webdesign und AI-Produktion. Nova Shift ist euer vollständiges digitales Wachstumssystem.">
```

### Nova Cast (Sub-Brand)
```html
<title>Nova Cast – UGC Agentur & AI Ad Production | Nova Shift</title>
<meta name="description" content="Nova Cast produziert authentischen UGC-Content und AI-generierte Ad-Creatives für D2C-Brands. 1 Shooting → 50 Variationen. Creator-Netzwerk + AI-Pipeline für maximale Performance auf Meta, TikTok und Instagram.">
<meta name="keywords" content="UGC Agentur Deutschland, UGC Content, AI Ads, Meta Ads Creative, TikTok UGC, Creator Content, Ad Creatives, Performance Content, Nova Cast, UGC Produktion">
```

### Nova Web
```html
<title>Nova Web – Webdesign Agentur für KMU & Brands | Nova Shift</title>
<meta name="description" content="Nova Web erstellt hochkonvertierende Websites, Online-Shops und Landing Pages für KMUs und Brands. Webflow, Shopify, WordPress – DSGVO-konform, mobil-optimiert, SEO-ready. In 7–14 Tagen live.">
<meta name="keywords" content="Webdesign Agentur, Website erstellen lassen, Webflow Agentur, Shopify Shop erstellen, Landing Page Agentur, KMU Website, DSGVO Website">
```

### Nova Advertising
```html
<title>Nova Advertising – Kampagnen & Performance Ads | Nova Shift</title>
<meta name="description" content="Nova Advertising konzipiert und schaltet Werbekampagnen für Meta, Google und TikTok. Kreative Exzellenz trifft datengetriebene Optimierung. ROAS-fokussiert. Full-Funnel.">
```

### Nova Aura
```html
<title>Nova Aura – Branding & Markenidentität für Brands | Nova Shift</title>
<meta name="description" content="Nova Aura entwickelt starke Markenidentitäten: Logo, Typografie, Farbsystem, Positionierung und Markenstimme. Für Brands die in Erinnerung bleiben wollen.">
```

### Nova Production
```html
<title>Nova Production – AI-Content & Produktshooting | Nova Shift</title>
<meta name="description" content="Nova Production kombiniert KI-generierte Visuals mit professionellen Produkt-Shootings. Studioqualität, schnellere Lieferung, mehr Variationen. Produktfotos, virtuelle Sets, AI-Assets.">
```

### Schema.org JSON-LD (erweitert)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nova Shift",
  "url": "https://nova-shift.website/",
  "logo": "https://raw.githubusercontent.com/pietluke/Bilder-und-Videos/main/Nova_Shift_Logo__2_-removebg-preview.png",
  "description": "Full-Service Creative Agency für Werbung, UGC-Content, Webdesign, Branding und AI-Produktion.",
  "foundingDate": "2025",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "hello@nova-shift.website",
    "contactType": "Customer Service",
    "availableLanguage": ["German", "English"]
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Nova Shift Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Nova Advertising", "description": "Kampagnen und Performance Ads für Meta, Google, TikTok" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Nova Cast", "description": "UGC Content und AI-generierte Ad-Creatives" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Nova Web", "description": "Webdesign, Shops und digitale Infrastruktur" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Nova Aura", "description": "Branding und Markenidentität" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Nova Production", "description": "AI-Content und Produktshooting" }}
    ]
  }
}
```

---

## 4. SEITENINHALT — HOME (section-home)

### Hero-Bereich

**hero-label:** `Creative Agency – Est. 2025`

**hero-title:**
```
We Shift
the Way Brands
Are Seen
```
*(„Shift" in --gold italic)*

**hero-subtitle:**
```
Full-Service Creative Agency für Brands, die mehr wollen
```

**hero-meta:**
```
DE: Nova Shift vereint Kampagnen, Creator-Content, Webdesign, Branding und
KI-Produktion zu einem einzigen, strategisch gedachten System.
EN: We turn brand ambition into visibility, content, and conversion —
across every channel, at any scale.
```

**hero-services (Pills):**
```
Nova Advertising  |  Nova Cast  |  Nova Web  |  Nova Aura  |  Nova Production
```

**CTA Buttons:**
- Primary: `Projekt starten →`
- Outline: `Services ansehen`

**Scroll-Indicator:** `Scroll`

---

### Services-Übersicht (home-services)

**section-heading-label:** `Was wir bieten`

**h2:**
```
Fünf Disziplinen.
Eine Vision.
```
*(„Disziplinen" kursiv gold)*

**intro-text:**
```
DE: Von der ersten Idee bis zum skalierten Ergebnis — Nova Shift ist das
vollständige Wachstumssystem für Marken mit Anspruch. Fünf spezialisierte
Bereiche. Eine integrierte Strategie. Messbare Ergebnisse.
EN: From first idea to scaled result — five disciplines, one unified
creative system built for brands that refuse to be overlooked.
```

**Service Cards:**

| # | Name | DE-Beschreibung | EN-Beschreibung |
|---|------|-----------------|-----------------|
| 01 | Nova Advertising | Performancegetriebene Kampagnen für Meta, Google und TikTok. Kreative Exzellenz trifft datenbasierte Optimierung — für Marken die messbar wachsen wollen. | Performance-driven campaigns for Meta, Google and TikTok. Creative excellence meets data-based optimization — for brands that want measurable growth. |
| 02 | Nova Cast | UGC und KI-generierter Ad-Content für D2C-Brands und ambitionierte Marken — authentisch, skalierbar, plattformoptimiert. Das Herzstück von Nova Shift. | UGC and AI-generated ad content for D2C brands — authentic, scalable, platform-optimized. The creative engine of Nova Shift. |
| 03 | Nova Web | Hochkonvertierende Websites, Shops und Landing Pages für KMUs und Brands. DSGVO-konform, mobil-optimiert, live in 7–14 Tagen. | High-converting websites, shops and landing pages. GDPR-compliant, mobile-first, live in 7–14 days. |
| 04 | Nova Aura | Markenidentitäten die in Erinnerung bleiben. Von der Positionierung über Logo und Typografie bis zum vollständigen Brand-System. | Brand identities that endure. From positioning and logo to a complete brand system. |
| 05 | Nova Production | KI-gestützte Content-Produktion und Produkt-Shootings. Studioqualität, deutlich schnellere Lieferung, mehr Variationen. | AI-assisted content production and product shootings. Studio quality, faster delivery, more variations. |

**Stat-Bar:**
```
50+          ∞              2                100%
Projekte     Möglichkeiten  Ansprechpartner  Leidenschaft
```

**Contact-Block im Home:**
```
h2: Bereit für den nächsten Shift?
p DE: Lass uns herausfinden wie wir deine Marke unübersehbar machen.
p EN: Tell us where you want to go — we build the path.
CTA: Jetzt Kontakt aufnehmen
```

---

## 5. SEITENINHALT — NOVA ADVERTISING (section-advertising)

### Service-Hero
```
service-tag: 01 / Nova Advertising
h1: Werbung, die bewegt.
tagline DE: Kampagnen die Marken sichtbar machen und Umsätze treiben.
tagline EN: Attention-driven advertising built for measurable performance.
```

### Three-Col Cards
```
Card 1:
  label: Was wir machen
  title: Kampagnen mit Wirkung
  text DE: Wir übernehmen Konzeption, Produktion und Distribution eurer
  Kampagnen — von der Strategie bis zur Ausspielung auf allen relevanten
  Kanälen. Meta, Google, TikTok, YouTube und LinkedIn aus einer Hand.
  text EN: We handle concept, production and distribution of your campaigns
  — from strategy to live across all relevant channels.

Card 2:
  label: Unsere Stärken
  title: Kreativ & datengetrieben
  text DE: Jede Kampagne wird kreativer Exzellenz und messbare Daten
  kombiniert. Wir testen, optimieren und skalieren — kontinuierlich und
  transparent.
  text EN: Every campaign combines creative excellence with measurable
  data. We test, optimize and scale — continuously and transparently.

Card 3:
  label: Warum Nova Advertising
  title: Full-Service aus einer Hand
  text DE: Ihr bekommt keinen Teilservice — ihr bekommt ein vollständiges
  Kampagnen-System: Strategie, Creatives, Setup, Optimierung, Reporting.
  Kein Hin und Her zwischen Agenturen.
  text EN: You don't get a partial service — you get a complete campaign
  system: strategy, creatives, setup, optimization, reporting.
```

### Image-Feature
```
heading: Case Focus
title DE: Multi-Channel Launch-Kampagne für ein Lifestyle-Brand.
title EN: A bold launch campaign that drove product demand across channels.
caption h3 DE: Film, Social Media, Performance Ads — koordiniert.
caption p DE: Von der Idee bis zur ersten Conversion in 14 Tagen.
```

### USP-Section
```
label: Unsere Stärken
heading: Warum Brands uns wählen

USP 01: Full-Service Produktion
text DE: Konzept bis Ausspielung aus einer Hand. Kein Koordinationsaufwand
für euch.

USP 02: Plattform-Expertise
text DE: IG, TikTok, Google, YouTube, LinkedIn. Jeder Kanal mit
nativer Strategie.

USP 03: Schnelle Lieferung
text DE: Erste Creatives in 7 Tagen. Live-Kampagne in 14 Tagen.
Tempo ohne Qualitätsverlust.

USP 04: ROI-Fokus
text DE: Jede Entscheidung folgt einem Ziel: mehr Return für euer
Ad-Budget. Wir denken in ROAS, nicht in Klicks.
```

### Pricing-Sektion (NEU — ergänzen)
```
label: Investment
heading: Transparente Preise. Klare Ergebnisse.

Starter:    ab €750/Mo    — Setup + wöchentliche Optimierung + Report
Growth:     ab €1.500/Mo  — tägliche Optimierung + Creative-Rotation
Performance: ab €2.500/Mo — Full-Funnel + dedizierter Account + Calls

Hinweis: Alle Pakete zzgl. Ad Spend. Ab €2.000 Ad Spend/Mo gilt
zusätzlich eine Performance-Fee von 10–15% of Spend.
```

---

## 6. SEITENINHALT — NOVA CAST (section-cast) ⭐ KERNBEREICH

> **Wichtig:** Nova Cast ist der am stärksten auszubauende Bereich.
> Er enthält das vollständige Business-Modell mit UGC, AI-Produktion
> und Ad-Management. Die Seite braucht deutlich mehr Tiefe.

### Service-Hero
```
service-tag: 02 / Nova Cast
h1: Content der konvertiert.
     — und nicht aufhört zu skalieren.
em (gold italic): konvertiert

tagline DE: UGC-Content und KI-generierte Ad-Creatives für D2C-Brands.
           Authentisch. Skalierbar. Performance-ready.
tagline EN: Creator-first content production powered by AI.
           One shoot. Fifty assets. Unlimited scale.
```

### Sub-Brand Einführung (NEU — eigene Sektion)
```
section-heading-label: Was ist Nova Cast?

h2: Das Content-Betriebssystem
    für performante Marken.

text DE:
Nova Cast ist die UGC- und AI-Content-Abteilung von Nova Shift. Während
andere Agenturen Content produzieren, bauen wir systematische
Produktions-Pipelines: Ein einziges Shooting liefert durch unsere
AI-gestützte Nachproduktion bis zu 50 fertige Ad-Assets — optimiert für
Meta, TikTok und Instagram. Wir verbinden echte Creator-Authentizität
mit der Skalierbarkeit generativer KI.

text EN:
Nova Cast is the UGC and AI content division of Nova Shift. While other
agencies produce content, we build systematic production pipelines: one
shoot delivers up to 50 finished ad assets through our AI-powered
post-production — optimized for Meta, TikTok and Instagram.
```

### Three-Col Cards
```
Card 1:
  label: Was wir machen
  title: UGC & AI Content
  text DE: Wir produzieren authentische Creator-Videos und KI-generierte
  Ad-Creatives in einem integrierten System. Creator-Netzwerk, AI-Pipeline,
  Hook-Testing, Creative-Rotation — alles koordiniert. Lieferung in 7–10 Tagen.

Card 2:
  label: Unser Ansatz
  title: 1 Shoot → 50 Assets
  text DE: Was eine klassische Agentur als ein Video liefert, ist bei uns
  der Ausgangspunkt für 25–50 fertige Variationen: Verschiedene Hooks,
  Hintergründe, Musik, Untertitel-Stile und Formate — vollautomatisch
  durch KI-Postproduktion.

Card 3:
  label: Warum Nova Cast
  title: Authentizität trifft Technologie
  text DE: UGC wirkt nur wenn er echt klingt. Unsere Creator werden
  so gebrieft, dass Markenaussage und persönliche Authentizität
  zusammenkommen. Die KI skaliert das — nicht ersetzt es.
```

### Produktlinien (NEU — eigene Grid-Sektion mit 4 Cards)
```
section-heading-label: Unsere Produktlinien
h2: Vier Wege zu
    besseren Creatives.

[Produkt 1] Pure UGC
  tag: 01
  Beschreibung DE: Echte Creator, echter Content. Wir übernehmen Briefing,
  Casting, Koordination und Post-Production. 3–5 hochwertige Videos in
  7–10 Tagen. Für Brands die auf Authentizität als Wettbewerbsvorteil setzen.
  Details: 3–5 Videos | Preis ab €1.200 | 7–10 Tage
  Für: D2C-Brands, E-Commerce, Lifestyle-Produkte

[Produkt 2] AI-Enhanced UGC
  tag: 02
  Beschreibung DE: Ein Shooting wird durch unsere AI-Pipeline zu 25–50
  finalen Ad-Assets. Hook-Variationen, Hintergrund-Remixing, Musik-Testing,
  animierte Captions — alles automatisiert. Das sind eure Creatives für
  den nächsten Monat aus einem einzigen Drehtag.
  Details: 25–50 Assets | Preis ab €2.000 | Lieferung in 10–14 Tagen
  Für: Brands mit laufenden Ad-Kampagnen, A/B-Testing-Fokus

[Produkt 3] Pure AI Ads (Synthetic)
  tag: 03
  Beschreibung DE: Kein Shooting notwendig. KI-Avatare, synthetische
  Stimmen, AI-generierte B-Roll und automatisierte Nachproduktion.
  24/7 skalierbar, ohne Creator-Abhängigkeit. Für Produkte und Services
  die auf Effizienz und Volumen setzen.
  Details: 10–20 AI-Ads | Preis ab €800 | 5–7 Tage
  Marge-Note: ~90% — euer effizientestes Format

[Produkt 4] Content-Repurposing Pipeline
  tag: 04
  Beschreibung DE: Ihr habt bereits Content der gut performed? Wir bauen
  eine automatisierte Pipeline die jedes Video für alle Plattformen
  optimiert: Instagram Reels, TikTok, YouTube Shorts, LinkedIn — inklusive
  plattformspezifischer Captions und Hashtag-Strategie.
  Details: Alle Plattformen | ab €350/Mo | Ongoing Retainer
```

### Ad Management (NEU — Sektion nach Produktlinien)
```
section-heading-label: Nova Cast + Performance
h2: Wir produzieren nicht nur.
    Wir schalten auch.

text DE: Der natürliche nächste Schritt nach dem perfekten Creative ist
die perfekte Kampagne. Nova Cast kann eure Ads direkt managen — wir kennen
jedes Asset das wir produziert haben und wissen wie es am besten performed.
Das ist der Unterschied zwischen einer Content-Agentur und einem echten
Wachstumspartner.

Drei Modelle:
- Starter: bis €2.000 Ad Spend / €750 Flat / Meta oder TikTok
- Growth:  bis €10.000 Ad Spend / €1.200 + 12% of Spend / Multi-Channel
- Scale:   €10.000+ Ad Spend / €2.000 + 10% of Spend / Full-Funnel

Plattformen: Meta (Facebook + Instagram), TikTok Ads, Google Ads
```

### Workflow-Visualisierung (NEU)
```
section-heading-label: So arbeiten wir
h2: Von der Idee zur
    skalierten Kampagne.

Flow-Steps (7 Schritte):
01 Brief       → Onboarding-Fragebogen + Zieldefinition
02 AI-Brief    → KI generiert Hooks, Skript, Zielgruppe, CTAs
03 Produktion  → Creator-Shooting oder AI-Produktion (1 Tag)
04 AI-Edit     → Automatisches Remixing: 25–50 Variationen
05 Review      → Ihr freigt die Assets frei (24h Turnaround)
06 Testing     → A/B-Test live auf eurer Plattform
07 Scale       → Winner-Creative wird skaliert und remixed
```

### USP-Section Nova Cast
```
label: Warum Nova Cast
heading: Der Unterschied den KI macht

USP 01: 1 Shooting → 50 Assets
text: Was früher 5 Drehtage brauchte, liefern wir aus einem.
KI multipliziert jeden Shot in alle relevanten Formate und Variationen.

USP 02: Hook-Testing Engine
text: Wir generieren 10 Hook-Varianten pro Kampagne, testen sie live
und skalieren nur den Winner. Kein Kapital mehr für Creatives die nicht performen.

USP 03: Authentizität by Design
text: Unsere Creator werden so gebrieft, dass Markenbotschaft und
natürlicher Auftritt zusammenpassen. Der Unterschied zwischen
werblich und echt ist in jedem Frame sichtbar.

USP 04: Plug-in Ad Management
text: Vom Content zum laufenden Kampagnen-Management in einer Buchung.
Wir produzieren — und schalten. Kein Koordinationsaufwand zwischen
Kreativ- und Media-Agentur mehr.
```

### Zielgruppen-Sektion (NEU)
```
label: Wer Nova Cast nutzt
h2: Für Brands die wachsen wollen.

Zielgruppe 1: D2C-Brands
  text: Ihr habt ein Produkt das online verkauft wird. Ihr braucht
  kontinuierlich frische Creatives für Meta und TikTok. Nova Cast ist
  eure Content-Abteilung ohne Festanstellungen.

Zielgruppe 2: E-Commerce Shops
  text: Euer ROAS leidet unter Ad Fatigue? Wir liefern monatlich neue
  Creatives aus einer einzigen Produktion. Mehr Variationen,
  weniger Creative Burnout.

Zielgruppe 3: Wachstumsstarke KMUs
  text: Ihr wollt endlich professionell auf Social Media sichtbar werden.
  Nova Cast bringt euch von 0 auf 30 fertige Ads — inklusive
  Kampagnenstrategie und Setup.

Zielgruppe 4: Brands mit laufenden Kampagnen
  text: Eure Ads performen, aber die Creative-Pipeline stockt?
  Nova Cast ist euer skalierbarer Content-Arm der nie ausgeht.
```

### Stat-Bar Nova Cast
```
50+         7 Tage      25–50        90%
Projekte    Lieferzeit  Assets/Shoot Marge AI-Ads
```

### Image-Feature
```
heading: Case Einblick
title DE: AI-Enhanced UGC Kampagne für ein D2C Fashion-Brand.
title EN: Creator content that sold out the collection in 14 days.
caption h3 DE: 1 Shooting. 38 finale Ad-Assets. 2 Wochen live.
caption p DE: ROAS +2.4× vs. vorherige Creative-Strategie.
```

---

## 7. SEITENINHALT — NOVA WEB (section-web)

### Service-Hero
```
service-tag: 03 / Nova Web Solutions
h1: Digitale Präsenz,
    neu definiert.
em: neu definiert

tagline DE: Websites, Shops und Landing Pages mit klarer Conversion-Architektur.
tagline EN: Experience-led web design built for performance and growth.
```

### Three-Col Cards
```
Card 1:
  label: Was wir machen
  title: Websites die wirken
  text DE: Strategie, Design und Umsetzung aus einer Hand. Von der
  einseitigen Landing Page bis zum vollständigen E-Commerce-Shop.
  Webflow, Shopify, WordPress — DSGVO-konform und SEO-ready von Tag 1.

Card 2:
  label: Unsere Ziele
  title: Conversion über Ästhetik
  text DE: Schön ist Pflicht. Funktionieren ist das Ziel. Wir bauen
  Websites die nicht nur gut aussehen sondern Besucher in Kunden
  verwandeln. Jede Sektion, jeder CTA, jede Headline ist auf Wirkung optimiert.

Card 3:
  label: Warum Nova Web
  title: Alles aus einer Hand
  text DE: Design, Entwicklung, Texte (AI-generiert), Bilder und
  Hosting — alles kommt von uns. Kein Koordinationsaufwand,
  klare Verantwortlichkeit, saubere Übergabe.
```

### Produktlinien Nova Web (NEU — 4 Cards)
```
[1] Nova Landing
    Preis: ab €800  |  Lieferzeit: 5–7 Tage
    1 hochkonvertierende Seite. Hero, Problem, Lösung, Social Proof,
    CTA. Für Launch-Kampagnen, neue Produkte, Events.

[2] Nova Web (Vollwebsite)
    Preis: ab €2.500  |  Lieferzeit: 2–3 Wochen
    5–8 Seiten. CMS, Blog, Kontaktformular, Impressum, Cookie-Banner.
    Hosting inklusive im ersten Jahr. AI-Copy + AI-Bildgenerierung.

[3] Nova Shop
    Preis: ab €3.500  |  Lieferzeit: 2–4 Wochen
    Shopify oder WooCommerce. Produkt-Setup, Checkout, Upsell-Flows,
    Pixel-Integration. Ideal als Bundle mit Nova Cast Ads.

[4] Nova Maintain
    Preis: ab €200/Mo
    Monatliche Pflege: Updates, neue Sektionen, A/B-Tests,
    Speed-Optimierung, SEO-Monitoring. Die Website die nie altert.
```

### USP-Section
```
label: Unsere Stärken
heading: Websites die für euch arbeiten

USP 01: AI-gestützter Aufbau
text: Claude AI schreibt alle Website-Texte aus eurem Onboarding-Fragebogen.
Kein langer Briefing-Prozess — wir fragen einmal, ihr bekommt fertige Texte.

USP 02: Conversion-Architektur
text: Jede Seite folgt bewährten Conversion-Prinzipien: klare Hierarchie,
starker Above-the-Fold, Social Proof, reduktive CTAs.

USP 03: DSGVO aus der Box
text: Cookie-Banner, Datenschutzerklärung, Impressum — alles inklusive.
Ihr startet rechtskonform, kein juristisches Nacharbeiten.

USP 04: Live in 7 Tagen
text: Nova Landing ist in einer Woche live. Kein monatelanger
Prozess. Schnell sichtbar sein hat einen Wert — wir liefern ihn.
```

### Image-Feature
```
heading: Einblick
title DE: Vollständiger Website-Relaunch für eine Premium-Brand.
title EN: A high-performance relaunch that converted.
caption h3 DE: +38% Conversion-Rate nach Launch.
caption p DE: Neue Architektur, AI-Copy, Webflow-Build.
```

---

## 8. SEITENINHALT — NOVA AURA (section-aura)

### Service-Hero
```
service-tag: 04 / Nova Aura
h1: Deine Marke.
    Unvergesslich.
em: Unvergesslich

tagline DE: Branding, Positionierung und Markenidentität für Brands mit Ambitionen.
tagline EN: Brand strategy and identity systems built to endure.
```

### Three-Col Cards
```
Card 1:
  label: Was wir machen
  title: Brand Identity
  text DE: Positionierung, Logo-System, Typografie, Farbwelt, Tonalität —
  wir entwickeln das vollständige visuelle und kommunikative
  Erscheinungsbild eurer Marke. Von Grund auf oder als Relaunch.

Card 2:
  label: Unser Ansatz
  title: Strategie vor Ästhetik
  text DE: Ein Logo ohne Haltung ist ein Bild. Wir beginnen mit der
  strategischen Frage: Wofür steht eure Marke, für wen, und wie grenzt
  sie sich ab? Die visuelle Identität folgt dieser Antwort.

Card 3:
  label: Warum Nova Aura
  title: Design mit Haltung
  text DE: Wir bauen Marken die nach 5 Jahren noch frisch aussehen.
  Keine Trends, keine generischen Systeme — ein Auftritt der wirklich
  zu euch gehört.
```

### Leistungsumfang (NEU)
```
label: Was ihr bekommt
h2: Das vollständige
    Marken-System.

- Marken-Positionierung & Messaging-Framework
- Logo-System (Primär, Sekundär, Icon, Varianten)
- Typografie-System (Headline, Body, UI)
- Farbwelt (Primär, Sekundär, Neutral, Anwendungsregeln)
- Brand Voice & Tonalität-Guide
- Social Media Template-Set (Stories, Posts, Ads)
- Brand Guidelines PDF (fertig zur Weitergabe)
- Optional: Website-Design in Nova Aura Stil via Nova Web
```

### Image-Feature
```
heading: Einblick
title DE: Brand Relaunch für ein Tech-Unternehmen.
title EN: A brand system that scales across every touchpoint.
caption h3 DE: Neu positioniert. Neu designed. Marktbereit.
caption p DE: Positionierung, Logo, Guidelines, Social Templates.
```

---

## 9. SEITENINHALT — NOVA PRODUCTION (section-production)

### Service-Hero
```
service-tag: 05 / Nova Production
h1: Content der nächsten
    Generation.
em: nächsten

tagline DE: KI-gestützte Produktionsverfahren für visuellen Premium-Content.
tagline EN: Production accelerated by AI — without compromising quality.
```

### Three-Col Cards
```
Card 1:
  label: Was wir machen
  title: KI trifft Realität
  text DE: Produktvisuals, virtuelle Sets, AI-generierte Environments und
  Szenarien. Wir verbinden traditionelles Shooting mit KI-Werkzeugen
  um Content zu produzieren der früher das Dreifache gekostet hätte.

Card 2:
  label: Unser Ansatz
  title: Grenzen verschieben
  text DE: Kein Studio verfügbar? Kein Problem. Wir generieren Hintergründe,
  Environments und Stimmungen digital. Das Produkt bleibt real —
  der Kontext wird erweitert.

Card 3:
  label: Warum Nova Production
  title: Studioqualität, smart
  text DE: 12 Produkt-Variationen in 48 Stunden. Das ist keine Übertreibung
  — das ist unser Workflow. KI-Remixing, automatische Formatanpassung,
  Batch-Export. Für Brands die keine Zeit haben zu warten.
```

### Tools & Technologie (NEU)
```
label: Unser Tech-Stack
h2: Die Tools hinter
    unserem Prozess.

HeyGen       → AI-Avatar-Videos und Talking-Head-Ads
Runway ML    → Hintergrund-Generierung und Video-Remixing
ElevenLabs   → Professional Voice-Over in DE/EN und weiteren Sprachen
Midjourney   → Produkt-Mockups und Hero-Images
Flux         → Brand-sichere Bildgenerierung
Descript     → Automatisierte Video-Bearbeitung
Opus Clip    → Short-Form-Variationen aus Long-Content
Whisper API  → Transkription und Untertitel-Generierung
```

### Image-Feature
```
heading: Einblick
title DE: 12 Produktvariationen aus einem einzigen Shooting-Tag.
title EN: 12 product variants in 48 hours — ready for ads and shop.
caption h3 DE: AI-gestützte Postproduktion: 1 Drehtag → 12 fertige Assets.
caption p DE: Bereit für Paid Ads, Shop-Seiten und Social Media.
```

---

## 10. SEITENINHALT — KONTAKT (section-contact)

### Header
```
section-heading-label: Kontakt
h2: Lass uns deinen nächsten
    Shift planen.
em: Shift

p DE: Erzähl uns von deinem Projekt. Wir melden uns innerhalb von 24 Stunden.
p EN: Tell us about your next launch. We'll be in touch within 24 hours.
```

### Formular-Felder
```
[NAME / BRAND]
  placeholder: Dein Name oder Markenname

[E-MAIL]
  placeholder: deine@email.de

[SERVICE]
  options:
    - Welcher Service interessiert dich?
    - Nova Advertising — Kampagnen & Performance Ads
    - Nova Cast — UGC & AI Content Production
    - Nova Cast — Ad Management & Performance
    - Nova Web — Website / Shop / Landing Page
    - Nova Aura — Branding & Markenidentität
    - Nova Production — KI-Content & Produkt-Shooting
    - Full Package — Mehrere Services kombiniert
    - Ich bin mir noch nicht sicher

[BUDGET (optional — NEU)]
  options:
    - Bitte auswählen
    - Bis €1.000 (Einmalprojekt)
    - €1.000 – €3.000
    - €3.000 – €10.000
    - €10.000+ / Monatlicher Retainer

[NACHRICHT]
  placeholder: Erzähl uns von deinem Projekt, deinen Zielen und
  deiner Brand. Je mehr Kontext du gibst, desto besser können wir
  uns vorbereiten.
```

### CTA
```
Button: Nachricht senden →
Direct: Oder direkt: nova.shift.wk@gmail.com
Response-Time: Antwort innerhalb von 24h (werktags)
```

---

## 11. NAVIGATION — VOLLSTÄNDIG

### Nav-Elemente (Desktop)
```
Logo: Nova Shift Logo (bestehend) + "NOVA SHIFT" brand text
Home-Button: ← Startseite (sichtbar wenn nicht auf Home)
Links: Nova Advertising | Nova Cast | Nova Web | Nova Aura | Nova Production
CTA-Button: Kontakt (primary style)
```

### Nav-Elemente (Mobile)
```
Logo links + Hamburger-Menü rechts
Dropdown: alle Links vertikal + Kontakt CTA
```

---

## 12. FOOTER — VOLLSTÄNDIG

### Spalten
```
Spalte 1 (2fr): Nova Shift Logo + Tagline
  Tagline DE: Full-Service Creative Agency für Brands die in der
  digitalen Welt nicht übersehen werden wollen.
  Tagline EN: Full-service creative agency for brands that refuse
  to be overlooked.

Spalte 2: Services
  Nova Advertising
  Nova Cast
  Nova Web Solutions
  Nova Aura
  Nova Production

Spalte 3: Unternehmen
  Über uns
  Referenzen
  Blog / Insights (optional, zukünftig)
  Kontakt

Spalte 4: Rechtliches
  Impressum
  Datenschutzerklärung
  AGB
  Cookie-Einstellungen
```

### Footer Bottom
```
Links: © 2026 Nova Shift. All rights reserved.
Rechts: nova-shift.website
```

---

## 13. NEUE SEKTIONEN — EMPFOHLEN FÜR VIBECODING

### A) Über Nova Shift (section-about) — EMPFOHLEN NEU

```
service-tag: Über uns / Our Story

h1: Zwei Gründer.
    Eine Obsession.

text DE:
Nova Shift entstand aus einer einfachen Beobachtung: Die meisten
Marken haben gute Produkte aber schlechten Content. Und die meisten
Agenturen lösen dieses Problem mit großem Aufwand und wenig Ergebnis.
Wir haben uns entschieden, das anders zu machen.

Wir kombinieren echte Kreativität mit KI-gestützten Produktionssystemen
und datengetriebenem Performance-Marketing. Das Ergebnis: Premium-Outputs
die tatsächlich performen — für einen Bruchteil des traditionellen Aufwands.

text EN:
Nova Shift was born from a simple observation: most brands have great
products but weak content. And most agencies solve this with high effort
and low results. We chose a different path.

Founder-Stats:
  Gründer:     2 Co-Founder
  Gegründet:   2025
  Standort:    Deutschland
  Sprachen:    DE / EN
  Spezialität: AI-driven Content + Performance Marketing
```

### B) Prozess-Sektion (auf Nova Cast & Nova Web) — EMPFOHLEN

```
Schritt-für-Schritt Flow (nummeriert 01–06):

01 Erstgespräch      → Kostenlos. Wir verstehen euer Ziel.
02 Strategie-Brief   → KI-generierter Projektplan in 24h
03 Produktion        → Wir liefern. Ihr reviewt.
04 Freigabe          → 1 Revisions-Runde inklusive
05 Launch            → Live. Mit Übergabe-Dokumentation.
06 Optimierung       → Ongoing auf Wunsch via Retainer
```

### C) Testimonial-Sektion (auf allen Service-Seiten)

```
Layout: Zitat-Block mit Sternbewertung

Placeholder (bis echte Testimonials verfügbar):
"[Brandname] konnte in [Zeitraum] [konkretes Ergebnis] erzielen."
→ Ersetzen sobald erste Klienten-Referenzen vorhanden

Alternativ: Ergebnis-Tiles ohne Kundennamen:
- "+2.4× ROAS durch neue Creative-Strategie"
- "38 Ad-Assets aus einem einzigen Drehtag"
- "7 Tage von Brief bis Live-Website"
```

### D) Nova Cast Preistabelle (vollständig, zum Einbauen)

```
Heading: Investment in Creatives die performen.

Paket 1: Pure UGC
  Preis: ab €1.200
  Inhalt: 3–5 Creator-Videos | Briefing, Casting, Post-Production
  Ideal: Erster UGC-Test, neue Kampagne

Paket 2: AI-Enhanced (Empfohlen)
  Badge: EMPFOHLEN
  Preis: ab €2.000
  Inhalt: 25–50 Ad-Assets | 1 Shooting + vollständiges AI-Remixing
  Ideal: Laufende D2C-Kampagnen, A/B-Testing

Paket 3: Pure AI
  Preis: ab €800
  Inhalt: 10–20 Synthetic Ads | Kein Shooting notwendig
  Ideal: Schnelle Skalierung, Volumen-Fokus

Paket 4: Retainer (Growth)
  Preis: ab €2.500/Mo
  Inhalt: 25 Assets/Mo + Ad Management + Reporting
  Ideal: Brands die kontinuierlich skalieren

Alle Preise zzgl. MwSt.
Erstes Gespräch kostenlos.
CTA: Jetzt beraten lassen →
```

---

## 14. WICHTIGE COPY-SNIPPETS (wiederverwendbar)

### Allgemeine Aussagen die überall passen
```
"KI skaliert — aber Strategie gewinnt."
"Ein Shoot. Fünfzig Assets. Null Abstriche bei der Qualität."
"Wir sind nicht eure Agentur. Wir sind euer Wachstumspartner."
"Content der nicht performt ist teuer. Content der performt ist günstig."
"Wir liefern keine Files — wir liefern Ergebnisse."
```

### CTAs (variiert für A/B-Testing)
```
Primär:       "Projekt starten →"
Sekundär:     "Kostenlos beraten lassen"
Nova Cast:    "Erste Creatives anfragen"
Nova Web:     "Website planen"
Nova Aura:    "Marke entwickeln"
Kontakt:      "Erzähl uns von deiner Brand"
Dringlichkeit: "Jetzt Slot sichern"
```

### Microcopy (Labels, Tags, Badges)
```
Antwort:      "Antwort in < 24h"
Erstgespräch: "Erstgespräch kostenlos"
Qualität:     "Made in Germany"
Sprache:      "DE / EN"
Verfügbarkeit: "Aktuell verfügbar"  /  "Begrenzte Kapazität"
```

---

## 15. TECHNISCHE ANFORDERUNGEN (für Vibecoding)

### Muss-Anforderungen
- [ ] Single-Page-App mit JS-Navigation (bestehend beibehalten)
- [ ] Nova Cast Section deutlich ausgebaut (4 Subsektionen minimum)
- [ ] Alle Texte zweisprachig DE/EN (bestehende Konvention)
- [ ] SEO-Metadaten aus Abschnitt 3 vollständig implementiert
- [ ] Schema.org JSON-LD aus Abschnitt 3 eingebaut
- [ ] Kontaktformular mit Budget-Feld erweitert
- [ ] Service-Optionen im Formular auf alle Packages aktualisiert
- [ ] E-Mail auf nova.shift.wk@gmail.com (statt Gmail) sobald eingerichtet

### Kann-Anforderungen (Nice to have)
- [ ] Preistabelle für Nova Cast (Abschnitt 13 D)
- [ ] Über-uns-Sektion (Abschnitt 13 A)
- [ ] Nova Cast Workflow-Visualisierung (Abschnitt 6)
- [ ] Testimonial-Platzhalter bis echte Referenzen da sind
- [ ] Cookie-Banner (DSGVO-Pflicht vor Launch)
- [ ] Scroll-Animations auf allen neuen Sektionen (wie bestehend)

### Design-Konsistenz (zwingend)
- Alle neuen Sektionen müssen das bestehende Design-System verwenden
- Keine neuen Farben einführen — ausschließlich CSS-Variablen aus :root
- Neue Karten-Typen müssen .info-card oder .service-card als Basis haben
- Neue Headlines: immer Cormorant Garamond + em in gold
- Neue Labels: immer Space Mono + var(--gold-dim) + uppercase

---

## 16. LAUNCH-CHECKLISTE

```
Technik:
[ ] Custom Domain nova-shift.website korrekt aufgelöst
[ ] HTTPS aktiv
[ ] Alle internen Links funktionieren
[ ] Mobile getestet (iOS Safari + Android Chrome)
[ ] PageSpeed Insights > 80 (Desktop + Mobile)
[ ] Kein 404 auf internen Seiten

SEO:
[ ] Title-Tags aus Abschnitt 3 implementiert
[ ] Meta-Descriptions aus Abschnitt 3 implementiert
[ ] Schema.org JSON-LD implementiert und validiert
[ ] Canonical-Tags korrekt
[ ] OG-Tags für Social Sharing

Content:
[ ] Alle Texte final reviewed (DE + EN)
[ ] Bilder haben Alt-Texte
[ ] Kontaktformular versendet Mails korrekt
[ ] E-Mail-Adresse auf Business-Mail (nicht Gmail)

Rechtliches:
[ ] Impressum vorhanden und korrekt
[ ] Datenschutzerklärung aktuell
[ ] Cookie-Banner aktiv
[ ] AGB vorhanden (für Dienstleistungsverträge)
```

---

*Nova Shift MVP Blueprint v1.0 — Erstellt als Grundlage für Website-Rebuild und Vibecoding*
*Letzte Aktualisierung: Mai 2026*
*Für interne Nutzung — Nova Shift Team*