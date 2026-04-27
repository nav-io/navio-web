interface Props {
  src: string;
  alt?: string;
  aspect?: string;
  /** CSS object-position for the banner image. Defaults to 'center'.
   *  Accepts any valid object-position value: 'top', 'bottom', 'center', '50% 30%', etc. */
  objectPosition?: string;
}

export default function PageBanner({
  src,
  alt = '',
  aspect = 'aspect-[3/1]',
  objectPosition = 'center',
}: Props) {
  return (
    <div className="max-w-5xl mx-auto px-4 pt-4 sm:pt-8">
      <div className={`relative mx-auto ${aspect} max-w-4xl`}>
        <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(79,179,255,0.12)]">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            style={{ objectPosition }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/25 to-transparent pointer-events-none" />
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.25) 3px, rgba(0,0,0,0.25) 4px)',
            }}
          />
        </div>
        <Bracket className="top-3 left-3" corner="tl" />
        <Bracket className="top-3 right-3" corner="tr" />
        <Bracket className="bottom-3 left-3" corner="bl" />
        <Bracket className="bottom-3 right-3" corner="br" />
      </div>
    </div>
  );
}

function Bracket({
  className = '',
  corner,
}: {
  className?: string;
  corner: 'tl' | 'tr' | 'bl' | 'br';
}) {
  const rot = { tl: 'rotate-0', tr: 'rotate-90', br: 'rotate-180', bl: '-rotate-90' }[corner];
  return (
    <div className={`absolute ${className} w-5 h-5 pointer-events-none`}>
      <div className={`w-full h-full ${rot}`}>
        <div className="absolute top-0 left-0 w-full h-[1px] bg-neon-blue/60" />
        <div className="absolute top-0 left-0 w-[1px] h-full bg-neon-blue/60" />
      </div>
    </div>
  );
}
