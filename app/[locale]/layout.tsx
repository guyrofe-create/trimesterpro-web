import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { locales, localeConfig, type Locale } from '@/config/i18n';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// ── Per-locale SEO titles / descriptions ────────────────────────────────────
const SEO: Record<string, { title: string; description: string; ogLocale: string }> = {
  en: {
    title: 'Trimester Pro: Pregnancy Tracker App — Week by Week',
    description:
      'Track your pregnancy week by week with Trimester Pro. Doctor-reviewed content, due date calculator, kick counter, birth plan PDF & more. Free on iOS.',
    ogLocale: 'en_US',
  },
  he: {
    title: 'טרימסטר פרו: אפליקציית מעקב הריון שבועי | הורידי חינם',
    description:
      'עקבי אחרי ההריון שלך שבוע אחרי שבוע עם טרימסטר פרו. תוכן רפואי מעמיק, מחשבון תאריך לידה, מד בעיטות, תכנית לידה PDF ועוד. להורדה חינמית.',
    ogLocale: 'he_IL',
  },
  it: {
    title: 'Trimester Pro: App Gravidanza Settimana per Settimana | Gratis',
    description:
      'Monitora la tua gravidanza settimana per settimana con Trimester Pro. Contenuto medico approfondito, calcolo data parto, contatore calci, piano parto PDF. Gratis su iOS.',
    ogLocale: 'it_IT',
  },
};

export async function generateMetadata(
  props: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await props.params;
  const seo = SEO[locale] ?? SEO.en;
  const url = `https://trimesterpro.app/${locale}`;

  return {
    metadataBase: new URL('https://trimesterpro.app'),
    title: seo.title,
    description: seo.description,
    keywords:
      locale === 'he'
        ? 'אפליקציית הריון, מעקב הריון, מעקב הריון שבועי, אפליקציה להריון, מחשבון הריון, שבועות הריון'
        : locale === 'it'
        ? 'app gravidanza, monitoraggio gravidanza, gravidanza settimana per settimana, app per gravidanza gratis, calcolo data parto'
        : 'pregnancy tracker app, pregnancy app, pregnancy week by week, best pregnancy app, due date calculator, kick counter app, baby development app',
    alternates: {
      canonical: url,
      languages: {
        en: 'https://trimesterpro.app/en',
        he: 'https://trimesterpro.app/he',
        it: 'https://trimesterpro.app/it',
        'x-default': 'https://trimesterpro.app/en',
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url,
      siteName: 'Trimester Pro',
      type: 'website',
      locale: seo.ogLocale,
      alternateLocale: ['en_US', 'he_IL', 'it_IT'].filter((l) => l !== seo.ogLocale),
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Trimester Pro – Pregnancy Tracker App',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: ['/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
  };
}

// ── JSON-LD per locale ───────────────────────────────────────────────────────
const APP_STORE_URL = 'https://apps.apple.com/app/trimester-pro/id6744104960';

function buildJsonLd(locale: string) {
  const softwareApp = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'Trimester Pro',
    description:
      locale === 'he'
        ? 'אפליקציית מעקב הריון שבועי עם תוכן רפואי מעמיק, מחשבון תאריך לידה, מד בעיטות ועוד.'
        : locale === 'it'
        ? 'App gravidanza settimana per settimana con contenuto medico approfondito, calcolo data parto, contatore calci e molto altro.'
        : 'Week-by-week pregnancy tracking app with doctor-reviewed medical content, due date calculator, kick counter, birth plan PDF and more.',
    url: 'https://trimesterpro.app',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'iOS',
    downloadUrl: APP_STORE_URL,
    installUrl: APP_STORE_URL,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: {
      '@type': 'Person',
      name: 'Dr. Guy Rofé',
      url: 'https://trimesterpro.app',
    },
    featureList:
      locale === 'he'
        ? ['מעקב הריון שבועי', 'מחשבון תאריך לידה', 'מד בעיטות', 'טיימר צירים', 'ייצוא תכנית לידה PDF', 'שיתוף עם פרטנר', 'מעקב תסמינים']
        : locale === 'it'
        ? ['Monitoraggio gravidanza settimana per settimana', 'Calcolo data parto', 'Contatore calci', 'Timer contrazioni', 'Esportazione piano parto PDF', 'Condivisione partner', 'Diario sintomi']
        : ['Week by week pregnancy tracking', 'Due date calculator', 'Kick counter', 'Contraction timer', 'Birth plan PDF export', 'Partner sharing', 'Symptom tracker', 'Food safety guide'],
  };

  const faqItems: Record<string, Array<{ q: string; a: string }>> = {
    en: [
      { q: 'Is the app completely free?', a: 'Yes, free to download and the core pregnancy tracking features are free forever. No subscription required to start.' },
      { q: 'How accurate is the medical content?', a: 'All development content is based on established medical guidelines including ACOG and Mayo Clinic references, reviewed by healthcare professionals.' },
      { q: 'Is my data private?', a: 'Completely. All your data stays on your device only. We never collect, sell, or transmit any personal health information.' },
      { q: 'From which week does it work?', a: 'From week 1 all the way through postpartum. Just enter your due date and the app tracks you through all 40 weeks and beyond.' },
      { q: 'Which languages is it available in?', a: 'Hebrew, English, and Italian. The app detects your language automatically based on your device settings.' },
    ],
    he: [
      { q: 'האפליקציה חינמית לגמרי?', a: 'כן, הורדה חינמית ופונקציות המעקב העיקריות חינמיות לתמיד. לא נדרש מינוי כדי להתחיל.' },
      { q: 'עד כמה המידע הרפואי מדויק?', a: 'כל תוכן ההתפתחות מבוסס על קווים מנחים רפואיים מבוססים כולל הפניות ACOG ו-Mayo Clinic, נסקר על ידי אנשי מקצוע בתחום הבריאות.' },
      { q: 'האם המידע שלי פרטי?', a: 'לחלוטין. כל הנתונים שלך נשארים על המכשיר שלך בלבד. לעולם לא אוספים, מוכרים או מעבירים מידע בריאותי אישי.' },
      { q: 'מאיזה שבוע האפליקציה עובדת?', a: 'משבוע 1 ועד לאחר הלידה. פשוט הכנסי את תאריך הלידה המשוער והאפליקציה תעקוב אחרייך בכל 40 השבועות ומעבר לכך.' },
      { q: 'באילו שפות האפליקציה זמינה?', a: 'עברית, אנגלית ואיטלקית. האפליקציה מזהה את השפה שלך אוטומטית על פי הגדרות המכשיר.' },
    ],
    it: [
      { q: "L'app è completamente gratuita?", a: "Sì, download gratuito e le funzioni di monitoraggio principali sono gratuite per sempre. Nessun abbonamento necessario per iniziare." },
      { q: "Quanto è accurato il contenuto medico?", a: "Tutti i contenuti di sviluppo si basano su linee guida mediche consolidate inclusi i riferimenti ACOG e Mayo Clinic, revisionati da professionisti sanitari." },
      { q: "I miei dati sono privati?", a: "Completamente. Tutti i tuoi dati rimangono solo sul tuo dispositivo. Non raccogliamo, vendiamo o trasmettiamo mai informazioni sanitarie personali." },
      { q: "Da quale settimana funziona?", a: "Dalla settimana 1 fino al post-parto. Inserisci semplicemente la tua data prevista del parto e l'app ti segue per tutte le 40 settimane e oltre." },
      { q: "In quali lingue è disponibile?", a: "Ebraico, inglese e italiano. L'app rileva automaticamente la tua lingua in base alle impostazioni del dispositivo." },
    ],
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (faqItems[locale] ?? faqItems.en).map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Trimester Pro',
    url: 'https://trimesterpro.app',
    founder: { '@type': 'Person', name: 'Dr. Guy Rofé' },
    contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: 'briutguy@gmail.com' },
  };

  return [softwareApp, faqPage, organization];
}

export default async function LocaleLayout(
  props: { children: React.ReactNode; params: Promise<{ locale: string }> }
) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const messages = await getMessages({ locale });
  const dir = (localeConfig[locale as Locale]?.dir) ?? 'ltr';
  const jsonLdData = buildJsonLd(locale);

  return (
    <html lang={locale} dir={dir}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data */}
        {jsonLdData.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {props.children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
