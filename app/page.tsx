'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { locales, defaultLocale } from '@/config/i18n';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const browserLang = navigator.language || navigator.languages?.[0] || '';
    const shortLang = browserLang.toLowerCase().split('-')[0];
    const matched = locales.find((l) => l === shortLang) ?? defaultLocale;
    router.replace(`/${matched}`);
  }, [router]);

  return null;
}
