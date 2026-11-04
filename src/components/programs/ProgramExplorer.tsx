'use client';

import { useDeferredValue, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Search, X } from 'lucide-react';
import type { Faculty, Program, ProgramLevel } from '@/content/types';
import { countLabel, pad2 } from '@/lib/format';

const normalise = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9 ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const LEVELS: { value: ProgramLevel; label: string }[] = [
  { value: 'Undergraduate', label: 'Undergraduate degree programs' },
  { value: 'Associate Degree', label: 'Associate degree programs' },
];

type Props = {
  programs: Program[];
  faculties: Faculty[];
  /** Fix the level (the level filter is then hidden), e.g. on the Undergraduate Degree Programs page. */
  fixedLevel?: ProgramLevel;
};

const selectClass =
  "h-13 w-full appearance-none border border-stone-300 bg-white bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23675e50%22 stroke-width=%222%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pl-4 pr-10 text-ink focus:border-forest-600 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-sandstone-500";

/**
 * Program directory with text search, a level filter and a faculty filter.
 * State lives in the URL (?q=…&level=…&faculty=…) so results can be shared and survive reloads.
 * Results update instantly with no animation: filtering is a high-frequency action.
 */
export function ProgramExplorer({ programs, faculties, fixedLevel }: Props) {
  const pathname = usePathname();

  // The full list is pre-rendered on the server (fast first paint); any ?q= / ?level= / ?faculty=
  // in the address is applied right after hydration.
  const [query, setQuery] = useState('');
  const [faculty, setFaculty] = useState('');
  const [level, setLevel] = useState<'' | ProgramLevel>(fixedLevel ?? '');
  const deferredQuery = useDeferredValue(query);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q') ?? '';
    const fac = params.get('faculty') ?? '';
    const lvl = params.get('level') ?? '';
    if (q) setQuery(q);
    if (faculties.some((f) => f.slug === fac)) setFaculty(fac);
    if (!fixedLevel && LEVELS.some((l) => l.value === lvl)) setLevel(lvl as ProgramLevel);
  }, [faculties, fixedLevel]);

  const syncUrl = (q: string, fac: string, lvl: string) => {
    const next = new URLSearchParams();
    if (q.trim()) next.set('q', q.trim());
    if (lvl && !fixedLevel) next.set('level', lvl);
    if (fac) next.set('faculty', fac);
    const qs = next.toString();
    window.history.replaceState(null, '', qs ? `${pathname}?${qs}` : pathname);
  };

  const index = useMemo(
    () =>
      programs.map((p) => {
        const f = faculties.find((x) => x.slug === p.facultySlug);
        return {
          program: p,
          haystack: normalise([p.name, p.shortName, p.level, p.tagline, f?.name ?? '', f?.shortName ?? '', f?.department.name ?? '', ...p.careerAreas.value, ...p.seoKeywords].join(' ')),
        };
      }),
    [programs, faculties],
  );

  const results = useMemo(() => {
    const terms = normalise(deferredQuery).split(' ').filter(Boolean);
    return index
      .filter(({ program, haystack }) => (!faculty || program.facultySlug === faculty) && (!level || program.level === level) && terms.every((t) => haystack.includes(t)))
      .map((r) => r.program);
  }, [index, deferredQuery, faculty, level]);

  const groups = faculties.map((f) => ({ faculty: f, programs: results.filter((p) => p.facultySlug === f.slug) })).filter((g) => g.programs.length > 0);

  const filtered = Boolean(query.trim() || faculty || (level && !fixedLevel));
  const reset = () => {
    setQuery('');
    setFaculty('');
    setLevel(fixedLevel ?? '');
    syncUrl('', '', '');
  };

  return (
    <div>
      <form
        role="search"
        aria-label="Search programs"
        onSubmit={(e) => {
          e.preventDefault();
          syncUrl(query, faculty, level);
        }}
        className={fixedLevel ? 'grid gap-3 border border-stone-200 bg-paper p-3 sm:p-4 md:grid-cols-[1fr_18rem]' : 'grid gap-3 border border-stone-200 bg-paper p-3 sm:p-4 md:grid-cols-[1fr_15rem_17rem]'}
      >
        <div className="relative">
          <label htmlFor="program-search" className="sr-only">
            Search programs
          </label>
          <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-stone-500" aria-hidden="true" />
          <input
            id="program-search"
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              syncUrl(e.target.value, faculty, level);
            }}
            placeholder="Search by program, faculty or career, e.g. “pharmacy”"
            enterKeyHint="search"
            autoComplete="off"
            className="h-13 w-full border border-stone-300 bg-white pl-12 pr-11 text-ink placeholder:text-stone-500 focus:border-forest-600 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-sandstone-500"
          />
          {query ? (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                syncUrl('', faculty, level);
              }}
              className="absolute right-2 top-1/2 grid size-9 -translate-y-1/2 place-items-center text-stone-600 hover:text-ink"
              aria-label="Clear search"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          ) : null}
        </div>
        {!fixedLevel ? (
          <div>
            <label htmlFor="level-filter" className="sr-only">
              Filter by level
            </label>
            <select
              id="level-filter"
              value={level}
              onChange={(e) => {
                const v = e.target.value as '' | ProgramLevel;
                setLevel(v);
                syncUrl(query, faculty, v);
              }}
              className={selectClass}
            >
              <option value="">All levels</option>
              {LEVELS.map((l) => (
                <option key={l.value} value={l.value}>
                  {l.label}
                </option>
              ))}
            </select>
          </div>
        ) : null}
        <div>
          <label htmlFor="faculty-filter" className="sr-only">
            Filter by faculty
          </label>
          <select
            id="faculty-filter"
            value={faculty}
            onChange={(e) => {
              setFaculty(e.target.value);
              syncUrl(query, e.target.value, level);
            }}
            className={selectClass}
          >
            <option value="">All faculties ({faculties.length})</option>
            {faculties.map((f) => (
              <option key={f.slug} value={f.slug}>
                {f.shortName}
              </option>
            ))}
          </select>
        </div>
      </form>

      <div className="mt-6 flex min-h-10 flex-wrap items-center justify-between gap-3">
        <p aria-live="polite" className="text-stone-700">
          Showing <strong className="numerals text-ink">{countLabel(results.length, 'program')}</strong>
          {groups.length > 0 ? <> in {countLabel(groups.length, 'faculty', 'faculties')}</> : null}
        </p>
        {filtered ? (
          <button type="button" onClick={reset} className="link-arrow text-sm text-forest-700">
            Clear filters
            <X className="size-4" aria-hidden="true" />
          </button>
        ) : null}
      </div>

      {groups.length === 0 ? (
        <div className="mt-8 border border-dashed border-stone-300 bg-stone-100/60 px-6 py-14 text-center">
          <p className="heading-md">No programs match your search.</p>
          <p className="mt-2 text-stone-700">Try a broader term, or browse all {countLabel(programs.length, 'program')}.</p>
          <button type="button" onClick={reset} className="btn btn-dark btn-sm mt-6">
            Show all programs
          </button>
        </div>
      ) : (
        <div className="mt-8 space-y-12">
          {groups.map(({ faculty: f, programs: list }) => (
            <section key={f.slug} aria-labelledby={`group-${f.slug}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b-2 border-forest-800 pb-3">
                <h2 id={`group-${f.slug}`} className="flex items-baseline gap-3 font-serif text-[1.45rem] leading-tight">
                  <span className="numerals text-sm text-stone-500">{pad2(f.order)}</span>
                  <span>
                    {f.name}
                    <span className="mt-0.5 block font-sans text-sm text-stone-600">{f.department.name}</span>
                  </span>
                </h2>
                <Link href={`/faculties/${f.slug}`} className="link-arrow text-sm text-forest-700">
                  About the faculty
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
              <ul className="divide-y divide-stone-200">
                {list.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/programs/${p.slug}`}
                      className="group grid gap-x-8 gap-y-1 py-5 transition-colors duration-150 hover:bg-ivory sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)_auto] sm:items-center sm:px-3"
                    >
                      <span className="min-w-0">
                        <span className="block font-serif text-[1.25rem] leading-snug text-ink group-hover:text-sandstone-700">{p.name}</span>
                        <span className="mt-0.5 flex flex-wrap items-center gap-x-2 text-sm text-stone-600">
                          <span className="font-semibold uppercase tracking-[0.08em] text-[0.7rem] text-sandstone-700">{p.level}</span>
                          {p.shortName !== p.name ? (
                            <>
                              <span aria-hidden="true">·</span>
                              <span className="font-semibold">{p.shortName}</span>
                            </>
                          ) : null}
                        </span>
                      </span>
                      <span className="text-[0.95rem] text-stone-700">{p.tagline}</span>
                      <span className="link-arrow hidden text-sm text-forest-700 sm:inline-flex" aria-hidden="true">
                        Details
                        <ArrowRight className="size-4" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
