import { PageHero } from '@/components/ui/PageHero';
import { NewsTabs } from '@/components/news/NewsTabs';
import { ArticleCard } from '@/components/cards/ArticleCard';
import { Pending } from '@/components/ui/Editorial';
import { news } from '@/content/news';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'News & Announcements',
  description: 'News and announcements from Central University of Emerging Technologies: admissions, faculties and campus.',
  path: '/news',
});

export default function NewsPage() {
  const sorted = [...news].sort((a, b) => (b.publishedAt ?? '').localeCompare(a.publishedAt ?? ''));
  const categories = Array.from(new Set(news.map((n) => n.category)));
  const onlyTemplates = news.every((n) => n.isTemplate);

  return (
    <>
      <PageHero
        crumbs={[{ name: 'News', href: '/news' }]}
        eyebrow="News & Events"
        title="News & announcements"
        lede="Official news from the University, its faculties and its campus."
      />
      <NewsTabs current="news" />
      <section aria-label="News articles" className="bg-paper py-14 sm:py-20">
        <div className="container-cul">
          {onlyTemplates ? (
            <Pending title="No news has been published yet" className="mb-12 max-w-3xl">
              The entries below are templates that show how news will appear. They will be replaced by official University announcements.
            </Pending>
          ) : null}
          <p className="mb-8 text-sm text-stone-600">
            Categories: {categories.join(', ')}
          </p>
          {sorted.length ? (
            <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
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
      </section>
    </>
  );
}
