'use client';

import { useTranslations } from 'next-intl';

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const items = t.raw('items') as Array<{ quote: string; name: string; tag: string }>;

  return (
    <section className="py-24 px-6 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2
            className="font-extrabold text-[#2A2319] mb-4 tracking-tight leading-[1.1]"
            style={{ fontSize: 'clamp(1.875rem, 3vw + 0.5rem, 2.75rem)' }}
          >
            {t('title')}
          </h2>
          <p className="text-[#6B6560] text-lg leading-relaxed">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-[rgba(201,173,151,0.2)] rounded-[2rem] p-7 flex flex-col gap-5 hover:shadow-[0_12px_40px_rgba(242,164,110,0.12)] transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} width="15" height="15" viewBox="0 0 24 24" fill="#F59E0B">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#2A2319] text-[15px] leading-[1.8] flex-1">
                "{item.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-[rgba(201,173,151,0.18)]">
                <div className="w-8 h-8 rounded-full bg-[#FDEBD9] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C47835] text-xs font-bold">{item.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-[#2A2319]">{item.name}</div>
                  <div className="text-[11px] text-[#9A9490]">{item.tag}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
