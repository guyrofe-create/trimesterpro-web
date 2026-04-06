'use client';

import { useTranslations } from 'next-intl';

export default function SocialProof() {
  const t = useTranslations('socialProof');

  const items = [
    { value: t('rating'),    label: t('ratingLabel'),    icon: '★',  highlight: false },
    { value: t('weeks'),     label: t('weeksLabel'),     icon: null, highlight: false },
    { value: t('doctor'),    label: t('doctorLabel'),    icon: '✦',  highlight: true  },
    { value: t('tools'),     label: t('toolsLabel'),     icon: null, highlight: false },
    { value: t('free'),      label: t('freeLabel'),      icon: null, highlight: false },
  ];

  return (
    <div className="bg-surface border-y border-border py-5 px-6 overflow-x-auto">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-6 min-w-max mx-auto">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            {i > 0 && (
              <div className="w-px h-6 bg-border flex-shrink-0" />
            )}
            <div className="text-center">
              <div className={`text-[17px] font-bold flex items-center justify-center gap-1 ${item.highlight ? 'text-sage' : 'text-espresso'}`}>
                {item.icon && <span className={item.highlight ? 'text-sage' : 'text-apricot'}>{item.icon}</span>}
                {item.value}
              </div>
              <div className="text-[11px] text-sub mt-0.5 font-medium">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
