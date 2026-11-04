/**
 * Content types for the Central University of Emerging Technologies website.
 *
 * Content rules (read before editing):
 * - Anything the University has not verified must stay `null` / empty.
 *   The UI renders a clearly marked "to be confirmed" placeholder for it.
 * - Text that was drafted for editorial review is wrapped in `Draft<T>`,
 *   which makes the website show a small "Draft copy" marker next to it.
 * - Internal financial figures from the infrastructure report are never
 *   stored here. Do not add them.
 */

/** Keys for the illustrated artwork plates (see components/media/plates.tsx). */
export type PlateKey =
  | 'management'
  | 'computing'
  | 'education'
  | 'humanities'
  | 'poultry'
  | 'pharmacy'
  | 'nursing'
  | 'allied-health'
  | 'engineering'
  | 'aviation'
  | 'law'
  | 'agriculture'
  | 'sciences'
  | 'library'
  | 'campus'
  | 'student-life'
  | 'admissions'
  | 'news'
  | 'events';

/**
 * An image slot. While `src` is null the site shows the illustrated plate.
 * To use a real photograph: put the file in /public/images/... and set `src`.
 */
export type MediaSlot = {
  src: string | null;
  alt: string;
  plate: PlateKey;
  /** Use the plate's secondary motif as the main one, so sister programs look different. */
  swap?: boolean;
  /** Shown under the image. Required for photographs (credit / location). */
  caption?: string;
};

export type Draft<T> = { status: 'draft'; value: T };

export type Faq = { question: string; answer: string };

export type LabAllocation = {
  /** Number of laboratories in the documented infrastructure plan. */
  count: number;
  /** Size exactly as written in the report, or null when the report gives none. */
  sizeAsDocumented: string | null;
  /** Draft description of the intended use, for faculty review. */
  intendedUse: Draft<string> | null;
};

export type Faculty = {
  slug: string;
  name: string;
  /** Short label used in tight spaces such as the mega menu. */
  shortName: string;
  order: number;
  tagline: string;
  introduction: Draft<string[]>;
  focusAreas: Draft<string[]>;
  labs: LabAllocation;
  /** Library volumes allocated in the infrastructure plan. */
  libraryVolumes: number;
  /** Planned academic and support staff positions from the plan. */
  plannedFacultyPositions: number;
  plannedStaffPositions: number;
  /** "CRs" column in the report. Meaning not yet confirmed (credit hours or classrooms), so it is not published. */
  crsAllocationUnpublished: number;
  media: MediaSlot;
  /** Dean / head of faculty. Null until announced. */
  head: { name: string; title: string } | null;
};

export type Program = {
  slug: string;
  name: string;
  shortName: string;
  facultySlug: string;
  /** e.g. "Bachelor's degree". Kept generic until the University confirms the award title. */
  level: string;
  tagline: string;
  overview: Draft<string>;
  introduction: Draft<string[]>;
  objectives: Draft<string[]>;
  learningOutcomes: Draft<string[]>;
  careerAreas: Draft<string[]>;
  /** Fields that must come from the University. Null = not yet confirmed. */
  official: {
    duration: string | null;
    totalCreditHours: string | null;
    curriculum: { semester: string; courses: string[] }[] | null;
    eligibility: string[] | null;
    accreditation: string | null;
    fees: string | null;
  };
  featured: boolean;
  seoKeywords: string[];
  media: MediaSlot;
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  /** ISO date. Null until a real publication date exists. */
  publishedAt: string | null;
  body: string[];
  media: MediaSlot;
  /** Template entries are shown with a "Template entry" badge and are kept out of the sitemap. */
  isTemplate: boolean;
};

export type EventItem = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  /** ISO date-time. Null until scheduled. */
  startsAt: string | null;
  endsAt: string | null;
  venue: string | null;
  body: string[];
  media: MediaSlot;
  registrationUrl: string | null;
  isTemplate: boolean;
};
