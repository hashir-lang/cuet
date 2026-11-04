import Image from 'next/image';
import clsx from 'clsx';
import { site } from '@/content/site';

type Tone = 'dark' | 'light';

/** The CUETECH emblem on its own: the hexagonal mark cut from the official logo. */
export function BrandMark({ tone = 'dark', className, preload = false }: { tone?: Tone; className?: string; preload?: boolean }) {
  const mark = tone === 'dark' ? site.logo.mark : site.logo.markLight;
  return <Image src={mark.src} width={mark.width} height={mark.height} alt="" className={className} preload={preload} />;
}

/**
 * University wordmark: the official emblem beside the CUETECH name and the full
 * institutional name, set in the website's fonts so it stays crisp at any size.
 * Use `tone="light"` on dark (navy) backgrounds. Slightly more compact below 380 px
 * so the header still fits beside the menu button on the narrowest phones.
 */
export function Wordmark({ tone = 'dark', className, preload = false }: { tone?: Tone; className?: string; preload?: boolean }) {
  return (
    <span className={clsx('flex items-center gap-2.5 min-[380px]:gap-3', className)}>
      <BrandMark tone={tone} className="h-10 w-auto shrink-0 min-[380px]:h-11" preload={preload} />
      <span className="flex flex-col">
        <span
          className={clsx(
            'font-serif text-[1.05rem] leading-none tracking-[0.2em] min-[380px]:text-[1.2rem] min-[380px]:tracking-[0.24em] sm:text-[1.3rem]',
            tone === 'dark' ? 'text-forest-900' : 'text-ivory',
          )}
          style={{ fontWeight: 500 }}
        >
          {site.shortName}
        </span>
        <span
          className={clsx(
            'mt-1.5 text-[0.52rem] font-semibold uppercase leading-[1.4] tracking-[0.14em] min-[380px]:text-[0.58rem] min-[380px]:tracking-[0.2em]',
            tone === 'dark' ? 'text-stone-600' : 'text-forest-200',
          )}
        >
          Central University of
          <br />
          Emerging Technologies
        </span>
      </span>
    </span>
  );
}
