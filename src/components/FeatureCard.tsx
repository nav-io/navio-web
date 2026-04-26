import { ReactNode } from 'react';

interface Props {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
  accent?: 'blue' | 'purple' | 'pink' | 'green';
}

const accents = {
  blue: 'from-neon-blue/40 via-neon-blue/10 to-transparent',
  purple: 'from-neon-purple/40 via-neon-purple/10 to-transparent',
  pink: 'from-neon-pink/40 via-neon-pink/10 to-transparent',
  green: 'from-neon-green/40 via-neon-green/10 to-transparent',
};

export default function FeatureCard({ icon, title, children, accent = 'blue' }: Props) {
  return (
    <div className="glow-card group h-full flex flex-col">
      {icon && (
        <div
          className={`w-12 h-12 rounded-xl border border-white/10 bg-gradient-to-br ${accents[accent]} flex items-center justify-center mb-5 text-white`}
        >
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <div className="text-sm text-white/60 leading-relaxed">{children}</div>
    </div>
  );
}
