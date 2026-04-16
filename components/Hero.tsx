'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { type Locale } from '@/config/i18n';

const getAppStoreURL = (locale: string) => {
  if (locale === 'he') return 'https://apps.apple.com/il/app/trimester-pro/id6759156229';
  if (locale === 'it') return 'https://apps.apple.com/it/app/trimester-pro/id6759156229';
  return 'https://apps.apple.com/us/app/trimester-pro/id6759156229';
};

const getGooglePlayURL = (locale: string) => {
  if (locale === 'he') return 'https://play.google.com/store/apps/details?id=com.guyrofe.preweeksgame&hl=iw';
  if (locale === 'it') return 'https://play.google.com/store/apps/details?id=com.guyrofe.preweeksgame&hl=it';
  return 'https://play.google.com/store/apps/details?id=com.guyrofe.preweeksgame&hl=en';
};

export default function Hero({ locale }: { locale: Locale }) {
  const t = useTranslations('hero');
  // Only used for floating card positioning (physical left/right) and CTA label text
  const isRTL = locale === 'he';

  const usps = [
    { label: t('uspPartner'), unique: true },
    { label: t('uspPdf'),     unique: true },
    { label: t('uspCountries'), unique: false },
    { label: t('uspDepth'),   unique: false },
  ] as const;

  const downloadLabel =
    locale === 'it' ? 'Disponibile su' :
    locale === 'he' ? 'זמין ב' :
    'Download on the';

  const googlePlayLabel =
    locale === 'it' ? 'Disponibile su' :
    locale === 'he' ? 'הורד ב' :
    'Get it on';

  return (
    <section className="gradient-hero min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24 w-full">
        {/*
          flex-col-reverse on mobile (phone above text), lg:flex-row on desktop.
          dir="rtl" on <html> automatically makes flex-row flow right→left,
          so text appears on the RIGHT and phone on the LEFT in Hebrew — no manual override needed.
        */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Text column ── */}
          {/*
            text-center on mobile, text-start on desktop.
            text-start = left in LTR, right in RTL — auto-handled by dir="rtl".
          */}
          <div className="flex-1 text-center lg:text-start">

            {/* ① Stars ABOVE headline */}
            <div className="flex items-center gap-2 mb-5 justify-center lg:justify-start">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#F59E0B">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <span className="text-[13px] text-[#9A9490] leading-none">App Store</span>
            </div>

            {/* ② Headline */}
            <h1
              className="font-extrabold leading-[1.06] tracking-[-0.03em] text-[#2A2319] mb-4 max-w-xl mx-auto lg:mx-0"
              style={{ fontSize: 'clamp(2.25rem, 5vw + 0.5rem, 4rem)' }}
            >
              {t('headline')}
            </h1>

            {/* ③ Subtitle */}
            <p className="text-[#6B6560] text-base lg:text-[17px] leading-[1.75] max-w-md mx-auto lg:mx-0 mb-7">
              {t('subtitle')}
            </p>

            {/* ④ USP checklist
                flex-row: checkmark first in DOM.
                In LTR: checkmark on LEFT, text on RIGHT — correct.
                In RTL (dir=rtl): checkmark on RIGHT (start), text on LEFT — correct.
                NO flex-row-reverse override needed.
            */}
            <ul className="flex flex-col gap-2.5 max-w-xs mx-auto lg:mx-0 mb-8 items-start">
              {usps.map((usp, i) => (
                <li key={i} className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#6B9E7C]/15 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5.2l2.2 2.2 3.6-4.4" stroke="#6B9E7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-[13.5px] text-[#2A2319] leading-snug">{usp.label}</span>
                  {usp.unique && (
                    <span className="flex-shrink-0 bg-[#F2A46E]/18 text-[#C47835] text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {t('uspUniqueTag')}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            {/* ⑤ CTA pill buttons */}
            <div className="flex flex-col gap-2 items-center lg:items-start">
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {/* App Store */}
                <a
                  href={getAppStoreURL(locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#2A2319] text-[#FFFAF5] px-7 py-4 rounded-full hover:bg-[#1A1510] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-[0_8px_28px_rgba(42,35,25,0.22)]"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-start">
                    <div className="text-[10px] opacity-55 leading-none mb-0.5">{downloadLabel}</div>
                    <div className="text-[16px] font-bold leading-none">App Store</div>
                  </div>
                </a>
                {/* Google Play */}
                <a
                  href={getGooglePlayURL(locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#2A2319] text-[#FFFAF5] px-7 py-4 rounded-full hover:bg-[#1A1510] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-[0_8px_28px_rgba(42,35,25,0.22)]"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                    <path d="M3.18 23.76c.37.2.8.22 1.19.04l12.55-7.25-2.8-2.8-10.94 10.01zm-1.38-20.5C1.63 3.52 1.5 3.84 1.5 4.23v15.54c0 .39.13.71.3.97l.09.08 8.7-8.7v-.2L1.8 3.26zm18.41 9.12l-2.53-1.42-3.09 3.09 3.09 3.09 2.56-1.44c.73-.41.73-1.91-.03-2.32zM4.37.47C4.06.26 3.7.22 3.38.35L14.35 11.3l-2.8 2.8L4.37.47z"/>
                  </svg>
                  <div className="text-start">
                    <div className="text-[10px] opacity-55 leading-none mb-0.5">{googlePlayLabel}</div>
                    <div className="text-[16px] font-bold leading-none">Google Play</div>
                  </div>
                </a>
              </div>
              <p className="text-[12px] text-[#9A9490]">{t('ctaSub')}</p>
            </div>
          </div>

          {/* ── Phone mockup ── */}
          <div className="flex-1 flex justify-center items-center relative">
            <div className="relative float-animation">

              <div className="absolute inset-[-25%] bg-[#F2A46E]/18 blur-3xl rounded-full pointer-events-none" />

              <div className="relative z-10 w-[240px] lg:w-[274px]">
                <div className="bg-[#2A2319] rounded-[48px] p-[11px] shadow-[0_32px_80px_rgba(42,35,25,0.30)]">
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

              {/* Floating cards: physical left/right positioning stays manual */}
              <div className={`absolute top-[13%] ${isRTL ? '-right-4 lg:-right-20' : '-left-4 lg:-left-20'} glass-card rounded-2xl px-4 py-3 shadow-[0_8px_24px_rgba(242,164,110,0.18)] z-20 hidden lg:block`}>
                <div className="text-[11px] text-[#7A6E65] mb-1 font-medium">{t('floatWeekLabel')}</div>
                <div className="text-[14px] font-bold text-[#2A2319]">{t('floatWeekValue')}</div>
              </div>

              <div className={`absolute bottom-[20%] ${isRTL ? '-left-4 lg:-left-18' : '-right-4 lg:-right-18'} glass-card rounded-2xl px-4 py-3 shadow-[0_8px_24px_rgba(242,164,110,0.18)] z-20 hidden lg:block`}>
                <div className="text-[11px] text-[#7A6E65] mb-1 font-medium">{t('floatScanLabel')}</div>
                <div className="text-[14px] font-bold text-[#6B9E7C]">{t('floatScanValue')}</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
