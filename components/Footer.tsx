'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { type Locale } from '@/config/i18n';

const createdBy: Record<Locale, string> = {
  en: 'Guy Rofe, MD',
  he: 'ד״ר גיא רופא',
  it: 'Dott. Guy Rofe',
};

export default function Footer({ locale }: { locale: Locale }) {
  const t = useTranslations('footer');

  return (
    <footer className="bg-[#FAFAF8] border-t border-[rgba(201,173,151,0.2)] px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        {/* Logo + creator */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-xl bg-[#2A2319] flex items-center justify-center">
              <span className="text-[#F2A46E] text-xs font-bold">T</span>
            </div>
            <span className="font-bold text-[#2A2319] text-[14px]">Trimester Pro</span>
          </div>
          <span className="text-[11px] text-[#9A9490]">{createdBy[locale]}</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-[#7A6E65]">
          <Link href={`/${locale}/privacy`} className="hover:text-[#2A2319] transition-colors">
            {t('privacy')}
          </Link>
          <a href="mailto:briutguy@gmail.com" className="hover:text-[#2A2319] transition-colors">
            {t('contact')}
          </a>
        </div>

        <p className="text-xs text-[#9A9490]">{t('rights')}</p>
      </div>
    </footer>
  );
}
