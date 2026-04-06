'use client';

import { useTranslations } from 'next-intl';

export default function WhyUs() {
  const t = useTranslations('whyUs');
  const items = t.raw('items') as Array<{ icon: string; title: string; desc: string; tag?: string }>;

  return (
    <section className="py-16 px-6 bg-bg">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-[11px] font-bold text-sub uppercase tracking-[0.15em] mb-10 opacity-70">
          {t('eyebrow')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-4 rounded-3xl px-6 py-5 border transition-all ${
                item.tag
                  ? 'bg-espresso border-espresso/0 text-[#FFFAF5]'
                  : 'bg-surface border-border'
              }`}
            >
              <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className={`font-bold text-[15px] leading-snug ${item.tag ? 'text-[#FFFAF5]' : 'text-espresso'}`}>
                    {item.title}
                  </h3>
                  {item.tag && (
                    <span className="bg-apricot text-espresso text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0">
                      {item.tag}
                    </span>
                  )}
                </div>
                <p className={`text-sm leading-relaxed ${item.tag ? 'text-[#FFFAF5]/65' : 'text-sub'}`}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
