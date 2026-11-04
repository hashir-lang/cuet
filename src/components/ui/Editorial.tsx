import clsx from 'clsx';
import { CircleAlert, PenTool } from 'lucide-react';
import { site } from '@/content/site';
import type { Draft } from '@/content/types';

/** Small inline marker next to text drafted for editorial review. Hidden when site.showEditorialMarkers is false. */
export function DraftBadge({ className, tone = 'light' }: { className?: string; tone?: 'light' | 'dark' }) {
  if (!site.showEditorialMarkers) return null;
  return (
    <span
      className={clsx(
        'inline-flex shrink-0 items-center gap-1 rounded-[2px] border px-1.5 py-0.5 align-middle font-sans text-[0.68rem] font-semibold uppercase leading-none tracking-[0.08em]',
        tone === 'light' ? 'border-draft/30 bg-draft-bg text-draft' : 'border-brass-300/40 bg-white/5 text-brass-300',
        className,
      )}
      title="Draft copy written for editorial review. Not yet approved by the University."
    >
      <PenTool className="size-3" aria-hidden="true" />
      Draft copy
    </span>
  );
}

/** Returns the value of a draft field. Keeps call sites explicit about draft status. */
export const draftValue = <T,>(d: Draft<T>) => d.value;

/**
 * Placeholder panel for information that only the University can provide
 * (fees, eligibility, curriculum, contact details, leadership...). Always visible.
 */
export function Pending({
  title,
  children,
  className,
  tone = 'light',
  compact = false,
}: {
  title: string;
  children?: React.ReactNode;
  className?: string;
  tone?: 'light' | 'dark';
  compact?: boolean;
}) {
  return (
    <div
      className={clsx(
        'flex gap-3 border border-dashed',
        compact ? 'p-3' : 'p-4 sm:p-5',
        tone === 'light' ? 'border-stone-300 bg-stone-100/60 text-stone-700' : 'border-white/25 bg-white/5 text-forest-100',
        className,
      )}
    >
      <CircleAlert className={clsx('mt-0.5 size-5 shrink-0', tone === 'light' ? 'text-sandstone-600' : 'text-brass-300')} aria-hidden="true" />
      <div className="min-w-0">
        <p className={clsx('font-semibold', tone === 'light' ? 'text-ink' : 'text-ivory')}>{title}</p>
        {children ? <div className="mt-1 text-[0.95rem] leading-relaxed">{children}</div> : null}
      </div>
    </div>
  );
}

/** Inline value that is not yet confirmed, e.g. in a key-facts list. */
export function TBC({ label = 'To be confirmed' }: { label?: string }) {
  return <span className="italic text-stone-600">{label}</span>;
}

/** Badge for news/event template entries. */
export function TemplateBadge({ className }: { className?: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-[2px] border border-stone-300 bg-paper px-1.5 py-0.5 text-[0.68rem] font-semibold uppercase leading-none tracking-[0.08em] text-stone-600',
        className,
      )}
      title="Template entry: shows the layout until the University publishes real content."
    >
      Template entry
    </span>
  );
}
