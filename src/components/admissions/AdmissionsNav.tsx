import Link from 'next/link';
import clsx from 'clsx';

const links = [
  { label: 'Overview', href: '/admissions' },
  { label: 'How to apply', href: '/admissions/how-to-apply' },
  { label: 'Requirements', href: '/admissions/requirements' },
  { label: 'Online application', href: '/admissions/apply' },
];

/** Sub-navigation shared by the admissions pages. */
export function AdmissionsNav({ current }: { current: string }) {
  return (
    <nav aria-label="Admissions" className="border-b border-stone-200 bg-paper">
      <ul className="container-cul flex gap-1 overflow-x-auto [scrollbar-width:none]">
        {links.map((l) => {
          const active = l.href === current;
          return (
            <li key={l.href} className="shrink-0">
              <Link
                href={l.href}
                aria-current={active ? 'page' : undefined}
                className={clsx(
                  'relative block px-3 py-4 text-[0.95rem] font-medium transition-colors duration-150 sm:px-4',
                  "after:absolute after:inset-x-3 after:bottom-0 after:h-[2px] after:content-[''] sm:after:inset-x-4",
                  active ? 'text-ink after:bg-sandstone-600' : 'text-stone-600 after:bg-transparent hover:text-ink',
                )}
              >
                {l.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
