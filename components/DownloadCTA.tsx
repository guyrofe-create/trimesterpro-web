'use client';

import { useTranslations } from 'next-intl';

const APP_STORE_URL = 'https://apps.apple.com/app/trimester-pro/id6744104960';

export default function DownloadCTA() {
  const t = useTranslations('cta');

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="gradient-cta rounded-[40px] px-8 py-16 text-center text-white overflow-hidden relative">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/4" />

          <div className="relative z-10">
            <div className="text-4xl mb-6">🤱</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
              {t('title')}
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-md mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-accent px-7 py-4 rounded-2xl font-semibold hover:bg-white/95 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl text-[15px]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              {t('button')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
