import clsx from 'clsx';
import type { PlateKey } from '@/content/types';
import { Jali } from '@/components/art/Jali';
import { plateStyles } from './plates';

/**
 * Illustrated artwork plate. Stands in for photography until the University
 * supplies real campus photographs. It is always presented as an illustration,
 * never as a photograph of the University.
 * It fills its nearest positioned parent, which must set the size.
 */
export function Plate({
  plate,
  className,
  showLabel = true,
  archScale = 0.78,
  swap = false,
}: {
  plate: PlateKey;
  className?: string;
  showLabel?: boolean;
  /** Height of the arch relative to the plate. */
  archScale?: number;
  /** Promote the first minor motif to the main position. */
  swap?: boolean;
}) {
  const s = plateStyles[plate];
  const Main = swap ? s.minor[0] : s.main;
  const MinorA = swap ? s.main : s.minor[0];
  const MinorB = s.minor[1];

  return (
    <div
      className={clsx('absolute inset-0 isolate overflow-hidden', className)}
      style={{ background: `linear-gradient(140deg, ${s.from} 0%, ${s.to} 100%)` }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-[0.13]" style={{ color: s.line }}>
        <Jali size={46} strokeWidth={0.9} />
      </div>
      {/* soft light from the upper left, like late sun on sandstone */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(120% 90% at 18% 10%, rgb(255 255 255 / 0.12), transparent 55%)' }}
      />
      <svg
        viewBox="0 0 200 260"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ height: `${archScale * 100}%`, width: 'auto', overflow: 'visible' }}
        fill="none"
      >
        <g stroke={s.line} strokeWidth="1.1" vectorEffect="non-scaling-stroke" opacity="0.85">
          <path d="M20 252 V110 C20 55 70 28 100 16 C130 28 180 55 180 110 V252" />
          <path d="M31 252 V112 C31 64 75 39 100 28 C125 39 169 64 169 112 V252" opacity="0.55" />
          <path d="M6 252 H194" />
          <circle cx="100" cy="8" r="2.4" />
        </g>
        <Main x={58} y={92} width={84} height={84} stroke={s.ink} strokeWidth={0.9} absoluteStrokeWidth={false} />
        <g opacity="0.75">
          <MinorA x={-46} y={196} width={30} height={30} stroke={s.line} strokeWidth={1.1} />
          <MinorB x={216} y={196} width={30} height={30} stroke={s.line} strokeWidth={1.1} />
        </g>
      </svg>
      {showLabel ? (
        <span
          className="absolute bottom-2.5 right-3 text-[0.625rem] font-semibold uppercase tracking-[0.16em]"
          style={{ color: s.ink, opacity: 0.7 }}
        >
          Illustration
        </span>
      ) : null}
    </div>
  );
}
