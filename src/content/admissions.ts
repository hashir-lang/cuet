import type { Draft } from './types';

/**
 * Admissions content. The process steps are a general description of how to apply.
 * Policy details (eligibility, required documents, dates, tests, fees, scholarships) must be
 * confirmed by the University; the documents list is a DRAFT based on common practice.
 */

const draft = <T,>(value: T): Draft<T> => ({ status: 'draft', value });

export const applySteps = [
  {
    title: 'Choose your program',
    text: 'Browse the undergraduate and associate degree programs and read about the faculty that teaches each one. Note the program’s eligibility criteria once published.',
    link: { label: 'Browse degree programs', href: '/programs' },
  },
  {
    title: 'Check eligibility',
    text: 'Make sure your previous qualifications meet the requirements for your chosen program. If you are unsure, contact the Admissions Office before applying.',
    link: { label: 'Programs and eligibility criteria', href: '/admissions/programs-eligibility' },
  },
  {
    title: 'Prepare your documents',
    text: 'Collect clear copies of your academic certificates and transcripts, identity documents and recent photographs, so you can complete the application in one sitting.',
    link: { label: 'Document checklist', href: '/admissions/programs-eligibility#documents' },
  },
  {
    title: 'Complete the application',
    text: 'Fill in the application through the University’s official application route, check every detail carefully and attach your documents.',
    link: { label: 'Apply Online', href: '/admissions/apply' },
  },
  {
    title: 'Pay the application fee',
    text: 'Pay any application fee through the official channels only, and keep the receipt. Payment instructions are published on the How to Pay your Fee page.',
    link: { label: 'How to pay your fee', href: '/admissions/how-to-pay' },
  },
  {
    title: 'Hear about next steps',
    text: 'The Admissions Office will contact you about the outcome of your application, any test or interview, and how to confirm your place.',
    link: { label: 'Contact the Admissions Office', href: '/contact/offices#admissions-office' },
  },
];

export const requiredDocuments = draft([
  'Matriculation (SSC) or equivalent certificate and marks sheet',
  'Intermediate (HSSC) or equivalent certificate and marks sheet',
  'Equivalence certificate for foreign or O/A-level qualifications, where applicable',
  'Copy of CNIC, or B-Form for applicants under 18',
  'Copy of parent or guardian’s CNIC',
  'Recent passport-size photographs',
]);

/** Reasons to choose CueTech, for the "Why Choose CueTech?" page and the home page. DRAFT. */
export const whyCueTech = draft([
  { title: 'Breadth across thirteen faculties', text: 'Study computing, business, health sciences, law, aviation, agriculture and more within one university, with programs that share common academic standards.' },
  { title: 'Programs built for emerging fields', text: 'From data science and information security to agribusiness and aviation management, programs are chosen for where Pakistan’s economy is heading.' },
  { title: 'Learning through practice', text: 'The University’s infrastructure plan allocates dedicated laboratories to every practice-led faculty.' },
  { title: 'A library for every faculty', text: 'Each faculty has its own library allocation in the plan, supporting coursework and independent study.' },
  { title: 'Two routes into higher education', text: 'Associate degrees offer a shorter path into work or further study alongside the four-year undergraduate programs.' },
  { title: 'Rooted in Lahore', text: 'Study in one of South Asia’s great centres of learning and culture, close to the families, employers and communities the University serves.' },
]);

/** The academic and student support system described to applicants. DRAFT. */
export const supportSystem = draft([
  { title: 'Academic advising', text: 'Every student is assigned an academic adviser who helps plan courses, monitor progress and resolve academic difficulties.' },
  { title: 'Student mentorship', text: 'Faculty mentors and senior students help new students settle into university life.' },
  { title: 'Counselling and wellbeing', text: 'Confidential counselling and wellbeing support for personal and academic concerns.' },
  { title: 'Career guidance', text: 'Advice on internships, placements and careers, with links to employers in each discipline.' },
  { title: 'Library and digital resources', text: 'A central library with print and digital collections, and a dedicated allocation for each faculty.' },
  { title: 'Laboratories and learning spaces', text: 'Dedicated laboratories for practice-led programs and classrooms designed for how each subject is taught.' },
]);

export const admissionsFaqs = [
  {
    question: 'When does the next intake open?',
    answer: 'Dates for the next intake have not yet been announced. They will be published on the Admission Schedule page and in the News section.',
  },
  {
    question: 'Which programs can I apply for?',
    answer: 'The University offers thirteen undergraduate degree programs and nine associate degree programs. The programs open for each intake are confirmed in the admissions announcement.',
  },
  {
    question: 'Can I apply for more than one program?',
    answer: 'Please contact the Admissions Office to confirm whether you can apply for more than one program in the same intake.',
  },
  {
    question: 'What are the fees?',
    answer: 'The fee structure for each program will be published on the Fees Structure page and on each program page once approved by the University.',
  },
  {
    question: 'How do I pay my fee?',
    answer: 'Official payment instructions, including bank details and any online options, will be published on the How to Pay your Fee page. Pay only through the channels listed there.',
  },
  {
    question: 'Are scholarships or financial assistance available?',
    answer: 'Information about scholarships and financial assistance has not yet been published. Please contact the Admissions Office for details.',
  },
  {
    question: 'Who can I contact for help with my application?',
    answer: 'The Admissions Office can help with questions about programs, eligibility and the application process. Use the contact page to get in touch.',
  },
];
