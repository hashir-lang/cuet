import { PageHero } from '@/components/ui/PageHero';
import { NewsTabs } from '@/components/news/NewsTabs';
import { EventRow } from '@/components/cards/ArticleCard';
import { Pending } from '@/components/ui/Editorial';
import { events } from '@/content/events';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Events',
  description: 'Upcoming events at Central University of Emerging Technologies: admissions sessions, orientation, lectures and university occasions.',
  path: '/events',
});

export default function EventsPage() {
  // Scheduled events first (soonest first), then unscheduled ones.
  const sorted = [...events].sort((a, b) => {
    if (a.startsAt && b.startsAt) return a.startsAt.localeCompare(b.startsAt);
    return a.startsAt ? -1 : b.startsAt ? 1 : 0;
  });
  const onlyTemplates = events.every((e) => e.isTemplate);

  return (
    <>
      <PageHero
        crumbs={[{ name: 'Events', href: '/events' }]}
        eyebrow="News & Events"
        title="Events"
        lede="Admissions sessions, academic lectures and occasions across the University."
      />
      <NewsTabs current="events" />
      <section aria-label="Event listings" className="bg-paper py-14 sm:py-20">
        <div className="container-cul max-w-5xl">
          {onlyTemplates ? (
            <Pending title="No events have been announced yet" className="mb-10">
              The entries below are templates that show how events will appear. Real events will be listed here with their dates and venues.
            </Pending>
          ) : null}
          <div className="border-b border-stone-200">
            {sorted.map((e) => (
              <EventRow key={e.slug} event={e} headingLevel="h2" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
