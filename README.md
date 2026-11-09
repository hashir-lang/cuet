# CueTech — Central University of Emerging Technologies-CueTech website

The website for Central University of Emerging Technologies-CueTech, Lahore, built with Next.js 16, React 19, TypeScript and Tailwind CSS 4.
It runs locally. Nothing has been deployed.

- **Structure follows the University's brief (Annex-A)**: nine main sections (About CueTech, Campus Life, Admissions, Academics, Teaching Faculty, Global Engagement, News & Events, Careers at CueTech, Contact), the Navigate CueTech quick links, 13 faculties and departments named as in the Act, 13 undergraduate and 9 associate degree programs, and the 7 proposed graduate programs.
- **About 150 pages**: home, 16 About pages, 22 Campus Life pages, 11 Admissions pages, Academics (rules, calendar, examinations and more), 13 faculty pages, 24 program pages, 13 department (teaching faculty) pages, 11 Global Engagement pages, news and events with category listings, media, careers, 6 contact pages, the campus pages and Navigate CueTech.
- **Content lives in one place** (`src/content/`), so staff can update text without touching page layouts. The whole sitemap is one file, `src/content/sections.ts`.
- **Nothing is invented.** Facts the University has not supplied are shown as clearly marked "To be confirmed" panels. The University's note that content will be finalized later is reflected in "being prepared" panels on the pages that await it.
- **Schemes of study follow the HEC revised curricula** the University supplied: 20 of the 22 programs show the national scheme (semester tables, eligibility, award requirements) with a note that CueTech's own approved scheme will replace it.
- **No internal cost figures** from the infrastructure report appear anywhere on the site.

## Run it locally

You need [Node.js](https://nodejs.org) 20.9 or newer.

```bash
npm install
```

Development mode, with live reload while editing:

```bash
npm run dev
```

Then open http://localhost:3000.

Production mode, the fast version that real visitors would get:

```bash
npm run build
```

```bash
npm start
```

## Checks

Type check:

```bash
npm run typecheck
```

Crawl the running site for broken links, missing SEO tags, heading problems and forbidden financial wording (start the site first):

```bash
npm run check:links
```

Stress test for long names and missing fields (development mode only): open http://localhost:3000/dev/stress and switch between "Demo data" and "Worst case". This page returns 404 in production.

Preview the admissions pop-up without enabling it: open any page with `?preview=admissions-popup`.

## Project structure

```
src/
  app/                 Pages (one folder per URL), sitemap, robots, contact API
    about/, campus-life/, admissions/, academics/, global-engagement/, media/, contact/
                       Each has a hub page and a [slug] route that renders the section's
                       sub-pages from src/content/sections.ts
    faculties/, programs/, teaching-faculty/, news/, events/, careers/, navigate/, campus/
                       Bespoke pages built from the other content files
  components/          Reusable building blocks
    art/               Hero line drawing and jali lattice pattern
    admissions/        Admissions pop-up
    brand/             Wordmark and emblem built from the official CueTech logo
    cards/             Program, faculty, news and event cards
    layout/            Header (two-tier on desktop), desktop menu, mobile drawer, footer, back-to-top
    media/             Image slots; illustrations/ holds the artwork plates kept as the fallback
    sections/          Section layout (full-width pages with a "More in" band), hub index and the
                       generic sub-page template
    ui/                Sections, page headers, breadcrumbs, FAQ lists, placeholders
  content/             ALL website content:
    sections.ts        The sitemap: sections, sub-pages, menu links and draft page text
    site.ts            Name, motto, contact details, portals, admissions settings
    faculties.ts       13 faculties and their departments (names as in the Act)
    programs.ts        13 undergraduate, 9 associate and 7 proposed graduate programs
    schemes.ts         Schemes of study (HEC revised curricula) keyed by program slug
    university.ts      Vision, mission, values, goals, governance, administration, policies
    admissions.ts      Steps, documents, reasons to choose CueTech, support system, FAQs
    academics.ts       Rules and regulations list, academic calendar
    teaching-faculty.ts, careers.ts, global.ts   Faculty profiles, jobs, partners (empty until supplied)
    news.ts, events.ts Articles and events with their categories
    hero.ts            Home page slideshow
  lib/                 Formatting, SEO helpers, section helpers, contact-form validation
public/
  brand/               Official CueTech logo cut-outs (emblem and full lockup, navy and light)
  fonts/               Self-hosted fonts (SIL Open Font License)
  images/              Photographs: hero/main-building.jpg is the University's own photo; stock/ holds
                       the Unsplash stock photographs (credits in docs/stock-photo-credits.json)
  documents/           HEC curriculum PDFs linked from the program pages
  og-image.png         Social sharing image
docs/
  CONTENT-GUIDE.md     How to update content, photos, contact details and more
  HANDOVER.md          Missing information, integrations, testing and skills report
scripts/
  check-site.mjs       Site health checker
```

## Environment variables

Copy `.env.example` to `.env.local` and adjust:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Base URL for canonical links, the sitemap and social previews. Defaults to `https://cuetech.edu.pk`. |
| `CONTACT_WEBHOOK_URL` | Where contact-form messages are delivered. Until it is set, the form validates messages and tells visitors that online delivery is not connected yet. |

## Dependencies

| Package | Why |
| --- | --- |
| `next`, `react`, `react-dom` | Framework and rendering |
| `tailwindcss`, `@tailwindcss/postcss` | Styling and design tokens |
| `@base-ui/react` | Accessible navigation menu, mobile drawer, FAQ accordions and the admissions pop-up |
| `sonner` | Contact-form status messages (toasts) |
| `lucide-react` | Icons |
| `clsx` | Conditional class names |

See `docs/HANDOVER.md` for everything the University still needs to supply.
