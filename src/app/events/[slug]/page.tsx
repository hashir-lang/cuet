import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock, MapPin } from 'lucide-react';
import { eventBySlug, eventCategoryLabel, events } from '@/content/events';
import { PageHero } from '@/components/ui/PageHero';
import { Media } from '@/components/media/Media';
import { Pending, TemplateBadge } from '@/components/ui/Editorial';
import { JsonLd } from '@/components/ui/JsonLd';
import { formatDate, formatTime } from '@/lib/format';
import { pageMeta, postalAddressJsonLd } from '@/lib/seo';
import { site } from '@/content/site';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const e = eventBySlug(slug);
  if (!e) return {};
  return pageMeta({ title: e.title, description: e.excerpt, path: `/events/${e.slug}`, noIndex: e.isTemplate });
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const e = eventBySlug(slug);
  if (!e) notFound();

  const start = formatTime(e.startsAt);
  const end = formatTime(e.endsAt);

  return (
    <>
      {/* Event structured data only for real, scheduled events */}
      {!e.isTemplate && e.startsAt ? (
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: e.title,
            description: e.excerpt,
            startDate: e.startsAt,
            ...(e.endsAt ? { endDate: e.endsAt } : {}),
            ...(e.venue ? { location: { '@type': 'Place', name: e.venue, address: postalAddressJsonLd() } } : {}),
            organizer: { '@type': 'CollegeOrUniversity', name: site.name, legalName: site.legalName, url: site.url },
          }}
        />
      ) : null}
      <PageHero
        crumbs={[
          { name: 'News & Events', href: '/news' },
          { name: 'Events Calendar', href: '/events' },
          { name: e.title, href: `/events/${e.slug}` },
        ]}
        eyebrow={eventCategoryLabel(e.category)}
        title={e.title}
        tone="ivory"
      >
        {e.isTemplate ? <TemplateBadge /> : null}
      </PageHero>
      <section className="bg-paper pb-16 sm:pb-20">
        <div className="container-cul grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Media media={e.media} className="aspect-[16/9] w-full" priority sizes="(min-width: 1024px) 66vw, 100vw" />
            <div className="mt-10 max-w-[65ch]">
              {e.isTemplate ? (
                <Pending title="This is a template entry" className="mb-8">
                  It shows the layout of an event page and will be replaced by a confirmed University event.
                </Pending>
              ) : null}
              <div className="prose-cul text-lg leading-relaxed">
                <p className="lede">{e.excerpt}</p>
                {e.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <Link href="/events" className="link-arrow mt-12 text-forest-700">
                <ArrowLeft className="size-4" aria-hidden="true" />
                All events
              </Link>
            </div>
          </div>
          <aside className="lg:col-span-4" aria-labelledby="details-title">
            <div className="border border-stone-200 lg:sticky lg:top-[calc(var(--header-h)+1.5rem)]">
              <h2 id="details-title" className="eyebrow border-b border-stone-200 px-6 py-4 text-sandstone-600">
                Event details
              </h2>
              <ul className="space-y-4 p-6">
                <li className="flex gap-3">
                  <CalendarDays className="mt-0.5 size-5 shrink-0 text-forest-700" aria-hidden="true" />
                  {e.startsAt ? <time dateTime={e.startsAt}>{formatDate(e.startsAt)}</time> : 'Date to be announced'}
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-forest-700" aria-hidden="true" />
                  {start ? `${start}${end ? ` – ${end}` : ''}` : 'Time to be announced'}
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-forest-700" aria-hidden="true" />
                  {e.venue ?? 'Venue to be announced'}
                </li>
              </ul>
              {e.registrationUrl ? (
                <div className="border-t border-stone-200 p-6">
                  <a href={e.registrationUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
                    Register
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </div>
              ) : null}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
