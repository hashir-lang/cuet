'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Dialog } from '@base-ui/react/dialog';
import { ArrowRight, X } from 'lucide-react';
import { formatDate } from '@/lib/format';

type Popup = { title: string; text: string; cta: { label: string; href: string } };
type DateRow = { label: string; date: string };

const STORAGE_KEY = 'cuetech-admissions-popup-dismissed';

/** Sample content shown when the pop-up is previewed with ?preview=admissions-popup while no pop-up is configured. */
const PREVIEW: Popup = {
  title: 'Admissions are open',
  text: 'Applications are invited for the undergraduate and associate degree programs. Apply online before the closing date.',
  cta: { label: 'Apply Online', href: '/admissions/apply' },
};

/**
 * Admissions pop-up, shown once per browser session while admissions are open
 * (configured in src/content/site.ts → admissions.popup). Appears 800 ms after the page
 * loads so it never competes with the first paint; closes on Escape, on the backdrop, on the
 * close button and when a link inside it is followed. Reduced-motion users get a plain fade.
 */
export function AdmissionsPopup({ config, dates }: { config: Popup | null; dates: readonly DateRow[] }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<Popup | null>(config);
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    const previewing = new URLSearchParams(window.location.search).get('preview') === 'admissions-popup';
    if (previewing) {
      setContent(config ?? PREVIEW);
      setPreview(!config);
      setOpen(true);
      return;
    }
    if (!config) return;
    try {
      if (window.sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // Storage unavailable (private mode): show the pop-up anyway, once per page load.
    }
    const t = window.setTimeout(() => setOpen(true), 800);
    return () => window.clearTimeout(t);
  }, [config]);

  const dismiss = () => {
    setOpen(false);
    try {
      window.sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // ignore
    }
  };

  if (!content) return null;

  return (
    <Dialog.Root open={open} onOpenChange={(next) => (next ? setOpen(true) : dismiss())}>
      <Dialog.Portal>
        <Dialog.Backdrop className="modal-backdrop fixed inset-0 z-[60] bg-forest-950/60" />
        <Dialog.Popup className="modal-popup fixed left-1/2 top-1/2 z-[60] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 border border-stone-200 bg-paper p-6 text-ink shadow-[var(--shadow-menu)] outline-none sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <p className="eyebrow text-sandstone-600">Admissions{preview ? ' · preview' : ''}</p>
            <Dialog.Close className="btn -mr-2 -mt-2 size-10 min-h-0 rounded-full p-0 text-stone-600 hover:text-ink" aria-label="Close">
              <X className="size-5" aria-hidden="true" />
            </Dialog.Close>
          </div>
          <Dialog.Title className="heading-lg mt-3">{content.title}</Dialog.Title>
          <Dialog.Description className="mt-3 text-stone-700">{content.text}</Dialog.Description>
          {dates.length ? (
            <dl className="mt-5 divide-y divide-stone-200 border-y border-stone-200 text-[0.95rem]">
              {dates.slice(0, 3).map((d) => (
                <div key={d.label} className="flex justify-between gap-4 py-2.5">
                  <dt className="text-stone-700">{d.label}</dt>
                  <dd className="numerals font-semibold">{formatDate(d.date)}</dd>
                </div>
              ))}
            </dl>
          ) : null}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href={content.cta.href} onClick={dismiss} className="btn btn-primary">
              {content.cta.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link href="/admissions" onClick={dismiss} className="btn btn-outline">
              Admissions overview
            </Link>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
