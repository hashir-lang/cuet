import Link from 'next/link';
import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';
import type { SectionLink } from '@/content/sections';

/**
 * Side navigation for the pages of one section (About, Campus Life, Admissions, ...).
 * On phones and tablets it is a collapsed "In this section" list (a native <details>, no
 * JavaScript); from 1024 px it is a sticky sidebar. Only one of the two is in the
 * accessibility tree at a time, so the duplicated links are not announced twice.
 */
export function SectionNav({ label, hub, links, current }: { label: string; hub: { label: string; href: string }; links: SectionLink[]; current: string }) {
  const path = (href: string) => href.split('#')[0];
  const items = links.some((l) => path(l.href) === hub.href) ? links : [{ label: hub.label, href: hub.href }, ...links];
  const isCurrent = (href: string) => path(href) === current;
  const currentLabel = items.find((l) => isCurrent(l.href))?.label ?? hub.label;

  const list = (compact: boolean) => (
    <ul className={clsx(compact ? 'border-t border-stone-200 py-2' : 'mt-3 border-l border-stone-200')}>
      {items.map((l) => {
        const active = isCurrent(l.href);
        return (
          <li key={l.href}>
            <Link
              href={l.href}
              aria-current={active ? 'page' : undefined}
              className={clsx(
                'block transition-colors duration-150',
                compact ? 'px-4 py-2.5 text-[0.98rem]' : '-ml-px border-l py-2 pl-4 pr-2 text-[0.95rem] leading-snug',
                active
                  ? compact
                    ? 'font-semibold text-sandstone-700'
                    : 'border-sandstone-600 font-semibold text-ink'
                  : compact
                    ? 'text-ink hover:text-sandstone-700'
                    : 'border-transparent text-stone-700 hover:border-stone-400 hover:text-ink',
              )}
            >
              {l.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      <nav aria-label={label} className="lg:hidden">
        <details className="group border border-stone-200 bg-paper">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 [&::-webkit-details-marker]:hidden">
            <span className="min-w-0">
              <span className="eyebrow block text-stone-600">In this section</span>
              <span className="mt-1 block truncate font-semibold">{currentLabel}</span>
            </span>
            <ChevronDown className="size-5 shrink-0 text-stone-500 transition-transform duration-200 ease-[var(--ease-out)] group-open:rotate-180" aria-hidden="true" />
          </summary>
          {list(true)}
        </details>
      </nav>

      <nav aria-label={label} className="hidden lg:block">
        <div className="sticky top-[calc(var(--header-h)+1.5rem)] max-h-[calc(100vh-var(--header-h)-3rem)] overflow-y-auto pr-2 [scrollbar-width:thin]">
          <p className="eyebrow text-stone-600">{label}</p>
          {list(false)}
        </div>
      </nav>
    </>
  );
}
