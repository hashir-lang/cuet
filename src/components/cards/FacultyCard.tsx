import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Faculty } from '@/content/types';
import { programsForFaculty } from '@/content/programs';
import { Media } from '@/components/media/Media';
import { pad2 } from '@/lib/format';

/** Faculty directory card: artwork, name, introduction, program list, Explore CTA. */
export function FacultyCard({ faculty }: { faculty: Faculty }) {
  const progs = programsForFaculty(faculty.slug);
  return (
    <article className="group card-link relative flex h-full flex-col border border-stone-200 bg-paper">
      <div className="relative">
        <Media media={faculty.media} className="aspect-[3/2] w-full" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" archScale={0.74} showLabel={false} />
        <span className="numerals absolute left-4 top-4 font-serif text-2xl text-white/85">{pad2(faculty.order)}</span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h2 className="heading-md">
          <Link href={`/faculties/${faculty.slug}`} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
            {faculty.name}
          </Link>
        </h2>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-stone-700">{faculty.tagline}</p>
        <div className="mt-5 flex-1 border-t border-stone-200 pt-4">
          <p className="eyebrow text-stone-600">{progs.length === 1 ? 'Program' : 'Programs'}</p>
          <ul className="mt-2 space-y-1 text-[0.95rem] font-medium text-ink">
            {progs.map((p) => (
              <li key={p.slug}>{p.name}</li>
            ))}
          </ul>
        </div>
        <span className="link-arrow mt-6 text-sm text-forest-700" aria-hidden="true">
          Explore faculty
          <ArrowRight className="size-4" />
        </span>
      </div>
      <span className="pointer-events-none absolute inset-0 hidden outline-2 outline-offset-2 outline-sandstone-500 group-has-[a:focus-visible]:block" style={{ outlineStyle: 'solid' }} aria-hidden="true" />
    </article>
  );
}
