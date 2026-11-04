/**
 * Central website settings.
 *
 * Every value set to `null` is information the University has not yet supplied.
 * The website shows a clear "to be confirmed" marker wherever such a value is used,
 * and hides links (e.g. social media, application portal) until a real value exists.
 */

export const site = {
  name: 'Central University of Emerging Technologies',
  shortName: 'CUETECH',
  /** Canonical base URL. Placeholder until the official domain is confirmed; override with NEXT_PUBLIC_SITE_URL. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://cuetech.edu.pk').replace(/\/$/, ''),
  locale: 'en_PK',
  city: 'Lahore',
  country: 'Pakistan',
  description:
    'Central University of Emerging Technologies (CUETECH) offers 17 undergraduate programs across 13 faculties, from computer science, pharmacy and nursing to aviation management, law and agribusiness.',

  /**
   * Show small "Draft copy" / "To be confirmed" markers on the site.
   * Keep this `true` until every draft text has been approved by the University.
   */
  showEditorialMarkers: true,

  /**
   * Official CUETECH logo, cut from the supplied artwork into transparent PNGs in /public/brand/.
   * `mark` is the hexagonal emblem alone; `full` is the emblem with the CUETECH name and the full
   * institutional name. The `Light` versions are ivory-on-transparent for navy backgrounds.
   */
  logo: {
    mark: { src: '/brand/cuetech-mark.png', width: 344, height: 436 },
    markLight: { src: '/brand/cuetech-mark-light.png', width: 344, height: 436 },
    full: { src: '/brand/cuetech-logo.png', width: 1056, height: 864 },
    fullLight: { src: '/brand/cuetech-logo-light.png', width: 1056, height: 864 },
    alt: 'CUETECH, Central University of Emerging Technologies',
  },

  contact: {
    /** Postal address lines, exactly as published by the University. */
    address: null as null | string[],
    phone: null as null | { display: string; href: string },
    email: null as null | string,
    admissionsEmail: null as null | string,
    officeHours: null as null | string,
    /** Google Maps (or other) embed URL for the campus location. */
    mapEmbedUrl: null as null | string,
    mapLink: null as null | string,
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
