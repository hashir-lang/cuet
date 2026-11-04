# Content guide

How to update the website's content. All content lives in `src/content/`. Edit the file, save it, and the site updates (in development) or after the next `npm run build`.

After any change, run `npm run typecheck`. It catches typos such as a missing comma or a misspelled field.

## Golden rules

1. **Never publish a fact the University has not verified.** Leave the field as `null`; the site will show a "To be confirmed" panel.
2. **Never add internal financial figures** (costs, budgets, rates) from the infrastructure report.
3. **Draft text is marked.** Fields wrapped in `draft(...)` show a small "Draft copy" badge. When the University has approved all draft text, set `showEditorialMarkers: false` in `src/content/site.ts` to hide the badges.
4. **Images are illustrations until replaced.** Never caption a stock photo as if it shows the University.

## Contact details, logo, social media, application portal

File: `src/content/site.ts`

| Setting | What happens when you fill it |
| --- | --- |
| `contact.address` | Shown in the footer and on the contact page, e.g. `['Street', 'Area', 'Lahore 54000', 'Pakistan']` |
| `contact.phone` | `{ display: '+92 42 0000 0000', href: 'tel:+924200000000' }` |
| `contact.email`, `contact.officeHours` | Shown on the contact page and footer |
| `contact.mapEmbedUrl` | Replaces the "Map coming soon" panel with an embedded map (Google Maps → Share → Embed a map → copy the `src` URL) |
| `logo` | The official CUETECH logo files in `public/brand/`: `mark` (emblem) and `full` (emblem with name), each with a `Light` version for navy backgrounds. To update the logo, replace the PNG files and keep the sizes listed here in step with the new files |
| `social` | Footer links, e.g. `[{ label: 'Facebook', href: 'https://facebook.com/...' }]`. Only add verified accounts |
| `admissions.portalUrl` | The "Online application" page links straight to the portal |
| `admissions.announcement` | Replaces the text in the dark bar at the top of every page |
| `admissions.importantDates` | Lists key dates on the admissions pages, e.g. `[{ label: 'Applications open', date: '2027-06-01' }]` |
| `established` | Founding year on the About page |

## Programs

File: `src/content/programs.ts`

Each program has a `slug` (its URL), names, its faculty, draft descriptive text and an `official` block. Fill the `official` block with information approved by the University:

```ts
official: {
  duration: '4 years (8 semesters)',
  totalCreditHours: '136',
  curriculum: [
    { semester: 'Semester 1', courses: ['Course one', 'Course two'] },
  ],
  eligibility: ['Intermediate (FSc) with at least ...% marks'],
  accreditation: 'Name of the accrediting body',
  fees: 'PKR ... per semester',
},
```

Because programs currently share one `unconfirmed` block, give a program its own `official` object when you fill it in. Fees are public tuition information and may be published once approved; this is different from the internal infrastructure costs, which must never be published.

**To add a program**: copy an existing `program({...})` entry, change the `slug`, names, `facultySlug` and text. It appears automatically in the directory, its faculty page, the menus, the sitemap and the admissions lists.

## Faculties

File: `src/content/faculties.ts`

Edit introductions, focus areas and the Dean (`head: { name: 'Prof. ...', title: 'Dean' }`). Laboratory and library numbers come from the infrastructure report; change them only when the University updates the plan.

**Library total**: the report's stated total (6,500) does not match its own per-faculty rows (which add up to 7,100). Once the correct total is confirmed, set `libraryVolumesConfirmed` in `src/content/infrastructure.ts`.

## News and events

Files: `src/content/news.ts`, `src/content/events.ts`

The current entries are templates (`isTemplate: true`). To publish:

1. Add a new entry with a unique `slug`, a real `publishedAt` (news) or `startsAt` (events) date in ISO format, e.g. `'2027-03-15T10:00:00+05:00'`, and `isTemplate: false`.
2. Delete the template entries.

Real entries are added to the sitemap automatically. Events with a date also get search-engine event data.

## Photographs

Every image slot (`media: { src: null, alt, plate }`) shows an illustrated plate while `src` is `null`.

1. Save the photo in `public/images/<section>/<descriptive-name>.jpg`, at least 2000 px wide, e.g. `public/images/faculties/pharmacy-laboratory.jpg`.
2. Set `src: '/images/faculties/pharmacy-laboratory.jpg'`.
3. Update `alt` to describe what the photo shows, and add a `caption` (who/where).

Next.js resizes and converts photos to modern formats automatically, and lazy-loads them below the fold.

## Home page hero slideshow

File: `src/content/hero.ts`

The home page hero is a full-screen slideshow. Each slide has a photograph, a small category line (`caption`), a short headline (`title`), one sentence (`text`) and a pill button (`cta`). The first slide's `title` is the page's main heading, so keep it meaningful.

The photographs are **stock images** from Unsplash (free licence, source URLs are recorded in the file) and do not show the University, which is why each `alt` says "stock photograph" and the hero shows a small "Stock photography" note at the bottom right on wide screens.

To replace them with real campus photography:

1. Save landscape photos at least 2000 px wide in `public/images/hero/`.
2. Update `src` and write an honest `alt` describing what the photo really shows.
3. Remove the words "stock photograph" from `alt`, and the "Stock photography" note in `src/components/home/HeroCarousel.tsx`, once every photo is genuine.

Timing (6 seconds per photo, 1 second crossfade) is set at the top of `src/components/home/HeroCarousel.tsx`.

## About page, leadership and history

File: `src/content/university.ts`

Vision, mission, objectives and philosophy are drafts. Replace them with approved text. Add leadership names (and photo paths), and the history as a list of paragraphs.

## Admissions

File: `src/content/admissions.ts`

The step-by-step guide, the required-documents checklist (a draft based on common practice in Pakistan) and the admissions FAQs.

## Navigation

File: `src/content/navigation.ts`

Main menu and footer links. Every link must point to a page that exists; `npm run check:links` reports any that do not.

## Contact form delivery

File: `src/app/api/contact/route.ts`

Set `CONTACT_WEBHOOK_URL` to an endpoint that receives JSON (`name`, `email`, `phone`, `enquiryType`, `program`, `message`, `receivedAt`) and delivers it, for example an email API, CRM or helpdesk. Before going live, also add a CAPTCHA (for example Cloudflare Turnstile) and a shared rate-limit store; the built-in rate limit only works on a single server.
