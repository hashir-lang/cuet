import type { Draft } from './types';

/**
 * Admissions content. The process steps are a general description of how to apply.
 * Policy details (eligibility, required documents, dates, tests) must be confirmed
 * by the University; the documents list is a DRAFT based on common practice.
 */

const draft = <T,>(value: T): Draft<T> => ({ status: 'draft', value });

export const applySteps = [
  {
    title: 'Choose your program',
    text: 'Browse the seventeen undergraduate programs and read about the faculty that teaches each one. Note the program’s eligibility criteria once published.',
    link: { label: 'Browse programs', href: '/programs' },
  },
  {
    title: 'Check eligibility',
    text: 'Make sure your previous qualifications meet the requirements for your chosen program. If you are unsure, contact the Admissions Office before applying.',
    link: { label: 'Admission requirements', href: '/admissions/requirements' },
  },
  {
    title: 'Prepare your documents',
    text: 'Collect clear copies of your academic certificates and transcripts, identity documents and recent photographs, so you can complete the application in one sitting.',
    link: { label: 'Document checklist', href: '/admissions/requirements#documents' },
  },
  {
    title: 'Complete the application',
    text: 'Fill in the application through the University’s official application route, check every detail carefully and attach your documents.',
    link: { label: 'Online application', href: '/admissions/apply' },
  },
  {
    title: 'Submit and keep your reference',
    text: 'After you submit, keep a copy of your application and any reference number. You will need it if you contact the Admissions Office.',
    link: null,
  },
  {
    title: 'Hear about next steps',
    text: 'The Admissions Office will contact you about the outcome of your application and any further steps.',
    link: { label: 'Contact the University', href: '/contact' },
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

export const admissionsFaqs = [
  {
    question: 'When does the next intake open?',
    answer: 'Dates for the next intake have not yet been announced. They will be published on the Admissions pages and in the News section.',
  },
  {
    question: 'Can I apply for more than one program?',
    answer: 'Please contact the Admissions Office to confirm whether you can apply for more than one program in the same intake.',
  },
  {
    question: 'Are scholarships or financial aid available?',
    answer: 'Information about scholarships and financial support has not yet been published. Please contact the Admissions Office for details.',
  },
  {
    question: 'Who can I contact for help with my application?',
    answer: 'The Admissions Office can help with questions about programs, eligibility and the application process. Use the contact page to get in touch.',
  },
];
