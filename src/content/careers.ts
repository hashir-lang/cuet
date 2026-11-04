import type { JobOpening } from './types';

/**
 * Job announcements for the Careers at CueTech page. Open announcements are listed first;
 * closed ones remain under "Previous announcements".
 *
 * No announcements have been published yet. To add one:
 *
 *   {
 *     slug: 'assistant-professor-computer-science-2027',
 *     title: 'Assistant Professor, Computer Science',
 *     department: 'Department of Computer Science and Information Technology',
 *     type: 'Full-time',
 *     postedAt: '2027-01-15',
 *     closesAt: '2027-02-15',
 *     status: 'open',
 *     href: 'https://.../advertisement.pdf',   // or null while the advertisement is not online
 *     summary: 'One or two sentences on the role and how to apply.',
 *   },
 */
export const jobs: JobOpening[] = [];

export const openJobs = () => jobs.filter((j) => j.status === 'open');
export const closedJobs = () => jobs.filter((j) => j.status === 'closed');
