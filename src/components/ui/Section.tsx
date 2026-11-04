import clsx from 'clsx';

type Tone = 'paper' | 'ivory' | 'stone' | 'forest' | 'sandstone';

const toneClass: Record<Tone, string> = {
  paper: 'bg-paper text-ink',
  ivory: 'bg-ivory text-ink',
  stone: 'bg-stone-100 text-ink',
  forest: 'bg-forest-900 text-ivory',
  sandstone: 'bg-sandstone-600 text-white',
};

export function Section({
  children,
  tone = 'paper',
  className,
  id,
  labelledBy,
  spacing = 'default',
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
  labelledBy?: string;
  spacing?: 'default' | 'tight' | 'none';
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={clsx(
        toneClass[tone],
        spacing === 'default' && 'py-16 sm:py-20 lg:py-28',
        spacing === 'tight' && 'py-12 sm:py-16',
        className,
      )}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  tone = 'light',
  align = 'left',
  className,
  action,
  as: Tag = 'h2',
}: {
  id?: string;
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  tone?: 'light' | 'dark';
  align?: 'left' | 'split';
  className?: string;
  action?: React.ReactNode;
  as?: 'h1' | 'h2';
}) {
  return (
    <div
      className={clsx(
        'mb-10 sm:mb-14',
        align === 'split' && 'grid gap-6 lg:grid-cols-12 lg:items-end',
        className,
      )}
    >
      <div className={clsx(align === 'split' && 'lg:col-span-7')}>
        {eyebrow ? (
          <p className={clsx('eyebrow mb-4 flex items-center gap-3', tone === 'light' ? 'text-sandstone-600' : 'text-brass-300')}>
            <span className={clsx('h-px w-8', tone === 'light' ? 'bg-sandstone-500' : 'bg-brass-300')} aria-hidden="true" />
            {eyebrow}
          </p>
        ) : null}
        <Tag id={id} className="heading-xl max-w-[22ch]">
          {title}
        </Tag>
      </div>
      {intro || action ? (
        <div className={clsx(align === 'split' ? 'lg:col-span-5' : 'mt-5', 'max-w-[60ch]')}>
          {intro ? (
            <div className={clsx('lede', tone === 'light' ? 'text-stone-700' : 'text-forest-100')}>{intro}</div>
          ) : null}
          {action ? <div className="mt-5">{action}</div> : null}
        </div>
      ) : null}
    </div>
  );
}
