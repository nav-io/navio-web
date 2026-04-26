import { ReactNode } from 'react';

interface Props {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
  gradient?: 'blue' | 'pink' | 'green';
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  gradient = 'blue',
}: Props) {
  const grad =
    gradient === 'pink'
      ? 'gradient-text-pink'
      : gradient === 'green'
      ? 'gradient-text-green'
      : 'gradient-text';
  return (
    <div className={`${center ? 'text-center mx-auto' : ''} max-w-3xl space-y-3`}>
      {eyebrow && (
        <div
          className={`mono text-[10px] tracking-[0.3em] uppercase ${
            center ? 'justify-center' : ''
          } flex items-center gap-2 text-neon-blue/80`}
        >
          <span className="neon-dot h-1.5 w-1.5" />
          {eyebrow}
        </div>
      )}
      <h2 className={`text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight ${grad}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-white/60 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
