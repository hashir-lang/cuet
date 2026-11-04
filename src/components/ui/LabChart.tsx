import { faculties } from '@/content/faculties';
import { countLabel } from '@/lib/format';

/**
 * Planned laboratory allocation per faculty as horizontal bars.
 * Static on purpose: this is data the reader compares, so it does not animate.
 */
export function LabChart({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const rows = faculties.filter((f) => f.labs.count > 0).sort((a, b) => b.labs.count - a.labs.count || a.order - b.order);
  const max = Math.max(...rows.map((r) => r.labs.count));
  const none = faculties.filter((f) => f.labs.count === 0).map((f) => f.shortName);
  const dark = tone === 'dark';

  return (
    <figure>
      <figcaption className={dark ? 'text-sm text-forest-200' : 'text-sm text-stone-600'}>
        Planned laboratories by faculty
      </figcaption>
      <dl className="mt-5 space-y-3">
        {rows.map((f) => (
          <div key={f.slug} className="grid grid-cols-[minmax(0,10.5rem)_1fr] items-center gap-4 sm:grid-cols-[minmax(0,13rem)_1fr]">
            <dt className={dark ? 'truncate text-[0.92rem] text-forest-100' : 'truncate text-[0.92rem] text-stone-700'} title={f.shortName}>
              {f.shortName}
            </dt>
            <dd className="flex items-center gap-3">
              <span
                className={dark ? 'block h-2.5 bg-brass-300' : 'block h-2.5 bg-forest-600'}
                style={{ width: `${(f.labs.count / max) * 100}%`, minWidth: '0.75rem' }}
                aria-hidden="true"
              />
              <span className={dark ? 'numerals shrink-0 text-sm font-semibold text-ivory' : 'numerals shrink-0 text-sm font-semibold text-ink'}>
                <span className="sr-only">{countLabel(f.labs.count, 'laboratory', 'laboratories')}</span>
                <span aria-hidden="true">{f.labs.count}</span>
              </span>
            </dd>
          </div>
        ))}
      </dl>
      <p className={dark ? 'mt-5 text-sm text-forest-200' : 'mt-5 text-sm text-stone-600'}>
        No laboratory allocation in the plan: {none.join(', ')}.
      </p>
    </figure>
  );
}
