import { Container } from '@/components/ui/container';

const partnerLogos = [
  "Meta Business Partner",
  "Shopify Expert",
  "Webflow Professional",
  "Klaviyo Elite",
  "Google Premium Partner",
  "TikTok Agency Partner"
];

// Duplicate once for a seamless infinite scroll effect
const tickerItems = [...partnerLogos, ...partnerLogos];

export function LogoTicker() {
  return (
    <section className="border-y border-ds-border bg-ds-surface/30 relative overflow-hidden py-8 md:py-10 flex items-center">
      {/* Left/Right Gradients for smooth fade in/out */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-ds-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-ds-background to-transparent z-10 pointer-events-none" />

      <div className="ds-ticker-track flex whitespace-nowrap gap-12 md:gap-24 px-8 items-center">
        {tickerItems.map((logo, i) => (
          <span
            key={i}
            className="text-ds-content-subtle font-medium tracking-widest uppercase text-xs md:text-sm flex-shrink-0"
            itemScope
            itemType="https://schema.org/Organization"
            itemProp="sponsor"
          >
            <span itemProp="name">{logo}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
