/**
 * Central website settings.
 *
 * Every value set to `null` is information the University has not yet supplied.
 * The website shows a clear "to be confirmed" marker wherever such a value is used,
 * and hides links (e.g. social media, application portal) until a real value exists.
 */

export const site = {
  /** The University's name as it is to appear on the website. */
  name: 'Central University of Emerging Technologies-CueTech',
  /** The name without the brand suffix, for legal and structured-data use. */
  legalName: 'Central University of Emerging Technologies',
  shortName: 'CueTech',
  /** The University's motto, used in the hero and the top bar. */
  tagline: 'Shaping Minds. Advancing Technologies. Transforming Futures.',
  /** Canonical base URL. Placeholder until the official domain is confirmed; override with NEXT_PUBLIC_SITE_URL. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://cuetech.edu.pk').replace(/\/$/, ''),
  locale: 'en_PK',
  city: 'Lahore',
  region: 'Punjab',
  country: 'Pakistan',
  description:
    'Central University of Emerging Technologies-CueTech, Lahore: 13 faculties offering 13 undergraduate and 9 associate degree programs, from computer science, pharmacy and nursing to aviation management, law and agribusiness.',

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
    /** WhatsApp or live-chat link for the "Chat with CueTech" page. Null = page explains chat is not yet available. */
    whatsapp: null as null | { display: string; href: string },
    email: 'info@centraluniversitylahore.com' as null | string,
    /** Shown on the admissions pages when set; otherwise `email` is used there. */
    admissionsEmail: null as null | string,
    /** Email for job applications and recruitment enquiries. Falls back to `email`. */
    careersEmail: null as null | string,
    officeHours: null as null | string,
    /**
     * Embedded map on the contact pages, built from the campus coordinates (no API key needed).
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

  /**
   * "Navigate CueTech" quick links: the University's online services. While `href` is null the
   * link leads to the Navigate CueTech page, which says the service is not yet online. Set `href`
   * to the service's URL to link straight to it.
   */
  portals: [
    { id: 'student-portal', label: 'Student Portal', description: 'Enrolment, timetables, results and fee records for current students.', href: null as null | string },
    { id: 'lms', label: 'LMS', description: 'The learning management system: course materials, assignments and announcements.', href: null as null | string },
    { id: 'faculty-portal', label: 'Faculty Portal', description: 'Teaching, attendance and grading tools for faculty members.', href: null as null | string },
    { id: 'digital-resource-center', label: 'Digital Resource Center', description: 'E-books, journals and databases available through the Central Library.', href: null as null | string },
    { id: 'incubation-center', label: 'Incubation Center', description: 'Support for student and graduate start-ups.', href: null as null | string },
    { id: 'anti-harassment-regulations', label: 'Anti-Harassment Regulations', description: 'The University’s regulations against harassment and how to report a concern.', href: null as null | string },
    { id: 'grievance-redressal', label: 'Grievance Redressal', description: 'How students and staff can raise a grievance and how it is handled.', href: null as null | string },
    { id: 'others', label: 'Others', description: 'Other online services will be listed here as they become available.', href: null as null | string },
  ],

  admissions: {
    /** URL of the official online application portal. Null = placeholder page is shown. */
    portalUrl: null as null | string,
    /** Admissions announcement shown in the top bar. Null = the University's motto is shown instead. */
    announcement: null as null | { text: string; href: string },
    /** Key dates for the current intake. Empty = "to be announced" state. */
    importantDates: [] as { label: string; date: string }[],
    /**
     * Admissions pop-up shown once per visit while admissions are open. Null = no pop-up.
     * Example: { title: 'Admissions open for Fall 2027', text: 'Apply online before 31 July.', cta: { label: 'Apply Online', href: '/admissions/apply' } }
     * To preview the pop-up without enabling it, open any page with ?preview=admissions-popup.
     */
    popup: null as null | { title: string; text: string; cta: { label: string; href: string } },
  },

  /** Year the University was established. Null until verified. */
  established: null as null | number,
} as const;

export type SiteConfig = typeof site;
export type Portal = (typeof site.portals)[number];

/**
 * Full postal address as display lines: the street lines, then city and province, then country.
 * Null until the University has supplied the street address.
 */
export function addressLines(): string[] | null {
  const street = site.contact.address;
  return street ? [...street, `${site.city}, ${site.region}`, site.country] : null;
}

/** Where a "Navigate CueTech" link should go: the service itself when its URL is known, otherwise its entry on the Navigate page. */
export const portalHref = (p: Portal) => p.href ?? `/navigate#${p.id}`;
