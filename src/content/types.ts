/**
 * Content types for the Central University of Emerging Technologies-CueTech website.
 *
 * Content rules (read before editing):
 * - Anything the University has not verified must stay `null` / empty.
 *   The UI renders a clearly marked "to be confirmed" placeholder for it.
 * - Text that was drafted for editorial review is wrapped in `Draft<T>`,
 *   which makes the website show a small "Draft copy" marker next to it.
 * - Internal financial figures from the infrastructure report are never
 *   stored here. Do not add them.
 */

/** Keys for the illustrated artwork plates (see components/media/illustrations/plates.ts), the fallback when a slot has no photograph. */
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

/** A teaching department. Under the Act each faculty currently has one department. */
export type Department = {
  slug: string;
  name: string;
  /** Short label for tight spaces, e.g. "Computer Science & IT". */
  shortName: string;
};

export type Faculty = {
  slug: string;
  /** Name as given in the University's Act. */
  name: string;
  /** Short label used in tight spaces such as the mega menu. */
  shortName: string;
  order: number;
  tagline: string;
  introduction: Draft<string[]>;
  focusAreas: Draft<string[]>;
  department: Department;
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

export type ProgramLevel = 'Undergraduate' | 'Associate Degree' | 'Graduate';

/** One course row in a semester table. Credits keep the source notation, e.g. "3 (3-0)" or "2+1". */
export type Course = { title: string; credits: string; category?: string };

export type Semester = { semester: string; courses: Course[]; total?: string };

/** Where a scheme of study comes from, shown on the program page. */
export type SchemeBasis = {
  /** e.g. "HEC Curriculum for English Degree Programs 2025" */
  title: string;
  /** e.g. "notified June 2025" */
  issued: string;
  /** Public path of the source PDF, e.g. "/documents/hec-curricula/english-2025.pdf", or null */
  document: string | null;
  /** Anything a reader should know, e.g. that HEC prescribes one standard scheme for all computing associate degrees */
  note?: string;
};

export type SchemeOfStudy = {
  basis: SchemeBasis | null;
  scope: string | null;
  duration: string | null;
  totalCreditHours: string | null;
  /** How the credit hours are made up, e.g. General Education 34, Major 84 */
  structure: { component: string; credits: string }[] | null;
  curriculum: Semester[] | null;
  /** Specialization streams or elective clusters the scheme offers */
  specializations: string[] | null;
  eligibility: string[] | null;
  passingCriteria: string[] | null;
  internship: string | null;
  projects: string | null;
  accreditation: string | null;
  fees: string | null;
};

export type Program = {
  slug: string;
  name: string;
  shortName: string;
  facultySlug: string;
  level: ProgramLevel;
  tagline: string;
  overview: Draft<string>;
  introduction: Draft<string[]>;
  objectives: Draft<string[]>;
  learningOutcomes: Draft<string[]>;
  careerAreas: Draft<string[]>;
  /**
   * The scheme of study. Null fields are not yet confirmed, and the program page shows a
   * "to be confirmed" panel for each. `basis` says where the scheme comes from: null means the
   * University's own approved scheme; otherwise the HEC model curriculum it is taken from.
   */
  official: SchemeOfStudy;
  featured: boolean;
  seoKeywords: string[];
  media: MediaSlot;
};

/** A graduate program the University has proposed but not yet launched. Listed, but without its own page. */
export type ProposedProgram = {
  name: string;
  shortName: string;
  level: 'Graduate';
  facultySlug: string;
};

export type NewsCategory = 'university-news' | 'announcements' | 'press-releases' | 'media-coverage' | 'notices';
export type EventCategory = 'university-events' | 'seminars-conferences' | 'workshops-training' | 'admissions' | 'student-life';

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: NewsCategory;
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
  category: EventCategory;
  /** ISO date-time. Null until scheduled. */
  startsAt: string | null;
  endsAt: string | null;
  venue: string | null;
  body: string[];
  media: MediaSlot;
  registrationUrl: string | null;
  isTemplate: boolean;
};

/** A member of the teaching faculty, shown on the Teaching Faculty pages with photo, profile and official email. */
export type FacultyMember = {
  name: string;
  designation: string;
  departmentSlug: string;
  /** Official University email. */
  email: string | null;
  /** Path under /public, e.g. '/images/faculty/name.jpg'. Null shows a placeholder. */
  photo: string | null;
  qualifications: string | null;
  profile: string[];
};

/** A job announcement for the Careers page. Closed announcements stay listed under "Previous announcements". */
export type JobOpening = {
  slug: string;
  title: string;
  department: string | null;
  /** e.g. 'Full-time', 'Contract', 'Visiting'. */
  type: string;
  /** ISO dates. */
  postedAt: string;
  closesAt: string | null;
  status: 'open' | 'closed';
  /** Link to the advertisement or application form. */
  href: string | null;
  summary: string;
};

/** An international or institutional partner for the Global Engagement pages. */
export type Partner = {
  name: string;
  country: string;
  type: string;
  href: string | null;
};
