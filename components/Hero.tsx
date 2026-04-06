'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { type Locale } from '@/config/i18n';

const APP_STORE_URL = 'https://apps.apple.com/app/trimester-pro/id6744104960';

export default function Hero({ locale }: { locale: Locale }) {
  const t = useTranslations('hero');

  return (
    <section className="gradient-hero min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Text side */}
          <div className={`flex-1 text-center lg:text-start ${locale === 'he' ? 'lg:text-end' : ''}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accentSoft text-accent text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
              <span>✦</span>
              <span>{t('badge')}</span>
            </div>

            {/* Title */}
            <h1 className="text-[52px] lg:text-[68px] font-extrabold leading-none tracking-tight text-text mb-6">
              {t('title')}
            </h1>

            {/* Subtitle */}
            <p className="text-sub text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10">
              {t('subtitle')}
            </p>

            {/* CTA */}
            <div className={`flex flex-col sm:flex-row items-center gap-4 ${locale === 'he' ? 'lg:justify-end' : 'lg:justify-start'} justify-center`}>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-text text-bg px-6 py-3.5 rounded-2xl hover:bg-text/90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-start">
                  <div className="text-[10px] opacity-75 leading-none mb-0.5">Download on the</div>
                  <div className="text-[16px] font-semibold leading-none">App Store</div>
                </div>
              </a>
            </div>
            <p className="text-xs text-sub mt-3 opacity-70">{t('ctaSub')}</p>

            {/* Stats */}
            <div className={`flex items-center gap-8 mt-10 ${locale === 'he' ? 'justify-center lg:justify-end' : 'justify-center lg:justify-start'}`}>
              {[
                { value: t('weeks'), label: t('weeksLabel') },
                { value: t('languages'), label: t('languagesLabel') },
                { value: t('tools'), label: t('toolsLabel') },
              ].map((stat) => (
                <div key={stat.value} className="text-center">
                  <div className="text-xl font-bold text-text">{stat.value}</div>
                  <div className="text-xs text-sub mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Phone mockup side */}
          <div className="flex-1 flex justify-center items-center relative">
            <div className="relative float-animation">
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-75 translate-y-8" />

              {/* Main phone */}
              <div className="relative z-10">
                <div className="relative w-[260px] lg:w-[300px]">
                  {/* Phone frame */}
                  <div className="bg-text rounded-[44px] p-[10px] shadow-2xl">
                    <div className="bg-bg rounded-[36px] overflow-hidden aspect-[9/19.5]">
                      <Image
                        src={`/screenshots/home_${locale}.png`}
                        alt="Trimester Pro Home"
                        width={280}
                        height={607}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -left-16 top-16 glass-card rounded-2xl px-4 py-3 shadow-lg z-20 hidden lg:block">
                <div className="text-xs text-sub mb-1">Week 24</div>
                <div className="text-sm font-semibold text-text">🌽 Corn</div>
              </div>
              <div className="absolute -right-14 bottom-24 glass-card rounded-2xl px-4 py-3 shadow-lg z-20 hidden lg:block">
                <div className="text-xs text-sub mb-1">Next scan</div>
                <div className="text-sm font-semibold text-text">Week 28 ✓</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
