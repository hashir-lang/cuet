import { site } from './site';

/**
 * Slides for the home page hero.
 *
 * The first slide is the University's own photograph of the main building. The other
 * photographs are STOCK images (Unsplash licence: free to use, no attribution required),
 * chosen to suggest university life. None of them shows CueTech, which is why their `alt`
 * says so and the hero shows a small "Stock photography" note while they are on screen.
 * Replace them with real campus photography (or, until the campus is complete, AI-generated
 * campus images) as it becomes available: drop the files into /public/images/hero/, update
 * `src`, set `stock: false` and write an honest `alt`.
 */

export type HeroSlide = {
  /** Path under /public. Landscape, at least 2000 px wide, works best; a portrait photo needs `objectPosition`. */
  src: string;
  /** Screen-reader description. Say "stock photograph" while the image is not of the University. */
  alt: string;
  /** Small label above the title (the category line). */
  caption: string;
  /** Short headline. The first slide's title is the page's main heading. */
  title: string;
  /** One supporting sentence under the title. */
  text: string;
  /** The pill button at the bottom of the hero. */
  cta: { label: string; href: string };
  /** Where the photograph came from, for the credits record. */
  source: string;
  /** True for stock photographs. Shows the "Stock photography" note on wide screens. */
  stock: boolean;
  /** CSS object-position, e.g. '50% 45%', to choose which part of the photo survives cropping. Default: centre. */
  objectPosition?: string;
};

export const heroSlides: HeroSlide[] = [
  {
    src: '/images/hero/main-building.jpg',
    alt: 'The main building of Central University of Emerging Technologies: a curved grey facade carrying the University’s name and emblem above the entrance, with palm trees, the security post and the car park in front.',
    caption: site.name,
    title: site.tagline,
    text: 'Thirteen faculties, thirteen undergraduate and nine associate degree programs in Lahore.',
    cta: { label: 'Explore degree programs', href: '/programs' },
    source: 'Photograph supplied by the University',
    stock: false,
    // Keeps the name sign in the lower half, under the headline, for both the landscape and the portrait version of the photo; 58% keeps the sign centred when phones crop the sides.
    objectPosition: '58% 45%',
  },
  {
    src: '/images/hero/students-together.jpg',
    alt: 'Students laughing together around laptops at a shared table. Stock photograph.',
    caption: 'Campus life',
    title: 'More than a degree.',
    text: 'Academic support, student societies and a campus designed for study.',
    cta: { label: 'Campus life', href: '/campus-life' },
    source: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    stock: true,
  },
  {
    src: '/images/hero/laboratory.jpg',
    alt: 'Glass beakers and a pipette on a laboratory bench. Stock photograph.',
    caption: 'Laboratories',
    title: 'Learning by doing.',
    text: 'Dedicated laboratories planned for every practice-led faculty.',
    cta: { label: 'Campus and facilities', href: '/campus' },
    source: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d',
    stock: true,
  },
  {
    src: '/images/hero/engineering.jpg',
    alt: 'An engineer working at a laptop inside a machine workshop. Stock photograph.',
    caption: 'Computing & engineering',
    title: 'Built for what comes next.',
    text: 'Computer science, data science and information security engineering in one university.',
    cta: { label: 'Faculties and Departments', href: '/faculties' },
    source: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    stock: true,
  },
  {
    src: '/images/hero/library.jpg',
    alt: 'Tall library shelves lit by warm hanging lamps. Stock photograph.',
    caption: 'Library',
    title: 'A library for every faculty.',
    text: 'Each faculty has its own library allocation in the University’s plan.',
    cta: { label: 'Facilities by faculty', href: '/campus/facilities' },
    source: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570',
    stock: true,
  },
];
