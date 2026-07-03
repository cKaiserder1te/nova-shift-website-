import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Cormorant_Garamond, Rajdhani, Space_Mono } from 'next/font/google';
import '../styles/globals.css';
import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';
import { siteMeta } from '@/lib/site-content';
import { JsonLd } from '@/components/seo/json-ld';
import Script from 'next/script';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '600'],
  variable: '--font-display',
  display: 'swap',
});

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-ui',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  title: {
    default: siteMeta.title,
    template: '%s | Nova Shift',
  },
  description: siteMeta.description,
  keywords: [
    'Creative Agency',
    'AI Production',
    'Webdesign',
    'Branding',
    'UGC',
    'Performance Marketing',
    'Webflow',
    'Next.js',
    'D2C',
    'E-Commerce'
  ],
  authors: [{ name: 'Nova Shift' }],
  creator: 'Nova Shift',
  publisher: 'Nova Shift',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    siteName: 'Nova Shift',
    locale: 'de_DE',
    alternateLocale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@novashift',
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="de" className={`${cormorant.variable} ${rajdhani.variable} ${spaceMono.variable}`}>
      <head>
        <JsonLd />
        {/* Load decorative styles non-blocking: append stylesheet after hydration */}
        <Script id="load-decor-css" strategy="afterInteractive">
          {`(function(){var l=document.createElement('link');l.rel='stylesheet';l.href='/styles/decor.css';document.head.appendChild(l);})();`}
        </Script>
        <noscript>
          <link rel="stylesheet" href="/styles/decor.css" />
        </noscript>
      </head>
      <body className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}