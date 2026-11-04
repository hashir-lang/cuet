import Link from 'next/link';
import { ArrowRight, BookOpen, FlaskConical, Layers, MapPin } from 'lucide-react';
import { Jali } from '@/components/art/Jali';
import { FacultyIndex } from '@/components/home/FacultyIndex';
import { HeroCarousel } from '@/components/home/HeroCarousel';
import { ProgramCard } from '@/components/cards/ProgramCard';
import { ArticleCard, EventRow } from '@/components/cards/ArticleCard';
import { Media } from '@/components/media/Media';
import { Section, SectionHeading } from '@/components/ui/Section';
import { LabChart } from '@/components/ui/LabChart';
import { CtaBand } from '@/components/ui/CtaBand';
import { DraftBadge, Pending } from '@/components/ui/Editorial';
import { faculties } from '@/content/faculties';
import { programs, programsForFaculty } from '@/content/programs';
import { news } from '@/content/news';
import { events } from '@/content/events';
import { heroSlides } from '@/content/hero';
import { site } from '@/content/site';
import { university } from '@/content/university';
import { planningNote, totals } from '@/content/infrastructure';
import { formatNumber } from '@/lib/format';
import { pageMeta } from '@/lib/seo';

export const metadata = {
  ...pageMeta({
    title: 'Undergraduate University in Lahore',
    description: site.description,
    path: '/',
  }),
  title: { absolute: `${site.name} | Undergraduate University in Lahore` },
};

const stats = [
  { value: totals.faculties, label: 'Faculties' },
  { value: totals.programs, label: 'Undergraduate programs' },
  { value: totals.laboratories, label: 'Laboratories planned' },
  { value: totals.plannedFacultyPositions, label: 'Academic positions planned' },
];

const reasons = [
  {
    icon: Layers,
    title: 'Breadth across thirteen faculties',
    text: 'Study business, computing, health sciences, law, aviation, agriculture and more within one university, with programs that share common academic standards.',
  },
  {
    icon: FlaskConical,
    title: 'Learning through practice',
    text: `The University’s infrastructure plan allocates ${totals.laboratories} laboratories to practice-led disciplines, led by six for Pharmaceutical Sciences.`,
  },
  {
    icon: BookOpen,
    title: 'A library built around every program',
    text: 'Every faculty has its own library allocation in the plan, from 500 to 800 volumes, to support coursework and independent study.',
  },
  {
    icon: MapPin,
    title: 'Rooted in Lahore',
    text: 'Study in one of South Asia’s great centres of learning and culture, close to the families, employers and communities the University serves.',
  },
];

const steps = [
  { title: 'Choose your program', text: 'Explore the seventeen programs and the faculty that teaches each one.', href: '/programs' },
  { title: 'Check the requirements', text: 'Review eligibility and the documents you need to prepare.', href: '/admissions/requirements' },
  { title: 'Prepare your documents', text: 'Gather your academic records, identity documents and photographs.', href: '/admissions/requirements#documents' },
  { title: 'Submit your application', text: 'Apply through the University’s official application route.', href: '/admissions/apply' },
];

export default function HomePage() {
  const featured = programs.filter((p) => p.featured);
  const rows = faculties.map((f) => ({ faculty: f, programs: programsForFaculty(f.slug) }));

  return (
    <>
      {/* 1. Hero: full-bleed photo slideshow with a headline per slide */}
      <HeroCarousel slides={heroSlides} label="Photographs of university life (stock photography, not the CUETECH campus)" />

      {/* Key figures band under the hero */}
      <section aria-label="Key figures" className="border-t border-white/10 bg-forest-950 text-ivory">
        <div className="container-cul py-8 sm:py-10">
          <div>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <dt className="text-sm text-forest-200">{s.label}</dt>
                  <dd className="numerals order-first mt-1 font-serif text-4xl tracking-[-0.02em] text-ivory sm:text-5xl">{formatNumber(s.value)}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-xs text-forest-200">Laboratory and staffing figures are planning allocations from the University’s infrastructure report.</p>
          </div>
        </div>
      </section>

      {/* 2–3. Introduction / About */}
      <Section labelledBy="intro-title">
        <div className="container-cul grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow flex items-center gap-3 text-sandstone-600">
              <span className="h-px w-8 bg-sandstone-500" aria-hidden="true" />
              About the University
            </p>
            <h2 id="intro-title" className="heading-xl mt-5 max-w-[16ch]">
              A university shaped around the professions Pakistan needs.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="flex items-start justify-between gap-4">
              <p className="lede text-stone-700">{university.overview.value[0]}</p>
            </div>
            <p className="mt-5 text-stone-700">{university.overview.value[1]}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link href="/about" className="link-arrow text-forest-700">
                About the University
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <DraftBadge />
            </div>
          </div>
        </div>
      </Section>

      {/* 4. Faculties overview */}
      <Section tone="ivory" labelledBy="faculties-title">
        <div className="container-cul">
          <SectionHeading
            id="faculties-title"
            eyebrow="Faculties & Departments"
            title="Thirteen faculties, one academic community."
            intro="Each faculty brings together the teaching, laboratories and library resources for its discipline."
            align="split"
            action={
              <Link href="/faculties" className="link-arrow text-forest-700">
                Faculty directory
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            }
          />
          <FacultyIndex rows={rows} />
        </div>
      </Section>

      {/* 5. Featured programs */}
      <Section labelledBy="programs-title">
        <div className="container-cul">
          <SectionHeading
            id="programs-title"
            eyebrow="Academic Programs"
            title="Find the program that fits your ambition."
            align="split"
            intro={`A selection from our ${totals.programs} undergraduate programs. Search and filter them all in the program directory.`}
            action={
              <Link href="/programs" className="btn btn-outline btn-sm">
                All {totals.programs} programs
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            }
          />
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <li key={p.slug}>
                <ProgramCard program={p} />
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 6. Why choose */}
      <Section tone="stone" labelledBy="why-title">
        <div className="container-cul">
          <SectionHeading id="why-title" eyebrow={`Why ${site.shortName}`} title="Why choose CUETECH." />
          <ul className="grid gap-px overflow-hidden border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <li key={r.title} className="flex flex-col bg-paper p-6 sm:p-8">
                <r.icon className="size-7 text-sandstone-600" strokeWidth={1.4} aria-hidden="true" />
                <h3 className="heading-md mt-8">{r.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-stone-700">{r.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 7. Facilities and infrastructure */}
      <Section tone="forest" labelledBy="facilities-title" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 text-brass-300 opacity-[0.06]">
          <Jali size={60} />
        </div>
        <div className="container-cul grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              id="facilities-title"
              eyebrow="Facilities & Infrastructure"
              title="Built for learning by doing."
              tone="dark"
              intro="The University’s infrastructure plan allocates laboratory space to every practice-led faculty, and a library collection to every faculty."
              className="!mb-8"
            />
            <dl className="grid grid-cols-2 gap-6 border-t border-white/15 pt-6">
              <div className="flex flex-col">
                <dt className="text-sm text-forest-200">Laboratories planned</dt>
                <dd className="numerals order-first font-serif text-5xl text-ivory">{totals.laboratories}</dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-sm text-forest-200">Faculties with a library allocation</dt>
                <dd className="numerals order-first font-serif text-5xl text-ivory">{totals.faculties}</dd>
              </div>
            </dl>
            <p className="mt-6 text-sm text-forest-200">{planningNote}</p>
            <Link href="/campus" className="btn btn-outline-light mt-8">
              Campus & infrastructure
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <LabChart />
          </div>
        </div>
      </Section>

      {/* 8. Campus imagery */}
      <Section labelledBy="gallery-title">
        <div className="container-cul">
          <SectionHeading
            id="gallery-title"
            eyebrow="Campus"
            title="Spaces for study, practice and community."
            align="split"
            intro="These illustrations will be replaced by photography of the campus as it is completed."
          />
          <div className="grid auto-rows-[11rem] grid-cols-2 gap-3 sm:auto-rows-[14rem] sm:gap-4 lg:grid-cols-4">
            <Media media={{ src: null, alt: 'Illustration of the campus', plate: 'campus' }} className="col-span-2 row-span-2" sizes="50vw" />
            <Media media={{ src: null, alt: 'Illustration of the library', plate: 'library' }} className="col-span-1" sizes="25vw" showLabel={false} />
            <Media media={{ src: null, alt: 'Illustration of a pharmacy laboratory', plate: 'pharmacy' }} className="col-span-1" sizes="25vw" showLabel={false} />
            <Media media={{ src: null, alt: 'Illustration of an aviation learning space', plate: 'aviation' }} className="col-span-1" sizes="25vw" showLabel={false} />
            <Media media={{ src: null, alt: 'Illustration of an engineering workshop', plate: 'engineering' }} className="col-span-1" sizes="25vw" showLabel={false} />
          </div>
        </div>
      </Section>

      {/* 9. Student experience */}
      <Section tone="ivory" labelledBy="student-title">
        <div className="container-cul grid items-center gap-12 lg:grid-cols-12">
          <Media media={{ src: null, alt: 'Illustration representing student life', plate: 'student-life' }} className="aspect-[4/3] lg:col-span-6" />
          <div className="lg:col-span-5 lg:col-start-8">
            <SectionHeading id="student-title" eyebrow="Student Experience" title="More than a degree." className="!mb-6" />
            <p className="lede text-stone-700">
              University is where friendships form, interests deepen and confidence grows. Student life at CUETECH is built around academic support, community and a campus designed for study.
            </p>
            <ul className="mt-8 space-y-4 border-t border-stone-300 pt-6">
              {['Academic advising and study support', 'A library for every faculty', 'Student societies and activities'].map((t) => (
                <li key={t} className="flex items-center gap-3 font-medium">
                  <span className="size-1.5 shrink-0 rotate-45 bg-sandstone-500" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
            <Link href="/student-life" className="link-arrow mt-8 text-forest-700">
              Student life
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Section>

      {/* 10. Admissions */}
      <Section labelledBy="admissions-title">
        <div className="container-cul">
          <SectionHeading
            id="admissions-title"
            eyebrow="Admissions"
            title="Your path to CUETECH."
            align="split"
            intro="Applying is straightforward. Follow four steps, and contact the Admissions Office whenever you need help."
          />
          <ol className="grid gap-px border border-stone-200 bg-stone-200 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="group relative bg-paper p-6 sm:p-7">
                <span className="numerals font-serif text-5xl text-sandstone-500">{i + 1}</span>
                <h3 className="heading-md mt-6">
                  <Link href={s.href} className="after:absolute after:inset-0 after:content-['']">
                    {s.title}
                  </Link>
                </h3>
                <p className="mt-2 text-[0.95rem] text-stone-700">{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              {site.admissions.importantDates.length === 0 ? (
                <Pending title="Admission dates will be announced">
                  The University will publish application deadlines and key dates for the next intake here.
                </Pending>
              ) : null}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
              <Link href="/admissions/how-to-apply" className="btn btn-dark">
                How to apply
              </Link>
              <Link href="/admissions/apply" className="btn btn-primary">
                Apply now
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* 11–12. News and events */}
      <Section tone="stone" labelledBy="news-title">
        <div className="container-cul grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-10 flex items-end justify-between gap-4">
              <h2 id="news-title" className="heading-xl">News</h2>
              <Link href="/news" className="link-arrow shrink-0 text-forest-700">
                All news
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <ul className="grid gap-10 sm:grid-cols-2">
              {news.slice(0, 2).map((a) => (
                <li key={a.slug}>
                  <ArticleCard article={a} />
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="mb-6 flex items-end justify-between gap-4">
              <h2 className="heading-xl">Events</h2>
              <Link href="/events" className="link-arrow shrink-0 text-forest-700">
                All events
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="border-b border-stone-200">
              {events.slice(0, 3).map((e) => (
                <EventRow key={e.slug} event={e} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 13. Contact CTA */}
      <CtaBand
        title="Questions about studying with us?"
        text="The University is here to help applicants, parents and partners. Get in touch, or start with our admissions guide."
        primary={{ label: 'Contact us', href: '/contact' }}
        secondary={{ label: 'Admissions guide', href: '/admissions' }}
      />
    </>
  );
}
