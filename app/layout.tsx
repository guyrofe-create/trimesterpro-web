import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Trimester Pro — Pregnancy Tracker',
  description: 'Week-by-week pregnancy tracking with medical-grade depth.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
