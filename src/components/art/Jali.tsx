import { useId } from 'react';

/**
 * Jali lattice — an eight-pointed-star tessellation inspired by the carved
 * stone screens of Mughal Lahore. Used as quiet texture, always decorative.
 */
export function Jali({
  className,
  size = 44,
  strokeWidth = 0.8,
}: {
  className?: string;
  size?: number;
  strokeWidth?: number;
}) {
  const id = useId().replace(/:/g, '');
  const s = size;
  const q = s / 2;
  const a = s * 0.2; // inner square inset
  const b = s * 0.075; // star tip inset
  return (
    <svg className={className} aria-hidden="true" focusable="false" width="100%" height="100%">
      <defs>
        <pattern id={`jali-${id}`} width={s} height={s} patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
            {/* square A */}
            <rect x={a} y={a} width={s - 2 * a} height={s - 2 * a} />
            {/* square B (rotated) */}
            <path d={`M${q} ${b} L${s - b} ${q} L${q} ${s - b} L${b} ${q} Z`} />
            {/* connectors to neighbouring tiles */}
            <path
              d={`M${q} 0 V${b} M${q} ${s - b} V${s} M0 ${q} H${b} M${s - b} ${q} H${s} M0 0 L${a} ${a} M${s} 0 L${s - a} ${a} M0 ${s} L${a} ${s - a} M${s} ${s} L${s - a} ${s - a}`}
            />
            <circle cx={q} cy={q} r={s * 0.06} />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#jali-${id})`} />
    </svg>
  );
}
