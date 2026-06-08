'use client';

import { useTranslations } from 'next-intl';
import { type Locale } from '@/config/i18n';
import { useState } from 'react';

const getAppStoreURL = (locale: string) => {
  if (locale === 'he') return 'https://apps.apple.com/il/app/trimester-pro/id6759156229';
  if (locale === 'it') return 'https://apps.apple.com/it/app/trimester-pro/id6759156229';
  return 'https://apps.apple.com/us/app/trimester-pro/id6759156229';
};

const getGooglePlayURL = (locale: string) => {
  if (locale === 'he') return 'https://play.google.com/store/apps/details?id=com.guyrofe.preweeksgame&pcampaignid=web_share&hl=iw';
  if (locale === 'it') return 'https://play.google.com/store/apps/details?id=com.guyrofe.preweeksgame&pcampaignid=web_share&hl=it';
  return 'https://play.google.com/store/apps/details?id=com.guyrofe.preweeksgame&pcampaignid=web_share&hl=en';
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
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={getAppStoreURL(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#FFFAF5]/25 text-[#FFFAF5]/80 hover:text-[#FFFAF5] hover:border-[#FFFAF5]/50 px-7 py-3 rounded-full text-sm font-semibold transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              {t('cta')}
            </a>
            <a
              href={getGooglePlayURL(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#FFFAF5]/25 text-[#FFFAF5]/80 hover:text-[#FFFAF5] hover:border-[#FFFAF5]/50 px-7 py-3 rounded-full text-sm font-semibold transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.37.2.8.22 1.19.04l12.55-7.25-2.8-2.8-10.94 10.01zm-1.38-20.5C1.63 3.52 1.5 3.84 1.5 4.23v15.54c0 .39.13.71.3.97l.09.08 8.7-8.7v-.2L1.8 3.26zm18.41 9.12l-2.53-1.42-3.09 3.09 3.09 3.09 2.56-1.44c.73-.41.73-1.91-.03-2.32zM4.37.47C4.06.26 3.7.22 3.38.35L14.35 11.3l-2.8 2.8L4.37.47z"/>
              </svg>
              Google Play
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
