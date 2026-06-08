'use client';

import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { locales, localeConfig, type Locale } from '@/config/i18n';
import { useState, useEffect } from 'react';

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

export default function Navbar({ locale }: { locale: Locale }) {
  const t = useTranslations('nav');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-bg/95 backdrop-blur-md border-b border-border shadow-warm-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <Image
            src="/icon.png"
            alt="Trimester Pro"
            width={32}
            height={32}
            className="rounded-xl"
          />
          <span className="font-bold text-[#2A2319] text-[15px] tracking-tight">Trimester Pro</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          <a href="#features" className="text-sub text-sm hover:text-espresso transition-colors">{t('features')}</a>
          <a href="#screenshots" className="text-sub text-sm hover:text-espresso transition-colors">{t('screenshots')}</a>
          <a href="#faq" className="text-sub text-sm hover:text-espresso transition-colors">{t('faq')}</a>

          {/* Language switcher */}
          <div className="flex items-center gap-0.5 bg-surface rounded-full px-1.5 py-1.5 border border-border">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  locale === loc
                    ? 'bg-white text-[#2A2319] shadow-warm-sm'
                    : 'text-[#7A6E65] hover:text-[#2A2319]'
                }`}
              >
                {localeConfig[loc].flag} {loc.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={getAppStoreURL(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2A2319] text-[#FFFAF5] text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-[#1A1510] transition-colors"
              aria-label="App Store"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
            <a
              href={getGooglePlayURL(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2A2319] text-[#FFFAF5] text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-[#1A1510] transition-colors"
              aria-label="Google Play"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.37.2.8.22 1.19.04l12.55-7.25-2.8-2.8-10.94 10.01zm-1.38-20.5C1.63 3.52 1.5 3.84 1.5 4.23v15.54c0 .39.13.71.3.97l.09.08 8.7-8.7v-.2L1.8 3.26zm18.41 9.12l-2.53-1.42-3.09 3.09 3.09 3.09 2.56-1.44c.73-.41.73-1.91-.03-2.32zM4.37.47C4.06.26 3.7.22 3.38.35L14.35 11.3l-2.8 2.8L4.37.47z"/>
              </svg>
              Google Play
            </a>
          </div>
        </div>

        {/* Mobile download buttons - visible on mobile in navbar */}
        <div className="md:hidden flex items-center gap-1.5 mr-1">
          <a
            href={getAppStoreURL(locale)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-[#2A2319] text-[#FFFAF5] text-xs font-semibold px-2.5 py-2 rounded-full"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            App Store
          </a>
          <a
            href={getGooglePlayURL(locale)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-[#2A2319] text-[#FFFAF5] text-xs font-semibold px-2.5 py-2 rounded-full"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.37.2.8.22 1.19.04l12.55-7.25-2.8-2.8-10.94 10.01zm-1.38-20.5C1.63 3.52 1.5 3.84 1.5 4.23v15.54c0 .39.13.71.3.97l.09.08 8.7-8.7v-.2L1.8 3.26zm18.41 9.12l-2.53-1.42-3.09 3.09 3.09 3.09 2.56-1.44c.73-.41.73-1.91-.03-2.32zM4.37.47C4.06.26 3.7.22 3.38.35L14.35 11.3l-2.8 2.8L4.37.47z"/></svg>
            Google Play
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-sub hover:text-espresso"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            {menuOpen ? (
              <path d="M4 4L20 20M20 4L4 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            ) : (
              <path d="M3 6.5h18M3 12h18M3 17.5h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-border px-6 py-5 flex flex-col gap-4 bg-bg/98 backdrop-blur-md">
          <a href="#features" className="text-body text-sm font-medium" onClick={() => setMenuOpen(false)}>{t('features')}</a>
          <a href="#screenshots" className="text-body text-sm font-medium" onClick={() => setMenuOpen(false)}>{t('screenshots')}</a>
          <a href="#faq" className="text-body text-sm font-medium" onClick={() => setMenuOpen(false)}>{t('faq')}</a>
          <div className="flex gap-1.5 flex-wrap">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  locale === loc
                    ? 'border-[#2A2319] text-[#2A2319] bg-[#FFF6EC]'
                    : 'border-[rgba(201,173,151,0.3)] text-[#7A6E65]'
                }`}
              >
                {localeConfig[loc].flag} {loc.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <a
              href={getAppStoreURL(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#2A2319] text-[#FFFAF5] text-sm font-semibold px-4 py-3 rounded-full text-center"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
            <a
              href={getGooglePlayURL(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#2A2319] text-[#FFFAF5] text-sm font-semibold px-4 py-3 rounded-full text-center"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.37.2.8.22 1.19.04l12.55-7.25-2.8-2.8-10.94 10.01zm-1.38-20.5C1.63 3.52 1.5 3.84 1.5 4.23v15.54c0 .39.13.71.3.97l.09.08 8.7-8.7v-.2L1.8 3.26zm18.41 9.12l-2.53-1.42-3.09 3.09 3.09 3.09 2.56-1.44c.73-.41.73-1.91-.03-2.32zM4.37.47C4.06.26 3.7.22 3.38.35L14.35 11.3l-2.8 2.8L4.37.47z"/>
              </svg>
              Google Play
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
