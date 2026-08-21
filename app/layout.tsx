import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Cormorant_Garamond, Rajdhani, Space_Mono } from 'next/font/google';
import '../styles/globals.css';
import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';
import { siteMeta } from '@/lib/site-content';
import { JsonLd } from '@/components/seo/json-ld';
import Script from 'next/script';
import { LedBackground } from '@/components/LedBackground';

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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try {
                  var path = window.location.pathname || '/';
                  var primary = path === '/' ? '/' : '/' + (path.split('/').filter(Boolean)[0] || '');
                  var routes = {
                    '/': { color: '#2E6BFF', light: '#69A4FF', glow: 'rgba(46,107,255,0.45)' },
                    '/about': { color: '#7B3DFF', light: '#B36DFF', glow: 'rgba(123,61,255,0.45)' },
                    '/advertising': { color: '#FF3B3B', light: '#FF6A6A', glow: 'rgba(255,59,59,0.45)' },
                    '/cast': { color: '#F5A623', light: '#FFD15A', glow: 'rgba(245,166,35,0.40)' },
                    '/web': { color: '#2E6BFF', light: '#69A4FF', glow: 'rgba(46,107,255,0.45)' },
                    '/aura': { color: '#7B3DFF', light: '#B36DFF', glow: 'rgba(123,61,255,0.45)' },
                    '/production': { color: '#00E58B', light: '#5EFFB4', glow: 'rgba(0,229,139,0.40)' },
                    '/contact': { color: '#2E6BFF', light: '#69A4FF', glow: 'rgba(46,107,255,0.45)' }
                  };
                  var style = routes[primary] || routes['/'];
                  var root = document.documentElement;
                  root.style.setProperty('--led-color', style.color);
                  root.style.setProperty('--accent', style.color);
                  root.style.setProperty('--accent-light', style.light);
                  root.style.setProperty('--gold', style.color);
                  root.style.setProperty('--gold-light', style.light);
                  root.style.setProperty('--led-glow', style.glow);
                  root.style.setProperty('--accent-glow', style.glow);
                } catch (error) {}
              })();
            `,
          }}
        />
        <JsonLd />
        {/* Load decorative styles non-blocking: append stylesheet after hydration */}
        <Script id="load-decor-css" strategy="afterInteractive">
          {`(function(){var l=document.createElement('link');l.rel='stylesheet';l.href='/styles/decor.css';document.head.appendChild(l);})();`}
        </Script>
        <noscript>
          <link rel="stylesheet" href="/styles/decor.css" />
        </noscript>
      </head>
      <body className="relative isolate min-h-screen bg-[var(--bg)] text-[var(--text)]">
        <LedBackground />
        <div className="relative z-10">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}