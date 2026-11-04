import type { Metadata, Viewport } from 'next';
import { Toaster } from 'sonner';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/layout/BackToTop';
import { JsonLd } from '@/components/ui/JsonLd';
import { organizationJsonLd } from '@/lib/seo';
import { site } from '@/content/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Undergraduate University in Lahore`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  formatDetection: { telephone: false, email: false, address: false },
  // Icons come from src/app/icon.png and src/app/apple-icon.png (Next.js file conventions).
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  interactiveWidget: 'resizes-content',
  // Matches the dark top bar at the very top of every page.
  themeColor: '#0a1226',
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-PK" data-scroll-behavior="smooth">
      <head>
        <link rel="preload" href="/fonts/newsreader-latin-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/instrument-sans-latin-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <div id="top-sentinel" aria-hidden="true" />
        <Header />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <BackToTop />
        <Toaster position="bottom-center" theme="light" richColors closeButton offset={24} mobileOffset={16} />
        <JsonLd data={organizationJsonLd()} />
      </body>
    </html>
  );
}
