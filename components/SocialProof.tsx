'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

function useCountUp(target: number, duration = 1200, startOnView = false) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(!startOnView);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [startOnView]);

  useEffect(() => {
    if (!started || target === 0) return;
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setCount(Math.round(ease * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);

  return { count, ref };
}

interface StatItemProps {
  value: string;
  numericTarget: number;
  suffix: string;
  label: string;
  highlight?: boolean;
  icon?: string;
}

function StatItem({ value, numericTarget, suffix, label, highlight, icon }: StatItemProps) {
  const { count, ref } = useCountUp(numericTarget, 1100, true);
  const displayValue = numericTarget > 0 ? `${count}${suffix}` : value;

  return (
    <div ref={ref} className="flex flex-col items-center gap-1 px-4 py-3 min-w-[80px]">
      <div className={`text-[20px] font-extrabold leading-none flex items-baseline gap-0.5 ${highlight ? 'text-[#6B9E7C]' : 'text-[#2A2319]'}`}>
        {icon && <span className={`text-[16px] mr-0.5 ${highlight ? 'text-[#6B9E7C]' : 'text-[#F59E0B]'}`}>{icon}</span>}
        {displayValue}
      </div>
      <div className="text-[11px] text-[#9A9490] font-medium text-center leading-snug">{label}</div>
    </div>
  );
}

export default function SocialProof() {
  const t = useTranslations('socialProof');

  const stats: StatItemProps[] = [
    { value: t('rating'),  numericTarget: 0,  suffix: '',   label: t('ratingLabel'),   icon: '★',  highlight: false },
    { value: t('weeks'),   numericTarget: 40, suffix: '',   label: t('weeksLabel'),    icon: undefined, highlight: false },
    { value: t('doctor'),  numericTarget: 0,  suffix: '',   label: t('doctorLabel'),   icon: '✦',  highlight: true  },
    { value: t('tools'),   numericTarget: 8,  suffix: '+',  label: t('toolsLabel'),    icon: undefined, highlight: false },
    { value: t('free'),    numericTarget: 0,  suffix: '',   label: t('freeLabel'),     icon: undefined, highlight: false },
  ];

  return (
    <div className="bg-[#FAFAF9] border-y border-[rgba(201,173,151,0.18)]">
      <div className="max-w-4xl mx-auto px-6 overflow-x-auto">
        <div className="flex items-stretch justify-between gap-0 min-w-max mx-auto divide-x divide-[rgba(201,173,151,0.18)]">
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
}
