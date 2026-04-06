export const locales = ['en', 'he', 'it'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'en';

export const localeConfig: Record<Locale, { label: string; flag: string; dir: 'ltr' | 'rtl' }> = {
  en: { label: 'English', flag: '🇺🇸', dir: 'ltr' },
  he: { label: 'עברית', flag: '🇮🇱', dir: 'rtl' },
  it: { label: 'Italiano', flag: '🇮🇹', dir: 'ltr' },
};
