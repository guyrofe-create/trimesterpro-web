'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import { type Locale } from '@/config/i18n';

const SCREENS = ['home', 'depth', 'plan', 'tools', 'lib', 'cal'] as const;

export default function Screenshots({ locale }: { locale: Locale }) {
  const t = useTranslations('screenshots');
  const captions = t.raw('captions') as Record<string, string>;
  const [active, setActive] = useState<typeof SCREENS[number]>('home');
  const activeIndex = SCREENS.indexOf(active);

  return (
    <section id="screenshots" className="py-24 px-6 bg-surface overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2
            className="font-extrabold text-[#2A2319] mb-4 tracking-tight leading-[1.1]"
            style={{ fontSize: 'clamp(1.875rem, 3vw + 0.5rem, 2.75rem)' }}
          >
            {t('title')}
          </h2>
          <p className="text-[#6B6560] text-lg max-w-xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {SCREENS.map((screen) => (
            <button
              key={screen}
              onClick={() => setActive(screen)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === screen
                  ? 'bg-espresso text-[#FFFAF5] shadow-warm-sm'
                  : 'bg-white text-sub border border-border hover:border-espresso/20 hover:text-espresso'
              }`}
            >
              {captions[screen]}
            </button>
          ))}
        </div>

        {/* Phones row */}
        <div className="flex justify-center items-end gap-3 lg:gap-5 overflow-x-auto pb-4">
          {SCREENS.map((screen, i) => {
            const isActive = screen === active;
            const dist = Math.abs(activeIndex - i);
            const scale = isActive ? 1 : Math.max(0.75, 1 - dist * 0.08);
            const opacity = isActive ? 1 : Math.max(0.35, 1 - dist * 0.2);

            return (
              <button
                key={screen}
                onClick={() => setActive(screen)}
                className="flex-shrink-0 transition-all duration-500 ease-out focus:outline-none"
                style={{ transform: `scale(${scale})`, opacity, transformOrigin: 'bottom center' }}
              >
                <div className={`rounded-[36px] overflow-hidden border-[3px] transition-all duration-300 ${
                  isActive
                    ? 'border-espresso shadow-dark-lg w-[170px] lg:w-[190px]'
                    : 'border-transparent w-[145px] lg:w-[160px]'
                }`}>
                  <div className="bg-bg aspect-[9/19.5]">
                    <Image
                      src={`/screenshots/${screen}_${locale}.png`}
                      alt={captions[screen]}
                      width={190}
                      height={413}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {isActive && (
                  <p className="text-center text-xs font-semibold text-espresso mt-3 opacity-80">
                    {captions[screen]}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
