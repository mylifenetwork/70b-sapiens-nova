import type { Metadata } from 'next';
import './globals.css';
import './soft-card.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Sapiens Nova Academy - Embrace Your Future: Innovate, Heal, Inspire',
  description:
    'A dynamic educational institution preparing young adults for careers as venture capitalists, entrepreneurs, and technology professionals through innovative programmes in Hong Kong, Thailand, Japan, China, UK, and Saudi Arabia.',
  openGraph: {
    type: 'website',
    siteName: 'Sapiens Nova Academy',
    title: 'Sapiens Nova Academy - Embrace Your Future: Innovate, Heal, Inspire',
    description:
      'A dynamic educational institution preparing young adults for careers as venture capitalists, entrepreneurs, and technology professionals.',
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
