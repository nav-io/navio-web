import { useId } from 'react';

/** Honeycomb tiling as inline SVG <pattern>; external bg-url + filtered pseudos hid this in practice for some setups. */

/** Reference tiling for edge length s₀ = 23 (√3·23 ≈ 39.837 — base pattern period). */
const HEX_PATH_REF =
  'M0 11.5 L0 34.5 M0 11.5 L19.918584 0 M0 34.5 L19.918584 46 M19.918584 0 L39.837169 11.5 M19.918584 46 L19.918584 69 M19.918584 46 L39.837169 34.5 M39.837169 11.5 L39.837169 34.5 M39.837169 11.5 L59.755753 0 M39.837169 34.5 L59.755753 46 M59.755753 0 L79.674337 11.5 M59.755753 46 L59.755753 69 M59.755753 46 L79.674337 34.5';

const REF_TILE_W = 2 * Math.sqrt(3) * 23;
const REF_TILE_H = 3 * 23;

/** Match historical 46px square-grid period: √(3)·s ≡ 46px horizontal flat-to-flat. */
const SCALE_HEX = (46 / Math.sqrt(3)) / 23;

const TILE_W = REF_TILE_W * SCALE_HEX;
const TILE_H = REF_TILE_H * SCALE_HEX;

const STROKE_W = 1 / SCALE_HEX;

export default function GridBgMesh() {
  const raw = useId().replace(/:/g, '');
  const pid = `hex-mesh-${raw}`;
  const sc = SCALE_HEX.toString();

  return (
    <div className="grid-bg-mesh" aria-hidden>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        className="absolute inset-0 block h-full w-full"
      >
        <defs>
          <pattern id={pid} width={TILE_W} height={TILE_H} patternUnits="userSpaceOnUse">
            <g transform={`scale(${sc})`}>
              <path
                fill="none"
                stroke="#3fa4ff"
                strokeOpacity={0.1}
                strokeWidth={STROKE_W}
                strokeLinecap="butt"
                strokeLinejoin="miter"
                d={HEX_PATH_REF}
              />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${pid})`} />
      </svg>
    </div>
  );
}
