/** Contact form validation, shared by the browser form and the API route so the rules never drift. */

export const enquiryTypes = ['Admissions', 'Academic programs', 'General enquiry', 'Media', 'Other'] as const;

export type ContactInput = {
  name: string;
  email: string;
  phone: string;
  enquiryType: string;
  program: string;
  message: string;
  consent: boolean;
  /** Honeypot: must stay empty. Hidden from people, often filled by bots. */
  website: string;
  /** Milliseconds since the form was shown. Very fast submissions are likely bots. */
  elapsedMs: number;
};

export type ContactErrors = Partial<Record<'name' | 'email' | 'phone' | 'enquiryType' | 'message' | 'consent', string>>;

export const LIMITS = { name: 120, email: 254, phone: 30, message: 4000, minMessage: 20 } as const;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^[+()\-\s\d]{7,30}$/;

export function validateContact(input: Partial<ContactInput>): ContactErrors {
  const e: ContactErrors = {};
  const name = (input.name ?? '').trim();
  const email = (input.email ?? '').trim();
  const phone = (input.phone ?? '').trim();
  const message = (input.message ?? '').trim();

  if (!name) e.name = 'Please enter your name.';
  else if (name.length > LIMITS.name) e.name = `Please keep your name under ${LIMITS.name} characters.`;

  if (!email) e.email = 'Please enter your email address.';
  else if (email.length > LIMITS.email || !EMAIL.test(email)) e.email = 'Please enter a valid email address, like name@example.com.';

  if (phone && !PHONE.test(phone)) e.phone = 'Please enter a valid phone number, using digits and an optional +.';

  if (!input.enquiryType || !enquiryTypes.includes(input.enquiryType as (typeof enquiryTypes)[number])) e.enquiryType = 'Please choose what your enquiry is about.';

  if (!message) e.message = 'Please write your message.';
  else if (message.length < LIMITS.minMessage) e.message = `Please add a little more detail (at least ${LIMITS.minMessage} characters).`;
  else if (message.length > LIMITS.message) e.message = `Please keep your message under ${LIMITS.message.toLocaleString('en')} characters.`;

  if (!input.consent) e.consent = 'Please confirm that the University may use your details to reply.';
  return e;
}

/** True when the submission looks automated. Bots get a generic success-looking response server-side. */
export const looksLikeSpam = (input: Partial<ContactInput>) => Boolean(input.website) || (input.elapsedMs ?? 0) < 2500;
