import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Mail, UserRound } from 'lucide-react';
import { SectionLayout } from '@/components/sections/SectionLayout';
import { Pending } from '@/components/ui/Editorial';
import { sectionByKey } from '@/content/sections';
import { departmentBySlug, departments } from '@/content/faculties';
import { programsForFaculty } from '@/content/programs';
import { membersOfDepartment } from '@/content/teaching-faculty';
import { site } from '@/content/site';
import { pageMeta } from '@/lib/seo';

const section = sectionByKey('teaching-faculty');
type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return departments.map((d) => ({ slug: d.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const d = departmentBySlug(slug);
  if (!d) return {};
  return pageMeta({
    title: `${d.name} Faculty`,
    description: `Teaching faculty of the ${d.name}, ${d.facultyName}, ${site.name}: photographs, profiles and official email addresses.`,
    path: `/teaching-faculty/${d.slug}`,
  });
}

export default async function DepartmentFacultyPage({ params }: Props) {
  const { slug } = await params;
  const d = departmentBySlug(slug);
  if (!d) notFound();
  const members = membersOfDepartment(d.slug);
  const programs = programsForFaculty(d.facultySlug);

  return (
    <SectionLayout section={section} current={`/teaching-faculty/${d.slug}`} title={d.name} eyebrow={d.facultyName} lede={`Teaching faculty of the ${d.name}.`}>
      <div className="space-y-12">
        <section aria-labelledby="members-title">
          <h2 id="members-title" className="heading-lg">
            Faculty members
          </h2>
          {members.length ? (
            <ul className="mt-6 grid gap-6 sm:grid-cols-2">
              {members.map((m) => (
                <li key={m.name} className="flex gap-5 border border-stone-200 p-5">
                  {m.photo ? (
                    <div className="relative size-24 shrink-0 overflow-hidden bg-stone-100">
                      <Image src={m.photo} alt={m.name} fill sizes="6rem" className="object-cover" />
                    </div>
                  ) : (
                    <div className="grid size-24 shrink-0 place-items-center bg-stone-100">
                      <UserRound className="size-10 text-stone-300" strokeWidth={1} aria-hidden="true" />
                    </div>
                  )}
                  <div className="min-w-0">
                    <h3 className="heading-md">{m.name}</h3>
                    <p className="text-sm text-stone-600">{m.designation}</p>
                    {m.qualifications ? <p className="mt-1 text-sm text-stone-700">{m.qualifications}</p> : null}
                    {m.profile.length ? <p className="mt-3 text-[0.95rem] text-stone-700">{m.profile[0]}</p> : null}
                    {m.email ? (
                      <a href={`mailto:${m.email}`} className="mt-3 inline-flex items-center gap-2 break-all text-sm font-semibold text-forest-700 underline underline-offset-4">
                        <Mail className="size-4 shrink-0" aria-hidden="true" />
                        {m.email}
                      </a>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <Pending title="Profiles of the teaching faculty will be published here" className="mt-6">
              Each profile will show the member’s photograph, designation, qualifications, a brief profile and their official University email address.
            </Pending>
          )}
        </section>

        <section aria-labelledby="dept-programs-title" className="border-t border-stone-200 pt-8">
          <h2 id="dept-programs-title" className="heading-lg">
            Programs taught by the department
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {programs.map((p) => (
              <li key={p.slug}>
                <Link href={`/programs/${p.slug}`} className="btn btn-outline btn-sm">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href={`/faculties/${d.facultySlug}`} className="link-arrow mt-6 text-forest-700">
            {d.facultyName}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </section>
      </div>
    </SectionLayout>
  );
}
