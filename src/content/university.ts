import type { Draft } from './types';

/**
 * Institutional text for the About CueTech pages.
 * Vision, mission, core values, goals and philosophy are DRAFTS for the University to approve or replace.
 * History, charter, messages and leadership are placeholders until official information is supplied.
 */

const draft = <T,>(value: T): Draft<T> => ({ status: 'draft', value });

export const university = {
  overview: draft([
    'Central University of Emerging Technologies-CueTech is a multi-disciplinary university in Lahore, organised into thirteen faculties. It offers thirteen undergraduate degree programs and nine associate degree programs across computing, business, the humanities, education, law, aviation, the sciences, agriculture, health, engineering technology, nursing, pharmacy and veterinary sciences.',
    'Its academic plan pairs classroom teaching with dedicated laboratory space for practice-led disciplines and a growing academic library, so that students learn by doing as well as by studying.',
  ]),
  vision: draft('To be a university that Lahore and Pakistan rely on for capable, ethical graduates and for knowledge that serves society.'),
  mission: draft(
    'To provide rigorous, practice-led education across a broad range of disciplines, to support every student to reach their potential, and to contribute to the economic and social development of the communities we serve.',
  ),
  coreValues: draft([
    { title: 'Integrity', text: 'Honesty and fairness in teaching, assessment, research and administration.' },
    { title: 'Excellence', text: 'High standards in everything the University does, measured against national and international benchmarks.' },
    { title: 'Inclusion', text: 'A campus open to students of every background, with support for those who need it.' },
    { title: 'Innovation', text: 'Curiosity about emerging technologies and the confidence to apply them.' },
    { title: 'Service', text: 'Knowledge and graduates that serve Lahore, Punjab and Pakistan.' },
    { title: 'Responsibility', text: 'Ethical conduct, care for the environment and accountability to the public.' },
  ]),
  goals: draft([
    'Offer high-quality undergraduate and associate degree programs that meet professional and academic standards.',
    'Combine theory with practice through laboratory, project and field-based learning.',
    'Develop graduates who communicate clearly, think critically and act ethically.',
    'Build an academic library and learning environment that supports independent study.',
    'Engage with employers, professions and the wider community.',
    'Establish research and graduate study in each faculty as the University grows.',
  ]),
  philosophy: draft(
    'We believe that understanding comes from engagement. Students learn best when they question ideas, test them in practice and reflect on the results, guided by teachers who know their subject and care about their students.',
  ),
  approach: draft([
    { title: 'Foundations first', text: 'Programs begin with the core knowledge of each discipline, so later specialist study rests on firm ground.' },
    { title: 'Learning by doing', text: 'Laboratories, workshops, moot court exercises and projects turn theory into practical skill.' },
    { title: 'Close guidance', text: 'Students are supported by academic advising and teachers who are accessible beyond the lecture hall.' },
    { title: 'Ready for work', text: 'Communication, teamwork and professional ethics are developed throughout every program.' },
  ]),

  /** Null until the University supplies a verified history. */
  history: null as null | string[],
  /** The sponsoring body and the circumstances of establishment. Null until supplied. */
  sponsors: null as null | string[],
  /** Charter, Act and recognition details. Null until the documents are released for publication. */
  charter: null as null | { summary: string[]; documents: { label: string; href: string }[] },

  /**
   * Messages from the University's leaders. Each is null until the office holder supplies a message.
   * Example: { name: 'Prof. Dr ...', title: 'Vice Chancellor', photo: '/images/leadership/vc.jpg', text: ['Paragraph one', 'Paragraph two'] }
   */
  messages: {
    chancellor: null as null | { name: string; title: string; photo: string | null; text: string[] },
    chairman: null as null | { name: string; title: string; photo: string | null; text: string[] },
    viceChancellor: null as null | { name: string; title: string; photo: string | null; text: string[] },
  },

  /** Leadership roles. Names and photos are null until appointments are announced. */
  leadership: [
    { role: 'Chancellor', name: null as null | string, photo: null as null | string },
    { role: 'Chairman, Board of Governors', name: null as null | string, photo: null as null | string },
    { role: 'Vice Chancellor', name: null as null | string, photo: null as null | string },
    { role: 'Registrar', name: null as null | string, photo: null as null | string },
    { role: 'Controller of Examinations', name: null as null | string, photo: null as null | string },
    { role: 'Treasurer', name: null as null | string, photo: null as null | string },
    { role: 'Director of Admissions', name: null as null | string, photo: null as null | string },
    { role: 'Director, Quality Enhancement Cell', name: null as null | string, photo: null as null | string },
  ],

  /**
   * Statutory bodies. The descriptions are DRAFT summaries of each body's usual role; the
   * composition and membership are null until notified by the University.
   */
  governance: draft([
    {
      id: 'board-of-governors',
      title: 'Board of Governors',
      text: 'The principal governing body of the University. It approves statutes, regulations and policies, oversees the University’s finances and property, and holds the administration accountable for the University’s performance.',
    },
    {
      id: 'academic-council',
      title: 'Academic Council',
      text: 'The principal academic body. It regulates teaching, examinations and research, approves curricula and schemes of study, and advises the Board of Governors on academic matters.',
    },
    {
      id: 'board-of-advanced-studies-and-research',
      title: 'Board of Advanced Studies and Research',
      text: 'Oversees graduate programs and research. It approves research supervisors, research proposals and theses, and recommends policies for advanced study.',
    },
    {
      id: 'finance-and-planning-committee',
      title: 'Finance and Planning Committee',
      text: 'Advises the Board of Governors on financial planning, annual statements of accounts and development plans, and reviews proposals with financial implications.',
    },
    {
      id: 'selection-board',
      title: 'Selection Board',
      text: 'Recommends appointments and promotions of academic staff and senior administrative staff to the Board of Governors, following the University’s advertised criteria.',
    },
    {
      id: 'other-statutory-authorities',
      title: 'Other Statutory Authorities',
      text: 'Other authorities provided for in the University’s Act and statutes, such as the Boards of Faculties, the Boards of Studies and the Discipline Committee, will be listed here as they are constituted.',
    },
  ]),

  /** Administrative offices. Office holders and contact details are null until published. */
  administration: [
    { id: 'office-of-the-vice-chancellor', title: 'Office of the Vice Chancellor', text: 'The chief academic and administrative office of the University.' },
    { id: 'registrars-office', title: 'Registrar’s Office', text: 'Student records, academic administration, statutory meetings and official correspondence.' },
    { id: 'controller-of-examinations', title: 'Office of the Controller of Examinations', text: 'Conduct of examinations, results and transcripts.' },
    { id: 'treasurers-office', title: 'Treasurer’s Office', text: 'Fees, accounts and financial administration.' },
    { id: 'directorate-of-admissions', title: 'Directorate of Admissions', text: 'Applications, admission tests, merit lists and enrolment.' },
    { id: 'directorate-of-student-affairs', title: 'Directorate of Student Affairs', text: 'Student services, societies, sports, counselling and welfare.' },
    { id: 'quality-enhancement-cell', title: 'Quality Enhancement Cell', text: 'Quality assurance of programs and institutional self-assessment.' },
    { id: 'oric', title: 'Office of Research, Innovation and Commercialization', text: 'Research management, innovation and links with industry.' },
    { id: 'directorate-of-information-technology', title: 'Directorate of Information Technology', text: 'Campus network, the student portal, the LMS and digital services.' },
    { id: 'central-library', title: 'Central Library', text: 'Print and digital collections and reader services.' },
  ],

  /** Policy documents the University intends to publish. Links are added as each is approved. */
  policies: [
    { label: 'Anti-Harassment Regulations', href: null as null | string },
    { label: 'Grievance Redressal Policy', href: null as null | string },
    { label: 'Student Code of Conduct', href: null as null | string },
    { label: 'Semester Rules and Regulations', href: null as null | string },
    { label: 'Examination Rules', href: null as null | string },
    { label: 'Plagiarism and Academic Integrity Policy', href: null as null | string },
    { label: 'Scholarships and Financial Assistance Policy', href: null as null | string },
    { label: 'Data Protection and Privacy Policy', href: null as null | string },
    { label: 'Health, Safety and Security Policy', href: null as null | string },
  ],
} as const;
