# Handover report

Status of the Central University of Emerging Technologies website as delivered for local development.

## 1. What was built

| Area | Pages |
| --- | --- |
| Home | 1 page with all 19 requested sections (announcement bar to footer) |
| About | Overview, vision, mission, objectives, philosophy, approach, leadership, history, institutional information |
| Faculties | Directory plus 13 faculty pages |
| Programs | Searchable, filterable directory plus 17 program pages |
| Admissions | Overview, How to apply, Requirements, Online application |
| Campus | Campus & infrastructure, Facilities by faculty, Student life |
| News & events | News list, events list, detail pages (template entries) |
| Contact | Validated form with spam protection, contact details, embedded campus map |
| Technical | XML sitemap, robots.txt, 404 page, social sharing image, structured data |

All 13 faculties and all 17 programs from the infrastructure report appear in the home page, menus, faculty pages, program directory, program pages, admissions lists and the sitemap. The Veterinary Science program is **BS Poultry Management** (not DVM).

## 2. Information the University needs to supply

Each item is shown on the site as a marked placeholder until supplied. Where to enter each one is in `docs/CONTENT-GUIDE.md`.

**Identity and contact**
- Official logo: supplied as a 1280 px PNG and cut into transparent emblem and full-lockup files in `public/brand/`. A vector master (SVG, PDF or AI) is still wanted for the sharpest favicons and for print
- Official website domain. `https://cuetech.edu.pk` is a placeholder until the real domain is confirmed (set `NEXT_PUBLIC_SITE_URL`). The University's email domain, `centraluniversitylahore.com`, suggests what the website domain will be
- Telephone number and office hours. The postal address (Maulana Shaukat Ali Road, adjacent to Jinnah Institute of Cardiology, Lahore), the email address (info@centraluniversitylahore.com) and the map location have been supplied and are live on the site
- Verified social media accounts
- Year of establishment and a verified history

**Academic**
- For each of the 17 programs: duration, credit hours, curriculum, eligibility, accreditation/recognition, fees
- Approval or replacement of all text marked "Draft copy" (program descriptions, faculty introductions, vision, mission, objectives, required-documents list)
- Deans and academic staff profiles
- Leadership names and photographs (Vice-Chancellor, Registrar, Controller of Examinations, Director of Admissions; roles also to be confirmed)

**Admissions**
- Admission dates for the next intake and which programs are open
- Application portal URL
- Scholarship and financial aid information

**Campus and student life**
- Photographs of the campus, laboratories, library and student life. The home page hero opens with the supplied photograph of the main building (`public/images/hero/main-building.jpg`, 1016 × 1548 px; a wider, higher-resolution version would look sharper on large screens). Its other four slides are stock photographs from Unsplash (free licence, source URLs in `src/content/hero.ts`), and all other images are illustrations
- Details of student services (student affairs, careers, counselling, societies, sports, transport, hostels)

**Questions about the infrastructure report (v8)**
- **Library total does not add up.** The report states 6,500 volumes, but its rows add up to 7,100 (Computer Science 800 + Veterinary Science 800 + 11 faculties × 500). The site shows per-faculty figures and no total until this is confirmed.
- **Meaning of the "CRs" column** (total 34; Law & Sharia has 10). It could mean credit hours or classrooms. It is stored in the data but not published.
- **Laboratory sizes need units and scope.** Computer Science is listed as "600 / 800 sq ft", Veterinary Science as "30 × 20" (no unit), and Pharmaceutical Sciences as "1,750 sq ft" for six labs (total or each?). Agricultural Science has no size. The site shows these exactly as written, labelled "as documented".

## 3. Integrations still needed

| Integration | Current state | What to do |
| --- | --- | --- |
| Contact form delivery | Validates and protects against spam; tells visitors delivery is not connected | Set `CONTACT_WEBHOOK_URL`; add a CAPTCHA and shared rate limiting before launch |
| Online application | Placeholder page with checklist and contact link | Set `admissions.portalUrl` |
| Map | Embedded Google Map of the campus on the contact page, with "Open in Google Maps" and "Get directions" links | Optional: replace `contact.mapEmbedUrl` with the official "Embed a map" URL from Google Maps for a labelled pin |
| Analytics | None | Add if wanted (consider a consent notice) |
| Content management | Content files in `src/content/` | Sufficient for now; a headless CMS can be added later without changing page layouts |

## 4. Confidentiality

No cost, budget or rate figure from the report is stored in the website code or shown on any page. The site checker (`npm run check:links`) fails if wording such as "Rs.", "PKR", "crore", "budget" or the report's totals ever appears on a page. Planning figures (laboratories, library volumes, planned positions) are always labelled as planning allocations, not operational facilities.

## 5. Design system

| Element | Choice |
| --- | --- |
| Concept | The official CueTech logo: deep navy and gold on warm ivory. The jali (carved lattice) and the Mughal-style hero line drawing remain as quiet decorative motifs |
| Colours | Navy `#0f1a36` (primary, from the logo), gold `#85652f` (action; darkened from the logo's gold so white text passes contrast), logo gold `#ba9b64` (accent on dark), ivory `#f8f4ec` and paper `#fcfaf6` (backgrounds), stone greys for text. Token names (`forest`, `sandstone`, `brass`) are unchanged so existing classes still work |
| Logo | `public/brand/`: `cuetech-mark.png` (emblem), `cuetech-logo.png` (full lockup) and `-light` versions for navy backgrounds. Favicon and Apple touch icon are `src/app/icon.png` and `src/app/apple-icon.png`; the social sharing image is `public/og-image.png` |
| Type | Newsreader (serif, headings) and Instrument Sans (text), self-hosted. Tracking tightens as size grows |
| Shapes | 2 px radii, hairline borders, minimal shadows; no glass effects |
| Imagery | Original illustrated plates per discipline, each with its own colour family and motif, plus an original hero line drawing of a Mughal-style gateway and garden. Every plate is labelled "Illustration" |
| Breakpoints | 640, 768, 1024, 1280, 1536 px |
| Motion | Strong ease-out curve `cubic-bezier(0.23, 1, 0.32, 1)`; press feedback 160 ms; menus 200 ms; drawer 420 ms in / 280 ms out; one hero entrance on the home page only; all hover motion limited to mouse devices; reduced-motion users get fades instead of movement. Home hero slideshow: 6 s per slide, 1 s ease-in-out dissolve (0.5 s ease-out when the visitor uses the arrows), slow 8 s zoom, incoming words rise in with a 60 ms stagger while the outgoing words fade in 200 ms; pauses while the arrows or pause button are hovered or any control is focused, while off screen or in a hidden tab, and on the pause button; never auto-plays for reduced-motion users |

All tokens are in `src/app/globals.css`.

## 6. Testing summary

Tested on the production build (`npm run build` and `npm start`).

| Test | Result |
| --- | --- |
| Production build | Passes; 50 public pages pre-rendered as static HTML |
| Type check | Passes |
| Site crawler (50 pages) | No broken links or anchors; every page has a unique title, description, canonical URL, sharing image and exactly one H1; no financial wording |
| Layout sweep, 47 pages at 360, 768, 1024 and 1440 px | No horizontal scrolling, no console errors |
| Accessibility (axe, WCAG 2.1 AA + best practice), 18 page types at desktop and phone width | 0 violations |
| Interaction tests | 30 of 30 pass: skip link, keyboard mega menu and Escape, menu active states, program search, faculty filter, empty state, URL-restored filters, plurals, FAQ accordion, contact validation, error summary focus, honest delivery message, API validation, honeypot, back-to-top, mobile drawer, reduced motion |
| Worst-case data (break-ui), 320 and 1280 px | Found and fixed long-word and email overflow and a grid sizing issue; all components now hold |
| Lighthouse, phone (simulated slow 4G) | Performance 97–100, Accessibility 100, Best Practices 100, SEO 100 on the pages tested; layout shift 0 |
| Lighthouse, desktop | 100 in all four categories on the pages tested |

Not tested: real phones (iOS Safari and Android Chrome on hardware), screen readers in person, and older browsers. These should be checked before launch.

## 7. Skills inventory

Sixteen skills were downloaded for this project. All sixteen were read in full. Two of them (`prototype`, `pick-ui-library`) and `review-animations` are marked as user-invoked only, so their guidance was applied by hand rather than by invoking them.

| Skill | How it was used |
| --- | --- |
| `emil-design-eng` | Set the craft bar: press feedback on every button, strong custom curves, never `scale(0)`, origin-aware menus, hover gated to mouse devices, blur-masked crossfade on the faculty preview |
| `animate` | Each motion went through its gate (frequency, purpose, tool, properties, curve). CSS chosen over a motion library, so no animation library is installed |
| `review-animations` | Used as the audit standard. Findings: repeated page-header entrance on every interior page (removed) and default easing on colour changes (changed to `ease`). No `transition: all`, `ease-in` or `scale(0)` |
| `remove-animations` | Decided against scroll reveals and card hover zoom; removed the interior page entrance; FAQ and filter results change instantly |
| `find-animation-opportunities` | Added motion only where it passed the gate: menu opening from its trigger, drawer, accordion height, back-to-top appearance |
| `improve-animations` | Its eight audit categories structured the motion review above |
| `animation-performance` | Only `transform` and `opacity` animate (plus accordion height, which is the documented exception); motion runs in CSS, off the main thread |
| `animation-vocabulary` | Used to name effects consistently in code comments (stagger, origin-aware, crossfade, reduced motion) |
| `apple-design` | Typography with size-specific tracking and leading; press feedback on pointer-down; `prefers-contrast` support; wayfinding through breadcrumbs, active states and in-page navigation |
| `mobile-native` | Viewport with safe areas, `theme-color`, 16 px inputs (no iOS zoom), no tap flash, `touch-action: manipulation`, `svh` hero height, `overscroll-behavior: contain` in the drawer, correct mobile keyboards on form fields |
| `break-ui` | Built `/dev/stress` with a Demo/Worst case switch; found and fixed three overflow bugs; checked plurals ("1 program") and missing dates and venues |
| `pick-ui-library` | Its picks were followed: Base UI for menus, drawer and accordions; Sonner for toasts; clsx for class names |
| `ask-sonner` | One `<Toaster>` at the root, `theme` set explicitly, `richColors`, loading toast updated by id to success, warning or error |
| `prototype` | Read. Its variant picker was not used, because the brief asked for one finished design rather than several to choose from. Available for later design exploration |
| `animate-expo` | Read. Not applicable: it is for React Native and Expo apps, and this is a website |
| `write-swift` | Read. Not applicable: it is for Swift and iOS code |

Other tools: the `docx` content was read with pandoc. The `Pletor AI` image connector, which could have produced illustrative photographs, needs to be signed in again, and photo libraries (Unsplash, Wikimedia) and the University's own domain were blocked by this environment's network policy. That is why the site uses original illustrations.

## 8. Not done (by instruction)

No deployment, hosting, DNS or cPanel work was done, and no production files were touched.
