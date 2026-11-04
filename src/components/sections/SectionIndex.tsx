import Link from 'next/link';
import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';
import type { Section } from '@/content/sections';
import { pageHref } from '@/lib/sections';

/** Grid of a section's pages for its hub page. The hub itself is left out. */
export function SectionIndex({ section, columns = 2, className }: { section: Section; columns?: 2 | 3; className?: string }) {
  const pages = section.pages.filter((p) => pageHref(section, p) !== section.path);
  return (
    <ul className={clsx('grid gap-px border border-stone-200 bg-stone-200', columns === 3 ? 'sm:grid-cols-2 xl:grid-cols-3' : 'sm:grid-cols-2', className)}>
      {pages.map((p) => (
        <li key={p.slug} className="group relative flex flex-col bg-paper p-5 sm:p-6">
          <h3 className="heading-md">
            <Link href={pageHref(section, p)} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
              {p.title}
            </Link>
          </h3>
          <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-stone-700">{p.summary}</p>
          <span className="link-arrow mt-4 text-sm text-forest-700" aria-hidden="true">
            Open
            <ArrowRight className="size-4" />
          </span>
          <span className="pointer-events-none absolute inset-0 hidden outline-2 outline-offset-[-2px] outline-sandstone-500 group-has-[a:focus-visible]:block" style={{ outlineStyle: 'solid' }} aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
}
