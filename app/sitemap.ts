import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE_URL = 'https://trimesterpro.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['en', 'he', 'it'];
  const lastModified = new Date();

  const homePages = locales.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: locale === 'en' ? 1.0 : 0.9,
  }));

  const privacyPages = locales.map((locale) => ({
    url: `${BASE_URL}/${locale}/privacy`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.3,
  }));

  return [...homePages, ...privacyPages];
}
