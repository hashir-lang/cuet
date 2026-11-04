import type { FacultyMember } from './types';

/**
 * Teaching faculty members, shown on the Teaching Faculty pages by department with a
 * photograph, a brief profile and the member's official email address.
 *
 * No profiles have been supplied yet, so the list is empty and each department page shows a
 * "profiles to be published" panel. To add a member:
 *
 *   {
 *     name: 'Dr Example Name',
 *     designation: 'Assistant Professor',
 *     departmentSlug: 'computer-science-and-information-technology',   // see src/content/faculties.ts
 *     email: 'example.name@centraluniversitylahore.com',
 *     photo: '/images/faculty/example-name.jpg',                       // or null
 *     qualifications: 'PhD Computer Science (University of ...)',
 *     profile: ['One or two short paragraphs about teaching and research interests.'],
 *   },
 */
export const facultyMembers: FacultyMember[] = [];

export const membersOfDepartment = (departmentSlug: string) => facultyMembers.filter((m) => m.departmentSlug === departmentSlug);
