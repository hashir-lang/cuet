/**
 * Central website settings.
 *
 * Every value set to `null` is information the University has not yet supplied.
 * The website shows a clear "to be confirmed" marker wherever such a value is used,
 * and hides links (e.g. social media, application portal) until a real value exists.
 */

export const site = {
  name: 'Central University of Emerging Technologies',
  shortName: 'CueTech',
  /** Canonical base URL. Placeholder until the official domain is confirmed; override with NEXT_PUBLIC_SITE_URL. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://cuetech.edu.pk').replace(/\/$/, ''),
  locale: 'en_PK',
  city: 'Lahore',
  region: 'Punjab',
  country: 'Pakistan',
  description:
    'Central University of Emerging Technologies (CueTech) offers 17 undergraduate programs across 13 faculties, from computer science, pharmacy and nursing to aviation management, law and agribusiness.',

  /**
   * Show small "Draft copy" / "To be confirmed" markers on the site.
   * Keep this `true` until every draft text has been approved by the University.
   */
  showEditorialMarkers: true,

  /**
   * Official CueTech logo, cut from the supplied artwork into transparent PNGs in /public/brand/.
   * `mark` is the hexagonal emblem alone; `full` is the emblem with the CueTech name and the full
   * institutional name. The `Light` versions are ivory-on-transparent for navy backgrounds.
   */
  logo: {
    mark: { src: '/brand/cuetech-mark.png', width: 344, height: 436 },
    markLight: { src: '/brand/cuetech-mark-light.png', width: 344, height: 436 },
    full: { src: '/brand/cuetech-logo.png', width: 1056, height: 864 },
    fullLight: { src: '/brand/cuetech-logo-light.png', width: 1056, height: 864 },
    alt: 'CueTech, Central University of Emerging Technologies',
  },

  contact: {
    /**
     * Street address lines, exactly as published by the University. The city, province and
     * country are appended from the fields above (see `addressLines()` below).
     */
    address: ['Maulana Shaukat Ali Road', 'Adjacent to Jinnah Institute of Cardiology'] as null | string[],
    phone: null as null | { display: string; href: string },
    email: 'info@centraluniversitylahore.com' as null | string,
    /** Shown on the admissions pages when set; otherwise `email` is used there. */
    admissionsEmail: null as null | string,
    officeHours: null as null | string,
    /**
     * Embedded map on the contact page, built from the campus coordinates (no API key needed).
     * For a map with a labelled pin, replace it with the `src` from Google Maps → Share → Embed a map.
     */
    mapEmbedUrl: 'https://maps.google.com/maps?q=31.4821177,74.2968724&z=16&hl=en&output=embed' as null | string,
    /** Public Google Maps link to the campus, used for "Open in Google Maps" links. */
    mapLink: 'https://maps.app.goo.gl/JRmg1jxUGif9Mqph9' as null | string,
    /** Campus coordinates, taken from `mapLink`. Used in structured data. */
    geo: { lat: 31.4821177, lng: 74.2968724 } as null | { lat: number; lng: number },
  },

  /** Verified social media profiles only. Empty = nothing is shown. */
  social: [] as { label: string; href: string }[],

  admissions: {
    /** URL of the official online application portal. Null = placeholder page is shown. */
    portalUrl: null as null | string,
    /** Admissions announcement shown in the top bar. Null = default wording. */
    announcement: null as null | { text: string; href: string },
    /** Key dates for the current intake. Empty = "to be announced" state. */
    importantDates: [] as { label: string; date: string }[],
  },

  /** Year the University was established. Null until verified. */
  established: null as null | number,
} as const;

export type SiteConfig = typeof site;

/**
 * Full postal address as display lines: the street lines, then city and province, then country.
 * Null until the University has supplied the street address.
 */
export function addressLines(): string[] | null {
  const street = site.contact.address;
  return street ? [...street, `${site.city}, ${site.region}`, site.country] : null;
}
