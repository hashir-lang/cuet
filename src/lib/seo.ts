import type { Metadata } from 'next';
import { site } from '@/content/site';

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  /** Exclude template / placeholder pages from search engines. */
  noIndex?: boolean;
  type?: 'website' | 'article';
};

/** Builds unique title, description, canonical URL, Open Graph and Twitter metadata for a page. */
export function pageMeta({ title, description, path, noIndex, type = 'website' }: PageMetaInput): Metadata {
  const url = `${site.url}${path === '/' ? '' : path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title: `${title} | ${site.name}`,
      description,
      siteName: site.name,
      locale: site.locale,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${site.name}`,
      description,
      images: ['/og-image.png'],
    },
    robots: noIndex ? { index: false, follow: true } : undefined,
  };
}

/** Structured data. Only verified facts are included: name, alternate name, logo, URL and city. */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollegeOrUniversity',
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    logo: `${site.url}${site.logo.full.src}`,
    address: { '@type': 'PostalAddress', addressLocality: site.city, addressCountry: 'PK' },
    ...(site.social.length ? { sameAs: site.social.map((s) => s.href) } : {}),
  };
}

export function breadcrumbJsonLd(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.href === '/' ? '' : item.href}`,
    })),
  };
}

export function programJsonLd(p: { name: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalProgram',
    name: p.name,
    description: p.description,
    url: `${site.url}${p.path}`,
    provider: { '@type': 'CollegeOrUniversity', name: site.name, url: site.url },
  };
}
