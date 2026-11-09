# Handover report

Status of the Central University of Emerging Technologies-CueTech website as delivered for local development. Updated 9 November 2026 after the faculty renames and the addition of the HEC schemes of study.

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
| Degree Programs | Searchable directory with level and faculty filters; Undergraduate (13) and Associate Degree (9) listings; 22 program pages laid out as schemes of study, 20 of them filled from the HEC revised curricula (see section 2a); the 7 proposed graduate programs listed |
| Teaching Faculty | Hub plus 13 department pages for photographs, profiles and official emails |
| Global Engagement | Hub plus the 10 pages of the brief |
| News, Events and Media | University News, four category listings (Official Announcements, Press Releases, Media Coverage, Notices and Circulars), Events Calendar, two event category listings (Seminars and Conferences, Workshops and Training Programs), Photo Gallery, Video Gallery, Newsletter, and detail pages (template entries) |
| Careers at CueTech | 1 page for current and previous job announcements |
| Contact and Visit Us | Contact Us (form), Visit Our Campus (map and directions), Chat with CueTech, Ask Us (FAQs and form), University Offices (Admissions, Vice Chancellor, Registrar, Careers and Recruitment, with anchors), Feedback and Complaints (form) |
| Technical | XML sitemap, robots.txt, 404 page, social sharing image, structured data, admissions pop-up (configurable, off by default) |

The production build pre-renders 158 routes; the crawler finds 150 public pages.

**Main navigation** (desktop from 1280 px, drawer below): About CueTech, Campus Life, Admissions, Academics, Teaching Faculty, Global Engagement, News & Events, Careers at CueTech, Contact. Each opens a panel listing its sub-pages; Academics also lists the thirteen faculties. The header is two rows on desktop: the wordmark row scrolls away and the menu row stays fixed.

**Page layout** (changed 9 November 2026 at the University's request). Every sub-page of a section is a full page of its own: a header with the section's photograph, the content in a single column (a reading measure for text pages, the full width for hubs, tables and card grids), a "More in …" band linking to the other pages of the section, and the closing call to action. The earlier side navigation with the section's tabs was removed.

**Photographs** (9 November 2026). The illustrated plates were replaced by stock photographs throughout: twenty photographs from Unsplash (free licence, no attribution required) in `public/images/stock/`, listed with their sources and descriptions in `docs/stock-photo-credits.json`, plus the four Unsplash photographs already used in the home page slideshow. Every faculty, program, section header, news and event template, the home page gallery, the campus pages and the careers page now show a photograph; the University's own photograph of the main building is used wherever the campus itself is the subject (About, Contact, campus news, the campus page). All stock images are labelled "stock photograph" in their alt text and captions and should be replaced with the University's own photography as the campus is completed. The plate illustrations are kept in `src/components/media/illustrations/` and still appear automatically for any image slot without a photograph. Two stock photographs to review: the public health photograph shows a legible staff badge, and the campus-life photograph shows people fairly small in the frame.

**Draft content on every page.** On 9 November 2026 the University asked for content on all pages. Every page that previously showed only a "being prepared" panel now carries draft copy written from what is known about the University (its Act and thirteen faculties, its programs and the HEC curricula they follow, its campus and infrastructure plan, the HEC policy framework and normal practice in Pakistani universities): the About pages including the three leaders' messages (names left blank), all Campus Life pages, fees, payment and scholarships, examinations and the academic calendar structure, the Global Engagement pages, the careers page, the media pages and the department pages. Partner institutions were excluded on instruction. A small "awaiting confirmation" note remains wherever a hard fact is missing: dates, names, fee amounts, bank details, contact numbers, documents. The "Draft copy" badges were switched off the same day (`showEditorialMarkers: false`), so this text reads as final on the site; it must be reviewed and approved by the University before launch.

**Names used.** The University's name appears as "Central University of Emerging Technologies-CueTech" in titles, the footer, the hero and structured data (legal name "Central University of Emerging Technologies"). Faculties and departments follow Annex-A, with three names corrected by the University on 5 November 2026: "Faculty of Medicine and Allied Health Sciences" (Annex-A read "Management and Allied Health Sciences"), "Faculty of Aviation and Aeronautical Sciences" (Annex-A read "Aviation and Aeronautics") and "Faculty of Agriculture Sciences" (Annex-A read "Agricultural Sciences"). Faculty names are written in full with "and" (never "&") everywhere, including the menus. Programs follow Annex-A; the brief does not assign programs to faculties, so these placements are assumptions to confirm: AD Data Science under Computing and Emerging Technologies; AD Accounting and Finance and AD Business Analytics under Management Sciences; B.E. Information Security Management Technology under Engineering and Technology; BS Public Health under Medicine and Allied Health Sciences; BS Poultry Science under Veterinary Sciences; BS Agribusiness Management under Agriculture Sciences.

**Removed from the previous version** (not in the brief): BS Software Engineering, Doctor of Physical Therapy, BA LLB, BS Engineering Technology and BS Mathematics. The former URLs `/student-life`, `/admissions/requirements` and the old faculty and program slugs no longer exist; nothing has been deployed, so no redirects are needed.

## 2a. Schemes of study from the HEC revised curricula

On 9 November 2026 the University supplied a folder of HEC (Higher Education Commission) curriculum documents. The latest revision for each discipline the University offers was used to fill the program pages: semester-by-semester course tables with credit hours and categories, program structure, eligibility, degree award requirements, internship and capstone rules, and specialization streams. Older revisions in the folder (2011 to 2017) were not used. The nine PDFs used are copied to `public/documents/hec-curricula/` and linked from the program pages; the full folder is excluded from git (`.gitignore`) because it is 280 MB. The data lives in `src/content/schemes.ts`.

Every program page that uses an HEC scheme says so in a panel ("Scheme of study based on the …") and in its FAQs, and states that the University's own scheme, approved by its Academic Council, will replace it. These are HEC's minimum national standards, not CueTech's approved schemes.

The extraction files in `docs/hec-curricula-notes/` (one JSON per HEC document) hold the same data plus a `notes` list for each program: the PDF pages used, the elective and specialization course lists, title differences, and any inconsistency found in the source (for example, a semester that exceeds the stated course load, or a "14 courses" count against 15 printed rows). Read them before finalising a scheme.

| Program | HEC document used | Notes for the University |
| --- | --- | --- |
| BS Computer Science | Revised Curriculum for Degree Programs in Computer Science (October 2025) | 130 credit hours; NCEAC accreditation; 14 specialization clusters listed |
| AD Computer Science, AD Data Science | Same document, "Associate Degree – Computing" | HEC fixes the title "Associate Degree – Computing" for all computing ADs and gives it its own 72-credit scheme (not the first four BS semesters). There is no separate HEC scheme for an AD in Data Science; the page shows the standard AD with a note that the data science courses are offered as the electives. The University should confirm the degree titles it will award |
| BBA | Curriculum Booklet: Business and Management (October 2025) | NBEAC accreditation; nine specialization clusters |
| BS Aviation Management, BS Agribusiness Management | Same document, "BS Programs in Business and Management Disciplines" | HEC lists "Aviation Management" and "Agribusiness" (not "Agribusiness Management") among the BS titles allowed to continue (section 2.3); one generic 130-credit scheme applies, with 27 credit hours of domain courses set by the institution and no named specializations. The HEC business document, not the Agriculture booklet, is the right source for Agribusiness |
| AD Business Administration, AD Accounting and Finance, AD Business Analytics, AD Aviation Management | Same document, "Associate Degrees in Business and Management Disciplines" | One generic 70 to 72 credit scheme with 21 credit hours of domain courses set by the institution. HEC's recommended AD titles are Accounting, Marketing, Finance, Human Resource Management, Entrepreneurship, Supply Chain Management, Islamic Banking and Finance, Project Management, Business Analytics and Digital Marketing. "Business Administration" (which HEC uses for the BBA exit award) and "Aviation Management" are not in that list; the University should confirm these titles |
| BS English, AD English | Curriculum for English Degree Programs (June 2025) | AD defined as the first four semesters of the BS (70 credit hours) |
| BS Education, AD Education | Revised Curriculum for Degree Programs in Education (April 2025) | HEC titles the four-year degree "Bachelor of Education (B.Ed)", not BS Education; the AD ("ADE") is the first four semesters, 72 credit hours. No CGPA threshold is stated |
| LLB | Revised Curriculum of LLB Four-Year Degree Program (July 2025) | Four-year LLB replacing the five-year program; LAT entry test with 50%; Pakistan Bar Council |
| BS Statistics, AD Statistics | Curriculum for Statistics: AD, BS, M.Phil. (2025) | AD defined as the first four semesters (70 credit hours); specializations Data Science, Biostatistics, Financial Statistics |
| BS Public Health | Curriculum of Public Health: AD, BS, MS (2025) | Pre-medical group required; 125 credit hours; 20 optional specializations; no accrediting council named |
| BS Nursing | Curriculum of BS in Nursing / MS in Nursing (2024) | 134 credit hours plus a one-year paid internship after coursework; Pakistan Nursing and Midwifery Council |
| Doctor of Pharmacy | Revised Curriculum for Degree Programs in Pharmacy (September 2025) | Five years, 195 credit hours; pre-medical with 60%; Pharmacy Council of Pakistan |
| BS Poultry Science | None in the folder | The folder has no Poultry Science curriculum (Meat Science is postgraduate; the Agriculture 2026 booklet covers ten crop and food disciplines). Page shows "to be confirmed" panels |
| B.E. Information Security Management Technology | None in the folder | The Engineering Technologies booklet (2016) covers Electronics, Electrical, Civil and Mechanical only; the Cyber Security booklet (2026) is for BS Cyber Security, a different program. Page shows "to be confirmed" panels |

Also in the folder but not used, because the University does not offer the program: Allied Health Sciences, Agriculture (ten B.Sc. Hons. disciplines), Commerce, Cyber Security, Computing Disciplines 2023 (superseded by the 2025 Computer Science booklet), Aerospace and Avionics Engineering, and some sixty other disciplines.

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
- CueTech's own approved scheme of study for each program, to replace the HEC minimum scheme now shown (see section 2a); schemes for BS Poultry Science and B.E. Information Security Management Technology, which have none; the accreditation status of each program; and the fee for each program
- Review and approval of the draft text on every page (the "Draft copy" markers are switched off; set `showEditorialMarkers: true` in `src/content/site.ts` to see which text is draft)
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

Tested on the production build (`npm run build` and `npx next start -p 3100`) on 9 November 2026, after the faculty renames, the HEC schemes of study, the new page layout, the draft content and the stock photographs.

| Test | Result |
| --- | --- |
| Production build | Passes; 158 routes pre-rendered as static HTML |
| Type check | Passes |
| Site crawler (150 pages, 9 linked PDFs) | No broken links or anchors; every page has a unique title, a description, a canonical URL, a sharing image and exactly one H1; no financial wording; every HEC curriculum PDF resolves |
| Placeholders and images | No page renders the "Content for this page is being prepared" panel or an illustration plate; every image path referenced in the code exists in `public/` |
| Scheme data | Semester totals in the 20 HEC schemes were re-added against the course rows during extraction and matched the documents; the first semester of LLB, Pharm.D and BS Computer Science was compared line by line with the source text |

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
