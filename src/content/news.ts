import type { Article } from './types';

/**
 * News articles.
 *
 * The University has not supplied any news yet, so the entries below are
 * TEMPLATE ENTRIES (isTemplate: true). They show the layout, are labelled
 * "Template entry" on the site and are excluded from the sitemap.
 *
 * To publish real news: add an entry with isTemplate: false and a real
 * publishedAt date, then delete the templates.
 */
export const news: Article[] = [
  {
    slug: 'admissions-announcement-template',
    title: 'Admissions announcement',
    excerpt: 'Reserved for the University’s official admissions announcement for the next intake.',
    category: 'Admissions',
    publishedAt: null,
    body: [
      'This is a template entry. It shows how an admissions announcement will appear on the website.',
      'When the University publishes its admissions schedule, replace this text with the official announcement, including the intake, the programs open for application and the key dates.',
    ],
    media: { src: null, alt: 'Illustration for admissions news', plate: 'admissions' },
    isTemplate: true,
  },
  {
    slug: 'faculty-news-template',
    title: 'Faculty news',
    excerpt: 'Reserved for news from the University’s faculties, such as academic appointments and achievements.',
    category: 'Faculties',
    publishedAt: null,
    body: [
      'This is a template entry. It shows how faculty news will appear on the website.',
      'Replace it with verified news supplied by a faculty office, together with a photograph and caption.',
    ],
    media: { src: null, alt: 'Illustration for faculty news', plate: 'news' },
    isTemplate: true,
  },
  {
    slug: 'campus-update-template',
    title: 'Campus update',
    excerpt: 'Reserved for updates on the University’s campus, laboratories and library.',
    category: 'Campus',
    publishedAt: null,
    body: [
      'This is a template entry. It shows how a campus update will appear on the website.',
      'Use it to report progress on facilities such as laboratories and the library once the University is ready to announce it.',
    ],
    media: { src: null, alt: 'Illustration for campus news', plate: 'campus' },
    isTemplate: true,
  },
];

export const newsBySlug = (slug: string) => news.find((n) => n.slug === slug);
