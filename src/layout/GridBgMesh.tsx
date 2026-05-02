import { useId } from 'react';

/** Honeycomb tiling as inline SVG <pattern>; external bg-url + filtered pseudos hid this in practice for some setups. */

const HEX_PATH =
  'M0 11.5 L0 34.5 M0 11.5 L19.918584 0 M0 34.5 L19.918584 46 M19.918584 0 L39.837169 11.5 M19.918584 46 L19.918584 69 M19.918584 46 L39.837169 34.5 M39.837169 11.5 L39.837169 34.5 M39.837169 11.5 L59.755753 0 M39.837169 34.5 L59.755753 46 M59.755753 0 L79.674337 11.5 M59.755753 46 L59.755753 69 M59.755753 46 L79.674337 34.5';

/** Flat-top lattice: Δx_period = s·2√3, Δy_period = 3s (edge s = 23). Path clipped into [0,TILE_W)×[0,TILE_H). */
const TILE_W = 79.67433714816835;
const TILE_H = 69;

export default function GridBgMesh() {
  const raw = useId().replace(/:/g, '');
  const pid = `hex-mesh-${raw}`;

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
            <path
              fill="none"
              stroke="#3fa4ff"
              strokeOpacity={0.1}
              strokeWidth={1}
              strokeLinecap="butt"
              strokeLinejoin="miter"
              d={HEX_PATH}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${pid})`} />
      </svg>
    </div>
  );
}
