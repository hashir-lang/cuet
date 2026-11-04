# Handover report

Status of the Central University of Emerging Technologies-CueTech website as delivered for local development. Updated 4 November 2026 after the restructure to the University's website brief (Annex-A).

## 1. What was built

| Area | Pages |
| --- | --- |
| Home | 1 page: hero slideshow with the motto, key figures, introduction, faculties, featured programs, why CueTech, facilities, campus, campus life, admissions steps, news and events, contact |
| About CueTech | Introduction (hub) plus 15 sub-pages: Sponsors, History and Establishment; Charter and Legal Status; Vision, Mission and Core Values; Goals and Strategic Objectives; messages from the Chancellor, the Chairman BoG and the Vice Chancellor; University Leadership; Governance and Statutory Bodies (six bodies with anchors); QEC; ORIC; Administration; Policies and Regulations; Quality Assurance and Institutional Development; Campus and Facilities (with Facilities by Faculty) |
| Navigate CueTech | 1 page listing the eight online services, linked from the top bar, the mobile drawer and the footer |
| Campus Life | Hub plus the 21 pages of the brief, from Life at CueTech to Virtual Campus Tour |
| Admissions | Overview plus the 10 sub-tabs of the brief: Why Choose CueTech?, Academic and Student Support System, Programs and Eligibility Criteria, Admission Schedule, How to Apply, Fees Structure, How to Pay your Fee?, Scholarships and Financial Assistance, FAQs, Apply Online |
| Academics | Hub plus Academic Rules and Regulations (eight items), Academic Calendar, Online and Blended Learning, Curriculum and Schemes of Study, Teaching and Learning, Academic Advising and Student Support, Examination and Assessment |
| Faculties and Departments | Directory plus 13 faculty pages, named as in the Act, each showing its department |
| Degree Programs | Searchable directory with level and faculty filters; Undergraduate (13) and Associate Degree (9) listings; 22 program pages laid out as schemes of study; the 7 proposed graduate programs listed |
| Teaching Faculty | Hub plus 13 department pages for photographs, profiles and official emails |
| Global Engagement | Hub plus the 10 pages of the brief |
| News, Events and Media | University News, four category listings (Official Announcements, Press Releases, Media Coverage, Notices and Circulars), Events Calendar, two event category listings (Seminars and Conferences, Workshops and Training Programs), Photo Gallery, Video Gallery, Newsletter, and detail pages (template entries) |
| Careers at CueTech | 1 page for current and previous job announcements |
| Contact and Visit Us | Contact Us (form), Visit Our Campus (map and directions), Chat with CueTech, Ask Us (FAQs and form), University Offices (Admissions, Vice Chancellor, Registrar, Careers and Recruitment, with anchors), Feedback and Complaints (form) |
| Technical | XML sitemap, robots.txt, 404 page, social sharing image, structured data, admissions pop-up (configurable, off by default) |

The production build pre-renders 158 routes; the crawler finds 150 public pages.

**Main navigation** (desktop from 1280 px, drawer below): About CueTech, Campus Life, Admissions, Academics, Teaching Faculty, Global Engagement, News & Events, Careers at CueTech, Contact. Each opens a panel listing its sub-pages; Academics also lists the thirteen faculties. The header is two rows on desktop: the wordmark row scrolls away and the menu row stays fixed.

**Names used.** The University's name appears as "Central University of Emerging Technologies-CueTech" in titles, the footer, the hero and structured data (legal name "Central University of Emerging Technologies"). Faculties and departments follow Annex-A exactly, including "Faculty of Management and Allied Health Sciences", which the University may wish to confirm (the report's faculty was "Allied Health"; "Medical and Allied Health Sciences" would be the usual wording). Programs follow Annex-A; the brief does not assign programs to faculties, so these placements are assumptions to confirm: AD Data Science under Computing and Emerging Technologies; AD Accounting and Finance and AD Business Analytics under Management Sciences; B.E. Information Security Management Technology under Engineering and Technology; BS Public Health under Management and Allied Health Sciences; BS Poultry Science under Veterinary Sciences; BS Agribusiness Management under Agricultural Sciences.

**Removed from the previous version** (not in the brief): BS Software Engineering, Doctor of Physical Therapy, BA LLB, BS Engineering Technology and BS Mathematics. The former URLs `/student-life`, `/admissions/requirements` and the old faculty and program slugs no longer exist; nothing has been deployed, so no redirects are needed.

## 2. Information the University needs to supply

Each item is shown on the site as a marked placeholder until supplied. Where to enter each one is in `docs/CONTENT-GUIDE.md`. The brief says the content will be finalized later; every page is ready to receive it.

**Identity and contact**
- Official website domain. `https://cuetech.edu.pk` is a placeholder (set `NEXT_PUBLIC_SITE_URL`)
- Telephone number, office hours and, if wanted, a WhatsApp number for Chat with CueTech. The postal address, email and map location are live
- URLs of the eight Navigate CueTech services (Student Portal, LMS, Faculty Portal, Digital Resource Center, Incubation Center, Anti-Harassment Regulations, Grievance Redressal, Others)
- Verified social media accounts; a vector logo master for the sharpest icons

**About CueTech**
- Messages and photographs from the Chancellor, the Chairman of the Board of Governors and the Vice Chancellor
- Names and photographs for the eight leadership roles listed; the composition of each statutory body
- Sponsors, date of establishment and history; the charter, Act and recognition documents
- Approval or replacement of the draft vision, mission, core values, goals, philosophy and the draft descriptions of the QEC, ORIC, administration and statutory bodies
- The policy documents listed on Policies and Regulations, as each is approved

**Academic**
- For each of the 22 programs, the scheme of study: scope, duration, credit hours, curriculum, admission criteria, passing criteria, internship, projects, accreditation status and fees
- Approval or replacement of all text marked "Draft copy"
- CueTech's own academic rules (semester, examination, probation, degree requirements, industry linkages) as PDFs or pages; the academic calendar
- Deans; teaching faculty profiles with photographs and official emails, by department
- Launch dates for the proposed graduate programs

**Admissions**
- Admission schedule and which programs are open; the application portal URL; the fee structure; payment instructions; scholarships and financial assistance; the final documents list
- The pop-up text to show while admissions are open (`admissions.popup` in `src/content/site.ts`)

**Campus life, careers, global engagement, news**
- Details for the 21 Campus Life pages (services, societies, sports, food court, transport, accessibility, code of conduct, virtual tour)
- Photographs of the campus; until then AI-generated images may be used if labelled as such
- Job announcements; international partners (to come from the group's international office); real news, events, press releases, notices, newsletter issues and videos

**Questions about the infrastructure report (v8)**, unchanged: the library total (6,500 stated, 7,100 by rows), the meaning of the "CRs" column, and the units and scope of the laboratory sizes.

## 3. Integrations still needed

| Integration | Current state | What to do |
| --- | --- | --- |
| Contact form delivery | Validates and protects against spam; tells visitors delivery is not connected. Used on Contact Us, Ask Us and Feedback and Complaints | Set `CONTACT_WEBHOOK_URL`; add a CAPTCHA and shared rate limiting before launch |
| Online application | Placeholder page with checklist and contact link | Set `admissions.portalUrl` |
| Admissions pop-up | Built; shows once per browser session when configured; preview with `?preview=admissions-popup` | Set `admissions.popup` when admissions open |
| Map | Embedded Google Map on Visit Our Campus, with "Open in Google Maps" and "Get directions" links | Optional: replace `contact.mapEmbedUrl` with the official "Embed a map" URL for a labelled pin |
| Online services | Navigate CueTech links lead to a status page | Set each `portals[].href` |
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
| Header | Dark top bar (motto or announcement, Navigate CueTech links); wordmark row with Apply Online; from 1280 px a separate sticky menu row with the nine sections. Below 1280 px the wordmark row is sticky and the menu is a drawer. Heights are CSS variables (`--topbar-h`, `--brand-h`, `--nav-h`, `--header-h`, `--chrome-h`) |
| Section pages | Every page inside a section shares one layout: page header, side navigation (collapsed "In this section" list on phones, sticky sidebar from 1024 px), content, closing call to action |
| Shapes | 2 px radii, hairline borders, minimal shadows; no glass effects |
| Imagery | The University's photograph of the main building in the hero, the home page and the galleries; original illustrated plates per discipline elsewhere, each labelled "Illustration"; four Unsplash stock photographs in the hero, labelled |
| Breakpoints | 640, 768, 1024, 1280, 1536 px |
| Motion | Strong ease-out curve `cubic-bezier(0.23, 1, 0.32, 1)`; press feedback 160 ms; menus 200 ms; drawer 420 ms in / 280 ms out; pop-up 200 ms fade and slight scale; one hero entrance on the home page only; all hover motion limited to mouse devices; reduced-motion users get fades instead of movement. Home hero slideshow: 6 s per slide, 1 s ease-in-out dissolve (0.5 s ease-out when the visitor uses the arrows), slow 8 s zoom, staggered text; pauses on hover, focus, off screen or hidden tab; never auto-plays for reduced-motion users |

All tokens are in `src/app/globals.css`.

## 6. Testing summary

Tested on the production build (`npm run build` and `npx next start -p 3100`) on 4 November 2026, after the restructure.

| Test | Result |
| --- | --- |
| Production build | Passes; 158 routes pre-rendered as static HTML |
| Type check | Passes |
| Site crawler (150 pages) | No broken links or anchors; every page has a unique title, a description, a canonical URL, a sharing image and exactly one H1; no financial wording |

The following were run on the previous version of the site (before the restructure) and should be repeated before launch: layout sweep at 360, 768, 1024 and 1440 px; axe accessibility checks; interaction tests (menu, drawer, program search, FAQ accordion, contact validation); worst-case data on `/dev/stress`; Lighthouse. In particular, check the nine-item desktop menu at exactly 1280 px wide (it is sized to fit with room to spare and scrolls sideways rather than wrapping if a browser renders the labels wider) and the new admissions pop-up with a screen reader.

Not tested: real phones (iOS Safari and Android Chrome on hardware), screen readers in person, and older browsers. These should be checked before launch.

## 7. Skills inventory

Sixteen skills were downloaded for this project. All sixteen were read in full. Two of them (`prototype`, `pick-ui-library`) and `review-animations` are marked as user-invoked only, so their guidance was applied by hand rather than by invoking them.

| Skill | How it was used |
| --- | --- |
| `emil-design-eng` | Set the craft bar: press feedback on every button, strong custom curves, never `scale(0)`, origin-aware menus, hover gated to mouse devices, blur-masked crossfade on the faculty preview |
| `animate` | Each motion went through its gate (frequency, purpose, tool, properties, curve). CSS chosen over a motion library, so no animation library is installed |
| `review-animations` | Used as the audit standard. Findings: repeated page-header entrance on every interior page (removed) and default easing on colour changes (changed to `ease`). No `transition: all`, `ease-in` or `scale(0)` |
| `remove-animations` | Decided against scroll reveals and card hover zoom; removed the interior page entrance; FAQ and filter results change instantly |
| `find-animation-opportunities` | Added motion only where it passed the gate: menu opening from its trigger, drawer, accordion height, back-to-top appearance, pop-up entrance |
| `improve-animations` | Its eight audit categories structured the motion review above |
| `animation-performance` | Only `transform` and `opacity` animate (plus accordion height, which is the documented exception); motion runs in CSS, off the main thread |
| `animation-vocabulary` | Used to name effects consistently in code comments (stagger, origin-aware, crossfade, reduced motion) |
| `apple-design` | Typography with size-specific tracking and leading; press feedback on pointer-down; `prefers-contrast` support; wayfinding through breadcrumbs, active states, side navigation and in-page navigation |
| `mobile-native` | Viewport with safe areas, `theme-color`, 16 px inputs (no iOS zoom), no tap flash, `touch-action: manipulation`, `svh` hero height, `overscroll-behavior: contain` in the drawer, correct mobile keyboards on form fields |
| `break-ui` | Built `/dev/stress` with a Demo/Worst case switch; found and fixed three overflow bugs; checked plurals ("1 program") and missing dates and venues |
| `pick-ui-library` | Its picks were followed: Base UI for menus, drawer, accordions and the pop-up dialog; Sonner for toasts; clsx for class names |
| `ask-sonner` | One `<Toaster>` at the root, `theme` set explicitly, `richColors`, loading toast updated by id to success, warning or error |
| `prototype` | Read. Its variant picker was not used, because the brief asked for one finished design rather than several to choose from. Available for later design exploration |
| `animate-expo` | Read. Not applicable: it is for React Native and Expo apps, and this is a website |
| `write-swift` | Read. Not applicable: it is for Swift and iOS code |

Other tools: the `docx` content was read with pandoc. The `Pletor AI` image connector, which could have produced illustrative photographs, needs to be signed in again, and photo libraries (Unsplash, Wikimedia) and the University's own domain were blocked by this environment's network policy. That is why the site uses original illustrations.

## 8. Not done (by instruction)

No deployment, hosting, DNS or cPanel work was done, and no production files were touched.
