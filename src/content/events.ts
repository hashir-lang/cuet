import type { EventItem } from './types';

/**
 * Events.
 *
 * No events have been announced by the University yet. These are TEMPLATE ENTRIES
 * (isTemplate: true): they show the layout, are labelled "Template entry" and are
 * excluded from the sitemap. Replace them with real events with real dates.
 */
export const events: EventItem[] = [
  {
    slug: 'admissions-information-session-template',
    title: 'Admissions information session',
    excerpt: 'Reserved for an information session where applicants and families can learn about programs and how to apply.',
    category: 'Admissions',
    startsAt: null,
    endsAt: null,
    venue: null,
    body: [
      'This is a template entry. It shows how an event will appear on the website.',
      'Add the date, time and venue, and a registration link if one is needed.',
    ],
    media: { src: null, alt: 'Illustration for an admissions event', plate: 'events' },
    registrationUrl: null,
    isTemplate: true,
  },
  {
    slug: 'orientation-template',
    title: 'New student orientation',
    excerpt: 'Reserved for orientation activities that welcome new students to the University.',
    category: 'Student Life',
    startsAt: null,
    endsAt: null,
    venue: null,
    body: [
      'This is a template entry. It shows how an orientation event will appear on the website.',
      'Replace it with the official orientation schedule once it is confirmed.',
    ],
    media: { src: null, alt: 'Illustration for a student orientation event', plate: 'student-life' },
    registrationUrl: null,
    isTemplate: true,
  },
  {
    slug: 'public-lecture-template',
    title: 'Public lecture',
    excerpt: 'Reserved for public lectures and seminars hosted by the University’s faculties.',
    category: 'Academic',
    startsAt: null,
    endsAt: null,
    venue: null,
    body: [
      'This is a template entry. It shows how a lecture or seminar will appear on the website.',
      'Add the speaker, topic, date, time and venue once the event is confirmed.',
    ],
    media: { src: null, alt: 'Illustration for an academic lecture', plate: 'library' },
    registrationUrl: null,
    isTemplate: true,
  },
];

export const eventBySlug = (slug: string) => events.find((e) => e.slug === slug);
