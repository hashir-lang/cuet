import { university } from './university';
import { supportSystem, whyCueTech } from './admissions';
import { regulations } from './academics';
import { departments } from './faculties';
import { newsCategories } from './news';
import { eventCategories } from './events';
import { site } from './site';
import type { MediaSlot } from './types';

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
  /** Menu links when they differ from the pages (anchors, bespoke routes). Also the "More in" links under each page. */
  menuLinks?: SectionLink[];
  /** Photograph shown in the page header of every page in the section. */
  image?: MediaSlot;
  /** Hidden from the main navigation (linked from elsewhere). */
  hidden?: boolean;
  /** The parent shown in breadcrumbs and side navigation when the section has no hub page of its own. */
  hub?: { label: string; href: string };
};

const pendingOffice = 'Office holder and contact details will be published once appointed.';

const stock = (file: string, alt: string, plate: MediaSlot['plate']): MediaSlot => ({ src: `/images/stock/${file}`, alt: `${alt} Stock photograph.`, plate, caption: 'Stock photograph. It does not show the University.' });

/** The University's own photograph of the main building, used wherever the campus itself is the subject. */
const mainBuilding: MediaSlot = {
  src: '/images/hero/main-building.jpg',
  alt: 'The main building of the University, with its name and emblem above the entrance.',
  plate: 'campus',
  caption: 'Main building, Maulana Shaukat Ali Road, Lahore. Photograph supplied by the University.',
};

/* ----------------------------------------------------------------------------------- About */

const about: Section = {
  key: 'about',
  label: 'About CueTech',
  title: 'About CueTech',
  path: '/about',
  image: mainBuilding,
  summary: 'Who we are, how the University is governed and what it stands for.',
  pages: [
    { slug: 'introduction', title: 'Introduction to CueTech', summary: 'An overview of the University, its faculties and its programs.', href: '/about' },
    {
      slug: 'history',
      title: 'Sponsors, History and Establishment',
      summary: 'Who sponsors the University, how it came to be established and the milestones since.',
      body: [
        'Central University of Emerging Technologies-CueTech was established in Lahore under its own Act, which constitutes the University as a degree-awarding institution with its statutory bodies, its thirteen faculties and the powers to design programs, conduct examinations and confer degrees.',
        'The University was conceived to meet a specific need. Pakistan’s economy is being reshaped by emerging technologies, and the professions that serve it, from nursing and pharmacy to aviation management and information security, need graduates educated to current standards. CueTech brings these disciplines together on one campus so that they share teaching standards, laboratories, a library and a culture of practice-led learning.',
      ],
      parts: [
        {
          id: 'sponsors',
          title: 'Sponsors',
          text: university.sponsors ?? 'The University is sponsored by a body committed to higher education in Punjab. Its sponsors provide the campus, the initial endowment and the governance that a new university requires in its first years, and are represented on the Board of Governors.',
          pending: university.sponsors ? undefined : 'The name of the sponsoring body and its other institutions will be published here once confirmed.',
        },
        {
          id: 'establishment',
          title: 'Establishment',
          text: [
            'The Act is the foundation of everything described on this website. The Board of Governors, the Academic Council and the other authorities derive their mandate from it, and the faculties are named as it names them.',
            'The University’s home is a purpose-built campus on Maulana Shaukat Ali Road, Lahore, adjacent to the Jinnah Institute of Cardiology. The main building, which carries the University’s name and emblem above its entrance, is complete; the remaining facilities are being finished in phases ahead of the first intake.',
          ],
          pending: 'The date of establishment and the notification of the Act will be recorded here once the University releases the documents.',
        },
        {
          id: 'milestones',
          title: 'History and Milestones',
          text: university.history ?? 'The University’s short history so far, in order. Dates are added to each milestone as they are confirmed.',
          list: university.history
            ? undefined
            : [
                'Enactment of the Act establishing the University and naming its thirteen faculties',
                'Construction of the main building on Maulana Shaukat Ali Road, Lahore',
                'Planning of laboratories and library collections for every faculty',
                'Design of thirteen undergraduate and nine associate degree programs on the HEC revised curricula, with seven graduate programs proposed',
                'Launch of the University website',
                'First admissions: to be announced',
              ],
        },
      ],
    },
    {
      slug: 'charter',
      title: 'University Charter and Legal Status',
      summary: 'The Act under which the University is established, its charter and its recognition status.',
      body: [
        'The University is established by an Act that gives it legal personality and the authority to teach, examine and award degrees. The Act, the statutes and regulations made under it, and the recognition of the University by the Higher Education Commission of Pakistan together define its legal status.',
      ],
      parts: [
        {
          id: 'the-act',
          title: 'The Act',
          text: 'The Act establishes the University as a body corporate with perpetual succession and a common seal, able to hold property, enter into contracts and sue and be sued in its own name. It names the University’s officers and statutory authorities, sets out their powers and duties, constitutes the thirteen faculties, and empowers the University to admit students, prescribe courses of study, hold examinations and confer degrees, diplomas and certificates.',
        },
        {
          id: 'statutes',
          title: 'Statutes, Regulations and Rules',
          text: 'Under the Act, the Board of Governors makes statutes on matters such as the constitution of authorities, appointments, conditions of service and the award of degrees. The Academic Council frames regulations for admission, courses of study, examinations and academic discipline. Rules made under the statutes and regulations govern day-to-day procedures. Each is published on this website as it is approved.',
        },
        {
          id: 'recognition',
          title: 'Recognition and Accreditation',
          text: 'Recognition of the University and its degrees by the Higher Education Commission of Pakistan is the national benchmark for a degree-awarding institution. Individual programs are also accredited by their professional councils: computing programs by the National Computing Education Accreditation Council, business programs by the National Business Education Accreditation Council, law by the Pakistan Bar Council, nursing by the Pakistan Nursing and Midwifery Council and pharmacy by the Pharmacy Council of Pakistan. The status of each program is shown on its program page.',
          pending: 'The University’s recognition documents will be published here once released.',
        },
      ],
      itemsTitle: 'Documents',
      items: [
        { label: 'The Act establishing the University', href: null, note: 'Document to be published' },
        { label: 'Statutes of the University', href: null, note: 'To be published as approved' },
        { label: 'Recognition by the Higher Education Commission', href: null, note: 'Document to be published' },
      ],
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
      body: [
        'The University’s goals describe what it exists to do. Its strategic objectives translate them into the work of its first years: accrediting programs, recruiting faculty, completing the campus and building the services that students rely on.',
      ],
      parts: [
        { id: 'goals', title: 'Goals', list: university.goals.value },
        {
          id: 'strategic-objectives',
          title: 'Strategic Objectives',
          list: [
            'Academic quality: Have every program reviewed through the Quality Enhancement Cell’s self-assessment cycle and accredited by its professional council within the first years of operation.',
            'Faculty: Recruit and retain qualified faculty for every department, with continuing professional development and a clear path from teaching to research.',
            'Student success: Achieve high rates of progression and timely graduation through academic advising, mentorship and early support for students who struggle.',
            'Facilities: Complete the campus in phases, with laboratories, the library and learning spaces operational before each cohort that needs them.',
            'Employability: Build industry linkages, internships and career guidance so that graduates move directly into work or further study.',
            'Research: Establish the Board of Advanced Studies and Research, the Office of Research, Innovation and Commercialization and the proposed graduate programs as the foundation for research.',
            'Digital university: Bring the student portal, the learning management system and the digital library into service so that students and staff can work from anywhere.',
            'Community: Serve Lahore and Punjab through continuing education, public lectures and partnerships with employers, professions and institutions.',
          ],
          pending: 'The measurable targets and timelines of the strategic plan will be published once approved by the Board of Governors.',
        },
      ],
    },
    { slug: 'chancellor-message', title: 'Message from the Chancellor', summary: 'A welcome from the Chancellor of the University.', message: 'chancellor' },
    { slug: 'chairman-message', title: 'Message from the Chairman Board of Governors', navLabel: 'Message from the Chairman BoG', summary: 'A message from the Chairman of the Board of Governors.', message: 'chairman' },
    { slug: 'vice-chancellor-message', title: 'Message from the Vice Chancellor', summary: 'A message from the Vice Chancellor.', message: 'viceChancellor' },
    {
      slug: 'leadership',
      title: 'University Leadership',
      summary: 'The officers who lead the University. Profiles are published as appointments are confirmed.',
      body: [
        'The University is led by officers whose roles are defined in its Act. The Chancellor is the ceremonial head of the University and presides over its convocations. The Chairman of the Board of Governors leads the body that governs it. The Vice Chancellor is its chief academic and administrative officer, responsible to the Board for the University’s teaching, examinations, discipline and administration.',
        'The Registrar, the Controller of Examinations and the Treasurer are the principal officers of administration, examinations and finance. The Director of Admissions and the Director of the Quality Enhancement Cell lead two functions on which a new university’s reputation depends: fair admission and dependable quality.',
      ],
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
      body: [
        'The University is governed through the authorities constituted by its Act. Each has a defined membership, drawn from the University’s officers, its faculty and external members, and defined powers. Together they separate the setting of policy from its execution, and academic judgement from administrative convenience.',
        'The bodies meet on a schedule set by the statutes. Their decisions on statutes, regulations, schemes of study and policies are published on this website as they take effect.',
      ],
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
        {
          id: 'priorities',
          title: 'Research priorities',
          text: 'Research at CueTech grows out of its faculties and the needs of the region. The themes below are the starting points; the Board of Advanced Studies and Research will formalise the University’s research agenda as graduate programs begin.',
          list: [
            'Data science, artificial intelligence and information security',
            'Public health, nursing practice and pharmaceutical sciences',
            'Agribusiness, poultry production and food security',
            'Aviation operations and transport management',
            'Business analytics, finance and entrepreneurship',
            'Education, language and the social sciences',
            'Law, regulation and emerging technologies',
          ],
        },
        {
          id: 'incubation',
          title: 'Incubation Center',
          text: 'The Incubation Center, run with ORIC, will give student and faculty start-ups working space, mentoring and introductions to investors and industry. Teams from any faculty may apply once the Center opens.',
          links: [{ label: 'Incubation Center', href: '/navigate#incubation-center' }],
        },
        { id: 'contact', title: 'Contact ORIC', pending: 'The Director ORIC and the Office’s contact details will be published once appointed.' },
      ],
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
      body: [
        'The University’s policies set out how it treats the people who study and work in it, how it keeps them safe and how it decides disputes. They are made under the Act and the statutes, approved by the Board of Governors or the Academic Council, and apply to every student, employee and visitor.',
        'Each policy is published on this page as it is approved, together with the office responsible for it and the procedure for raising a concern under it. Until a policy is notified, the corresponding policies of the Higher Education Commission of Pakistan apply, including its Policy Guidelines against Sexual Harassment and its Plagiarism Policy.',
      ],
      parts: [
        {
          id: 'principles',
          title: 'Principles behind every policy',
          list: [
            'Fairness: The same rules apply to everyone, and every decision can be explained.',
            'Safety and dignity: Harassment, discrimination and intimidation are prohibited, and complaints are handled in confidence.',
            'Academic integrity: Plagiarism, cheating and misrepresentation are treated as serious offences.',
            'Due process: Anyone accused of a breach is heard before a decision is made, and may appeal.',
            'Transparency: Policies, procedures and the offices responsible for them are published.',
          ],
        },
      ],
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
        'The two are managed together. The Quality Enhancement Cell measures how well the University is doing; institutional development decides what to build, hire and change in response.',
      ],
      parts: [
        {
          id: 'quality-policy',
          title: 'Quality policy',
          list: [
            'Standards: Every program follows, as a minimum, the HEC curriculum and the requirements of its professional council.',
            'Evidence: Teaching, assessment and services are reviewed against evidence, including student evaluations, results and graduate outcomes.',
            'Responsibility: Deans and heads of department own the quality of their programs; the QEC supports and verifies.',
            'Improvement: Every review ends in an action plan with an owner and a date, followed up at the next cycle.',
            'Openness: Findings are shared with the Academic Council and, in summary, with the University community.',
          ],
        },
        {
          id: 'quality-cycle',
          title: 'The quality cycle',
          text: 'Each program is self-assessed on the HEC model: a program team prepares a self-assessment report, an assessment team of senior faculty reviews it and visits the department, and the department agrees an implementation plan. Student course evaluations and teacher evaluations run every semester; graduate and employer surveys follow the first cohorts. The findings feed the annual report to the Academic Council.',
        },
        {
          id: 'institutional-development',
          title: 'Institutional development',
          text: 'The institutional development plan sequences the University’s growth: completing campus phases, equipping laboratories, building the library collection, recruiting faculty and staff for each department, bringing digital services into use and preparing the proposed graduate programs. It is reviewed each year by the Finance and Planning Committee and approved by the Board of Governors.',
          pending: 'Institutional performance reports and the development plan will be published here as they are approved.',
        },
      ],
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
  image: stock('campus-life.jpg', 'Students walking along a path past a brick campus building.', 'student-life'),
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
      body: [
        'Orientation is the first week of university life. New students meet their faculty, their academic advisers and their classmates, learn how the semester system works and find their way around the campus before classes begin.',
        'The program is run by the Directorate of Student Affairs with each faculty. Attendance is expected of every new student, because the week covers registration, the rules that govern study and the support available when something goes wrong.',
      ],
      parts: [
        {
          id: 'program',
          title: 'What orientation covers',
          list: [
            'Welcome: An address by the Vice Chancellor and an introduction to the University’s history, values and expectations.',
            'Your faculty: A session with the Dean, the head of department and the teaching faculty, with an overview of the program and its scheme of study.',
            'Registration and the semester system: Course registration, credit hours, attendance rules, the grading scheme and the academic calendar.',
            'Advising and mentorship: Meeting your academic adviser and faculty mentor, and joining a peer-mentor group.',
            'Campus tour: Classrooms, laboratories, the library, the food court, prayer areas, the security post and transport points.',
            'Digital services: Setting up your student portal, LMS and email accounts.',
            'Student life: Societies, sports, counselling and wellbeing, and the Student Code of Conduct.',
          ],
        },
        {
          id: 'before-you-arrive',
          title: 'Before you arrive',
          list: [
            'Complete enrolment and fee payment by the dates in your offer letter.',
            'Bring your original academic documents and CNIC or B-Form for verification.',
            'Check the orientation timetable published in the Events calendar and your email.',
            'Read the Student Code of Conduct and the semester rules.',
          ],
        },
        { id: 'schedule', title: 'Orientation schedule', pending: 'The orientation timetable for the next intake will be published here and in the Events calendar once admissions close.' },
      ],
      related: [
        { label: 'Events Calendar', href: '/events' },
        { label: 'Student Code of Conduct', href: '/campus-life/code-of-conduct' },
      ],
    },
    {
      slug: 'classrooms',
      title: 'Classrooms and Learning Spaces',
      summary: 'Teaching rooms, seminar spaces and places to study between classes.',
      body: [
        'Classrooms and learning spaces are planned around how each discipline is taught: lecture rooms for larger classes, seminar rooms for discussion, laboratories for practice and spaces for group work and quiet study.',
        'Teaching rooms are equipped for projection and audio, connected to the campus network and timetabled centrally, so that a room suits the class that uses it rather than the other way round.',
      ],
      parts: [
        {
          id: 'types',
          title: 'Types of space',
          list: [
            'Lecture rooms: For core courses taken by whole cohorts, with tiered or flat seating, projection and sound.',
            'Seminar rooms: Smaller rooms for discussion-based teaching in law, English, education and business.',
            'Laboratories: Computing, engineering technology, pharmacy, nursing skills, health sciences, statistics, agriculture and poultry laboratories, allocated faculty by faculty.',
            'Moot court: A dedicated facility for advocacy exercises in the Faculty of Law and Shariah.',
            'Study spaces: Reading rooms in the library and informal seating for group work between classes.',
          ],
        },
        {
          id: 'using-spaces',
          title: 'Using the spaces',
          text: 'Rooms are booked through the timetable office; student societies may request rooms for their activities through the Directorate of Student Affairs. Food and drink are limited to the food court and designated areas, and every space is covered by the Student Code of Conduct.',
        },
      ],
      related: [{ label: 'Campus and Facilities', href: '/campus' }],
    },
    {
      slug: 'safety',
      title: 'Campus Safety and Security',
      summary: 'How the University keeps students and staff safe on campus.',
      body: [
        'The campus has a staffed security post at the entrance. Security staff, controlled access and emergency procedures are in place to keep students, staff and visitors safe, and the University treats the safety of women students as a particular responsibility.',
      ],
      parts: [
        {
          id: 'arrangements',
          title: 'Security arrangements',
          list: [
            'Controlled entry: Students and staff carry University identity cards; visitors sign in at the security post.',
            'Security staff: Trained guards on duty whenever the campus is open, with supervisors on call.',
            'Monitoring: Cameras cover entrances, car parks and common areas; recordings are kept under the University’s privacy rules.',
            'Lighting and routes: Walkways, car parks and transport points are lit after dark.',
            'Fire safety: Alarms, extinguishers and marked evacuation routes in every building, with regular drills.',
          ],
        },
        {
          id: 'emergencies',
          title: 'In an emergency',
          list: [
            'Raise the alarm: Alert the nearest security guard or staff member, or call the campus emergency number.',
            'Medical: First-aid trained staff and a first-aid room are available; serious cases are taken to the adjacent Jinnah Hospital.',
            'Evacuation: Follow the marked routes to the assembly points and wait for the all-clear.',
            'Report it: Every incident is recorded and reviewed by the security office so that procedures improve.',
          ],
          pending: 'The campus emergency number and the full safety guide will be published here before the first intake.',
        },
        {
          id: 'your-part',
          title: 'Your part',
          text: 'Carry your identity card, do not lend it, and challenge nothing yourself: report anything that worries you to security or to the Directorate of Student Affairs. Harassment of any kind can be reported in confidence under the Anti-Harassment Regulations.',
          links: [{ label: 'Anti-Harassment Regulations', href: '/navigate#anti-harassment-regulations' }],
        },
      ],
    },
    {
      slug: 'computer-labs',
      title: 'Computer and Technology Laboratories',
      summary: 'Computing laboratories for programming, data and information security work.',
      body: [
        'The infrastructure plan allocates a computing laboratory to the Faculty of Computing and Emerging Technologies and two engineering technology laboratories to the Faculty of Engineering and Technology, alongside the laboratories of the other practice-led faculties.',
        'The laboratories support the programming, database, networking, data science and information security courses of the BS Computer Science, the computing associate degrees and the B.E. Information Security Management Technology, and are open to students of other programs for their quantitative and ICT courses.',
      ],
      parts: [
        {
          id: 'what-you-will-find',
          title: 'What you will find',
          list: [
            'Networked workstations with the development tools, databases and statistical software the courses require',
            'A networking and security laboratory for configuring networks, servers and security appliances',
            'Access to cloud platforms and virtual laboratories for work that does not fit on a desktop',
            'Printing, scanning and technical support during opening hours',
          ],
        },
        {
          id: 'rules',
          title: 'Using the laboratories',
          text: 'Laboratories are timetabled for classes and open to students outside those hours. Users sign in, work under the University’s acceptable-use policy, keep food and drink out, and report faults to the laboratory staff. Deliberate damage, unauthorised software and misuse of networks are breaches of the Student Code of Conduct.',
        },
      ],
      related: [{ label: 'Facilities by faculty', href: '/campus/facilities' }],
    },
    {
      slug: 'library',
      title: 'Central Library and Digital Resources',
      summary: 'Print collections for every faculty and access to digital resources.',
      body: [
        'Every faculty has its own library allocation in the University’s plan. The Central Library brings these collections together with reading space, trained staff and access to digital resources, so that a nursing student and a law student find what they need under one roof.',
      ],
      parts: [
        {
          id: 'collections',
          title: 'Collections',
          text: 'The print collection is built faculty by faculty around the reading lists of the HEC curricula and the schemes of study, with reference works, textbooks in multiple copies and journals in each discipline. Each faculty’s allocation is set out on the Campus and Facilities page.',
          links: [{ label: 'Facilities by faculty', href: '/campus/facilities' }],
        },
        {
          id: 'digital',
          title: 'Digital resources',
          text: 'The Digital Resource Center gives students and faculty access to e-books, e-journals and databases, including the resources available to Pakistani universities through the HEC National Digital Library, from the campus and remotely through the student portal.',
          links: [{ label: 'Digital Resource Center', href: '/navigate#digital-resource-center' }],
        },
        {
          id: 'services',
          title: 'Spaces and services',
          list: [
            'Reading rooms for silent study and rooms for group work',
            'Borrowing, renewals and reservations through the catalogue',
            'Help from library staff with finding sources and referencing',
            'Information-literacy sessions for new students and research-skills workshops',
            'Photocopying, printing and scanning',
          ],
        },
        { id: 'hours', title: 'Opening hours and rules', pending: 'Opening hours, the catalogue link, borrowing entitlements and fines will be published when the library opens.' },
      ],
    },
    {
      slug: 'student-services',
      title: 'Student Services',
      summary: 'The offices and services that support students outside the classroom.',
      body: [
        'The Directorate of Student Affairs coordinates the services that support students outside the classroom. Most questions can be answered at its office; the pages below describe each service in detail.',
      ],
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
      body: [
        'Academic advisers help students plan their courses, monitor their progress and resolve academic difficulties. Career counselling offers advice on internships, placements and the options open to graduates of each program.',
      ],
      parts: [
        {
          id: 'academic-advising',
          title: 'Academic advising',
          text: 'Every student is assigned an academic adviser from the teaching faculty of their department at admission. The adviser approves course registration each semester, reviews results, helps with course withdrawal, repeat and summer-semester decisions, and is the first person to see when studies are not going to plan. Students on academic probation meet their adviser more often, with a written plan for recovery.',
        },
        {
          id: 'career-counselling',
          title: 'Career counselling',
          list: [
            'Guidance on the careers open to graduates of each program and the qualifications they lead to',
            'Help finding and preparing for the internship that every four-year program requires',
            'CV, application and interview preparation, and mock interviews before placement seasons',
            'Employer talks, career fairs and introductions through the industry linkages of each faculty',
            'Advice on graduate study in Pakistan and abroad, including the proposed graduate programs at CueTech',
          ],
        },
        {
          id: 'how-it-works',
          title: 'How to get advice',
          text: 'Advisers hold weekly office hours published on the LMS, and students may also book an appointment. Career counselling is run by the Directorate of Student Affairs with the faculties; group sessions are announced in the Events calendar and individual appointments can be booked at the office.',
          pending: 'Appointment booking and the counselling office’s contact details will be published here.',
        },
      ],
    },
    {
      slug: 'mentorship',
      title: 'Student Mentorship',
      summary: 'Faculty and peer mentors who help students settle in and succeed.',
      body: [
        'Each new student is linked with a faculty mentor, and senior students act as peer mentors during the first semester. Mentorship is separate from academic advising: the adviser deals with courses and results, the mentor with settling in, confidence and university life.',
      ],
      parts: [
        {
          id: 'faculty-mentors',
          title: 'Faculty mentors',
          text: 'A faculty mentor is a teacher from the student’s own department who takes an interest in a small group of students through their program, meets them at least once a month in the first year, and can refer them to counselling, wellbeing or academic support before small problems grow.',
        },
        {
          id: 'peer-mentors',
          title: 'Peer mentors',
          text: 'Peer mentors are senior students, trained by the Directorate of Student Affairs, who guide groups of new students through orientation and the first semester: where things are, how registration works, how to prepare for the first examinations. Serving as a peer mentor is recognised on the student’s record.',
        },
        {
          id: 'first-semester',
          title: 'The first-semester programme',
          list: [
            'Week 1: Meet your faculty mentor and peer-mentor group during orientation.',
            'Weeks 2 to 6: Weekly peer-mentor meetings on study skills, time management and using the LMS and library.',
            'Mid-semester: A review meeting with the faculty mentor after the first assessments.',
            'End of semester: Preparation for final examinations and a reflection on the semester.',
            'Later semesters: Mentoring continues at a lighter rhythm; students may volunteer as peer mentors from the third semester.',
          ],
        },
      ],
    },
    {
      slug: 'societies',
      title: 'Student Societies and Clubs',
      summary: 'Academic, cultural and recreational societies run by students.',
      body: [
        'Societies are run by students, for students, with a faculty adviser and the support of the Directorate of Student Affairs. They are where students organise events, compete, perform, publish and learn to lead.',
        'Because the University is new, its societies will be founded by its first students. The framework below describes the kinds of society the University will support and how to start one.',
      ],
      parts: [
        {
          id: 'kinds',
          title: 'Kinds of society',
          list: [
            'Departmental societies: One for each department, running seminars, competitions and industry visits in its discipline, from a computing society to a law society that organises moot courts.',
            'Literary and debating: English and Urdu debating, declamation, creative writing and the University magazine.',
            'Arts and culture: Dramatics, music, calligraphy, photography and film.',
            'Community service: Blood donation drives, literacy and health campaigns, and volunteering in Lahore.',
            'Entrepreneurship and innovation: Start-up competitions and work with the Incubation Center.',
            'Sports clubs: Teams and recreational clubs, listed on the Sports and Recreation page.',
          ],
        },
        {
          id: 'start',
          title: 'How to start or join a society',
          list: [
            'Join: Societies recruit during orientation week and at the start of each semester; membership is open to every enrolled student.',
            'Start one: Any ten students may propose a society with a constitution, a faculty adviser and a plan of activities, for approval by the Directorate of Student Affairs.',
            'Run it: Societies elect their office bearers each year, keep accounts, and book rooms and publicity through the Directorate.',
            'Conduct: Activities follow the Student Code of Conduct and the University’s policies on events and publicity.',
          ],
          pending: 'Societies are listed here, with their advisers and contact details, as they are approved.',
        },
      ],
    },
    {
      slug: 'sports',
      title: 'Sports and Recreation',
      summary: 'Sports facilities, teams and recreational activities.',
      body: [
        'Sport is part of a university education: it builds health, discipline and the habit of working in a team. The University will field teams, run recreational activities for everyone, and take part in the inter-university competitions organised by the Higher Education Commission and the Punjab universities.',
      ],
      parts: [
        {
          id: 'activities',
          title: 'Activities',
          list: [
            'Team sports: Cricket, football, futsal, volleyball and basketball, with inter-faculty leagues each year.',
            'Racket sports: Badminton and table tennis, with ladders and open play.',
            'Athletics and fitness: Annual sports day, fitness sessions and walking and running groups.',
            'Indoor games: Chess, carrom and e-sports competitions run with the student societies.',
            'Women’s sport: Separate sessions, teams and coaching so that every student can take part.',
          ],
        },
        {
          id: 'taking-part',
          title: 'Taking part',
          text: 'Trials for University teams are held at the start of the academic year and announced in the Events calendar. Recreational sessions need no selection: sign up at the Directorate of Student Affairs. Students who represent the University are supported with kit, travel and, where examinations clash with fixtures, rescheduled assessments under the examination rules.',
        },
        { id: 'facilities', title: 'Facilities', pending: 'Details of the sports grounds and indoor facilities, and their opening hours, will be published as each phase of the campus is completed.' },
      ],
    },
    {
      slug: 'wellbeing',
      title: 'Student Wellbeing',
      summary: 'Confidential support for personal, health and academic concerns.',
      body: [
        'The University offers confidential counselling and wellbeing support for personal and academic concerns, and refers students to specialist help where needed. Asking for help is normal, it is private, and it never affects a student’s academic record.',
      ],
      parts: [
        {
          id: 'counselling',
          title: 'Counselling',
          text: 'Trained counsellors offer one-to-one sessions for stress, anxiety, low mood, family difficulties, bereavement and the pressures of examinations. Sessions are confidential within the limits of safety and the law, and students may refer themselves without going through a teacher.',
        },
        {
          id: 'health',
          title: 'Health and first aid',
          text: 'A first-aid room with trained staff operates on campus during teaching hours. For emergencies the campus is adjacent to the Jinnah Hospital and the Jinnah Institute of Cardiology. Students with long-term medical conditions are encouraged to inform the Directorate of Student Affairs in confidence so that adjustments can be arranged.',
        },
        {
          id: 'safety-and-respect',
          title: 'Safety and respect',
          text: 'Harassment, bullying and discrimination are prohibited under the University’s Anti-Harassment Regulations and the Student Code of Conduct. Complaints can be made in confidence to the inquiry committee, and the wellbeing team supports students through the process.',
          links: [
            { label: 'Anti-Harassment Regulations', href: '/navigate#anti-harassment-regulations' },
            { label: 'Grievance Redressal', href: '/navigate#grievance-redressal' },
          ],
        },
        {
          id: 'referrals',
          title: 'Specialist help',
          text: 'Where a student needs more than the University can provide, counsellors refer them to psychologists, psychiatrists and medical specialists in Lahore and liaise with their family where the student agrees.',
          pending: 'Contact details for the wellbeing team and the first-aid room will be published here.',
        },
      ],
    },
    {
      slug: 'food-court',
      title: 'Food Court',
      summary: 'Where to eat on campus.',
      body: [
        'The food court is the social heart of the campus: a place to eat between classes, meet friends and work in groups. Outlets are selected and licensed by the University, with hygiene standards monitored and prices set for students.',
      ],
      parts: [
        {
          id: 'what-to-expect',
          title: 'What to expect',
          list: [
            'Hot meals, snacks, tea and coffee from licensed outlets at student prices',
            'Halal food throughout, with vegetarian options at every outlet',
            'Clean drinking water stations and hand-washing facilities',
            'Seating for individuals and groups, with adjusted hours during Ramadan',
            'Regular inspection of hygiene and quality, and a feedback channel for complaints',
          ],
        },
        { id: 'hours', title: 'Outlets and opening hours', pending: 'The outlets, their menus and opening hours will be published when the food court opens.' },
      ],
      related: [{ label: 'Feedback and Complaints', href: '/contact/feedback' }],
    },
    {
      slug: 'transport',
      title: 'Student Transportation and Parking',
      summary: 'Getting to campus by University transport, public transport or car.',
      body: [
        'The campus is on Maulana Shaukat Ali Road in Lahore, next to the Jinnah Institute of Cardiology and close to the main arteries of the city, which makes it reachable by University transport, public transport, ride-hailing services and private car.',
      ],
      parts: [
        {
          id: 'university-transport',
          title: 'University transport',
          text: 'The University will run buses on routes across Lahore timed to the first and last classes of the day, with separate seating for women students and a transport card issued each semester. Routes are set from the home addresses of enrolled students, so they are confirmed after each intake.',
          pending: 'Routes, stops, timetables and the transport fee will be published here once confirmed.',
        },
        {
          id: 'public-transport',
          title: 'Public transport and ride-hailing',
          text: 'Lahore’s bus services and ride-hailing apps serve the area well; the campus is a short drive from Johar Town, Model Town and the Canal Road. Visitors coming from further afield should allow extra time at peak hours.',
          links: [{ label: 'Campus Location and Directions', href: '/contact/visit#directions' }],
        },
        {
          id: 'parking',
          title: 'Parking',
          text: 'Parking for cars and motorcycles is inside the campus boundary, past the security post. Students who drive register their vehicle with the security office and display a parking permit. Accessible spaces are reserved near the main entrance.',
        },
      ],
      related: [{ label: 'Campus Location and Directions', href: '/contact/visit' }],
    },
    {
      slug: 'accessibility',
      title: 'Accessibility and Inclusion',
      summary: 'A campus and a community open to everyone.',
      body: [
        'The University is committed to a campus that students of every background and ability can use fully, and to teaching and assessment that make reasonable adjustments where they are needed.',
        'Inclusion is also about who comes to CueTech. The University admits on merit, supports students from all parts of Pakistan, and treats the participation of women students as essential to its purpose.',
      ],
      parts: [
        {
          id: 'commitments',
          title: 'What the University commits to',
          list: [
            'Physical access: Step-free routes, lifts, accessible washrooms and reserved parking, with the campus designed to be navigable by everyone.',
            'Learning access: Reasonable adjustments to teaching materials, examinations and deadlines for students with documented needs.',
            'Digital access: A website, portal and LMS built to accessibility standards, with alternative formats on request.',
            'Financial access: Need-based assistance so that fees do not exclude able students.',
            'Respect: A community in which harassment and discrimination are not tolerated.',
          ],
        },
        {
          id: 'how-to-ask',
          title: 'How to ask for an adjustment',
          text: 'Students may raise a need at admission, during orientation or at any time through the Directorate of Student Affairs. Requests are handled in confidence, and the adjustments agreed are recorded so that each semester’s teachers and examiners know what to provide.',
        },
      ],
      related: [{ label: 'Facilities for Differently Abled Persons', href: '/campus-life/differently-abled' }],
    },
    {
      slug: 'differently-abled',
      title: 'Facilities for Differently Abled Persons',
      summary: 'Access, support and adjustments for differently abled students and visitors.',
      body: [
        'Differently abled students are welcome at CueTech, and the University’s facilities and procedures are designed so that they can study, sit examinations and take part in campus life on equal terms.',
      ],
      parts: [
        {
          id: 'physical-access',
          title: 'Physical access',
          list: [
            'Step-free entrances and ramps to teaching buildings and the library',
            'Lifts in multi-storey buildings and accessible washrooms on each floor',
            'Reserved parking and drop-off points near the main entrance',
            'Priority seating in lecture rooms and the food court',
          ],
        },
        {
          id: 'academic-adjustments',
          title: 'Academic adjustments',
          list: [
            'Extra time, a separate room, a scribe or a reader in examinations, where assessed as needed',
            'Course materials in accessible formats, including large print and screen-reader-friendly documents',
            'Flexibility over attendance and deadlines during treatment or recovery',
            'Laboratory and practical work adapted with the department so that learning outcomes are met safely',
          ],
        },
        {
          id: 'support',
          title: 'Getting support',
          text: 'Students should inform the Admissions Office at the time of application, or the Directorate of Student Affairs after admission, so that adjustments are in place from the first day. Supporting medical documentation is kept confidential.',
          pending: 'The accessibility map of the campus and the contact for disability support will be published here.',
        },
      ],
      related: [{ label: 'Accessibility and Inclusion', href: '/campus-life/accessibility' }],
    },
    {
      slug: 'alumni',
      title: 'Alumni',
      summary: 'The University’s graduates and how they stay connected.',
      body: [
        'A university is judged by its graduates. CueTech’s first alumni will graduate four years after its first intake, and the University is building the alumni association, the records and the traditions that will connect them to each other and to the students who follow.',
      ],
      parts: [
        {
          id: 'association',
          title: 'The alumni association',
          text: 'The CueTech Alumni Association will be constituted with the first graduating class, with elected office bearers, chapters by faculty and by city, and a seat on the University’s advisory structures so that graduates have a voice in its development.',
        },
        {
          id: 'what-it-offers',
          title: 'What alumni can expect',
          list: [
            'An alumni email address and continued access to the digital library',
            'Invitations to convocations, reunions, public lectures and faculty events',
            'A mentoring network linking graduates with current students and recent graduates',
            'Career services, job postings and the University’s employer network',
            'Opportunities to teach, speak and judge competitions at the University',
          ],
        },
        {
          id: 'stay-connected',
          title: 'Staying connected',
          text: 'Graduates will be able to update their details, share news and find classmates through the alumni portal. Until it opens, the University can be reached through the contact page.',
          links: [{ label: 'Contact Us', href: '/contact' }],
        },
      ],
    },
    {
      slug: 'code-of-conduct',
      title: 'Student Code of Conduct',
      summary: 'The standards of behaviour expected of every student.',
      body: [
        'The Student Code of Conduct sets out the standards of behaviour expected of every CueTech student, on campus, on placements and online. It protects the right of every member of the University to study and work in safety and with dignity, and it explains what happens when the rules are broken.',
      ],
      parts: [
        {
          id: 'principles',
          title: 'Principles',
          list: [
            'Honesty: In coursework, examinations, research and dealings with the University.',
            'Respect: For fellow students, staff, visitors and the people the University serves, regardless of gender, faith, ethnicity or ability.',
            'Responsibility: For your own conduct, for University property and for the reputation of the University in public.',
            'Compliance: With the law, the University’s regulations and the lawful instructions of its staff.',
          ],
        },
        {
          id: 'covers',
          title: 'What the Code covers',
          list: [
            'Academic integrity: plagiarism, cheating, impersonation and fabrication',
            'Attendance, punctuality and conduct in classes, laboratories and examinations',
            'Harassment, bullying, discrimination and intimidation, including online',
            'Use of facilities, equipment, networks and the University’s name',
            'Prohibited items and substances, political and sectarian activity, and unauthorised gatherings',
            'Conduct on internships, placements, field visits and University transport',
          ],
        },
        {
          id: 'discipline',
          title: 'How breaches are handled',
          text: 'Minor matters are dealt with by the head of department or the Directorate of Student Affairs. Serious or repeated breaches go to the Discipline Committee, which hears the student, considers the evidence and may impose penalties from a warning to expulsion. Every student has the right to be heard, to be accompanied, and to appeal to the Vice Chancellor.',
          pending: 'The full text of the Student Code of Conduct will be published here once approved by the statutory bodies. Every student signs an undertaking to observe it at enrolment.',
        },
      ],
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
      body: [
        'The virtual tour will let prospective students and their families walk through the campus from anywhere: the main building, teaching rooms, laboratories, the library, the food court and the grounds, with a short description of each stop.',
        'It will be filmed as each phase of the campus is completed, so that what you see online is what you will find on arrival. Until then, the Campus Gallery shows the buildings that are finished and Google Maps shows the location.',
      ],
      parts: [
        {
          id: 'stops',
          title: 'Planned stops on the tour',
          list: ['Main entrance and security post', 'Main building and administration', 'Lecture rooms and seminar rooms', 'Laboratories, faculty by faculty', 'Central Library', 'Food court and common areas', 'Sports and recreation areas', 'Transport points and parking'],
          pending: 'The virtual tour will be published here once the buildings are complete.',
        },
      ],
      related: [
        { label: 'Campus Gallery', href: '/campus-life/gallery' },
        { label: 'Open the campus in Google Maps', href: site.contact.mapLink ?? '/contact/visit', external: Boolean(site.contact.mapLink) },
      ],
    },
  ],
};

/* ----------------------------------------------------------------------------- Admissions */

const admissions: Section = {
  key: 'admissions',
  label: 'Admissions',
  title: 'Admissions',
  path: '/admissions',
  image: stock('admissions.jpg', 'Rows of graduates in blue caps and gowns.', 'admissions'),
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
    {
      slug: 'schedule',
      title: 'Admission Schedule',
      summary: 'Key dates for the next intake.',
      body: [
        'Admissions run once a year for the Fall semester, which begins after the summer, with a second intake for the Spring semester where a program has places. Each cycle follows the same sequence: an admissions announcement, an application window of several weeks, entry tests and interviews where a program requires them, merit lists, fee payment to confirm the place, and orientation before classes begin.',
        'The key dates for the next intake appear below as soon as the University announces them. They are also published as an Official Announcement in the News section.',
      ],
      component: 'schedule',
    },
    { slug: 'how-to-apply', title: 'How to Apply', summary: 'Step-by-step guide to submitting an application.', href: '/admissions/how-to-apply' },
    {
      slug: 'fees',
      title: 'Fees Structure',
      summary: 'Tuition and other fees for each program.',
      body: [
        'Fees are set by the Board of Governors on the recommendation of the Finance and Planning Committee, published before each admissions cycle and charged per semester. The University does not change a student’s tuition fee rate during their program except as announced before an academic year.',
        'The amounts for each program will be published on this page and on each program page once approved. The structure below explains what the fee for every program is made of, so that applicants know what to expect.',
      ],
      parts: [
        {
          id: 'components',
          title: 'What the fee consists of',
          list: [
            'Admission fee: Paid once, on acceptance of the offer, to confirm the place.',
            'Tuition fee: Charged per semester, according to the program and the number of credit hours registered.',
            'Security deposit: Paid once and refundable on completion or withdrawal, less any dues.',
            'Examination and laboratory charges: Charged per semester for programs with laboratory, clinical or practical work.',
            'Other charges: Student activities, library and digital services, and transport where the student opts for University buses.',
          ],
        },
        {
          id: 'schedule',
          title: 'When fees are due',
          text: 'The admission fee and the first semester’s fees are due by the date in the offer letter; later semesters are due before course registration, by the date in the academic calendar. Late payment carries a surcharge and, after the grace period, suspension of registration. Students facing hardship should contact the Treasurer’s Office before the due date, not after.',
        },
        {
          id: 'refunds',
          title: 'Refunds',
          text: 'Refunds of tuition fees on withdrawal follow the refund policy of the Higher Education Commission, which sets the proportion refundable according to how many days after the start of classes the student withdraws. The security deposit is refunded in full less any outstanding dues.',
        },
        { id: 'amounts', title: 'Fee for each program', pending: 'The approved fee for each program will be published here, and on each program page, before admissions open.' },
      ],
      related: [
        { label: 'How to Pay your Fee?', href: '/admissions/how-to-pay' },
        { label: 'Scholarships and Financial Assistance', href: '/admissions/scholarships' },
      ],
    },
    {
      slug: 'how-to-pay',
      title: 'How to Pay your Fee?',
      summary: 'Official ways to pay admission and tuition fees.',
      body: [
        'Fees are paid against a fee voucher issued by the University, through the official channels listed on this page only. The University never asks for payment to a personal account, by cash to an individual, or through an agent, and no admission is confirmed until the Treasurer’s Office has recorded the payment.',
      ],
      parts: [
        {
          id: 'steps',
          title: 'How payment works',
          list: [
            'Get your voucher: The fee voucher is issued with the offer letter and, for later semesters, through the student portal before registration. It carries a unique reference number.',
            'Pay: Pay the voucher at any branch of the designated bank, or through the online options when they are available, quoting the reference number exactly.',
            'Keep the receipt: Keep the stamped voucher or the transaction receipt. It is your proof of payment.',
            'Confirmation: Payments are posted to your student account within a few working days; check the portal and contact the Treasurer’s Office if a payment does not appear.',
          ],
        },
        {
          id: 'channels',
          title: 'Official payment channels',
          pending: 'The designated bank, the account title and the online payment options will be published here before admissions open. Until then, treat any payment instruction that does not appear on this page as unauthorised.',
        },
        {
          id: 'help',
          title: 'Problems with a payment',
          text: 'For a lost voucher, a payment that has not been credited or a dispute about an amount, contact the Treasurer’s Office with the voucher reference and the receipt. Suspected fraud should be reported to the University at once through the contact page.',
          links: [{ label: 'Contact Us', href: '/contact' }],
        },
      ],
      related: [{ label: 'Fees Structure', href: '/admissions/fees' }],
    },
    {
      slug: 'scholarships',
      title: 'Scholarships and Financial Assistance',
      summary: 'Merit scholarships, need-based assistance and how to apply for them.',
      body: [
        'No able student should be kept out of CueTech by cost. The University will offer scholarships that reward merit and financial assistance that responds to need, and will help students apply for the national and provincial schemes open to them.',
        'The categories below describe the University’s scholarship framework. The amounts, the number of awards and the application dates are approved before each admissions cycle.',
      ],
      parts: [
        {
          id: 'merit',
          title: 'Merit scholarships',
          list: [
            'Entry scholarships: Awarded on admission to the highest-ranked applicants to each program, as a percentage reduction in tuition fees.',
            'Semester merit awards: Awarded each semester to students at the top of their class, on the basis of the semester grade point average.',
            'Position holders: Enhanced awards for applicants who held positions in their Board or equivalent examinations.',
            'Sports and co-curricular awards: For students who represent the University at provincial or national level.',
          ],
        },
        {
          id: 'need-based',
          title: 'Need-based financial assistance',
          text: 'Need-based assistance covers part or all of the tuition fee for students whose family income cannot meet it. Applications are assessed by a committee on documented income and circumstances, in confidence, and may be renewed each year subject to satisfactory progress. Instalment plans are available through the Treasurer’s Office for families who need to spread payments.',
        },
        {
          id: 'external',
          title: 'National and provincial schemes',
          text: 'Students may also be eligible for schemes run outside the University, such as the HEC need-based scholarship programs, the Punjab Educational Endowment Fund and other government and philanthropic schemes, subject to each scheme’s eligibility rules and the University’s participation. The Admissions Office will advise applicants and help with the paperwork.',
        },
        {
          id: 'apply',
          title: 'How to apply',
          list: [
            'Merit scholarships on entry are awarded automatically; no separate application is needed.',
            'Need-based assistance is applied for on the financial assistance form, with income documents, by the date in the admissions announcement.',
            'Decisions are communicated with the offer letter or before the fee due date, so that families can plan.',
          ],
          pending: 'Amounts, the number of awards, the application form and the dates will be published here once the Scholarships and Financial Assistance Policy is approved.',
        },
      ],
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
  image: stock('lecture.jpg', 'Students in a tiered lecture hall listening and taking notes.', 'library'),
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
    {
      slug: 'calendar',
      title: 'Academic Calendar',
      summary: 'Semester dates, examinations and holidays for the academic year.',
      body: [
        'The University follows the semester system of the HEC Undergraduate Education Policy. The academic year has two regular semesters, Fall and Spring, each of sixteen to eighteen weeks including one to two weeks of examinations, and an optional summer semester of eight to nine weeks for repeat, deficiency and failed courses. Classes do not run on public holidays, and timings are adjusted during Ramadan.',
        'The calendar for each academic year is approved by the Academic Council and published below with the dates of registration, the start and end of teaching, mid-term and final examinations, result declaration, fee deadlines and vacations.',
      ],
      parts: [
        {
          id: 'structure',
          title: 'Shape of the academic year',
          list: [
            'Fall semester: Begins after the summer, with orientation for new students in the first week.',
            'Winter break: A short break between the Fall and Spring semesters, after results are declared.',
            'Spring semester: Begins in the new year and ends before the summer.',
            'Summer semester: An optional short semester for remedial, deficiency and repeat courses only, up to eight credit hours.',
            'Convocation: Held once a year for the graduating classes.',
          ],
        },
      ],
      component: 'calendar',
    },
    { slug: 'faculties', title: 'Faculties and Departments', summary: 'Thirteen faculties and their departments.', href: '/faculties' },
    { slug: 'programs', title: 'Degree Programs', summary: 'Undergraduate, associate and proposed graduate programs.', href: '/programs' },
    { slug: 'undergraduate', title: 'Undergraduate Degree Programs', summary: 'The thirteen four-year degree programs.', href: '/programs/undergraduate' },
    { slug: 'associate', title: 'Associate Degree Programs', summary: 'The nine associate degree programs.', href: '/programs/associate' },
    {
      slug: 'online-learning',
      title: 'Online and Blended Learning',
      summary: 'How the University uses its learning management system alongside classroom teaching.',
      body: [
        'Teaching is campus-based, supported by the learning management system (LMS) for course materials, assignments and announcements. Blended and online elements are introduced where they improve learning and meet the regulator’s requirements.',
        'The aim is not to replace the classroom but to extend it: a student should be able to prepare before a class, revisit it afterwards and submit work from anywhere, while laboratories, clinics and seminars remain in person.',
      ],
      parts: [
        {
          id: 'lms',
          title: 'How the LMS is used',
          list: [
            'Every course has an LMS page with its outline, reading list, weekly materials and announcements.',
            'Assignments are submitted and returned through the LMS, with plagiarism checking and a record of feedback.',
            'Quizzes and practice tests give students a check on their progress before formal assessment.',
            'Recorded lectures and supplementary videos support revision, where the teacher provides them.',
            'Attendance, grades and adviser notes are visible to the student and the adviser throughout the semester.',
          ],
        },
        {
          id: 'blended',
          title: 'Blended and online elements',
          text: 'Within the limits set by the Higher Education Commission for online delivery in on-campus programs, departments may deliver part of a course online where it suits the material, for example theory lectures ahead of laboratory sessions, guest lectures by practitioners abroad, or MOOCs taken for credit under the HEC’s rules. Examinations that count towards a degree are held on campus.',
        },
        {
          id: 'support',
          title: 'Support and access',
          text: 'The Directorate of Information Technology supports students and teachers with accounts, training and a help desk. Students without reliable internet at home can use the computer laboratories and the library.',
          pending: 'The University’s policy on online and blended learning will be published here once approved by the Academic Council.',
        },
      ],
      related: [
        { label: 'LMS', href: '/navigate#lms' },
        { label: 'Global Online Learning Initiatives', href: '/global-engagement/online-learning' },
      ],
    },
    {
      slug: 'curriculum',
      title: 'Curriculum and Schemes of Study',
      summary: 'The scheme of study for every program, published on its program page.',
      body: [
        'Each program page carries the program’s scheme of study: its introduction, scope, objectives and learning outcomes, duration, credit hours, semester-by-semester curriculum, admission and passing criteria, internship and project requirements, and the status of its accreditation.',
        'The schemes shown follow the revised curricula of the Higher Education Commission, which set the national minimum standard for each discipline. The University’s own schemes of study, approved by its Academic Council, will replace them as each is approved.',
      ],
      parts: [
        {
          id: 'how-schemes-are-made',
          title: 'How a scheme of study is made',
          list: [
            'HEC curriculum: The National Curriculum Revision Committee for each discipline prescribes the courses, credit hours and learning outcomes that every university must meet as a minimum.',
            'Board of Studies: The department’s Board of Studies adapts the scheme to the University’s resources and priorities, adding electives and domain courses.',
            'Board of Faculty and Academic Council: The scheme is reviewed by the faculty and approved by the Academic Council, which may set higher standards than the HEC minimum.',
            'Review: Schemes are reviewed on a fixed cycle and whenever the HEC or a professional council revises its standards.',
          ],
        },
        {
          id: 'structure',
          title: 'What every undergraduate scheme contains',
          list: [
            'General Education courses prescribed for all undergraduate programs in Pakistan, including Functional English, Expository Writing, Quantitative Reasoning, Islamic Studies or Ethics, Pakistan Studies and Civics',
            'Major courses, compulsory and elective, that define the discipline',
            'Interdisciplinary courses from other departments',
            'A supervised internship or field experience',
            'A capstone project or final-year project',
          ],
        },
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
      body: [
        'Assessment at CueTech is continuous. A student’s grade in a course is built up through the semester from quizzes, assignments, laboratory and project work and a mid-term examination, and completed by a final examination. Examinations are conducted by the Office of the Controller of Examinations under rules approved by the Academic Council, within the framework of the HEC Undergraduate Education Policy.',
      ],
      parts: [
        {
          id: 'assessment',
          title: 'How a course is assessed',
          list: [
            'Continuous assessment: Quizzes, assignments, presentations, laboratory reports and projects spread through the semester, so that students get feedback early.',
            'Mid-term examination: Held in the middle of the semester, in the week set in the academic calendar.',
            'Final examination: Held in the last weeks of the semester; it covers the whole course and carries the largest single weight.',
            'Practical and clinical assessment: Laboratory, clinical and skills examinations in programs that have them, assessed against the professional council’s requirements.',
            'Weighting: The weight of each component is stated in the course outline at the start of the semester and does not change during it.',
          ],
        },
        {
          id: 'grading',
          title: 'Grading and academic standing',
          list: [
            'Letter grades and grade points on the four-point scale used by the HEC, with a semester grade point average (GPA) and a cumulative grade point average (CGPA).',
            'A minimum CGPA of 2.00 is required for the award of an undergraduate or associate degree, as the HEC curricula prescribe; the University may set higher standards for particular programs.',
            'Students whose CGPA falls below the threshold are placed on probation and supported by their adviser; continued low performance leads to the consequences set out in the Probation Rules.',
            'Failed courses are repeated in a later or summer semester; improvement of grades is permitted within the limits of the rules.',
          ],
        },
        {
          id: 'conduct',
          title: 'Conduct of examinations',
          list: [
            'Eligibility: A minimum attendance, set in the Semester Rules, is required to sit the final examination.',
            'Identity and materials: Students carry their University card; only permitted materials are allowed at the desk.',
            'Unfair means: Cheating, impersonation and plagiarism are investigated by the Unfair Means Committee and penalised under the Examination Rules.',
            'Results: Results are declared by the Controller of Examinations within the period set in the calendar and published on the student portal.',
            'Review: A student may apply for rechecking of a script within the period allowed, and may appeal a decision under the rules.',
          ],
          pending: 'The Examination Rules, the grading scheme and the Probation Rules will be published in full on the Academic Rules and Regulations page once approved by the statutory bodies.',
        },
      ],
      related: [
        { label: 'Academic Rules and Regulations', href: '/academics/regulations' },
        { label: 'Academic Calendar', href: '/academics/calendar' },
      ],
    },
  ],
};

/* ------------------------------------------------------------------------ Teaching faculty */

const teachingFaculty: Section = {
  key: 'teaching-faculty',
  label: 'Teaching Faculty',
  title: 'Teaching Faculty Members',
  path: '/teaching-faculty',
  image: stock('education.jpg', 'A teacher at the front of a classroom addressing adult students.', 'education'),
  summary: 'Profiles of the teaching faculty, by department, with their official email addresses.',
  pages: departments.map((d) => ({ slug: d.slug, title: d.name, summary: `Teaching faculty of the ${d.name}.`, href: `/teaching-faculty/${d.slug}` })),
};

/* ------------------------------------------------------------------------ Global engagement */

const globalEngagement: Section = {
  key: 'global-engagement',
  label: 'Global Engagement',
  title: 'Global Engagement and Partnerships',
  path: '/global-engagement',
  image: stock('global.jpg', 'A diverse group of students around a laptop in a lecture hall.', 'aviation'),
  summary: 'The University’s international strategy, partnerships and opportunities for students and staff.',
  pages: [
    {
      slug: 'strategy',
      title: 'Internationalization Strategy',
      summary: 'How the University builds its international links.',
      body: [
        'The University’s internationalization strategy sets out how it will build academic partnerships, exchange opportunities and joint research with institutions abroad, and how it will welcome international students to Lahore.',
        'For a new university the strategy is deliberately practical. It begins with the links that improve teaching now, such as visiting lecturers, shared online courses and curriculum benchmarking, and builds towards exchange, joint programs and research as the faculties mature.',
      ],
      parts: [
        {
          id: 'pillars',
          title: 'Five pillars',
          list: [
            'Partnerships: Agreements with universities and institutions abroad in each of the University’s disciplines, chosen for substance rather than number.',
            'Mobility: Semester exchange, short programs and summer schools for students; teaching and research visits for faculty.',
            'Curriculum: Benchmarking of schemes of study against international programs, and electives delivered with partners.',
            'Research: Joint projects, co-supervision and shared facilities, coordinated by ORIC.',
            'International students: Admission, support and a welcoming campus for students from abroad, particularly from the wider region.',
          ],
        },
        {
          id: 'priorities',
          title: 'Where the University will look first',
          text: 'Early partnerships will concentrate on the fields in which CueTech is distinctive and in which Pakistani graduates are in international demand: computing and data science, nursing and allied health, pharmacy, aviation management and agribusiness. Geographically the University looks to the Gulf, Central Asia, China, Turkey, Malaysia, the United Kingdom and North America, where its disciplines have strong institutions and Pakistani communities.',
        },
        {
          id: 'office',
          title: 'Office of International Relations',
          text: 'The strategy will be delivered by an Office of International Relations working under the Vice Chancellor with ORIC, the Admissions Office and the faculties. It negotiates agreements, administers exchange, supports international students and reports to the Academic Council each year.',
          pending: 'The full strategy document will be published here once approved by the Board of Governors.',
        },
      ],
    },
    { slug: 'partnerships', title: 'Global Academic Partnerships', summary: 'The University’s partner institutions around the world.', component: 'partners' },
    {
      slug: 'collaboration',
      title: 'International Collaboration',
      summary: 'Collaboration with international institutions in teaching and research.',
      body: [
        'International collaboration takes many forms short of a formal partnership, and most of what students experience, a guest lecture from abroad, a shared project, an externally moderated examination, comes from these working relationships between departments and their counterparts.',
      ],
      parts: [
        {
          id: 'forms',
          title: 'Forms of collaboration',
          list: [
            'Teaching: Visiting and online guest lectures, co-taught modules and shared case studies.',
            'Quality: External examiners and curriculum reviewers from partner institutions.',
            'Research: Joint supervision, shared data and facilities, and co-authored publications.',
            'Professional practice: Links with hospitals, pharmacies, airlines, agribusinesses and technology firms abroad for placements and projects.',
            'Capacity building: Training of CueTech faculty in teaching methods, laboratory practice and research skills.',
          ],
        },
        {
          id: 'how',
          title: 'How collaborations are agreed',
          text: 'A department proposes a collaboration through its Dean; the Office of International Relations and ORIC review it; and where it involves students, credit or money, a memorandum of understanding is signed by the Vice Chancellor. Every agreement is recorded in a register and reviewed before renewal.',
          pending: 'Current collaborations will be listed here as agreements are signed.',
        },
      ],
    },
    {
      slug: 'exchange',
      title: 'Faculty and Student Exchange',
      summary: 'Opportunities to study or teach abroad, and to host visitors here.',
      body: [
        'Exchange lets a CueTech student spend a semester or a summer at a partner institution, and a student from abroad spend time in Lahore, with the credits counted towards the home degree. For faculty, exchange means teaching or research visits that bring new methods back to the department.',
      ],
      parts: [
        {
          id: 'students',
          title: 'For students',
          list: [
            'Semester exchange: One semester at a partner university in the third or fourth year, with courses pre-approved for credit transfer by the Board of Studies.',
            'Short programs: Summer schools, study tours and competitions abroad of two to six weeks.',
            'Virtual exchange: Joint online courses and projects with students at partner institutions, open to every student.',
            'Eligibility: Good academic standing, a minimum CGPA set for each program, the language requirement of the host, and a clean conduct record.',
            'Costs: Tuition is normally waived by the partner under the exchange agreement; students meet travel and living costs, with scholarships where available.',
          ],
        },
        {
          id: 'faculty',
          title: 'For faculty',
          text: 'Faculty may apply for teaching visits, research stays and training placements at partner institutions, supported by the University’s faculty development funds and the schemes of the Higher Education Commission. In return the University hosts visiting faculty, who teach, examine and advise during their stay.',
        },
        {
          id: 'incoming',
          title: 'For incoming students and staff',
          text: 'Visitors from partner institutions are supported with admission formalities, visa documentation, orientation, accommodation advice and a buddy from the student body.',
          pending: 'Exchange opportunities will be published here as partnerships are established.',
        },
      ],
    },
    {
      slug: 'visiting-scholars',
      title: 'International Visiting Scholars',
      summary: 'Scholars from abroad who teach and research at the University.',
      body: [
        'The visiting scholars program brings academics and practitioners from abroad to Lahore for periods from a week to a semester, to teach, give public lectures, supervise projects and work with the University’s faculty.',
      ],
      parts: [
        {
          id: 'program',
          title: 'What visiting scholars do',
          list: [
            'Teach an intensive course or a module within a course, with CueTech faculty',
            'Give a public lecture open to students, staff and the wider community',
            'Run workshops for faculty on teaching, assessment and research methods',
            'Advise departments on curriculum, laboratories and professional practice',
            'Begin joint research with CueTech faculty and students',
          ],
        },
        {
          id: 'who',
          title: 'Who the University invites',
          text: 'Priority goes to scholars in the University’s disciplines who can work directly with a department, including members of the Pakistani diaspora in academia and industry abroad. Departments nominate visitors through their Dean; the Office of International Relations arranges the visit and its funding, with support from HEC schemes where available.',
          pending: 'Visiting scholars and their public lectures will be listed here, and announced in the Events calendar.',
        },
      ],
    },
    {
      slug: 'joint-programs',
      title: 'Joint Academic Programs',
      summary: 'Programs delivered jointly with partner institutions.',
      body: [
        'Joint programs allow a student to earn credits, a qualification or a dual award from CueTech and a partner institution together. They are the most demanding form of partnership, requiring the approval of both institutions and of the Higher Education Commission, and the University will develop them carefully as its programs become established.',
      ],
      parts: [
        {
          id: 'types',
          title: 'Types of joint program',
          list: [
            'Credit-transfer pathways: Students complete part of a CueTech program and transfer, with credit, to a partner to finish a related degree abroad.',
            'Dual and joint degrees: A single program designed and taught by both institutions, leading to an award from each or a joint award.',
            'Joint certificates: Short professional programs taught with a partner in fields such as data science, aviation management and public health.',
            'Articulation of associate degrees: Agreements that admit CueTech associate degree graduates to the third year of a partner’s bachelor’s program.',
          ],
        },
        {
          id: 'standards',
          title: 'Standards',
          text: 'Every joint program must meet the HEC’s rules on collaborative provision, the accreditation requirements of the relevant professional council in Pakistan, and the quality requirements of the partner’s own regulator. The University will not advertise a joint program until all three approvals are in place.',
          pending: 'Joint academic programs will be listed here once approved by the University, its partners and the HEC.',
        },
      ],
    },
    {
      slug: 'research-collaboration',
      title: 'International Research Collaboration',
      summary: 'Research projects with international partners.',
      body: [
        'Research at a young university grows fastest in partnership. CueTech will pursue international research collaboration in the fields where its faculties have a natural contribution to make, coordinated by the Office of Research, Innovation and Commercialization.',
      ],
      parts: [
        {
          id: 'themes',
          title: 'Themes',
          list: [
            'Applied data science, artificial intelligence and information security',
            'Public health, nursing practice and pharmaceutical sciences in low-resource settings',
            'Agribusiness, poultry production and food security in South Asia',
            'Aviation operations and transport management',
            'Business analytics, finance and entrepreneurship in emerging economies',
            'Education, language and social science research relevant to Punjab',
          ],
        },
        {
          id: 'support',
          title: 'How ORIC supports collaboration',
          text: 'ORIC identifies calls for proposals, matches CueTech faculty with partners, helps draft and cost proposals, manages awarded grants, handles agreements on intellectual property and ethics, and reports research outputs to the Higher Education Commission.',
          pending: 'International research collaborations will be listed here as they begin.',
        },
      ],
      related: [{ label: 'Research, Innovation & Commercialization (ORIC)', href: '/about/oric' }],
    },
    {
      slug: 'industry-partnerships',
      title: 'Industry and Institutional Partnerships',
      summary: 'Links with employers, professional bodies and other institutions.',
      body: [
        'Every CueTech program requires an internship, and every graduate needs an employer. Partnerships with industry, hospitals, professional bodies and other institutions make both possible, and they keep the curriculum honest about what the professions actually need.',
      ],
      parts: [
        {
          id: 'what-partners-do',
          title: 'What partners do with the University',
          list: [
            'Internships and placements: Structured internships, clinical rotations and industrial attachments for students in every program.',
            'Advisory boards: Practitioners on the industrial advisory board of each faculty, reviewing curricula and projects.',
            'Projects and problems: Real problems for capstone and final-year projects, and sponsorship of student competitions.',
            'Guest teaching: Practitioners teaching specialist topics and professional practice.',
            'Recruitment: Early access to graduates through career fairs and placement drives.',
            'Research and consultancy: Applied research, testing and training delivered through ORIC.',
          ],
        },
        {
          id: 'sectors',
          title: 'Sectors the University is engaging',
          text: 'Software and technology firms, banks and financial institutions, hospitals and health networks, pharmaceutical manufacturers, airlines and airport operators, agribusinesses and poultry integrators, law firms and chambers, schools and education networks, and the professional councils that accredit the University’s programs.',
          pending: 'Industry and institutional partners will be listed here as agreements are signed.',
        },
      ],
    },
    {
      slug: 'online-learning',
      title: 'Global Online Learning Initiatives',
      summary: 'Online courses and programs offered with international partners.',
      body: [
        'Online learning lets the University bring teaching from the best institutions in the world to its students in Lahore, and in time take its own teaching to students who cannot come to the campus. These initiatives complement campus teaching; they do not replace it.',
      ],
      parts: [
        {
          id: 'initiatives',
          title: 'Planned initiatives',
          list: [
            'MOOCs for credit: Courses from international platforms recognised for credit under the Higher Education Commission’s rules, chosen by each department to extend its electives.',
            'Joint online courses: Courses taught online by CueTech and a partner together, with students from both institutions in the same virtual classroom.',
            'Visiting lectures online: Regular lectures by international scholars and practitioners, open to all students.',
            'Professional certificates: Industry certifications in computing, data, security and project management studied online alongside the degree, as the HEC curricula encourage.',
            'Continuing education: Short online courses from CueTech for professionals, schools and the community, as the University’s capacity grows.',
          ],
        },
        {
          id: 'quality',
          title: 'Quality and recognition',
          text: 'Online learning that counts towards a CueTech degree is approved by the Academic Council, assessed to the same standard as campus courses, and kept within the limits the HEC sets for online delivery in on-campus programs.',
          pending: 'Initiatives will be described here with their partners and start dates once launched.',
        },
      ],
      related: [{ label: 'Online and Blended Learning', href: '/academics/online-learning' }],
    },
    {
      slug: 'international-admissions',
      title: 'International Student Admissions',
      summary: 'How students from outside Pakistan can apply.',
      body: [
        'International applicants follow the same application steps as other applicants, with additional guidance from the Admissions Office on the equivalence of qualifications, visas and arrival. Lahore is a hospitable city for students, and the University’s programs in computing, business, health and the professions are open to students from abroad and to overseas Pakistanis.',
      ],
      parts: [
        {
          id: 'who',
          title: 'Who counts as an international applicant',
          text: 'Students who are not citizens of Pakistan, and Pakistani citizens who hold foreign qualifications, apply as international applicants. Overseas Pakistanis and dual nationals may be eligible for seats reserved for them under the University’s admission regulations.',
        },
        {
          id: 'steps',
          title: 'Steps for international applicants',
          list: [
            'Equivalence: Obtain an equivalence certificate for your school-leaving qualification from the Inter Board Committee of Chairmen (IBCC) in Pakistan; the Admissions Office can advise on the documents needed.',
            'Program requirements: Check the eligibility criteria of your program, including any required subject group such as pre-medical for health programs and Mathematics for computing.',
            'English: Teaching is in English; applicants educated in another language may be asked for evidence of proficiency.',
            'Apply: Submit the online application with scanned documents by the closing date; entry tests may be taken in person or, where offered, online.',
            'Offer and visa: With the offer letter and fee receipt, apply for a Pakistani student visa; the University issues the supporting documents.',
            'Arrival: The Office of International Relations helps with registration with the authorities, accommodation advice and orientation.',
          ],
        },
        {
          id: 'support',
          title: 'Support in Lahore',
          text: 'International students are assigned a mentor, receive help with banking, SIM cards and local registration, and have a named contact in the Office of International Relations throughout their studies.',
          pending: 'The international fee schedule, reserved seats and the visa support contact will be published here before admissions open.',
        },
      ],
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
  image: stock('events.jpg', 'An auditorium audience seen from above.', 'events'),
  summary: 'News, announcements, events and media from the University.',
  pages: [
    ...newsCategories.map((c) => ({ slug: c.slug, title: c.label, summary: c.description, href: c.slug === 'university-news' ? '/news' : `/news/category/${c.slug}` })),
    { slug: 'events', title: 'Events Calendar', summary: 'Upcoming events across the University.', href: '/events' },
    ...eventCategories
      .filter((c) => c.slug === 'seminars-conferences' || c.slug === 'workshops-training')
      .map((c) => ({ slug: c.slug, title: c.label, summary: c.description, href: `/events/category/${c.slug}` })),
  ],
  menuLinks: newsMenu,
};

const media: Section = {
  key: 'media',
  label: 'Media',
  title: 'Media',
  path: '/media',
  image: stock('events.jpg', 'An auditorium audience seen from above.', 'events'),
  summary: 'Photographs, video and the University newsletter.',
  hidden: true,
  hub: { label: 'News & Events', href: '/news' },
  menuLinks: newsMenu,
  pages: [
    { slug: 'photo-gallery', title: 'Photo Gallery', summary: 'Photographs of the University and its events.', component: 'gallery' },
    {
      slug: 'video-gallery',
      title: 'Video Gallery',
      summary: 'Videos from the University.',
      body: [
        'The video gallery will carry the University’s films: a tour of the campus as it is completed, messages from its leaders, recordings of public lectures and convocations, and short pieces on student life, societies and sport.',
        'Videos are produced by the University’s media office and published on its official channels. Only films published here or on those channels are official.',
      ],
      parts: [
        {
          id: 'planned',
          title: 'Planned series',
          list: ['Campus tour, phase by phase', 'Messages from the Chancellor, the Chairman BoG and the Vice Chancellor', 'Public lectures and visiting scholars', 'A day in the life of a CueTech student', 'Faculty profiles: thirteen departments in thirteen films', 'Convocation and sports day highlights'],
          pending: 'Videos will be published here as they are produced.',
        },
      ],
    },
    {
      slug: 'newsletter',
      title: 'Newsletter',
      summary: 'The University’s newsletter, issue by issue.',
      body: [
        'The CueTech newsletter is a quarterly record of the University’s life: news from the faculties, student achievements, events, research, appointments and messages from the leadership. It is published online and sent by email to students, staff, alumni and friends of the University.',
      ],
      parts: [
        {
          id: 'inside',
          title: 'In every issue',
          list: ['A message from the Vice Chancellor', 'News from the thirteen faculties', 'Student achievements, societies and sport', 'Events of the quarter and the calendar ahead', 'Research, partnerships and visitors', 'Appointments and farewells', 'Photographs of the quarter'],
        },
        {
          id: 'subscribe',
          title: 'Subscribe and contribute',
          text: 'Students and staff receive the newsletter automatically. Others may subscribe by sending their name and email address through the contact form. Contributions, including news, photographs and student writing, are welcome and should be sent to the media office before the end of each quarter.',
          links: [{ label: 'Contact form', href: '/contact' }],
          pending: 'Issues of the newsletter will be published here from the first academic year.',
        },
      ],
    },
  ],
};

/* -------------------------------------------------------------------------------- Careers */

const careers: Section = {
  key: 'careers',
  label: 'Careers at CueTech',
  title: 'Careers at CueTech',
  path: '/careers',
  image: stock('careers.jpg', 'A young woman shaking hands with an interviewer.', 'management'),
  summary: 'Current and previous job announcements.',
  pages: [],
};

/* -------------------------------------------------------------------------------- Contact */

const contact: Section = {
  key: 'contact',
  label: 'Contact',
  title: 'Contact and Visit Us',
  path: '/contact',
  image: mainBuilding,
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
