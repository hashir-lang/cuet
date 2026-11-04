# CUETECH — Central University of Emerging Technologies website

The new website for Central University of Emerging Technologies (CUETECH), built with Next.js 16, React 19, TypeScript and Tailwind CSS 4.
It runs locally. Nothing has been deployed.

- **50 pages**: home, about, 13 faculty pages, 17 program pages, 4 admissions pages, campus, facilities, student life, news and events (with detail pages), contact.
- **Content lives in one place** (`src/content/`), so staff can update text without touching page layouts.
- **Nothing is invented.** Facts the University has not supplied are shown as clearly marked "To be confirmed" panels.
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

## Project structure

```
src/
  app/                 Pages (one folder per URL), sitemap, robots, contact API
  components/          Reusable building blocks
    art/               Hero line drawing and jali lattice pattern
    brand/             Wordmark and emblem built from the official CUETECH logo
    cards/             Program, faculty, news and event cards
    layout/            Header, desktop menu, mobile drawer, footer, back-to-top
    media/             Image slots and illustrated artwork plates
    ui/                Sections, page headers, breadcrumbs, FAQ lists, placeholders
  content/             ALL website content: site settings, faculties, programs,
                       admissions, news, events, navigation, institutional text
  lib/                 Formatting, SEO helpers, contact-form validation
public/
  brand/               Official CUETECH logo cut-outs (emblem and full lockup, navy and light)
  fonts/               Self-hosted fonts (SIL Open Font License)
  images/              Put real photographs here (see docs/CONTENT-GUIDE.md)
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
| `@base-ui/react` | Accessible navigation menu, mobile drawer and FAQ accordions |
| `sonner` | Contact-form status messages (toasts) |
| `lucide-react` | Icons |
| `clsx` | Conditional class names |

See `docs/HANDOVER.md` for everything the University still needs to supply.
