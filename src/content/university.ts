import type { Draft } from './types';

/**
 * Institutional text for the About page.
 * Vision, mission and objectives are DRAFTS for the University to approve or replace.
 * History and leadership are placeholders until official information is supplied.
 */

const draft = <T,>(value: T): Draft<T> => ({ status: 'draft', value });

export const university = {
  overview: draft([
    'Central University of Emerging Technologies (CueTech) is a multi-disciplinary university organised into thirteen faculties, offering seventeen undergraduate programs across business, computing, education, the humanities, the health sciences, engineering technology, aviation, law, agriculture and the mathematical sciences.',
    'Its academic plan pairs classroom teaching with dedicated laboratory space for practice-led disciplines and a growing academic library, so that students learn by doing as well as by studying.',
  ]),
  vision: draft(
    'To be a university that Lahore and Pakistan rely on for capable, ethical graduates and for knowledge that serves society.',
  ),
  mission: draft(
    'To provide rigorous, practice-led undergraduate education across a broad range of disciplines, to support every student to reach their potential, and to contribute to the economic and social development of the communities we serve.',
  ),
  objectives: draft([
    'Offer high-quality undergraduate programs that meet professional and academic standards.',
    'Combine theory with practice through laboratory, project and field-based learning.',
    'Develop graduates who communicate clearly, think critically and act ethically.',
    'Build an academic library and learning environment that supports independent study.',
    'Engage with employers, professions and the wider community.',
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
  /** Leadership roles to be confirmed. Names and photos are null until announced. */
  leadership: [
    { role: 'Vice-Chancellor', name: null as null | string, photo: null as null | string },
    { role: 'Registrar', name: null as null | string, photo: null as null | string },
    { role: 'Controller of Examinations', name: null as null | string, photo: null as null | string },
    { role: 'Director of Admissions', name: null as null | string, photo: null as null | string },
  ],
} as const;
