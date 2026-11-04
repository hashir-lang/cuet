import Link from 'next/link';
import { FileText } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { AdmissionsNav } from '@/components/admissions/AdmissionsNav';
import { CtaBand } from '@/components/ui/CtaBand';
import { DraftBadge, Pending, TBC } from '@/components/ui/Editorial';
import { requiredDocuments } from '@/content/admissions';
import { faculties } from '@/content/faculties';
import { programsForFaculty } from '@/content/programs';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Admission Requirements',
  description: 'Eligibility and required documents for undergraduate admission to Central University of Emerging Technologies.',
  path: '/admissions/requirements',
});

export default function RequirementsPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { name: 'Admissions', href: '/admissions' },
          { name: 'Admission Requirements', href: '/admissions/requirements' },
        ]}
        eyebrow="Admissions"
        title="Admission requirements"
        lede="What you need to apply: eligibility for each program, and the documents to prepare."
      />
      <AdmissionsNav current="/admissions/requirements" />

      <section aria-labelledby="eligibility" className="bg-paper py-16 sm:py-20">
        <div className="container-cul grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="eligibility" className="heading-xl">
              Eligibility
            </h2>
            <p className="mt-4 text-stone-700">Each program has its own entry criteria. They will be confirmed by the University and published below and on each program page.</p>
          </div>
          <div className="lg:col-span-8">
            <Pending title="Program eligibility criteria are awaiting confirmation" className="mb-8">
              Minimum qualifications, required subjects and any entry test or interview requirements have not yet been supplied. Contact the Admissions Office for current information.
            </Pending>
            <div className="overflow-x-auto border border-stone-200">
              <table className="w-full min-w-[34rem] text-left">
                <caption className="sr-only">Eligibility status by program</caption>
                <thead className="bg-ivory text-sm">
                  <tr>
                    <th scope="col" className="px-5 py-3 font-semibold">Program</th>
                    <th scope="col" className="px-5 py-3 font-semibold">Faculty</th>
                    <th scope="col" className="px-5 py-3 font-semibold">Eligibility</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {faculties.flatMap((f) =>
                    programsForFaculty(f.slug).map((p) => (
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
          </div>
        </div>
      </section>

      <section aria-labelledby="documents" className="scroll-mt-28 bg-ivory py-16 sm:py-20" id="documents-section">
        <div className="container-cul grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="documents" className="heading-xl scroll-mt-28">
              Required documents
            </h2>
            <p className="mt-4 text-stone-700">Prepare clear copies of these documents before you start your application.</p>
            <DraftBadge className="mt-4" />
          </div>
          <div className="lg:col-span-8">
            <ul className="grid gap-px border border-stone-200 bg-stone-200 sm:grid-cols-2">
              {requiredDocuments.value.map((d) => (
                <li key={d} className="flex gap-3 bg-paper p-5">
                  <FileText className="mt-0.5 size-5 shrink-0 text-sandstone-600" aria-hidden="true" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-stone-600">
              This checklist reflects documents commonly requested by universities in Pakistan. The University will confirm its final list in the admissions announcement.
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
