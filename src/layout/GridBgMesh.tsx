import { useEffect, useId, useRef } from 'react';

/** Variant = pattern rendered inside the SVG <pattern>. */
type Variant = 'hex' | 'square';

/** Reference honeycomb tiling for edge length s₀ = 23 (√3·23 ≈ 39.837 — base pattern period). */
const HEX_PATH_REF =
  'M0 11.5 L0 34.5 M0 11.5 L19.918584 0 M0 34.5 L19.918584 46 M19.918584 0 L39.837169 11.5 M19.918584 46 L19.918584 69 M19.918584 46 L39.837169 34.5 M39.837169 11.5 L39.837169 34.5 M39.837169 11.5 L59.755753 0 M39.837169 34.5 L59.755753 46 M59.755753 0 L79.674337 11.5 M59.755753 46 L59.755753 69 M59.755753 46 L79.674337 34.5';

const REF_TILE_W = 2 * Math.sqrt(3) * 23;
const REF_TILE_H = 3 * 23;

/** Match historical 46px square-grid period: √(3)·s ≡ 46px horizontal flat-to-flat. */
const SCALE_HEX = (46 / Math.sqrt(3)) / 23;

const HEX_TILE_W = REF_TILE_W * SCALE_HEX;
const HEX_TILE_H = REF_TILE_H * SCALE_HEX;
const HEX_STROKE_W = 1 / SCALE_HEX;

const SQ_TILE = 46;
const MESH_STROKE = '#3fa4ff';
const MESH_STROKE_OPACITY = 0.06;

/** Max rotateX in degrees at/after TILT_SATURATION of the document scroll range. */
const MAX_TILT = 70;
/** Fraction of the document's scrollable range at which the tilt reaches MAX_TILT. */
const TILT_SATURATION = 0.7;
/** Minimum scroll range (px) before the tilt starts progressing — prevents jitter on short pages. */
const MIN_SCROLL_RANGE = 600;

export default function GridBgMesh({ variant = 'hex' }: { variant?: Variant }) {
  const raw = useId().replace(/:/g, '');
  const pid = `${variant}-mesh-${raw}`;
  const rotorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    let rafId = 0;
    let ticking = false;

    const update = () => {
      ticking = false;
      const el = rotorRef.current;
      if (!el) return;
      const y = window.scrollY || window.pageYOffset || 0;
      const doc = document.documentElement;
      // Total scrollable distance (content height minus viewport). Floor at MIN_SCROLL_RANGE to avoid snap-to-max on short pages.
      const maxScroll = Math.max(
        MIN_SCROLL_RANGE,
        (doc.scrollHeight || 0) - window.innerHeight,
      );
      const docProgress = Math.min(1, Math.max(0, y / maxScroll));
      const p = Math.min(1, docProgress / TILT_SATURATION);
      const tilt = p * MAX_TILT;
      el.style.setProperty('--mesh-tilt', `${tilt.toFixed(2)}deg`);
      el.style.setProperty('--mesh-progress', p.toFixed(3));
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="grid-bg-mesh" aria-hidden>
      <div ref={rotorRef} className="grid-bg-mesh__rotor">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          className="absolute inset-0 block h-full w-full"
        >
          <defs>
            {variant === 'hex' ? (
              <pattern
                id={pid}
                width={HEX_TILE_W}
                height={HEX_TILE_H}
                patternUnits="userSpaceOnUse"
              >
                <g transform={`scale(${SCALE_HEX})`}>
                  <path
                    fill="none"
                    stroke={MESH_STROKE}
                    strokeOpacity={MESH_STROKE_OPACITY}
                    strokeWidth={HEX_STROKE_W}
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    d={HEX_PATH_REF}
                  />
                </g>
              </pattern>
            ) : (
              <pattern
                id={pid}
                width={SQ_TILE}
                height={SQ_TILE}
                patternUnits="userSpaceOnUse"
              >
                {/* Filled 1px rects (not strokes) so lines don't get anti-aliased across 2 pixels — matches the original CSS `linear-gradient` density exactly. */}
                <g shapeRendering="crispEdges">
                  <rect
                    x="0"
                    y="0"
                    width={SQ_TILE}
                    height="1"
                    fill={MESH_STROKE}
                    fillOpacity={MESH_STROKE_OPACITY}
                  />
                  <rect
                    x="0"
                    y="0"
                    width="1"
                    height={SQ_TILE}
                    fill={MESH_STROKE}
                    fillOpacity={MESH_STROKE_OPACITY}
                  />
                </g>
              </pattern>
            )}
          </defs>
          <rect width="100%" height="100%" fill={`url(#${pid})`} />
        </svg>
      </div>
    </div>
  );
}
