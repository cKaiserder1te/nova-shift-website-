# PR Notes — AI SEO Enhancements

Kurz: Diese Änderungen optimieren die Website für automatische Extraktion durch LLMs und AI‑Suchdienste (ChatGPT, Perplexity, Claude, Google AI, Bing Copilot). Kern: sichtbare ShortAnswers, EntitySheets, JSON‑LD und Inline‑Microdata.

Was wurde hinzugefügt / geändert
- Neue Komponenten:
  - `components/seo/short-answer.tsx` — sichtbarer, kurz extrahierbarer Snippet‑Block (CreativeWork microdata).
  - `components/seo/entity-sheet.tsx` — sichtbare Entity‑Cards mit schema.org microdata.
- Sichtbare Integrationen:
  - Home: `components/sections/home-hero.tsx`, `components/pages/home-page.tsx`
  - Services: `components/sections/service-hero.tsx`, `components/pages/service-page.tsx`
  - Contact: `app/contact/page.tsx`, `components/sections/contact-form.tsx`
- Microdata ergänzt in Sections:
  - `components/sections/cro-sections.tsx` (FAQ Q/A, Case Studies, Testimonials, Funnel Steps)
  - `components/sections/three-card-grid.tsx` (cards → CreativeWork)
  - `components/sections/logo-ticker.tsx` (partner logos → Organization)
  - `components/sections/image-feature.tsx` (ImageObject meta)
  - `components/sections/stat-strip.tsx` (metrics → PropertyValue)
- JSON‑LD / existing schema
  - `components/seo/json-ld.tsx`, `service-json-ld.tsx`, `page-json-ld.tsx`, `faq-json-ld.tsx` remain active and are used sitewide via `app/layout.tsx` and page components.
- Dokumentation / Mockup
  - `docs/AI-SEO-CONTENT-MOCKUP.md` — deutsches Content‑Template + JSON‑LD‑Beispiele

Verifikation / Testing
1. Lokale Installation & Typecheck
```bash
npm install
npx tsc --noEmit
```
2. Dev‑Server starten und Seiten prüfen
```bash
npm run dev
# dann im Browser: http://localhost:3000
```
3. Sichtprüfung
- Startseite: Kurzantwort sichtbar im Hero.
- Service‑Seiten: Service‑Entity‑Box unter Intro.
- Kontakt: ShortAnswer + Organisations‑Entity sichtbar im Kontaktbereich.
- FAQ: sichtbare Q/A mit disclosure + JSON‑LD im <head> prüfen (DevTools → Elements → script[type="application/ld+json"]).

Bekannte Hinweise
- TypeScript‑Warnung in `tsconfig.json`: `baseUrl` ist in TS 7.0 deprecated. Vorschlag: `"ignoreDeprecations": "6.0"` in `compilerOptions` aufnehmen.
- Kein dediziertes `logo`‑Asset vorhanden; wenn gewünscht bitte `public/bilder/logo.png` hinzufügen und `components/seo/json-ld.tsx` aktualisieren.

Vorschläge / nächste Schritte
- CI: Erstelle einen Branch, führe `npm ci`, `npm run build` und `npm run lint` im CI‑Job aus.
- Content: Füge dedizierten `logo` und `sameAs` Links (LinkedIn, X) in `companyEntity` hinzu.
- Weitere Seiten: Archive/Legacy‑HTML nur bei Bedarf markieren.

Änderungen im Repo (Kurzliste)
- components/seo/short-answer.tsx (+)
- components/seo/entity-sheet.tsx (+)
- components/sections/* (home-hero, service-hero, cro-sections, three-card-grid, image-feature, logo-ticker, stat-strip, contact-form) (~ modifications)
- components/pages/home-page.tsx (+ modifications)
- components/pages/service-page.tsx (+ modifications)
- app/contact/page.tsx (+ modifications)
- docs/AI-SEO-CONTENT-MOCKUP.md (+)
- docs/PR_NOTES_AI_SEO.md (+)

Wenn du möchtest, erstelle ich automatisch einen Branch (`ai-seo-structure`) und bereite einen Commit/PR mit diesen Dateien vor. Soll ich das tun? 
