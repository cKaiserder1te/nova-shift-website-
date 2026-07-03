# AI‑freundliches Content‑Mockup (DE)

Dieses Dokument zeigt ein empfohlenes Seiten‑Template, das Such‑LLMs (ChatGPT, Perplexity, Claude, Google AI, Bing Copilot) bevorzugt extrahieren können.

Ziele:
- Kurzantwort (Snippet) oben — 1–2 Sätze, direkt zitierbar.
- Klare Entitäten als sichtbare Karten (`EntitySheet`).
- Explizite Frage‑Antwort‑Blöcke (FAQ) mit Schema.org‑MarkUp.
- Maschinenlesbare JSON‑LD (`Organization`, `Service`, `FAQPage`, `ImageObject`).

---

Beispiel: Service‑Seite — `Nova Web` (Kurzform)

H1: Nova Web – Webdesign Agentur für KMU & Brands

ShortAnswer (1 Satz): Nova Web erstellt hochkonvertierende Websites, Shops und Landing Pages: mobil‑optimiert, DSGVO‑konform und live in 7 Tagen.

Kurzbeschreibung:
Nova Web verbindet Informationsarchitektur, Design und Implementierung zu einer sauberen Conversion‑Architektur. Schnell, messbar und auf Wachstum ausgelegt.

Fakten (Bullets):
- Launch‑Fenster: 7 Tage
- DSGVO: ja
- Tools: Webflow, Shopify, Next.js
- Zielgruppe: KMU, D2C‑Brands

Entity (sichtbar):
- Name: Nova Web
- Typ: Service
- Kurzdefinition: Webdesign & Conversion‑Architektur für schnelle, performante Markenauftritte.
- Audience: KMU & Brands
- Deliverables: Informationsarchitektur; Designsystem; Umsetzung; SEO‑Basics; Launch

Services (kurze strukturierte Liste):
- `Implementation`: Next.js, Webflow, Shopify
- `Design`: Wireframes, UI Kit, Responsive
- `SEO`: Meta, Performance, Struktur

FAQ (je Frage: Frage + direkte Antwort):
Q: Wie schnell kann die Seite live gehen?
A: Nova Web bietet ein Launch‑Fenster von 7 Tagen für Landing Pages.

---

JSON‑LD‑Beispiel (Organization + Service + FAQ) — setze in `<head>` als `application/ld+json`:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nova-shift.website/#organization",
      "name": "Nova Shift",
      "url": "https://nova-shift.website/",
      "email": "hello@nova-shift.website",
      "availableLanguage": ["de","en"]
    },
    {
      "@type": "Service",
      "@id": "https://nova-shift.website/web#service",
      "name": "Nova Web",
      "provider": { "@id": "https://nova-shift.website/#organization" },
      "description": "Webdesign & Conversion‑Architektur: Landing Pages, Shops, SEO‑ready.",
      "serviceType": "Webdesign & Conversion-Architektur",
      "areaServed": "DE",
      "offers": { "@type": "Offer", "priceCurrency": "EUR" }
    },
    {
      "@type": "FAQPage",
      "@id": "https://nova-shift.website/web#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Wie schnell kann die Seite live gehen?",
          "acceptedAnswer": { "@type": "Answer", "text": "Landing Pages können in 7 Tagen live gehen." }
        }
      ]
    }
  ]
}
```

Tipps für Autoren:
- Beginne mit der ShortAnswer (1 Satz) — diese wird bevorzugt als Snippet genutzt.
- Verwende kurze, robuste Fakten (Zahlen, Orte, Zeiträume).
- Baue sichtbare Entity‑Cards (oder eine Box) mit klaren properties.
- Ergänze JSON‑LD strukturiert und halte `@id` stabil (URL + `#service`).

---

Date: 2026‑05‑29
