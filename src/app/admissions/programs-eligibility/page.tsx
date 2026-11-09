import Link from 'next/link';
import { FileText } from 'lucide-react';
import { SectionLayout } from '@/components/sections/SectionLayout';
import { DraftBadge, Pending, TBC } from '@/components/ui/Editorial';
import { sectionByKey } from '@/content/sections';
import { requiredDocuments } from '@/content/admissions';
import { faculties } from '@/content/faculties';
import { programLevels, programs, programsForFaculty } from '@/content/programs';
import { site } from '@/content/site';
import { pageMeta } from '@/lib/seo';

const section = sectionByKey('admissions');

export const metadata = pageMeta({
  title: 'Programs and Eligibility Criteria',
  description: `Programs open to applicants at ${site.name}, the eligibility criteria for each undergraduate and associate degree program, and the documents to prepare.`,
  path: '/admissions/programs-eligibility',
});

export default function ProgramsEligibilityPage() {
  const levels = programLevels.filter((l) => l.level !== 'Graduate');
  const withCriteria = programs.filter((p) => p.official.eligibility).length;
  const fromHec = programs.some((p) => p.official.eligibility && p.official.basis);
  return (
    <SectionLayout section={section} current="/admissions/programs-eligibility" title="Programs and Eligibility Criteria" lede="Every program open to applicants, the entry criteria for each, and the documents to prepare.">
      <div className="space-y-14">
        <section aria-labelledby="eligibility">
          <h2 id="eligibility" className="heading-lg">
            Eligibility by program
          </h2>
          <p className="mt-3 text-stone-700">Each program has its own entry criteria. The full criteria, and the scheme of study each is based on, are on the program pages.</p>
          {withCriteria < programs.length ? (
            <Pending title={withCriteria ? 'Some eligibility criteria are awaiting confirmation' : 'Program eligibility criteria are awaiting confirmation'} className="mt-5">
              {fromHec
                ? 'Where criteria are shown, they are the minimum standards of the HEC curriculum the program follows; the University may set higher requirements, including an entry test. Programs marked "to be confirmed" have no published criteria yet.'
                : 'Minimum qualifications, required subjects and any entry test or interview requirements have not yet been supplied.'}{' '}
              Contact the Admissions Office for current information.
            </Pending>
          ) : null}
          {levels.map((l) => (
            <div key={l.level} className="mt-8 overflow-x-auto border border-stone-200">
              <table className="w-full min-w-[34rem] text-left">
                <caption className="border-b border-stone-200 bg-ivory px-5 py-3 text-left font-semibold">{l.plural}</caption>
                <thead className="bg-ivory text-sm">
                  <tr>
                    <th scope="col" className="px-5 py-3 font-semibold">
                      Program
                    </th>
                    <th scope="col" className="px-5 py-3 font-semibold">
                      Faculty
                    </th>
                    <th scope="col" className="px-5 py-3 font-semibold">
                      Eligibility
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {faculties.flatMap((f) =>
                    programsForFaculty(f.slug)
                      .filter((p) => p.level === l.level)
                      .map((p) => (
                        <tr key={p.slug}>
                          <th scope="row" className="px-5 py-3 font-medium">
                            <Link href={`/programs/${p.slug}#admission`} className="text-forest-700 underline-offset-4 hover:underline">
                              {p.name}
                            </Link>
                          </th>
                          <td className="px-5 py-3 text-stone-700">{f.shortName}</td>
                          <td className="px-5 py-3">{p.official.eligibility ? p.official.eligibility.join('; ') : <TBC />}</td>
                        </tr>
                      )),
                  )}
                </tbody>
              </table>
            </div>
          ))}
        </section>

        <section id="documents" aria-labelledby="documents-title" className="scroll-mt-28 border-t border-stone-200 pt-8">
          <div className="flex flex-wrap items-center gap-3">
            <h2 id="documents-title" className="heading-lg">
              Required documents
            </h2>
            <DraftBadge />
          </div>
          <p className="mt-3 text-stone-700">Prepare clear copies of these documents before you start your application.</p>
          <ul className="mt-5 grid gap-px border border-stone-200 bg-stone-200 sm:grid-cols-2">
            {requiredDocuments.value.map((d) => (
              <li key={d} className="flex gap-3 bg-paper p-4">
                <FileText className="mt-0.5 size-5 shrink-0 text-sandstone-600" aria-hidden="true" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-stone-600">This checklist reflects documents commonly requested by universities in Pakistan. The University will confirm its final list in the admissions announcement.</p>
        </section>
      </div>
    </SectionLayout>
  );
}
