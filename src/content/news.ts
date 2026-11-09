import type { Article, NewsCategory } from './types';

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

/** News categories. Each has its own listing page at /news/category/<slug>. */
export const newsCategories: { slug: NewsCategory; label: string; description: string }[] = [
  { slug: 'university-news', label: 'University News', description: 'News from the University, its faculties and its campus.' },
  { slug: 'announcements', label: 'Official Announcements', description: 'Official announcements, including admissions and academic schedules.' },
  { slug: 'press-releases', label: 'Press Releases', description: 'Statements issued by the University to the media.' },
  { slug: 'media-coverage', label: 'Media Coverage', description: 'Coverage of the University in newspapers, broadcast and online media.' },
  { slug: 'notices', label: 'Notices and Circulars', description: 'Notices and circulars for students, staff and applicants.' },
];

export const newsCategoryBySlug = (slug: string) => newsCategories.find((c) => c.slug === slug);
export const newsCategoryLabel = (slug: NewsCategory) => newsCategoryBySlug(slug)?.label ?? slug;

export const news: Article[] = [
  {
    slug: 'admissions-announcement-template',
    title: 'Admissions announcement',
    excerpt: 'Reserved for the University’s official admissions announcement for the next intake.',
    category: 'announcements',
    publishedAt: null,
    body: [
      'This is a template entry. It shows how an admissions announcement will appear on the website.',
      'When the University publishes its admissions schedule, replace this text with the official announcement, including the intake, the programs open for application and the key dates.',
    ],
    media: { src: '/images/stock/admissions.jpg', alt: 'Rows of graduates in blue caps and gowns. Stock photograph.', plate: 'admissions', caption: 'Stock photograph. It does not show the University.' },
    isTemplate: true,
  },
  {
    slug: 'faculty-news-template',
    title: 'Faculty news',
    excerpt: 'Reserved for news from the University’s faculties, such as academic appointments and achievements.',
    category: 'university-news',
    publishedAt: null,
    body: [
      'This is a template entry. It shows how faculty news will appear on the website.',
      'Replace it with verified news supplied by a faculty office, together with a photograph and caption.',
    ],
    media: { src: '/images/stock/lecture.jpg', alt: 'Students in a tiered lecture hall listening and taking notes. Stock photograph.', plate: 'news', caption: 'Stock photograph. It does not show the University.' },
    isTemplate: true,
  },
  {
    slug: 'campus-update-template',
    title: 'Campus update',
    excerpt: 'Reserved for press releases on the University’s campus, laboratories and library.',
    category: 'press-releases',
    publishedAt: null,
    body: [
      'This is a template entry. It shows how a press release will appear on the website.',
      'Use it to report progress on facilities such as laboratories and the library once the University is ready to announce it.',
    ],
    media: { src: '/images/hero/main-building.jpg', alt: 'The main building of the University, with its name and emblem above the entrance.', plate: 'campus', caption: 'Main building, Maulana Shaukat Ali Road, Lahore. Photograph supplied by the University.' },
    isTemplate: true,
  },
  {
    slug: 'notice-template',
    title: 'Notice for students',
    excerpt: 'Reserved for notices and circulars issued by the Registrar’s Office and other University offices.',
    category: 'notices',
    publishedAt: null,
    body: [
      'This is a template entry. It shows how a notice or circular will appear on the website.',
      'Replace it with the text of the notice, the issuing office and the date of issue.',
    ],
    media: { src: '/images/hero/library.jpg', alt: 'Tall library shelves lit by warm hanging lamps. Stock photograph.', plate: 'library', caption: 'Stock photograph. It does not show the University.' },
    isTemplate: true,
  },
];

export const newsBySlug = (slug: string) => news.find((n) => n.slug === slug);
export const newsInCategory = (slug: NewsCategory) => news.filter((n) => n.category === slug);
