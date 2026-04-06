'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function FAQ() {
  const t = useTranslations('faq');
  const items = t.raw('items') as Array<{ q: string; a: string }>;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 bg-surface">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-espresso mb-4 tracking-tight">
            {t('title')}
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-bg border border-border rounded-3xl overflow-hidden transition-all duration-200 hover:border-espresso/20"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-espresso text-[15px] leading-snug">{item.q}</span>
                <span className={`flex-shrink-0 w-7 h-7 rounded-full border border-border flex items-center justify-center transition-all duration-200 ${
                  open === i ? 'bg-espresso border-espresso rotate-45' : 'bg-transparent'
                }`}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1v10M1 6h10" stroke={open === i ? '#FFFAF5' : '#7A6E65'} strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sub text-[14px] leading-[1.75]">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
