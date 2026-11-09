'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';
import type { Faculty, Program } from '@/content/types';
import { Media } from '@/components/media/Media';
import { pad2 } from '@/lib/format';

type Row = { faculty: Faculty; programs: Program[] };

/**
 * Editorial index of the 13 faculties. On wide screens a sticky preview shows the
 * faculty under the pointer or keyboard focus (220ms crossfade, blur masks the overlap).
 * On small screens it is a plain list.
 */
export function FacultyIndex({ rows }: { rows: Row[] }) {
  const [active, setActive] = useState(0);
  const current = rows[active];

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
      <ol className="border-t border-stone-300 lg:col-span-7">
        {rows.map(({ faculty, programs }, i) => (
          <li key={faculty.slug} className="border-b border-stone-300">
            <Link
              href={`/faculties/${faculty.slug}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={clsx(
                'group grid grid-cols-[2.25rem_1fr_auto] items-baseline gap-x-3 py-4 transition-colors duration-150 sm:grid-cols-[3rem_1fr_auto] sm:gap-x-5 sm:py-5',
                active === i ? 'lg:text-sandstone-700' : 'text-ink',
              )}
            >
              <span className="numerals text-sm text-stone-500">{pad2(faculty.order)}</span>
              <span className="min-w-0">
                <span className="block font-serif text-[1.35rem] leading-tight tracking-[-0.01em] sm:text-[1.6rem]">{faculty.shortName}</span>
                <span className="mt-1 block text-sm text-stone-600">{programs.map((p) => p.shortName).join(' · ')}</span>
              </span>
              <ArrowRight
                className={clsx('size-5 shrink-0 self-center transition-[transform,opacity] duration-200 ease-[var(--ease-out)]', active === i ? 'lg:translate-x-0 lg:opacity-100' : 'lg:-translate-x-1 lg:opacity-30')}
                aria-hidden="true"
              />
            </Link>
          </li>
        ))}
      </ol>

      <div className="hidden lg:col-span-5 lg:block" aria-hidden="true">
        <div className="sticky top-[calc(var(--header-h)+2rem)]">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            {rows.map(({ faculty }, i) => (
              <div key={faculty.slug} className="preview-layer absolute inset-0" data-active={i === active}>
                <Media media={faculty.media} className="h-full w-full" sizes="40vw" showLabel={false} archScale={0.62} />
              </div>
            ))}
          </div>
          <div className="mt-5 min-h-[7rem]">
            <p className="eyebrow text-sandstone-600">Faculty {pad2(current.faculty.order)}</p>
            <p className="heading-md mt-2">{current.faculty.name}</p>
            <p className="mt-2 text-stone-700">{current.faculty.tagline}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
