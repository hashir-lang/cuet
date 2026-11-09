import Link from 'next/link';
import { SectionLayout } from '@/components/sections/SectionLayout';
import { EventRow } from '@/components/cards/ArticleCard';
import { Pending } from '@/components/ui/Editorial';
import { sectionByKey } from '@/content/sections';
import { eventCategories, events } from '@/content/events';
import { site } from '@/content/site';
import { pageMeta } from '@/lib/seo';

const section = sectionByKey('news');

export const metadata = pageMeta({
  title: 'Events Calendar',
  description: `Upcoming events at ${site.name}: admissions sessions, orientation, seminars, conferences, workshops and university occasions.`,
  path: '/events',
});

export default function EventsPage() {
  // Scheduled events first (soonest first), then unscheduled ones.
  const sorted = [...events].sort((a, b) => {
    if (a.startsAt && b.startsAt) return a.startsAt.localeCompare(b.startsAt);
    return a.startsAt ? -1 : b.startsAt ? 1 : 0;
  });
  const onlyTemplates = events.every((e) => e.isTemplate);
  const linked = eventCategories.filter((c) => c.slug === 'seminars-conferences' || c.slug === 'workshops-training');

  return (
    <SectionLayout section={section} current="/events" title="Events Calendar" lede="Admissions sessions, academic lectures, workshops and occasions across the University." width="wide">
      <div className="space-y-10">
        <nav aria-label="Event categories">
          <ul className="flex flex-wrap gap-2">
            <li>
              <Link href="/events" className="btn btn-outline btn-sm" aria-current="page">
                All events
              </Link>
            </li>
            {linked.map((c) => (
              <li key={c.slug}>
                <Link href={`/events/category/${c.slug}`} className="btn btn-outline btn-sm">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {onlyTemplates ? (
          <Pending title="No events have been announced yet">The entries below are templates that show how events will appear. Real events will be listed here with their dates and venues.</Pending>
        ) : null}
        <div className="border-b border-stone-200">
          {sorted.map((e) => (
            <EventRow key={e.slug} event={e} headingLevel="h2" />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
