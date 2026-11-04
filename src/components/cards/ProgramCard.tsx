import Link from 'next/link';
import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';
import type { Program } from '@/content/types';
import { facultyBySlug } from '@/content/faculties';
import { Media } from '@/components/media/Media';

/** Program card. The whole card is one link; the heading carries the accessible name. */
export function ProgramCard({ program, showMedia = true, headingLevel = 'h3', className }: { program: Program; showMedia?: boolean; headingLevel?: 'h2' | 'h3'; className?: string }) {
  const faculty = facultyBySlug(program.facultySlug);
  const H = headingLevel;
  return (
    <article className={clsx('group card-link relative flex h-full flex-col border border-stone-200 bg-paper', className)}>
      {showMedia ? (
        <Media media={program.media} className="aspect-[16/10] w-full" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" archScale={0.72} showLabel={false} />
      ) : null}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="eyebrow text-sandstone-600">{faculty?.shortName}</p>
        <H className="heading-md mt-3">
          <Link href={`/programs/${program.slug}`} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
            {program.name}
          </Link>
        </H>
        {program.shortName !== program.name ? <p className="mt-1 text-sm font-semibold text-stone-600">{program.shortName}</p> : null}
        <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-stone-700">{program.tagline}</p>
        <span className="link-arrow mt-5 text-sm text-forest-700" aria-hidden="true">
          View program
          <ArrowRight className="size-4" />
        </span>
      </div>
      {/* Focus ring for the stretched link */}
      <span className="pointer-events-none absolute inset-0 hidden outline-2 outline-offset-2 outline-sandstone-500 group-has-[a:focus-visible]:block" style={{ outlineStyle: 'solid' }} aria-hidden="true" />
    </article>
  );
}
