'use client';

import { useTranslations } from 'next-intl';
import { type Locale } from '@/config/i18n';
import { useState } from 'react';

const getAppStoreURL = (locale: string) => {
  if (locale === 'he') return 'https://apps.apple.com/il/app/trimester-pro/id6759156229';
  if (locale === 'it') return 'https://apps.apple.com/it/app/trimester-pro/id6759156229';
  return 'https://apps.apple.com/us/app/trimester-pro/id6759156229';
};

export default function WeekPreview({ locale }: { locale: Locale }) {
  const t = useTranslations('weekPreview');
  const weeks = t.raw('weeks') as Array<{ week: number; emoji: string; name: string; size: string; fact: string }>;
  const [activeIndex, setActiveIndex] = useState(2);
  const active = weeks[activeIndex];

  return (
    <section className="py-24 px-6 bg-espresso overflow-hidden relative">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-apricot/6 blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-apricot/5 blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="font-extrabold text-[#FFFAF5] mb-4 tracking-tight leading-[1.1]"
            style={{ fontSize: 'clamp(1.875rem, 3vw + 0.5rem, 2.75rem)' }}
          >
            {t('title')}
          </h2>
          <p className="text-[#FFFAF5]/55 text-lg leading-relaxed max-w-md mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Week selector tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {weeks.map((w, i) => (
            <button
              key={w.week}
              onClick={() => setActiveIndex(i)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                i === activeIndex
                  ? 'bg-apricot text-espresso shadow-lg'
                  : 'bg-white/8 text-[#FFFAF5]/60 hover:bg-white/15 hover:text-[#FFFAF5]/90'
              }`}
            >
              {t('weekLabel')} {w.week}
            </button>
          ))}
        </div>

        {/* Active week card */}
        <div className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-4xl p-8 lg:p-10 text-center">
          {/* Emoji */}
          <div className="text-7xl mb-5 leading-none">{active.emoji}</div>

          {/* Name */}
          <div className="text-[#FFFAF5] text-2xl font-bold mb-2">{active.name}</div>

          {/* Week + size row */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="text-center">
              <div className="text-[11px] text-[#FFFAF5]/45 font-semibold uppercase tracking-widest mb-1">{t('weekLabel')}</div>
              <div className="text-[#FFFAF5]/80 font-bold text-lg">{active.week}</div>
            </div>
            <div className="w-px h-8 bg-white/15" />
            <div className="text-center">
              <div className="text-[11px] text-[#FFFAF5]/45 font-semibold uppercase tracking-widest mb-1">{t('sizeLabel')}</div>
              <div className="text-[#FFFAF5]/80 font-bold text-lg">{active.size}</div>
            </div>
          </div>

          {/* Fact */}
          <div className="bg-white/6 border border-white/10 rounded-2xl px-5 py-3.5 mb-8">
            <div className="text-[11px] text-apricot font-semibold uppercase tracking-widest mb-1.5">{t('factLabel')}</div>
            <p className="text-[#FFFAF5]/75 text-[15px] leading-relaxed italic">"{active.fact}"</p>
          </div>

          {/* CTA */}
          <a
            href={getAppStoreURL(locale)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#FFFAF5]/25 text-[#FFFAF5]/80 hover:text-[#FFFAF5] hover:border-[#FFFAF5]/50 px-7 py-3 rounded-full text-sm font-semibold transition-all duration-200"
          >
            {t('cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
