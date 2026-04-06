'use client';

import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales, localeConfig, type Locale } from '@/config/i18n';
import { useState, useEffect } from 'react';

const APP_STORE_URL = 'https://apps.apple.com/app/trimester-pro/id6744104960';

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
          <div className="w-8 h-8 rounded-xl bg-[#2A2319] flex items-center justify-center">
            <span className="text-[#F2A46E] text-sm font-bold">T</span>
          </div>
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

          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2A2319] text-[#FFFAF5] text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#1A1510] transition-colors"
          >
            {t('download')}
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
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2A2319] text-[#FFFAF5] text-sm font-semibold px-5 py-3 rounded-full text-center"
          >
            {t('download')}
          </a>
        </div>
      )}
    </nav>
  );
}
