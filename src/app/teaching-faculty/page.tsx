import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionLayout } from '@/components/sections/SectionLayout';
import { Pending } from '@/components/ui/Editorial';
import { Media } from '@/components/media/Media';
import { sectionByKey } from '@/content/sections';
import { departments } from '@/content/faculties';
import { facultyMembers, membersOfDepartment } from '@/content/teaching-faculty';
import { site } from '@/content/site';
import { countLabel, pad2 } from '@/lib/format';
import { pageMeta } from '@/lib/seo';

const section = sectionByKey('teaching-faculty');

export const metadata = pageMeta({
  title: 'Teaching Faculty Members',
  description: `Teaching faculty of ${site.name}, department by department, with photographs, brief profiles and official email addresses.`,
  path: '/teaching-faculty',
});

export default function TeachingFacultyPage() {
  return (
    <SectionLayout
      section={section}
      current="/teaching-faculty"
      title={section.title}
      lede={section.summary}
      aside={<Media media={{ src: null, alt: 'Illustration representing teaching', plate: 'education' }} className="aspect-[4/3] w-full" priority />}
      cta={{ title: 'Join the teaching faculty.', text: 'Academic appointments are announced on the Careers page.', primary: { label: 'Careers at CueTech', href: '/careers' }, secondary: { label: 'Faculties and Departments', href: '/faculties' } }}
    >
      <div className="space-y-10">
        {facultyMembers.length === 0 ? (
          <Pending title="Faculty profiles are being prepared">
            Photographs, brief profiles and official email addresses of the teaching faculty will be published here, department by department, as appointments are confirmed.
          </Pending>
        ) : null}
        <section aria-labelledby="departments-title">
          <h2 id="departments-title" className="heading-lg">
            Departments
          </h2>
          <ol className="mt-5 grid gap-px border border-stone-200 bg-stone-200 sm:grid-cols-2">
            {departments.map((d, i) => {
              const n = membersOfDepartment(d.slug).length;
              return (
                <li key={d.slug} className="group relative flex flex-col bg-paper p-5">
                  <span className="numerals text-sm text-stone-500">{pad2(i + 1)}</span>
                  <h3 className="heading-md mt-2">
                    <Link href={`/teaching-faculty/${d.slug}`} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
                      {d.name}
                    </Link>
                  </h3>
                  <p className="mt-1 flex-1 text-sm text-stone-600">{d.facultyName}</p>
                  <p className="mt-4 flex items-center justify-between gap-3 text-sm">
                    <span className="text-stone-600">{n ? countLabel(n, 'faculty member') : 'Profiles to be published'}</span>
                    <span className="link-arrow text-forest-700" aria-hidden="true">
                      View
                      <ArrowRight className="size-4" />
                    </span>
                  </p>
                  <span className="pointer-events-none absolute inset-0 hidden outline-2 outline-offset-[-2px] outline-sandstone-500 group-has-[a:focus-visible]:block" style={{ outlineStyle: 'solid' }} aria-hidden="true" />
                </li>
              );
            })}
          </ol>
        </section>
      </div>
    </SectionLayout>
  );
}
