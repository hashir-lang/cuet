# Content guide

How to update the website's content. All content lives in `src/content/`. Edit the file, save it, and the site updates (in development) or after the next `npm run build`.

After any change, run `npm run typecheck`. It catches typos such as a missing comma or a misspelled field.

## Golden rules

1. **Never publish a fact the University has not verified.** Leave the field as `null`; the site will show a "To be confirmed" panel.
2. **Never add internal financial figures** (costs, budgets, rates) from the infrastructure report.
3. **Draft text is marked.** Fields wrapped in `draft(...)`, and the page text in `sections.ts`, show a small "Draft copy" badge. When the University has approved all draft text, set `showEditorialMarkers: false` in `src/content/site.ts` to hide the badges.
4. **Images are illustrations until replaced.** Never caption a stock or AI-generated image as if it shows the University.

## The sitemap: sections, sub-pages and menus

File: `src/content/sections.ts`

This one file is the website's structure (Annex-A of the brief). Each section (About CueTech, Campus Life, Admissions, Academics, Teaching Faculty, Global Engagement, News & Events, Careers, Contact) lists its sub-pages. From it the site builds the main menu, the mobile drawer, the side navigation on every section page, the hub pages, the generic sub-pages and the XML sitemap.

A sub-page looks like this:

```ts
{
  slug: 'sports',                              // its URL: /campus-life/sports
  title: 'Sports and Recreation',              // heading and menu label
  summary: 'Sports facilities, teams and recreational activities.',   // one sentence
  body: ['Paragraph one.', 'Paragraph two.'],  // optional draft paragraphs
  parts: [{ id: 'teams', title: 'Teams', text: '...', pending: 'List to be published.' }],  // optional anchored sub-sections
  items: [{ label: 'Document name', href: null, note: 'Document to be published' }],       // optional list of documents or services
  pending: 'Details will be published here.',  // the "awaiting content" message
  related: [{ label: 'Campus Life', href: '/campus-life' }],
}
```

- **To fill a placeholder page**: add `body` paragraphs (and `parts` if the page has sub-headings) and delete `pending`. The "being prepared" panel disappears automatically.
- **To add a page**: add an entry to the section's `pages`. It appears in the menu, the side navigation, the hub and the sitemap. Nothing else needs editing.
- **To rename or reorder**: edit `title` or move the entry. Menu labels follow.
- A page with `href` lives at a bespoke route (for example `how-to-apply`); edit that page's file under `src/app/` instead.
- `menuLinks` overrides the menu for a section whose menu items are anchors (Contact) or categories (News & Events).

Pages that show data from elsewhere use `component`: `schedule` (admission dates from `site.ts`), `calendar` (`academics.ts`), `faqs` (`admissions.ts`), `partners` (`global.ts`), `gallery` and `chat`.

## Name, motto, contact details, portals, logo, social media, application portal

File: `src/content/site.ts`

| Setting | What happens when you fill it |
| --- | --- |
| `name`, `legalName`, `shortName`, `tagline` | The University's name as shown on the site ("Central University of Emerging Technologies-CueTech"), the legal name, "CueTech" and the motto used in the hero and the top bar |
| `contact.address` | Street address lines only. The city, province and country are added from `city`, `region` and `country`. Shown in the footer, on the contact pages and in structured data |
| `contact.phone` | `{ display: '+92 42 0000 0000', href: 'tel:+924200000000' }` |
| `contact.whatsapp` | `{ display: '+92 300 0000000', href: 'https://wa.me/923000000000' }`. Turns the "Chat with CueTech" page into a live chat link |
| `contact.email`, `contact.admissionsEmail`, `contact.careersEmail`, `contact.officeHours` | Email is shown in the footer, on the contact pages and on the admissions pages; `admissionsEmail` and `careersEmail`, when set, are used on the admissions and careers pages |
| `contact.mapEmbedUrl` | The embedded map on Visit Our Campus. Currently built from the campus coordinates; for a labelled pin use Google Maps → Share → Embed a map → copy the `src` URL |
| `contact.mapLink`, `contact.geo` | The public Google Maps link behind "Open in Google Maps" and "Get directions", and the campus coordinates used in structured data |
| `portals` | The Navigate CueTech links (Student Portal, LMS, Faculty Portal, Digital Resource Center, Incubation Center, Anti-Harassment Regulations, Grievance Redressal, Others). Set each `href` to the service's URL; until then the link leads to the Navigate CueTech page, which says the service is not yet online |
| `logo` | The official CueTech logo files in `public/brand/`: `mark` (emblem) and `full` (emblem with name), each with a `Light` version for navy backgrounds |
| `social` | Footer links, e.g. `[{ label: 'Facebook', href: 'https://facebook.com/...' }]`. Only add verified accounts |
| `admissions.portalUrl` | The "Apply Online" page links straight to the portal |
| `admissions.announcement` | Replaces the motto in the dark bar at the top of every page |
| `admissions.importantDates` | Lists key dates on the Admission Schedule page, the admissions overview and in the pop-up, e.g. `[{ label: 'Applications open', date: '2027-06-01' }]` |
| `admissions.popup` | The admissions pop-up shown once per visit while admissions are open: `{ title, text, cta: { label, href } }`. Set it when admissions open and back to `null` when they close. Preview it at any time with `?preview=admissions-popup` |
| `established` | Founding year on the About page |

## Faculties and departments

File: `src/content/faculties.ts`

The 13 faculties are named as in the University's Act, in the order of the brief, each with its `department`. Edit introductions, focus areas and the Dean (`head: { name: 'Prof. ...', title: 'Dean' }`). Laboratory and library numbers come from the infrastructure report; change them only when the University updates the plan.

The faculty `slug` is its URL and is referenced by programs (`facultySlug`); the department `slug` is the URL of its Teaching Faculty page and is referenced by faculty members (`departmentSlug`).

**Library total**: the report's stated total (6,500) does not match its own per-faculty rows (which add up to 7,100). Once the correct total is confirmed, set `libraryVolumesConfirmed` in `src/content/infrastructure.ts`.

## Degree programs

File: `src/content/programs.ts`

13 undergraduate (`undergraduate({...})`) and 9 associate degree programs (`associate({...})`), plus the 7 proposed graduate programs in `proposedPrograms` (listed, no detail pages). Each program has a `slug` (its URL), names, its faculty, draft descriptive text and an `official` block: the scheme of study. Fill it with information approved by the University:

```ts
official: {
  scope: 'The program covers ...',
  duration: '4 years (8 semesters)',
  totalCreditHours: '136',
  curriculum: [{ semester: 'Semester 1', courses: ['Course one', 'Course two'] }],
  eligibility: ['Intermediate (FSc) with at least ...% marks'],
  passingCriteria: ['Minimum CGPA of 2.0', '...'],
  internship: 'A six-week supervised internship after the sixth semester.',
  projects: 'A final-year project in two parts over semesters 7 and 8.',
  accreditation: 'Recognised by the Higher Education Commission; accredited by ...',
  fees: 'Per-semester fee as approved',
},
```

Because programs currently share one `unconfirmed` block, give a program its own `official` object when you fill it in. Each field becomes its own section on the program page as soon as it is filled. Fees are public tuition information and may be published once approved; this is different from the internal infrastructure costs, which must never be published.

**To add a program**: copy an existing entry, change the `slug`, names, `facultySlug` and text. It appears automatically in the directory, its faculty page, the menus, the sitemap and the admissions lists. **To launch a proposed graduate program**: move it from `proposedPrograms` to `programs` using a `make('Graduate')` helper, and the level filter will offer it.

## Teaching faculty, careers and partners

- `src/content/teaching-faculty.ts`: faculty members with photo, designation, qualifications, profile and official email, grouped by `departmentSlug`. Photos go in `public/images/faculty/`.
- `src/content/careers.ts`: job announcements. Set `status: 'closed'` when a vacancy closes; it moves to "Previous announcements".
- `src/content/global.ts`: international and institutional partners for the Global Academic Partnerships page.
- `src/content/academics.ts`: the Academic Rules and Regulations list (add each document's `href` as it is approved; HEC items link to the HEC website) and the academic calendar.

## About CueTech: messages, leadership, governance, policies

File: `src/content/university.ts`

Vision, mission, core values, goals and philosophy are drafts. Replace them with approved text. Fill `messages.chancellor`, `messages.chairman` and `messages.viceChancellor` with `{ name, title, photo, text: [...] }` to publish the three messages. Add leadership names (and photo paths), the history and sponsors as lists of paragraphs, the charter summary and documents, and `href` for each policy document as it is approved. The composition of each statutory body can be added as `text` in `sections.ts` under `governance`.

## News and events

Files: `src/content/news.ts`, `src/content/events.ts`

Each article has a `category`: `university-news`, `announcements`, `press-releases`, `media-coverage` or `notices`; each event: `university-events`, `seminars-conferences`, `workshops-training`, `admissions` or `student-life`. The category decides which listing pages show the entry (Official Announcements, Press Releases, Media Coverage, Notices and Circulars, Seminars and Conferences, Workshops and Training Programs).

The current entries are templates (`isTemplate: true`). To publish:

1. Add a new entry with a unique `slug`, a real `publishedAt` (news) or `startsAt` (events) date in ISO format, e.g. `'2027-03-15T10:00:00+05:00'`, and `isTemplate: false`.
2. Delete the template entries.

Real entries are added to the sitemap automatically. Events with a date also get search-engine event data. Photo Gallery, Video Gallery and Newsletter are pages in `sections.ts` (section `media`).

## Photographs

Every image slot (`media: { src: null, alt, plate }`) shows an illustrated plate while `src` is `null`.

1. Save the photo in `public/images/<section>/<descriptive-name>.jpg`, at least 2000 px wide, e.g. `public/images/faculties/pharmacy-laboratory.jpg`.
2. Set `src: '/images/faculties/pharmacy-laboratory.jpg'`.
3. Update `alt` to describe what the photo shows, and add a `caption` (who/where).

Until the campus is complete the University may use AI-generated images of the campus and students. Treat them like stock photographs: say so in the `alt` text and caption, and replace them with real photographs as the campus is completed.

Next.js resizes and converts photos to modern formats automatically, and lazy-loads them below the fold.

## Home page hero slideshow

File: `src/content/hero.ts`

The home page hero is a full-screen slideshow. The first slide is the University's photograph of the main building and carries the motto as the page's main heading. Each slide has a photograph, a small category line (`caption`), a short headline (`title`), one sentence (`text`) and a pill button (`cta`).

The other photographs are **stock images** from Unsplash (free licence, source URLs are recorded in the file) and do not show the University, which is why each `alt` says "stock photograph" and the hero shows a small "Stock photography" note while they are on screen.

To replace them:

1. Save landscape photos at least 2000 px wide in `public/images/hero/`.
2. Update `src`, set `stock: false` and write an honest `alt` describing what the photo really shows.

Timing (6 seconds per photo, 1 second crossfade) is set at the top of `src/components/home/HeroCarousel.tsx`.

## Admissions

File: `src/content/admissions.ts`

The step-by-step guide, the required-documents checklist (a draft based on common practice in Pakistan), the reasons to choose CueTech, the academic and student support system, and the admissions FAQs (shown on the FAQ page, the admissions overview and Ask Us). Fees, how to pay, scholarships and the admission schedule are pages in `sections.ts`; dates come from `site.ts`.

## Navigation

File: `src/content/navigation.ts`

The main menu is generated from `sections.ts`. This file only holds the footer columns and which portals appear in the top bar. Every link must point to a page that exists; `npm run check:links` reports any that do not.

## Contact form delivery

File: `src/app/api/contact/route.ts`

Set `CONTACT_WEBHOOK_URL` to an endpoint that receives JSON (`name`, `email`, `phone`, `enquiryType`, `program`, `message`, `receivedAt`) and delivers it, for example an email API, CRM or helpdesk. The enquiry types (Admissions, Academic programs, Fees and scholarships, Careers and recruitment, Feedback or complaint, Media, General enquiry, Other) are in `src/lib/contact.ts`. Before going live, also add a CAPTCHA (for example Cloudflare Turnstile) and a shared rate-limit store; the built-in rate limit only works on a single server.
