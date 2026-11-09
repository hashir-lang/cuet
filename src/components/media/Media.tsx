import Image from 'next/image';
import clsx from 'clsx';
import type { MediaSlot } from '@/content/types';
import { Plate } from './illustrations/Plate';

/**
 * One image slot. Shows the photograph when `media.src` is set. The illustrated plates in
 * ./illustrations/ remain as the fallback for a slot without a photograph (they were the
 * site's artwork before stock photographs were added in November 2026).
 *
 * To change a photograph:
 *   1. Add the file to /public/images/<section>/<descriptive-name>.jpg (min. 2000px wide).
 *   2. Set `src` on the matching MediaSlot in src/content/*.ts and update `alt` and `caption`.
 */
export function Media({
  media,
  className,
  sizes = '(min-width: 1024px) 50vw, 100vw',
  priority = false,
  showLabel = true,
  archScale,
}: {
  media: MediaSlot;
  className?: string;
  sizes?: string;
  priority?: boolean;
  showLabel?: boolean;
  archScale?: number;
}) {
  if (media.src) {
    return (
      <figure className={clsx('relative overflow-hidden bg-stone-200', className)}>
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes={sizes}
          preload={priority}
          className="object-cover"
        />
        {media.caption ? <figcaption className="sr-only">{media.caption}</figcaption> : null}
      </figure>
    );
  }
  return (
    <div className={clsx('relative', className)} role="img" aria-label={media.alt}>
      <Plate plate={media.plate} swap={media.swap} showLabel={showLabel} archScale={archScale} />
    </div>
  );
}
