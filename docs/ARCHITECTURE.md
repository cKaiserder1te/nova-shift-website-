# Nova Shift Architecture

## Why this structure

The legacy HTML monolith is visually strong but structurally expensive to maintain. The new App Router setup splits the site into route-level pages and small reusable primitives so the design language stays intact while the implementation becomes scalable.

## Decision log

- `app/` holds route entry points, metadata, sitemap, and robots because those concerns belong at the framework boundary.
- `components/layout/` contains header and footer since they are shared shell elements across all routes.
- `components/sections/` contains section primitives such as hero, cards, stats, image feature, and contact form because these map directly to the content model and can be recomposed per page.
- `components/pages/` combines sections into route-level compositions so the page flow stays explicit and route-specific behavior remains easy to change.
- `lib/` owns typed content and routing data so the pages are driven by structured data instead of hard-coded monolith markup.
- `hooks/` holds isolated client behavior only where it is needed, keeping the default rendering path server-first.
- `styles/` contains the design tokens and global system layers so the brand palette, typography, overlays, and spacing remain centralized.
- `public/` mirrors the asset library to guarantee stable paths for Next Image and static delivery.

## Rendering model

- Server components render all content-heavy pages by default.
- Client-side code is limited to interaction state such as the mobile navigation.
- SEO metadata is generated per route, with separate `robots.txt` and `sitemap.xml` endpoints.

## Brand fidelity

The Nova Shift visual identity is preserved through the same gold-on-black palette, custom typography, noise texture, watermark treatment, and high-contrast section framing. The difference is not visual simplification; it is structural separation.