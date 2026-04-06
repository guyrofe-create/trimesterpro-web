import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales, localeConfig, type Locale } from '@/config/i18n';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await props.params;
  const titles: Record<string, string> = {
    en: 'Trimester Pro — Pregnancy Tracker',
    he: 'Trimester Pro — מעקב הריון',
    it: 'Trimester Pro — Tracker Gravidanza',
  };
  const descs: Record<string, string> = {
    en: 'Week-by-week pregnancy tracking with medical-grade depth.',
    he: 'מעקב הריון שבועי ברמה רפואית.',
    it: 'Monitoraggio gravidanza settimana per settimana.',
  };
  return {
    title: titles[locale] ?? titles.en,
    description: descs[locale] ?? descs.en,
    alternates: {
      canonical: `https://trimesterpro.app/${locale}`,
      languages: {
        en: 'https://trimesterpro.app/en',
        he: 'https://trimesterpro.app/he',
        it: 'https://trimesterpro.app/it',
      },
    },
    openGraph: {
      title: titles[locale] ?? titles.en,
      description: descs[locale] ?? descs.en,
      url: `https://trimesterpro.app/${locale}`,
      siteName: 'Trimester Pro',
      type: 'website',
    },
  };
}

export default async function LocaleLayout(
  props: { children: React.ReactNode; params: Promise<{ locale: string }> }
) {
  const { locale } = await props.params;
  const messages = await getMessages();
  const dir = (localeConfig[locale as Locale]?.dir) ?? 'ltr';

  return (
    <html lang={locale} dir={dir}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {props.children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
