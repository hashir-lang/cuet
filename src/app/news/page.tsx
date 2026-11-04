import Link from 'next/link';
import { SectionLayout } from '@/components/sections/SectionLayout';
import { ArticleCard } from '@/components/cards/ArticleCard';
import { Pending } from '@/components/ui/Editorial';
import { sectionByKey } from '@/content/sections';
import { news, newsCategories } from '@/content/news';
import { site } from '@/content/site';
import { pageMeta } from '@/lib/seo';

const section = sectionByKey('news');

export const metadata = pageMeta({
  title: 'University News',
  description: `News, official announcements, press releases, media coverage and notices from ${site.name}.`,
  path: '/news',
});

export default function NewsPage() {
  const sorted = [...news].sort((a, b) => (b.publishedAt ?? '').localeCompare(a.publishedAt ?? ''));
  const onlyTemplates = news.every((n) => n.isTemplate);

  return (
    <SectionLayout section={section} current="/news" title="University News" lede="Official news from the University, its faculties and its campus." cta={{ title: 'Stay informed.', text: 'Admissions announcements, events and notices are published here first.', primary: { label: 'Events Calendar', href: '/events' }, secondary: { label: 'Official Announcements', href: '/news/category/announcements' } }}>
      <div className="space-y-10">
        <nav aria-label="News categories">
          <ul className="flex flex-wrap gap-2">
            {newsCategories.map((c) => (
              <li key={c.slug}>
                <Link href={c.slug === 'university-news' ? '/news' : `/news/category/${c.slug}`} className="btn btn-outline btn-sm" aria-current={c.slug === 'university-news' ? 'page' : undefined}>
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {onlyTemplates ? (
          <Pending title="No news has been published yet">The entries below are templates that show how news will appear. They will be replaced by official University announcements.</Pending>
        ) : null}
        {sorted.length ? (
          <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2">
            {sorted.map((a) => (
              <li key={a.slug}>
                <ArticleCard article={a} headingLevel="h2" />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-stone-700">There is no news to show yet.</p>
        )}
      </div>
    </SectionLayout>
  );
}
