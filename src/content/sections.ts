import { university } from './university';
import { supportSystem, whyCueTech } from './admissions';
import { regulations } from './academics';
import { departments } from './faculties';
import { newsCategories } from './news';
import { eventCategories } from './events';
import { site } from './site';

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/**
 * The website's sitemap (Annex-A of the University's brief): every main section, its
 * sub-pages and the links shown in the menus. The main navigation, the footer, the section
 * side navigation, the hub pages, the generic sub-pages and the XML sitemap are all built
 * from this file, so adding a page here is enough to add it everywhere.
 *
 * A sub-page with `href` lives at a bespoke route (its own page.tsx); every other sub-page is
 * rendered by the generic template in components/sections/SectionPage.tsx from the fields here.
 * Text in `body`, `parts` and `list` is DRAFT copy for the University to approve or replace.
 */

export type SectionLink = { label: string; href: string; description?: string; external?: boolean };

export type SectionPart = {
  /** Anchor id, so menus can link to #id. */
  id: string;
  title: string;
  /** Draft paragraph(s). */
  text?: string | string[];
  /** Draft bullet list. */
  list?: string[];
  /** Shown when the part is awaiting the University's content. */
  pending?: string;
  links?: SectionLink[];
};

export type SectionItem = { label: string; note?: string; href?: string | null; external?: boolean };

export type SectionPage = {
  slug: string;
  title: string;
  /** Shorter label for menus, when the title is long. */
  navLabel?: string;
  /** One sentence: the lede under the heading, the card text on the hub and the menu description. */
  summary: string;
  /** Draft paragraphs. */
  body?: string[];
  /** Sub-sections with anchors. */
  parts?: SectionPart[];
  /** A list of documents, services or offices with a status note each. */
  items?: SectionItem[];
  itemsTitle?: string;
  /** Leadership-style role cards. */
  roles?: readonly { role: string; name: string | null }[];
  /** A message from an office holder (About section). */
  message?: keyof typeof university.messages;
  /** Pages that need data from elsewhere in src/content/. */
  component?: 'gallery' | 'schedule' | 'faqs' | 'calendar' | 'partners' | 'chat';
  /** Message for the "awaiting content" panel. A default is used when omitted and the page has no body or parts. */
  pending?: string;
  related?: SectionLink[];
  /** Set when the page has its own page.tsx; the generic route skips it. */
  href?: string;
};

export type SectionKey = 'about' | 'campus-life' | 'admissions' | 'academics' | 'teaching-faculty' | 'global-engagement' | 'news' | 'media' | 'careers' | 'contact';

export type Section = {
  key: SectionKey;
  /** Label in the main navigation. */
  label: string;
  /** Heading of the hub page. */
  title: string;
  path: string;
  summary: string;
  pages: SectionPage[];
  /** Menu links when they differ from the pages (anchors, bespoke routes). */
  menuLinks?: SectionLink[];
  /** Side navigation when it differs from the pages (e.g. media pages show the News & Events links). */
  sideNav?: SectionLink[];
  /** Hidden from the main navigation (linked from elsewhere). */
  hidden?: boolean;
  /** The parent shown in breadcrumbs and side navigation when the section has no hub page of its own. */
  hub?: { label: string; href: string };
};

const pendingOffice = 'Office holder and contact details will be published once appointed.';

/* ----------------------------------------------------------------------------------- About */

const about: Section = {
  key: 'about',
  label: 'About CueTech',
  title: 'About CueTech',
  path: '/about',
  summary: 'Who we are, how the University is governed and what it stands for.',
  pages: [
    { slug: 'introduction', title: 'Introduction to CueTech', summary: 'An overview of the University, its faculties and its programs.', href: '/about' },
    {
      slug: 'history',
      title: 'Sponsors, History and Establishment',
      summary: 'Who sponsors the University, how it came to be established and the milestones since.',
      parts: [
        { id: 'sponsors', title: 'Sponsors', text: university.sponsors ?? undefined, pending: university.sponsors ? undefined : 'Details of the University’s sponsoring body and its other institutions will be published here.' },
        { id: 'establishment', title: 'Establishment', pending: 'The date of establishment and a verified account of the University’s founding will be published here once confirmed.' },
        { id: 'milestones', title: 'History and Milestones', text: university.history ?? undefined, pending: university.history ? undefined : 'Key milestones in the University’s development will be recorded here as they are reached.' },
      ],
    },
    {
      slug: 'charter',
      title: 'University Charter and Legal Status',
      summary: 'The Act under which the University is established, its charter and its recognition status.',
      pending: 'The University’s charter, the Act under which it is established and its recognition by the regulatory authorities will be published here once the documents are released for publication.',
      related: [
        { label: 'Governance and Statutory Bodies', href: '/about/governance' },
        { label: 'Policies and Regulations', href: '/about/policies' },
      ],
    },
    {
      slug: 'vision-mission',
      title: 'Vision, Mission and Core Values',
      summary: 'The purpose that guides the University and the values it expects of its community.',
      parts: [
        { id: 'vision', title: 'Vision', text: university.vision.value },
        { id: 'mission', title: 'Mission', text: university.mission.value },
        { id: 'core-values', title: 'Core Values', list: university.coreValues.value.map((v) => `${v.title}: ${v.text}`) },
      ],
    },
    {
      slug: 'goals',
      title: 'Goals and Strategic Objectives',
      summary: 'What the University sets out to achieve in its first years.',
      parts: [
        { id: 'goals', title: 'Goals', list: university.goals.value },
        { id: 'strategic-objectives', title: 'Strategic Objectives', pending: 'The University’s strategic plan and its measurable objectives will be published here once approved by the Board of Governors.' },
      ],
    },
    { slug: 'chancellor-message', title: 'Message from the Chancellor', summary: 'A welcome from the Chancellor of the University.', message: 'chancellor' },
    { slug: 'chairman-message', title: 'Message from the Chairman Board of Governors', navLabel: 'Message from the Chairman BoG', summary: 'A message from the Chairman of the Board of Governors.', message: 'chairman' },
    { slug: 'vice-chancellor-message', title: 'Message from the Vice Chancellor', summary: 'A message from the Vice Chancellor.', message: 'viceChancellor' },
    {
      slug: 'leadership',
      title: 'University Leadership',
      summary: 'The officers who lead the University. Profiles are published as appointments are confirmed.',
      roles: university.leadership,
      related: [
        { label: 'Message from the Chancellor', href: '/about/chancellor-message' },
        { label: 'Message from the Vice Chancellor', href: '/about/vice-chancellor-message' },
      ],
    },
    {
      slug: 'governance',
      title: 'Governance and Statutory Bodies',
      summary: 'The Board of Governors, the Academic Council and the other bodies that govern the University.',
      parts: university.governance.value.map((g) => ({ id: g.id, title: g.title, text: g.text, pending: 'Composition and membership will be published once notified.' })),
    },
    {
      slug: 'qec',
      title: 'Quality Enhancement Cell-QEC',
      navLabel: 'Quality Enhancement Cell (QEC)',
      summary: 'Quality assurance of the University’s programs within the framework of the Higher Education Commission.',
      body: [
        'The Quality Enhancement Cell (QEC) is responsible for quality assurance across the University’s academic programs. It works within the quality assurance framework of the Higher Education Commission of Pakistan.',
        'The QEC coordinates self-assessment of programs, collects feedback from students, graduates and employers, supports the faculties in acting on it, and prepares the University for external reviews and accreditation.',
      ],
      parts: [
        {
          id: 'functions',
          title: 'Functions',
          list: [
            'Program self-assessment and review cycles',
            'Student course and teacher evaluations',
            'Graduate and employer feedback surveys',
            'Support for accreditation by professional councils',
            'Monitoring of academic standards against HEC requirements',
          ],
        },
        { id: 'contact', title: 'Contact the QEC', pending: 'The Director QEC and the Cell’s contact details will be published once appointed.' },
      ],
    },
    {
      slug: 'oric',
      title: 'Office of Research Innovation and Commercialization-ORIC',
      navLabel: 'Research, Innovation & Commercialization (ORIC)',
      summary: 'Leading the University’s research and connecting it with industry and society.',
      body: [
        'The Office of Research, Innovation and Commercialization (ORIC) leads the University’s research agenda and connects it with industry and society.',
        'It supports faculty and students in developing research proposals, manages research partnerships, protects intellectual property and helps turn ideas into products, services and start-ups.',
      ],
      parts: [
        {
          id: 'functions',
          title: 'Functions',
          list: ['Research policy and research management', 'Support for research proposals and partnerships', 'Intellectual property and technology transfer', 'Industry liaison and commercialization', 'Support for the Incubation Center'],
        },
        { id: 'contact', title: 'Contact ORIC', pending: 'The Director ORIC and the Office’s contact details will be published once appointed.' },
      ],
      related: [{ label: 'Incubation Center', href: '/navigate#incubation-center' }],
    },
    {
      slug: 'administration',
      title: 'University Administration',
      summary: 'The offices that run the University day to day.',
      parts: university.administration.map((o) => ({ id: o.id, title: o.title, text: o.text, pending: pendingOffice })),
    },
    {
      slug: 'policies',
      title: 'Policies and Regulations',
      summary: 'The University’s policies and regulations, published as each is approved.',
      itemsTitle: 'Policies the University will publish',
      items: university.policies.map((p) => ({ label: p.label, href: p.href, note: p.href ? undefined : 'Document to be published' })),
      related: [
        { label: 'Academic Rules and Regulations', href: '/academics/regulations' },
        { label: 'Anti-Harassment Regulations', href: '/navigate#anti-harassment-regulations' },
        { label: 'Grievance Redressal', href: '/navigate#grievance-redressal' },
      ],
    },
    {
      slug: 'quality-assurance',
      title: 'Quality Assurance and Institutional Development',
      summary: 'How the University keeps its standards while it grows.',
      body: [
        'Quality assurance at CueTech covers the whole student journey: admission, teaching, assessment, student support and graduation. Institutional development plans how the University grows its faculties, facilities and staff while keeping those standards.',
      ],
      pending: 'The quality policy, institutional performance reports and the institutional development plan will be published here as they are approved.',
      related: [{ label: 'Quality Enhancement Cell (QEC)', href: '/about/qec' }],
    },
    { slug: 'campus-facilities', title: 'Campus and Facilities', summary: 'The campus, its planned laboratories and the library allocation for every faculty.', href: '/campus' },
  ],
};

/* ---------------------------------------------------------------------------- Campus life */

const campusLife: Section = {
  key: 'campus-life',
  label: 'Campus Life',
  title: 'Students Facilitation and Campus Life',
  path: '/campus-life',
  summary: 'Services, spaces and support for students, from orientation to alumni.',
  pages: [
    {
      slug: 'life',
      title: 'Life at CueTech',
      summary: 'What it is like to study, work and spend your days on campus.',
      body: [
        'University is where friendships form, interests deepen and confidence grows. Life at CueTech is built around academic support, a community drawn from thirteen faculties and a campus designed for study.',
        'This section describes the services and spaces that support students, from orientation in the first week to the alumni network after graduation. Details are added as each service opens.',
      ],
    },
    {
      slug: 'our-campus',
      title: 'Our Campus',
      summary: `The University’s campus on Maulana Shaukat Ali Road, ${site.city}.`,
      body: [
        `The campus is on Maulana Shaukat Ali Road in ${site.city}, adjacent to the Jinnah Institute of Cardiology. The main building carries the University’s name and emblem above its entrance.`,
        'Facilities are being completed in phases. Photographs of the finished buildings will replace the illustrations on this website as each phase opens.',
      ],
      related: [
        { label: 'Campus and Facilities', href: '/campus' },
        { label: 'Campus Location and Directions', href: '/contact/visit' },
        { label: 'Campus Gallery', href: '/campus-life/gallery' },
      ],
    },
    {
      slug: 'orientation',
      title: 'Student Orientation',
      summary: 'How new students are welcomed and introduced to the University.',
      body: ['Orientation introduces new students to their faculty, their academic advisers, the library and laboratories, student services and the University’s rules.'],
      pending: 'The orientation schedule for the next intake will be published here and in the Events calendar.',
      related: [{ label: 'Events Calendar', href: '/events' }],
    },
    {
      slug: 'classrooms',
      title: 'Classrooms and Learning Spaces',
      summary: 'Teaching rooms, seminar spaces and places to study between classes.',
      body: ['Classrooms and learning spaces are planned around how each discipline is taught: lecture rooms for larger classes, seminar rooms for discussion and spaces for group work and quiet study.'],
      related: [{ label: 'Campus and Facilities', href: '/campus' }],
    },
    {
      slug: 'safety',
      title: 'Campus Safety and Security',
      summary: 'How the University keeps students and staff safe on campus.',
      body: ['The campus has a staffed security post at the entrance. Security staff, controlled access and emergency procedures are in place to keep students, staff and visitors safe.'],
      pending: 'Emergency contact numbers and the campus safety guide will be published here.',
    },
    {
      slug: 'computer-labs',
      title: 'Computer and Technology Laboratories',
      summary: 'Computing laboratories for programming, data and information security work.',
      body: ['The infrastructure plan allocates a computing laboratory to the Faculty of Computing and Emerging Technologies and two engineering technology laboratories to the Faculty of Engineering and Technology, alongside the laboratories of the other practice-led faculties.'],
      related: [{ label: 'Facilities by faculty', href: '/campus/facilities' }],
    },
    {
      slug: 'library',
      title: 'Central Library and Digital Resources',
      summary: 'Print collections for every faculty and access to digital resources.',
      body: ['Every faculty has its own library allocation in the University’s plan. The Central Library brings these collections together with reading space and access to digital resources.'],
      pending: 'Opening hours, the catalogue, borrowing rules and the list of digital databases will be published when the library opens.',
      related: [{ label: 'Digital Resource Center', href: '/navigate#digital-resource-center' }],
    },
    {
      slug: 'student-services',
      title: 'Student Services',
      summary: 'The offices and services that support students outside the classroom.',
      itemsTitle: 'Services',
      items: [
        { label: 'Student affairs office', note: 'Details to be published' },
        { label: 'Academic and career counselling', href: '/campus-life/counseling' },
        { label: 'Student mentorship', href: '/campus-life/mentorship' },
        { label: 'Student wellbeing', href: '/campus-life/wellbeing' },
        { label: 'Societies and clubs', href: '/campus-life/societies' },
        { label: 'Sports and recreation', href: '/campus-life/sports' },
        { label: 'Transport and parking', href: '/campus-life/transport' },
        { label: 'Grievance redressal', href: '/navigate#grievance-redressal' },
      ],
    },
    {
      slug: 'counseling',
      title: 'Academic and Career Counseling',
      summary: 'Help with choosing courses, staying on track and planning a career.',
      body: ['Academic advisers help students plan their courses, monitor their progress and resolve academic difficulties. Career counselling offers advice on internships, placements and the options open to graduates of each program.'],
      pending: 'How to book an appointment, and the counselling office’s contact details, will be published here.',
    },
    {
      slug: 'mentorship',
      title: 'Student Mentorship',
      summary: 'Faculty and peer mentors who help students settle in and succeed.',
      body: ['Each new student is linked with a faculty mentor, and senior students act as peer mentors during the first semester.'],
      pending: 'The mentorship program’s structure and how to take part will be published here.',
    },
    {
      slug: 'societies',
      title: 'Student Societies and Clubs',
      summary: 'Academic, cultural and recreational societies run by students.',
      pending: 'Student societies and clubs will be listed here as they are formed, with their advisers and how to join.',
    },
    {
      slug: 'sports',
      title: 'Sports and Recreation',
      summary: 'Sports facilities, teams and recreational activities.',
      pending: 'Details of sports facilities, teams and recreational activities will be published here.',
    },
    {
      slug: 'wellbeing',
      title: 'Student Wellbeing',
      summary: 'Confidential support for personal, health and academic concerns.',
      body: ['The University offers confidential counselling and wellbeing support for personal and academic concerns, and refers students to specialist help where needed.'],
      pending: 'Contact details for wellbeing support and the campus medical arrangements will be published here.',
    },
    { slug: 'food-court', title: 'Food Court', summary: 'Where to eat on campus.', pending: 'Details of the food court, its outlets and its opening hours will be published here.' },
    {
      slug: 'transport',
      title: 'Student Transportation and Parking',
      summary: 'Getting to campus by University transport, public transport or car.',
      pending: 'Transport routes, timetables and parking arrangements will be published here.',
      related: [{ label: 'Campus Location and Directions', href: '/contact/visit' }],
    },
    {
      slug: 'accessibility',
      title: 'Accessibility and Inclusion',
      summary: 'A campus and a community open to everyone.',
      body: ['The University is committed to a campus that students of every background and ability can use fully, and to teaching and assessment that make reasonable adjustments where they are needed.'],
      related: [{ label: 'Facilities for Differently Abled Persons', href: '/campus-life/differently-abled' }],
    },
    {
      slug: 'differently-abled',
      title: 'Facilities for Differently Abled Persons',
      summary: 'Access, support and adjustments for differently abled students and visitors.',
      pending: 'Details of accessible routes, facilities and the support available to differently abled students will be published here.',
    },
    { slug: 'alumni', title: 'Alumni', summary: 'The University’s graduates and how they stay connected.', pending: 'The alumni association and its activities will be described here after the University’s first graduates.' },
    {
      slug: 'code-of-conduct',
      title: 'Student Code of Conduct',
      summary: 'The standards of behaviour expected of every student.',
      pending: 'The Student Code of Conduct will be published here once approved by the statutory bodies.',
      related: [
        { label: 'Policies and Regulations', href: '/about/policies' },
        { label: 'Anti-Harassment Regulations', href: '/navigate#anti-harassment-regulations' },
      ],
    },
    { slug: 'gallery', title: 'Campus Gallery', summary: 'Photographs of the campus as it is completed.', component: 'gallery' },
    {
      slug: 'virtual-tour',
      title: 'Virtual Campus Tour',
      summary: 'Explore the campus online.',
      pending: 'A virtual tour of the campus will be published here once the buildings are complete.',
      related: [{ label: 'Open the campus in Google Maps', href: site.contact.mapLink ?? '/contact/visit', external: Boolean(site.contact.mapLink) }],
    },
  ],
};

/* ----------------------------------------------------------------------------- Admissions */

const admissions: Section = {
  key: 'admissions',
  label: 'Admissions',
  title: 'Admissions',
  path: '/admissions',
  summary: 'Everything you need to choose a program, check the requirements and apply.',
  pages: [
    {
      slug: 'why-cuetech',
      title: 'Why Choose CueTech?',
      summary: 'Six reasons to study at the University.',
      parts: whyCueTech.value.map((r) => ({ id: slugify(r.title), title: r.title, text: r.text })),
      related: [
        { label: 'Degree Programs', href: '/programs' },
        { label: 'Campus Life', href: '/campus-life' },
      ],
    },
    {
      slug: 'student-support',
      title: 'Academic and Student Support System',
      summary: 'The advising, mentoring and support every student can rely on.',
      parts: supportSystem.value.map((s) => ({ id: slugify(s.title), title: s.title, text: s.text })),
      related: [{ label: 'Campus Life', href: '/campus-life' }],
    },
    { slug: 'overview', title: 'Admissions Overview', summary: 'The admissions journey at a glance.', href: '/admissions' },
    { slug: 'programs-eligibility', title: 'Programs and Eligibility Criteria', summary: 'Every program open to applicants and what each requires.', href: '/admissions/programs-eligibility' },
    { slug: 'schedule', title: 'Admission Schedule', summary: 'Key dates for the next intake.', component: 'schedule' },
    { slug: 'how-to-apply', title: 'How to Apply', summary: 'Step-by-step guide to submitting an application.', href: '/admissions/how-to-apply' },
    {
      slug: 'fees',
      title: 'Fees Structure',
      summary: 'Tuition and other fees for each program.',
      pending: 'The fee structure for each program will be published here, and on each program page, once approved by the University.',
      related: [
        { label: 'How to Pay your Fee?', href: '/admissions/how-to-pay' },
        { label: 'Scholarships and Financial Assistance', href: '/admissions/scholarships' },
      ],
    },
    {
      slug: 'how-to-pay',
      title: 'How to Pay your Fee?',
      summary: 'Official ways to pay admission and tuition fees.',
      pending: 'Official payment instructions, including bank details, payment vouchers and any online options, will be published here. Pay only through the channels listed on this page and keep your receipt.',
      related: [{ label: 'Fees Structure', href: '/admissions/fees' }],
    },
    {
      slug: 'scholarships',
      title: 'Scholarships and Financial Assistance',
      summary: 'Merit scholarships, need-based assistance and how to apply for them.',
      pending: 'Details of scholarships and financial assistance, the eligibility criteria and how to apply will be published here once approved.',
      related: [{ label: 'Fees Structure', href: '/admissions/fees' }],
    },
    { slug: 'faqs', title: 'Frequently Asked Questions', summary: 'Answers to the questions applicants ask most often.', component: 'faqs' },
    { slug: 'apply', title: 'Apply Online', summary: 'Access the online application.', href: '/admissions/apply' },
  ],
};

/* ------------------------------------------------------------------------------ Academics */

const academics: Section = {
  key: 'academics',
  label: 'Academics',
  title: 'Academics',
  path: '/academics',
  summary: 'Faculties, degree programs, academic rules, the calendar and how teaching works.',
  pages: [
    {
      slug: 'regulations',
      title: 'Academic Rules and Regulations',
      summary: 'The rules that govern study at the University. HEC policies apply until CueTech’s own rules are notified.',
      body: [
        'Academic rules and regulations are published here as they are approved by the University’s statutory bodies. Until then, the policies of the Higher Education Commission of Pakistan apply.',
      ],
      itemsTitle: 'Rules and regulations',
      items: regulations.map((r) => ({ label: r.label, note: r.href ? (r.external ? 'On the HEC website' : undefined) : 'Document to be published', href: r.href, external: r.external })),
    },
    { slug: 'calendar', title: 'Academic Calendar', summary: 'Semester dates, examinations and holidays for the academic year.', component: 'calendar' },
    { slug: 'faculties', title: 'Faculties and Departments', summary: 'Thirteen faculties and their departments.', href: '/faculties' },
    { slug: 'programs', title: 'Degree Programs', summary: 'Undergraduate, associate and proposed graduate programs.', href: '/programs' },
    { slug: 'undergraduate', title: 'Undergraduate Degree Programs', summary: 'The thirteen four-year degree programs.', href: '/programs/undergraduate' },
    { slug: 'associate', title: 'Associate Degree Programs', summary: 'The nine associate degree programs.', href: '/programs/associate' },
    {
      slug: 'online-learning',
      title: 'Online and Blended Learning',
      summary: 'How the University uses its learning management system alongside classroom teaching.',
      body: ['Teaching is campus-based, supported by the learning management system (LMS) for course materials, assignments and announcements. Blended and online elements are introduced where they improve learning and meet the regulator’s requirements.'],
      pending: 'The University’s policy on online and blended learning will be published here once approved.',
      related: [{ label: 'LMS', href: '/navigate#lms' }],
    },
    {
      slug: 'curriculum',
      title: 'Curriculum and Schemes of Study',
      summary: 'The scheme of study for every program, published on its program page.',
      body: [
        'Each program page carries the program’s scheme of study: its introduction, scope, objectives and learning outcomes, duration, credit hours, admission and passing criteria, internship and project requirements, and the status of its accreditation.',
        'The official schemes of study are published as they are approved by the Academic Council.',
      ],
      related: [
        { label: 'Degree Programs', href: '/programs' },
        { label: 'Academic Rules and Regulations', href: '/academics/regulations' },
      ],
    },
    {
      slug: 'teaching-learning',
      title: 'Teaching and Learning',
      summary: 'The University’s approach to teaching.',
      body: [university.philosophy.value],
      parts: [{ id: 'approach', title: 'Educational approach', list: university.approach.value.map((a) => `${a.title}: ${a.text}`) }],
    },
    {
      slug: 'advising',
      title: 'Academic Advising and Student Support',
      summary: 'Advisers, mentors and services that help students succeed.',
      body: ['Every student is assigned an academic adviser who helps plan courses, monitor progress and resolve academic difficulties. Faculty mentors, counselling and the library and laboratories complete the support system.'],
      related: [
        { label: 'Academic and Career Counseling', href: '/campus-life/counseling' },
        { label: 'Student Mentorship', href: '/campus-life/mentorship' },
      ],
    },
    {
      slug: 'examinations',
      title: 'Examination and Assessment',
      summary: 'How students are assessed and how examinations are conducted.',
      pending: 'The examination rules, grading scheme and assessment policy will be published here once approved by the statutory bodies.',
      related: [{ label: 'Academic Rules and Regulations', href: '/academics/regulations' }],
    },
  ],
};

/* ------------------------------------------------------------------------ Teaching faculty */

const teachingFaculty: Section = {
  key: 'teaching-faculty',
  label: 'Teaching Faculty',
  title: 'Teaching Faculty Members',
  path: '/teaching-faculty',
  summary: 'Profiles of the teaching faculty, by department, with their official email addresses.',
  pages: departments.map((d) => ({ slug: d.slug, title: d.name, summary: `Teaching faculty of the ${d.name}.`, href: `/teaching-faculty/${d.slug}` })),
};

/* ------------------------------------------------------------------------ Global engagement */

const globalEngagement: Section = {
  key: 'global-engagement',
  label: 'Global Engagement',
  title: 'Global Engagement and Partnerships',
  path: '/global-engagement',
  summary: 'The University’s international strategy, partnerships and opportunities for students and staff.',
  pages: [
    {
      slug: 'strategy',
      title: 'Internationalization Strategy',
      summary: 'How the University builds its international links.',
      body: ['The University’s internationalization strategy sets out how it will build academic partnerships, exchange opportunities and joint research with institutions abroad, and how it will welcome international students to Lahore.'],
      pending: 'The internationalization strategy will be published here once approved by the Board of Governors.',
    },
    { slug: 'partnerships', title: 'Global Academic Partnerships', summary: 'The University’s partner institutions around the world.', component: 'partners' },
    {
      slug: 'collaboration',
      title: 'International Collaboration',
      summary: 'Collaboration with international institutions in teaching and research.',
      pending: 'Current international collaborations will be listed here as agreements are signed.',
    },
    {
      slug: 'exchange',
      title: 'Faculty and Student Exchange',
      summary: 'Opportunities to study or teach abroad, and to host visitors here.',
      pending: 'Exchange opportunities for students and faculty will be published here as partnerships are established.',
    },
    {
      slug: 'visiting-scholars',
      title: 'International Visiting Scholars',
      summary: 'Scholars from abroad who teach and research at the University.',
      pending: 'Visiting scholars and the visiting scholar program will be described here.',
    },
    {
      slug: 'joint-programs',
      title: 'Joint Academic Programs',
      summary: 'Programs delivered jointly with partner institutions.',
      pending: 'Joint academic programs will be listed here once approved by the University and its partners.',
    },
    {
      slug: 'research-collaboration',
      title: 'International Research Collaboration',
      summary: 'Research projects with international partners.',
      pending: 'International research collaborations will be listed here as they begin.',
      related: [{ label: 'Research, Innovation & Commercialization (ORIC)', href: '/about/oric' }],
    },
    {
      slug: 'industry-partnerships',
      title: 'Industry and Institutional Partnerships',
      summary: 'Links with employers, professional bodies and other institutions.',
      pending: 'Industry and institutional partners will be listed here as agreements are signed.',
    },
    {
      slug: 'online-learning',
      title: 'Global Online Learning Initiatives',
      summary: 'Online courses and programs offered with international partners.',
      pending: 'Global online learning initiatives will be described here once launched.',
      related: [{ label: 'Online and Blended Learning', href: '/academics/online-learning' }],
    },
    {
      slug: 'international-admissions',
      title: 'International Student Admissions',
      summary: 'How students from outside Pakistan can apply.',
      body: ['International applicants follow the same application steps as other applicants. The Admissions Office advises on equivalence of qualifications, visas and arrival.'],
      pending: 'Guidance for international applicants, including equivalence of qualifications and visa support, will be published here.',
      related: [
        { label: 'How to Apply', href: '/admissions/how-to-apply' },
        { label: 'Contact the Admissions Office', href: '/contact/offices#admissions-office' },
      ],
    },
  ],
};

/* -------------------------------------------------------------------- News, events, media */

const newsMenu: SectionLink[] = [
  { label: 'University News', href: '/news', description: 'News from the University, its faculties and its campus.' },
  { label: 'Official Announcements', href: '/news/category/announcements' },
  { label: 'Events Calendar', href: '/events' },
  { label: 'Seminars and Conferences', href: '/events/category/seminars-conferences' },
  { label: 'Workshops and Training Programs', href: '/events/category/workshops-training' },
  { label: 'Press Releases', href: '/news/category/press-releases' },
  { label: 'Media Coverage', href: '/news/category/media-coverage' },
  { label: 'Photo Gallery', href: '/media/photo-gallery' },
  { label: 'Video Gallery', href: '/media/video-gallery' },
  { label: 'Newsletter', href: '/media/newsletter' },
  { label: 'Notices and Circulars', href: '/news/category/notices' },
];

const newsSection: Section = {
  key: 'news',
  label: 'News & Events',
  title: 'News, Events and Media',
  path: '/news',
  summary: 'News, announcements, events and media from the University.',
  pages: [
    ...newsCategories.map((c) => ({ slug: c.slug, title: c.label, summary: c.description, href: c.slug === 'university-news' ? '/news' : `/news/category/${c.slug}` })),
    { slug: 'events', title: 'Events Calendar', summary: 'Upcoming events across the University.', href: '/events' },
    ...eventCategories
      .filter((c) => c.slug === 'seminars-conferences' || c.slug === 'workshops-training')
      .map((c) => ({ slug: c.slug, title: c.label, summary: c.description, href: `/events/category/${c.slug}` })),
  ],
  menuLinks: newsMenu,
  sideNav: newsMenu,
};

const media: Section = {
  key: 'media',
  label: 'Media',
  title: 'Media',
  path: '/media',
  summary: 'Photographs, video and the University newsletter.',
  hidden: true,
  hub: { label: 'News & Events', href: '/news' },
  sideNav: newsMenu,
  pages: [
    { slug: 'photo-gallery', title: 'Photo Gallery', summary: 'Photographs of the University and its events.', component: 'gallery' },
    { slug: 'video-gallery', title: 'Video Gallery', summary: 'Videos from the University.', pending: 'Videos of the campus, events and student life will be published here.' },
    { slug: 'newsletter', title: 'Newsletter', summary: 'The University’s newsletter, issue by issue.', pending: 'Issues of the University newsletter will be published here.' },
  ],
};

/* -------------------------------------------------------------------------------- Careers */

const careers: Section = {
  key: 'careers',
  label: 'Careers at CueTech',
  title: 'Careers at CueTech',
  path: '/careers',
  summary: 'Current and previous job announcements.',
  pages: [],
};

/* -------------------------------------------------------------------------------- Contact */

const contact: Section = {
  key: 'contact',
  label: 'Contact',
  title: 'Contact and Visit Us',
  path: '/contact',
  summary: 'Ways to reach the University, visit the campus and give feedback.',
  pages: [
    { slug: 'visit', title: 'Visit Our Campus', summary: 'Plan a visit: location, directions and what to expect.', href: '/contact/visit' },
    { slug: 'chat', title: 'Chat with CueTech', summary: 'Message the University for a quick answer.', component: 'chat' },
    { slug: 'ask', title: 'Ask Us', summary: 'Find an answer, or send your question.', href: '/contact/ask' },
    { slug: 'contact-us', title: 'Contact Us', summary: 'Send a message or find our contact details.', href: '/contact' },
    {
      slug: 'offices',
      title: 'University Offices',
      summary: 'Who to contact for admissions, academic matters, careers and more.',
      parts: [
        { id: 'admissions-office', title: 'Admissions Office', text: 'For questions about programs, eligibility, applications, fees and scholarships.', pending: pendingOffice },
        { id: 'office-of-the-vice-chancellor', title: 'Office of the Vice Chancellor', text: 'For official correspondence with the University’s chief academic and administrative officer.', pending: pendingOffice },
        { id: 'registrars-office', title: 'Registrar’s Office', text: 'For student records, transcripts, verification of documents and academic administration.', pending: pendingOffice },
        { id: 'careers-and-recruitment', title: 'Careers and Recruitment Enquiries', text: 'For questions about job announcements and applications.', pending: 'Recruitment contact details will be published with each job announcement.', links: [{ label: 'Careers at CueTech', href: '/careers' }] },
      ],
    },
    { slug: 'feedback', title: 'Feedback and Complaints', summary: 'Tell us what went well, or what did not.', href: '/contact/feedback' },
  ],
  menuLinks: [
    { label: 'Visit Our Campus', href: '/contact/visit' },
    { label: 'Chat with CueTech', href: '/contact/chat' },
    { label: 'Ask Us', href: '/contact/ask' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Campus Location and Directions', href: '/contact/visit#directions' },
    { label: 'Admissions Office', href: '/contact/offices#admissions-office' },
    { label: 'Office of the Vice Chancellor', href: '/contact/offices#office-of-the-vice-chancellor' },
    { label: 'Registrar’s Office', href: '/contact/offices#registrars-office' },
    { label: 'Careers and Recruitment Enquiries', href: '/contact/offices#careers-and-recruitment' },
    { label: 'Feedback and Complaints', href: '/contact/feedback' },
  ],
};

/** All sections in main-navigation order. */
export const sections: Section[] = [about, campusLife, admissions, academics, teachingFaculty, globalEngagement, newsSection, careers, contact, media];

export const sectionByKey = (key: SectionKey) => sections.find((s) => s.key === key)!;
