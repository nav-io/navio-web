import { useId } from 'react';

/**
 * Glowing laser pulses that travel through the honeycomb mesh's actual edges.
 * Geometry constants mirror GridBgMesh so vertices align pixel-for-pixel.
 */
const SCALE_HEX = (46 / Math.sqrt(3)) / 23;
const STEP_X = 19.918584 * SCALE_HEX; // ≈23 px (horizontal step between zig-zag vertices)
const HEX_DY = 11.5 * SCALE_HEX;      // ≈13.28 px (zig-zag amplitude / diagonal y-component)
const VLEN = 23 * SCALE_HEX;          // ≈26.56 px (length of a single hex edge)

/** Path canvas; oversized so a single pulse can travel from off-screen to off-screen. */
const PATH_W = 6000;
const PATH_H = 10000;

interface PathSpec {
  d: string;
  length: number;
}

/**
 * Horizontal zig-zag path through hex edges between yLow=yLowRef and yHigh=yLowRef+11.5
 * (in reference units). yLowRef of 0 + 69k traces the "top zig-zag" of tile k;
 * yLowRef of 34.5 + 69k traces the "bottom zig-zag" of tile k.
 */
function buildHorizontal(yLowRef: number, startHigh: boolean): PathSpec {
  const yLow = yLowRef * SCALE_HEX;
  const yHigh = (yLowRef + 11.5) * SCALE_HEX;
  const segs = Math.ceil(PATH_W / STEP_X) + 4;
  let x = -STEP_X * 2;
  let high = startHigh;
  let d = `M${x.toFixed(2)} ${(high ? yHigh : yLow).toFixed(2)}`;
  for (let i = 0; i < segs; i++) {
    x += STEP_X;
    high = !high;
    d += ` L${x.toFixed(2)} ${(high ? yHigh : yLow).toFixed(2)}`;
  }
  return { d, length: segs * VLEN };
}

/**
 * Vertical zig-zag path: alternates a vertical hex edge with a diagonal hex edge,
 * staying close to the column at xRef (in ref units; must be a multiple of 39.837169
 * so the start vertex is on the mesh).
 */
function buildVertical(xRef: number, dirRight: boolean): PathSpec {
  const xStart = xRef * SCALE_HEX;
  let x = xStart;
  let y = 11.5 * SCALE_HEX;
  let d = `M${x.toFixed(2)} ${y.toFixed(2)}`;
  let dir = dirRight;
  let length = 0;
  let safety = 0;
  while (y < PATH_H + VLEN && safety++ < 2000) {
    y += VLEN;
    d += ` L${x.toFixed(2)} ${y.toFixed(2)}`;
    length += VLEN;
    const newX = x + (dir ? STEP_X : -STEP_X);
    const newY = y + HEX_DY;
    d += ` L${newX.toFixed(2)} ${newY.toFixed(2)}`;
    length += VLEN;
    x = newX;
    y = newY;
    dir = !dir;
  }
  return { d, length };
}

interface Pulse extends PathSpec {
  dur: number;
  delay: number;
}

/**
 * Lanes are picked to spread pulses across viewport height/width.
 * Durations are coprime-ish so the lasers never visibly resync.
 */
const PULSES: Pulse[] = [
  // Horizontals — distributed top-to-bottom of the long page
  { ...buildHorizontal(0,                  true),  dur: 13, delay: 0 },
  { ...buildHorizontal(34.5 + 69 * 8,      false), dur: 17, delay: -6 },
  { ...buildHorizontal(0    + 69 * 18,     true),  dur: 19, delay: -11 },
  { ...buildHorizontal(34.5 + 69 * 30,     false), dur: 15, delay: -3 },
  { ...buildHorizontal(0    + 69 * 45,     true),  dur: 21, delay: -14 },
  { ...buildHorizontal(34.5 + 69 * 60,     false), dur: 18, delay: -8 },
  { ...buildHorizontal(0    + 69 * 78,     true),  dur: 16, delay: -2 },

  // Verticals — visible across the entire scroll, spaced across viewport width
  { ...buildVertical(39.837169 * 3,  true),  dur: 23, delay: -7 },
  { ...buildVertical(39.837169 * 12, false), dur: 27, delay: -15 },
  { ...buildVertical(39.837169 * 22, true),  dur: 25, delay: -4 },
];

const DASH_PX = 64;

export default function MeshPulse() {
  const raw = useId().replace(/:/g, '');
  const filterId = `mesh-pulse-glow-${raw}`;

  return (
    <div className="mesh-pulse" aria-hidden>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        className="absolute inset-0 block h-full w-full"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <filter id={filterId} x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="b1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="4.5" result="b2" />
            <feMerge>
              <feMergeNode in="b2" />
              <feMergeNode in="b1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter={`url(#${filterId})`} style={{ mixBlendMode: 'screen' }}>
          {PULSES.map((p, i) => (
            <path
              key={i}
              d={p.d}
              fill="none"
              strokeWidth={1.3}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={`${DASH_PX} ${p.length}`}
              className="mesh-pulse__line"
              style={{
                ['--mp-end' as string]: `${-(p.length + DASH_PX)}`,
                ['--mp-dur' as string]: `${p.dur}s`,
                ['--mp-delay' as string]: `${p.delay}s`,
              } as React.CSSProperties}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
