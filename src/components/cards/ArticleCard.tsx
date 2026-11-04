import Link from 'next/link';
import clsx from 'clsx';
import { CalendarDays, MapPin } from 'lucide-react';
import type { Article, EventItem } from '@/content/types';
import { Media } from '@/components/media/Media';
import { TemplateBadge } from '@/components/ui/Editorial';
import { dayAndMonth, formatDate, formatTime } from '@/lib/format';

export function ArticleCard({ article, className, headingLevel = 'h3' }: { article: Article; className?: string; headingLevel?: 'h2' | 'h3' }) {
  const H = headingLevel;
  return (
    <article className={clsx('group relative flex h-full flex-col', className)}>
      <Media media={article.media} className="aspect-[16/10] w-full" sizes="(min-width: 1024px) 33vw, 100vw" archScale={0.7} showLabel={false} />
      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-stone-600">
        <span className="eyebrow text-sandstone-600">{article.category}</span>
        <span aria-hidden="true">·</span>
        {article.publishedAt ? <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time> : <span>Date to be confirmed</span>}
        {article.isTemplate ? <TemplateBadge /> : null}
      </div>
      <H className="heading-md mt-3">
        <Link href={`/news/${article.slug}`} className="underline-offset-4 after:absolute after:inset-0 after:content-[''] group-hover:underline">
          {article.title}
        </Link>
      </H>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-stone-700">{article.excerpt}</p>
    </article>
  );
}

/** Event row with a date block. Unscheduled events show "TBA" rather than an invented date. */
export function EventRow({ event, headingLevel = 'h3' }: { event: EventItem; headingLevel?: 'h2' | 'h3' }) {
  const H = headingLevel;
  const d = event.startsAt ? dayAndMonth(event.startsAt) : null;
  const time = formatTime(event.startsAt);
  return (
    <article className="group relative grid grid-cols-[4.5rem_1fr] gap-5 border-t border-stone-200 py-6 sm:grid-cols-[6rem_1fr] sm:gap-8">
      <div className="flex aspect-square flex-col items-center justify-center border border-stone-200 bg-ivory text-center">
        {d ? (
          <time dateTime={event.startsAt ?? undefined} className="flex flex-col items-center">
            <span className="numerals font-serif text-3xl leading-none text-forest-800">{d.day}</span>
            <span className="eyebrow mt-1 text-stone-600">{d.month}</span>
          </time>
        ) : (
          <>
            <span className="font-serif text-xl leading-none text-forest-800">TBA</span>
            <span className="mt-1 text-[0.65rem] uppercase tracking-[0.1em] text-stone-600">Date</span>
          </>
        )}
      </div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="eyebrow text-sandstone-600">{event.category}</span>
          {event.isTemplate ? <TemplateBadge /> : null}
        </div>
        <H className="heading-md mt-2">
          <Link href={`/events/${event.slug}`} className="underline-offset-4 after:absolute after:inset-0 after:content-[''] group-hover:underline">
            {event.title}
          </Link>
        </H>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-stone-700">{event.excerpt}</p>
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-stone-600">
          <li className="flex items-center gap-1.5">
            <CalendarDays className="size-4 shrink-0" aria-hidden="true" />
            {d ? `${formatDate(event.startsAt)}${time ? `, ${time}` : ''}` : 'Date to be announced'}
          </li>
          <li className="flex items-center gap-1.5">
            <MapPin className="size-4 shrink-0" aria-hidden="true" />
            {event.venue ?? 'Venue to be announced'}
          </li>
        </ul>
      </div>
    </article>
  );
}
