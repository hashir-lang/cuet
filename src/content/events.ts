import type { EventCategory, EventItem } from './types';

/**
 * Events.
 *
 * No events have been announced by the University yet. These are TEMPLATE ENTRIES
 * (isTemplate: true): they show the layout, are labelled "Template entry" and are
 * excluded from the sitemap. Replace them with real events with real dates.
 */

/** Event categories. Seminars and workshops have their own listing pages at /events/category/<slug>. */
export const eventCategories: { slug: EventCategory; label: string; description: string }[] = [
  { slug: 'university-events', label: 'University Events', description: 'Ceremonies, celebrations and occasions across the University.' },
  { slug: 'seminars-conferences', label: 'Seminars and Conferences', description: 'Academic seminars, public lectures and conferences hosted by the faculties.' },
  { slug: 'workshops-training', label: 'Workshops and Training Programs', description: 'Workshops, short courses and training programs for students, staff and professionals.' },
  { slug: 'admissions', label: 'Admissions', description: 'Information sessions and open days for applicants and families.' },
  { slug: 'student-life', label: 'Student Life', description: 'Orientation, societies, sports and student-led events.' },
];

export const eventCategoryBySlug = (slug: string) => eventCategories.find((c) => c.slug === slug);
export const eventCategoryLabel = (slug: EventCategory) => eventCategoryBySlug(slug)?.label ?? slug;

export const events: EventItem[] = [
  {
    slug: 'admissions-information-session-template',
    title: 'Admissions information session',
    excerpt: 'Reserved for an information session where applicants and families can learn about programs and how to apply.',
    category: 'admissions',
    startsAt: null,
    endsAt: null,
    venue: null,
    body: ['This is a template entry. It shows how an event will appear on the website.', 'Add the date, time and venue, and a registration link if one is needed.'],
    media: { src: '/images/stock/admissions.jpg', alt: 'Rows of graduates in blue caps and gowns. Stock photograph.', plate: 'events', caption: 'Stock photograph. It does not show the University.' },
    registrationUrl: null,
    isTemplate: true,
  },
  {
    slug: 'orientation-template',
    title: 'New student orientation',
    excerpt: 'Reserved for orientation activities that welcome new students to the University.',
    category: 'student-life',
    startsAt: null,
    endsAt: null,
    venue: null,
    body: ['This is a template entry. It shows how an orientation event will appear on the website.', 'Replace it with the official orientation schedule once it is confirmed.'],
    media: { src: '/images/stock/campus-life.jpg', alt: 'Students walking along a path past a brick campus building. Stock photograph.', plate: 'student-life', caption: 'Stock photograph. It does not show the University.' },
    registrationUrl: null,
    isTemplate: true,
  },
  {
    slug: 'public-lecture-template',
    title: 'Public lecture',
    excerpt: 'Reserved for public lectures, seminars and conferences hosted by the University’s faculties.',
    category: 'seminars-conferences',
    startsAt: null,
    endsAt: null,
    venue: null,
    body: ['This is a template entry. It shows how a lecture, seminar or conference will appear on the website.', 'Add the speaker, topic, date, time and venue once the event is confirmed.'],
    media: { src: '/images/stock/lecture.jpg', alt: 'Students in a tiered lecture hall listening and taking notes. Stock photograph.', plate: 'library', caption: 'Stock photograph. It does not show the University.' },
    registrationUrl: null,
    isTemplate: true,
  },
  {
    slug: 'workshop-template',
    title: 'Training workshop',
    excerpt: 'Reserved for workshops and training programs for students, staff and professionals.',
    category: 'workshops-training',
    startsAt: null,
    endsAt: null,
    venue: null,
    body: ['This is a template entry. It shows how a workshop or training program will appear on the website.', 'Add the facilitator, outline, dates, venue and how to register once the workshop is confirmed.'],
    media: { src: '/images/stock/computing.jpg', alt: 'A laptop on a desk showing lines of code. Stock photograph.', plate: 'computing', caption: 'Stock photograph. It does not show the University.' },
    registrationUrl: null,
    isTemplate: true,
  },
];

export const eventBySlug = (slug: string) => events.find((e) => e.slug === slug);
export const eventsInCategory = (slug: EventCategory) => events.filter((e) => e.category === slug);
