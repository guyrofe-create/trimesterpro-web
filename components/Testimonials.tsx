'use client';

import { useTranslations } from 'next-intl';

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const items = t.raw('items') as Array<{ quote: string; name: string; tag: string }>;

  return (
    <section className="py-24 px-6 bg-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-espresso mb-4 tracking-tight leading-tight">
            {t('title')}
          </h2>
          <p className="text-sub text-lg leading-relaxed">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-surface border border-border rounded-4xl p-7 flex flex-col gap-5 hover:shadow-warm-md transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#F2A46E">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-body text-[15px] leading-[1.75] italic flex-1">
                "{item.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-1 border-t border-border">
                <div className="w-8 h-8 rounded-full bg-apricotSoft flex items-center justify-center flex-shrink-0">
                  <span className="text-apricot text-xs font-bold">{item.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-espresso">{item.name}</div>
                  <div className="text-[11px] text-sub">{item.tag}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
