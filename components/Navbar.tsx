'use client';

import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales, localeConfig, type Locale } from '@/config/i18n';
import { useState } from 'react';

const APP_STORE_URL = 'https://apps.apple.com/app/trimester-pro/id6744104960';

export default function Navbar({ locale }: { locale: Locale }) {
  const t = useTranslations('nav');
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-accent flex items-center justify-center">
            <span className="text-white text-sm font-bold">T</span>
          </div>
          <span className="font-semibold text-text text-[15px]">Trimester Pro</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sub text-sm hover:text-text transition-colors">{t('features')}</a>
          <a href="#screenshots" className="text-sub text-sm hover:text-text transition-colors">{t('screenshots')}</a>

          {/* Language switcher */}
          <div className="flex items-center gap-1 bg-tint rounded-full px-1 py-1">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  locale === loc
                    ? 'bg-white text-accent shadow-sm'
                    : 'text-sub hover:text-text'
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
            className="bg-accent text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-accent/90 transition-colors"
          >
            {t('download')}
          </a>
        </div>

        {/* Mobile menu */}
        <button
          className="md:hidden p-2 text-sub"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {menuOpen ? (
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            ) : (
              <>
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-border px-6 py-4 flex flex-col gap-4 bg-bg/95 backdrop-blur-md">
          <a href="#features" className="text-sub text-sm" onClick={() => setMenuOpen(false)}>{t('features')}</a>
          <a href="#screenshots" className="text-sub text-sm" onClick={() => setMenuOpen(false)}>{t('screenshots')}</a>
          <div className="flex gap-2">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                  locale === loc ? 'border-accent text-accent bg-accentSoft' : 'border-border text-sub'
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
            className="bg-accent text-white text-sm font-medium px-5 py-2.5 rounded-full text-center"
          >
            {t('download')}
          </a>
        </div>
      )}
    </nav>
  );
}
