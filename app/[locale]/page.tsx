import { setRequestLocale } from 'next-intl/server';
import { type Locale } from '@/config/i18n';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import WeekPreview from '@/components/WeekPreview';
import Features from '@/components/Features';
import Screenshots from '@/components/Screenshots';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import DownloadCTA from '@/components/DownloadCTA';
import Footer from '@/components/Footer';

export default async function HomePage(
  props: { params: Promise<{ locale: Locale }> }
) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  return (
    <main>
      <Navbar locale={locale} />
      <Hero locale={locale} />
      <SocialProof />
      <WeekPreview />
      <Features />
      <Screenshots locale={locale} />
      <Testimonials />
      <FAQ />
      <DownloadCTA />
      <Footer locale={locale} />
    </main>
  );
}
