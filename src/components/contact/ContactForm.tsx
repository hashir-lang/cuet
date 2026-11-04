'use client';

import { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';
import clsx from 'clsx';
import { enquiryTypes, LIMITS, validateContact, type ContactErrors, type EnquiryType } from '@/lib/contact';
import { site } from '@/content/site';

type Field = keyof ContactErrors;
const FIELD_ORDER: Field[] = ['name', 'email', 'phone', 'enquiryType', 'message', 'consent'];

const inputBase =
  'mt-2 block w-full border bg-white px-4 py-3 text-ink placeholder:text-stone-500 transition-colors duration-150 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-sandstone-500';

/**
 * Contact form with inline validation (on blur, then live once a field has an error),
 * an error summary on submit, honeypot + timing spam checks, and Sonner toasts for status.
 * `defaultEnquiryType` pre-selects the topic, e.g. on the Feedback and Complaints page.
 */
export function ContactForm({ programs, defaultEnquiryType = '' }: { programs: { slug: string; name: string }[]; defaultEnquiryType?: EnquiryType | '' }) {
  const blank = { name: '', email: '', phone: '', enquiryType: defaultEnquiryType as string, program: '', message: '', consent: false, website: '' };
  const [values, setValues] = useState(blank);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [summary, setSummary] = useState<Field[]>([]);
  const shownAt = useRef(0);
  const summaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    shownAt.current = Date.now();
  }, []);

  const set = <K extends keyof typeof values>(key: K, v: (typeof values)[K]) => {
    const next = { ...values, [key]: v };
    setValues(next);
    if (touched[key as Field] || errors[key as Field]) setErrors(validateContact(next));
  };
  const blur = (key: Field) => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validateContact(values));
  };
  const err = (key: Field) => (touched[key] ? errors[key] : undefined);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validateContact(values);
    setErrors(found);
    setTouched(Object.fromEntries(FIELD_ORDER.map((f) => [f, true])));
    const failing = FIELD_ORDER.filter((f) => found[f]);
    setSummary(failing);
    if (failing.length) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    setSubmitting(true);
    const id = toast.loading('Sending your message…');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...values, elapsedMs: Date.now() - shownAt.current }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; code?: string; errors?: ContactErrors };
      if (data.ok) {
        toast.success('Message sent', { id, description: 'Thank you. The University will reply to the email address you provided.' });
        setValues(blank);
        setTouched({});
        setSummary([]);
      } else if (data.code === 'NOT_CONFIGURED') {
        toast.warning('Your message could not be sent yet', {
          id,
          duration: 10000,
          description: 'Online delivery for this form has not been connected. Your message is still in the form, so you can copy it.',
        });
      } else if (data.code === 'INVALID' && data.errors) {
        setErrors(data.errors);
        toast.error('Please check the highlighted fields', { id });
      } else if (data.code === 'RATE_LIMITED') {
        toast.error('Too many messages', { id, description: 'Please wait a few minutes and try again.' });
      } else {
        toast.error('Something went wrong', { id, description: 'Your message was not sent. Please try again later.' });
      }
    } catch {
      toast.error('Connection problem', { id, description: 'Check your internet connection and try again.' });
    } finally {
      setSubmitting(false);
    }
  }

  const labels: Record<Field, string> = {
    name: 'Full name',
    email: 'Email address',
    phone: 'Phone number',
    enquiryType: 'Enquiry type',
    message: 'Message',
    consent: 'Consent',
  };
  const describe = (key: Field, hint?: string) => [hint ? `${key}-hint` : null, err(key) ? `${key}-error` : null].filter(Boolean).join(' ') || undefined;
  const border = (key: Field) => (err(key) ? 'border-sandstone-600' : 'border-stone-300 focus:border-forest-600');

  return (
    <form onSubmit={onSubmit} noValidate aria-describedby="form-note" className="space-y-6">
      {summary.length > 0 ? (
        <div ref={summaryRef} tabIndex={-1} role="alert" className="border-l-4 border-sandstone-600 bg-sandstone-100 p-4 outline-none">
          <p className="font-semibold text-ink">Please correct {summary.length === 1 ? 'one field' : `${summary.length} fields`}:</p>
          <ul className="mt-2 list-disc pl-5 text-[0.95rem]">
            {summary.map((f) => (
              <li key={f}>
                <a href={`#${f}`} className="underline underline-offset-2">
                  {labels[f]}: {errors[f]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-semibold">
            Full name <span className="text-sandstone-600" aria-hidden="true">*</span>
          </label>
          <input id="name" name="name" autoComplete="name" required maxLength={LIMITS.name} value={values.name} onChange={(e) => set('name', e.target.value)} onBlur={() => blur('name')} aria-invalid={Boolean(err('name'))} aria-describedby={describe('name')} className={clsx(inputBase, border('name'))} />
          {err('name') ? <p id="name-error" className="mt-1.5 text-sm text-sandstone-700">{err('name')}</p> : null}
        </div>
        <div>
          <label htmlFor="email" className="font-semibold">
            Email address <span className="text-sandstone-600" aria-hidden="true">*</span>
          </label>
          <input id="email" name="email" type="email" inputMode="email" autoComplete="email" autoCapitalize="none" autoCorrect="off" spellCheck={false} required maxLength={LIMITS.email} value={values.email} onChange={(e) => set('email', e.target.value)} onBlur={() => blur('email')} aria-invalid={Boolean(err('email'))} aria-describedby={describe('email')} className={clsx(inputBase, border('email'), 'break-all')} />
          {err('email') ? <p id="email-error" className="mt-1.5 text-sm text-sandstone-700">{err('email')}</p> : null}
        </div>
        <div>
          <label htmlFor="phone" className="font-semibold">
            Phone number <span className="font-normal text-stone-600">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" maxLength={LIMITS.phone} value={values.phone} onChange={(e) => set('phone', e.target.value)} onBlur={() => blur('phone')} aria-invalid={Boolean(err('phone'))} aria-describedby={describe('phone')} className={clsx(inputBase, border('phone'))} />
          {err('phone') ? <p id="phone-error" className="mt-1.5 text-sm text-sandstone-700">{err('phone')}</p> : null}
        </div>
        <div>
          <label htmlFor="enquiryType" className="font-semibold">
            Enquiry type <span className="text-sandstone-600" aria-hidden="true">*</span>
          </label>
          <select id="enquiryType" name="enquiryType" required value={values.enquiryType} onChange={(e) => set('enquiryType', e.target.value)} onBlur={() => blur('enquiryType')} aria-invalid={Boolean(err('enquiryType'))} aria-describedby={describe('enquiryType')} className={clsx(inputBase, border('enquiryType'))}>
            <option value="">Choose a topic</option>
            {enquiryTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
          {err('enquiryType') ? <p id="enquiryType-error" className="mt-1.5 text-sm text-sandstone-700">{err('enquiryType')}</p> : null}
        </div>
      </div>

      {values.enquiryType === 'Admissions' || values.enquiryType === 'Academic programs' ? (
        <div>
          <label htmlFor="program" className="font-semibold">
            Program of interest <span className="font-normal text-stone-600">(optional)</span>
          </label>
          <select id="program" name="program" value={values.program} onChange={(e) => set('program', e.target.value)} className={clsx(inputBase, 'border-stone-300 focus:border-forest-600')}>
            <option value="">Not sure yet</option>
            {programs.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      <div>
        <label htmlFor="message" className="font-semibold">
          Message <span className="text-sandstone-600" aria-hidden="true">*</span>
        </label>
        <textarea id="message" name="message" rows={6} required maxLength={LIMITS.message} value={values.message} onChange={(e) => set('message', e.target.value)} onBlur={() => blur('message')} aria-invalid={Boolean(err('message'))} aria-describedby={describe('message', 'hint')} className={clsx(inputBase, border('message'), 'resize-y')} />
        <p id="message-hint" className="mt-1.5 flex justify-between gap-4 text-sm text-stone-600">
          <span>Please do not include sensitive personal information.</span>
          <span className="numerals shrink-0" aria-live="polite">
            {values.message.length.toLocaleString('en')}/{LIMITS.message.toLocaleString('en')}
          </span>
        </p>
        {err('message') ? <p id="message-error" className="mt-1 text-sm text-sandstone-700">{err('message')}</p> : null}
      </div>

      {/* Honeypot: hidden from people and assistive technology */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={(e) => set('website', e.target.value)} />
      </div>

      <div>
        <label className="flex items-start gap-3">
          <input id="consent" type="checkbox" checked={values.consent} onChange={(e) => set('consent', e.target.checked)} onBlur={() => blur('consent')} aria-invalid={Boolean(err('consent'))} aria-describedby={err('consent') ? 'consent-error' : undefined} className="mt-1 size-5 shrink-0 accent-forest-700" />
          <span>I agree that {site.legalName} may use these details to reply to my enquiry.</span>
        </label>
        {err('consent') ? <p id="consent-error" className="mt-1.5 text-sm text-sandstone-700">{err('consent')}</p> : null}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" disabled={submitting} className="btn btn-primary disabled:cursor-wait disabled:opacity-70">
          {submitting ? 'Sending…' : 'Send message'}
        </button>
        <p id="form-note" className="text-sm text-stone-600">
          Fields marked <span aria-hidden="true">*</span>
          <span className="sr-only">with an asterisk</span> are required.
        </p>
      </div>
    </form>
  );
}
