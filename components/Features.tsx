'use client';

import { useTranslations } from 'next-intl';

const iconMap: Record<string, React.ReactNode> = {
  calendar: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="3"/><path d="M16 2v4M8 2v4M3 10h18"/>
    </svg>
  ),
  chart: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18"/><path d="M7 16l4-4 4 4 4-8"/>
    </svg>
  ),
  book: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  ),
  globe: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/><path d="M3.6 9h16.8M3.6 15h16.8M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18"/>
    </svg>
  ),
  heart: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  share: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  ),
};

export default function Features() {
  const t = useTranslations('features');
  const items = t.raw('items') as Array<{ icon: string; title: string; desc: string }>;

  // Bento layout: first card is large (spans 2 cols on desktop), rest are normal
  return (
    <section id="features" className="py-24 px-6 bg-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-espresso mb-4 tracking-tight leading-tight">
            {t('title')}
          </h2>
          <p className="text-sub text-lg max-w-xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => {
            const isFirst = i === 0;
            return (
              <div
                key={i}
                className={`group relative bg-surface border border-border rounded-4xl p-7 hover:border-accent/25 hover:shadow-warm-md transition-all duration-300 hover:-translate-y-0.5 ${
                  isFirst ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-3xl bg-accentSoft text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {iconMap[item.icon]}
                </div>

                {/* Content */}
                <h3 className="font-bold text-espresso text-[17px] mb-2.5 tracking-tight">{item.title}</h3>
                <p className="text-sub text-sm leading-relaxed">{item.desc}</p>

                {/* Subtle bottom accent for first card */}
                {isFirst && (
                  <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
