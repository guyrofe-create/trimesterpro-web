'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { type Locale } from '@/config/i18n';

const APP_STORE_URL = 'https://apps.apple.com/app/trimester-pro/id6744104960';

export default function Hero({ locale }: { locale: Locale }) {
  const t = useTranslations('hero');
  const isRTL = locale === 'he';

  return (
    <section className="gradient-hero min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <div className={`flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>

          {/* Text */}
          <div className={`flex-1 text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-apricotSoft text-apricot border border-apricot/20 text-xs font-semibold px-4 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-apricot inline-block" />
              {t('badge')}
            </div>

            {/* Headline */}
            <h1 className="text-[44px] lg:text-[60px] xl:text-[68px] font-extrabold leading-[1.08] tracking-[-0.03em] text-espresso mb-6 max-w-xl mx-auto lg:mx-0">
              {t('headline')}
            </h1>

            {/* Subtitle */}
            <p className="text-sub text-lg leading-[1.7] max-w-md mx-auto lg:mx-0 mb-8">
              {t('subtitle')}
            </p>

            {/* CTA Button */}
            <div className={`flex flex-col sm:flex-row items-center gap-4 mb-6 ${isRTL ? 'justify-center lg:justify-end' : 'justify-center lg:justify-start'}`}>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3.5 bg-espresso text-[#FFFAF5] px-7 py-4 rounded-2xl hover:bg-espresso/90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-warm-md"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <div className="text-[11px] opacity-60 leading-none mb-0.5 font-normal">
                    {locale === 'it' ? 'Disponibile su' : locale === 'he' ? 'זמין ב' : 'Download on the'}
                  </div>
                  <div className="text-[17px] font-bold leading-none">App Store</div>
                </div>
              </a>
            </div>

            {/* Rating */}
            <div className={`flex items-center gap-2 ${isRTL ? 'justify-center lg:justify-end' : 'justify-center lg:justify-start'}`}>
              <span className="text-apricot text-sm tracking-wide">{t('rating')}</span>
              <span className="text-sub text-sm">{t('ratingCount')}</span>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex-1 flex justify-center items-center relative">
            <div className="relative float-animation">
              {/* Soft glow */}
              <div className="absolute inset-[-20%] bg-apricot/20 blur-3xl rounded-full" />

              {/* Phone */}
              <div className="relative z-10 w-[240px] lg:w-[280px]">
                <div className="bg-espresso rounded-[48px] p-[11px] shadow-dark-lg">
                  <div className="bg-[#FFFAF5] rounded-[38px] overflow-hidden aspect-[9/19.5]">
                    <Image
                      src={`/screenshots/home_${locale}.png`}
                      alt="Trimester Pro"
                      width={258}
                      height={560}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Floating card - week */}
              <div className={`absolute top-[14%] ${isRTL ? '-right-4 lg:-right-16' : '-left-4 lg:-left-16'} glass-card rounded-2xl px-4 py-3 shadow-warm-md z-20 hidden lg:block`}>
                <div className="text-[11px] text-sub mb-0.5 font-medium">{t('floatWeekLabel')}</div>
                <div className="text-sm font-bold text-espresso">{t('floatWeekValue')}</div>
              </div>

              {/* Floating card - scan */}
              <div className={`absolute bottom-[22%] ${isRTL ? '-left-4 lg:-left-14' : '-right-4 lg:-right-14'} glass-card rounded-2xl px-4 py-3 shadow-warm-md z-20 hidden lg:block`}>
                <div className="text-[11px] text-sub mb-0.5 font-medium">{t('floatScanLabel')}</div>
                <div className="text-sm font-bold text-sage">{t('floatScanValue')}</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
