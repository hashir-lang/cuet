import Link from 'next/link';
import clsx from 'clsx';

/** Switch between the News and Events listings. */
export function NewsTabs({ current }: { current: 'news' | 'events' }) {
  const tabs = [
    { key: 'news', label: 'News', href: '/news' },
    { key: 'events', label: 'Events', href: '/events' },
  ] as const;
  return (
    <nav aria-label="News and events" className="border-b border-stone-200 bg-paper">
      <ul className="container-cul flex gap-1">
        {tabs.map((t) => (
          <li key={t.key}>
            <Link
              href={t.href}
              aria-current={current === t.key ? 'page' : undefined}
              className={clsx(
                'relative block px-4 py-4 font-medium transition-colors duration-150',
                "after:absolute after:inset-x-4 after:bottom-0 after:h-[2px] after:content-['']",
                current === t.key ? 'text-ink after:bg-sandstone-600' : 'text-stone-600 after:bg-transparent hover:text-ink',
              )}
            >
              {t.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
