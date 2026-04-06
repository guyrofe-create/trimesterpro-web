import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { type Locale } from '@/config/i18n';

export default async function PrivacyPage(
  props: { params: Promise<{ locale: Locale }> }
) {
  const { locale } = await props.params;
  const t = await getTranslations('privacy');
  const sections = t.raw('sections') as Array<{ title: string; content: string }>;
  const footerT = await getTranslations('footer');

  return (
    <div className="min-h-screen bg-bg">
      {/* Top bar */}
      <div className="border-b border-border px-6 h-14 flex items-center justify-between max-w-4xl mx-auto">
        <Link href={`/${locale}`} className="flex items-center gap-2 group">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sub group-hover:text-text transition-colors">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span className="text-sm text-sub group-hover:text-text transition-colors">Trimester Pro</span>
        </Link>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-white text-xs font-bold">T</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-text mb-2 tracking-tight">{t('title')}</h1>
        <p className="text-sm text-sub mb-12 opacity-70">{t('lastUpdated')}</p>

        <div className="space-y-10">
          {sections.map((section, i) => (
            <div key={i}>
              <h2 className="font-semibold text-text text-[16px] mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-accentSoft text-accent text-xs flex items-center justify-center font-bold flex-shrink-0">
                  {i + 1}
                </span>
                {section.title}
              </h2>
              <p className="text-sub leading-relaxed text-[15px]">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-sub opacity-60 text-center">{footerT('rights')}</p>
        </div>
      </div>
    </div>
  );
}
