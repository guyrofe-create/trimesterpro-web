'use client';

import { useTranslations } from 'next-intl';

export default function WhyUs() {
  const t = useTranslations('whyUs');
  const items = t.raw('items') as Array<{ icon: string; title: string; desc: string; tag?: string }>;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">

        <p className="text-center text-[11px] font-bold text-[#9A9490] uppercase tracking-[0.15em] mb-4">
          {t('eyebrow')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-4 rounded-3xl px-6 py-6 border transition-all ${
                item.tag
                  ? 'bg-[#FFF6EC] border-[#F2A46E]/30'
                  : 'bg-[#F9F9F7] border-[rgba(201,173,151,0.18)]'
              }`}
            >
              <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
              <div>
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <h3 className="font-bold text-[15px] leading-snug text-[#2A2319]">
                    {item.title}
                  </h3>
                  {item.tag && (
                    <span className="bg-[#F2A46E] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full flex-shrink-0">
                      {item.tag}
                    </span>
                  )}
                </div>
                <p className="text-[13.5px] leading-relaxed text-[#6B6560]">
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
