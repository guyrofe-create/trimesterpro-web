'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { type Locale } from '@/config/i18n';

export default function Footer({ locale }: { locale: Locale }) {
  const t = useTranslations('footer');

  return (
    <footer className="bg-bg border-t border-border px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-xl bg-accent flex items-center justify-center">
            <span className="text-white text-xs font-bold">T</span>
          </div>
          <span className="font-bold text-espresso text-[14px]">Trimester Pro</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-sub">
          <Link href={`/${locale}/privacy`} className="hover:text-espresso transition-colors">
            {t('privacy')}
          </Link>
          <a href="mailto:briutguy@gmail.com" className="hover:text-espresso transition-colors">
            {t('contact')}
          </a>
        </div>

        <p className="text-xs text-sub opacity-60">{t('rights')}</p>
      </div>
    </footer>
  );
}
