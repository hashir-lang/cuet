/**
 * Slides for the home page hero.
 *
 * The photographs are STOCK images (Unsplash licence: free to use, no attribution required),
 * chosen to suggest university life. None of them shows CUETECH, which is why every `alt`
 * says so and the hero carries a small "Stock photography" note. Replace them with real
 * campus photography as soon as it is available: drop the files into /public/images/hero/,
 * update `src`, and write an honest `alt` that says what the photo really shows.
 */

export type HeroSlide = {
  /** Path under /public. Landscape, at least 2000 px wide. */
  src: string;
  /** Screen-reader description. Say "stock photograph" while the image is not of the University. */
  alt: string;
  /** Small label above the title (the category line). */
  caption: string;
  /** Short headline, two to five words. The first slide's title is the page's main heading. */
  title: string;
  /** One supporting sentence under the title. */
  text: string;
  /** The pill button at the bottom of the hero. */
  cta: { label: string; href: string };
  /** Where the photograph came from, for the credits record. */
  source: string;
};

export const heroSlides: HeroSlide[] = [
  {
    src: '/images/hero/campus-building.jpg',
    alt: 'A university building behind a wide, sunlit lawn. Stock photograph, not the CUETECH campus.',
    caption: 'Central University of Emerging Technologies',
    title: 'Thirteen faculties. Seventeen degrees.',
    text: 'Undergraduate education across business, computing, health, engineering, law and the sciences.',
    cta: { label: 'Explore programs', href: '/programs' },
    source: 'https://images.unsplash.com/photo-1562774053-701939374585',
  },
  {
    src: '/images/hero/students-together.jpg',
    alt: 'Students laughing together around laptops at a shared table. Stock photograph.',
    caption: 'Student life',
    title: 'More than a degree.',
    text: 'Academic support, student societies and a campus designed for study.',
    cta: { label: 'Student life', href: '/student-life' },
    source: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
  },
  {
    src: '/images/hero/laboratory.jpg',
    alt: 'Glass beakers and a pipette on a laboratory bench. Stock photograph.',
    caption: 'Laboratories',
    title: 'Learning by doing.',
    text: 'Dedicated laboratories planned for every practice-led faculty.',
    cta: { label: 'Campus & infrastructure', href: '/campus' },
    source: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d',
  },
  {
    src: '/images/hero/engineering.jpg',
    alt: 'An engineer working at a laptop inside a machine workshop. Stock photograph.',
    caption: 'Engineering & computing',
    title: 'Built for what comes next.',
    text: 'Engineering technology, computer science and software engineering in one university.',
    cta: { label: 'Faculties & Departments', href: '/faculties' },
    source: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
  },
  {
    src: '/images/hero/library.jpg',
    alt: 'Tall library shelves lit by warm hanging lamps. Stock photograph.',
    caption: 'Library',
    title: 'A library for every faculty.',
    text: 'Each faculty has its own library allocation in the University’s plan.',
    cta: { label: 'Facilities by faculty', href: '/campus/facilities' },
    source: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570',
  },
];
