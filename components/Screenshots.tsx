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

  return (
    <section id="screenshots" className="py-24 px-6" style={{ background: 'linear-gradient(180deg, #FFFAF5 0%, #F7EBDD 100%)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-sub text-lg max-w-xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {SCREENS.map((screen) => (
            <button
              key={screen}
              onClick={() => setActive(screen)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === screen
                  ? 'bg-accent text-white shadow-md shadow-accent/30'
                  : 'bg-white text-sub border border-border hover:border-accent/40 hover:text-text'
              }`}
            >
              {captions[screen]}
            </button>
          ))}
        </div>

        {/* Screenshots row */}
        <div className="flex justify-center items-end gap-4 overflow-x-auto pb-4">
          {SCREENS.map((screen, i) => {
            const isActive = screen === active;
            const offset = Math.abs(SCREENS.indexOf(active) - i);
            const scale = isActive ? 1 : Math.max(0.78, 1 - offset * 0.07);
            const opacity = isActive ? 1 : Math.max(0.45, 1 - offset * 0.18);

            return (
              <button
                key={screen}
                onClick={() => setActive(screen)}
                className="flex-shrink-0 transition-all duration-500 ease-out"
                style={{ transform: `scale(${scale})`, opacity, transformOrigin: 'bottom center' }}
              >
                <div className={`rounded-[36px] overflow-hidden border-4 transition-all duration-300 ${
                  isActive ? 'border-accent shadow-2xl shadow-accent/25 w-[180px]' : 'border-transparent w-[150px]'
                }`}>
                  <div className="bg-bg aspect-[9/19.5]">
                    <Image
                      src={`/screenshots/${screen}_${locale}.png`}
                      alt={captions[screen]}
                      width={180}
                      height={390}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {isActive && (
                  <p className="text-center text-sm font-medium text-text mt-3">
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
