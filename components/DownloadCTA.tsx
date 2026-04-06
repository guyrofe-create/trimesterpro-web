'use client';

import { useTranslations } from 'next-intl';

const APP_STORE_URL = 'https://apps.apple.com/us/app/trimester-pro/id6744104960';

export default function DownloadCTA() {
  const t = useTranslations('cta');

  return (
    <section className="py-24 px-6 bg-espresso overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-apricot/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-accent/8 blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Headline */}
        <h2 className="font-extrabold text-[#FFFAF5] mb-6 tracking-tight leading-[1.12] whitespace-pre-line" style={{ fontSize: 'clamp(1.875rem, 3.5vw + 0.5rem, 2.875rem)' }}>
          {t('title')}
        </h2>

        {/* Subtitle */}
        <p className="text-[#FFFAF5]/55 text-lg mb-10 leading-relaxed max-w-md mx-auto">
          {t('subtitle')}
        </p>

        {/* CTA */}
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3.5 bg-[#FFFAF5] text-espresso px-8 py-4 rounded-full font-bold text-[16px] hover:bg-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-warm-lg"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          {t('button')}
        </a>

        {/* Sub */}
        <p className="text-[#FFFAF5]/35 text-sm mt-5">{t('sub')}</p>
      </div>
    </section>
  );
}
