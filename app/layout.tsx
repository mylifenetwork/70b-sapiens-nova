import type { Metadata } from 'next';
import './globals.css';
import './soft-card.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '70b - Building the Future  with Generative AI',
  description:
    'A dynamic educational institution preparing young adults for careers as venture capitalists, entrepreneurs, and technology professionals through innovative programmes in Hong Kong, Thailand, Japan, China, UK, and Saudi Arabia.',
  openGraph: {
    type: 'website',
    siteName: '70b - Building the Future with Generative AI',
    title: '70b - Building the Future with Generative AI',
    description:
      'A dynamic educational institution preparing young adults for careers as venture capitalists, entrepreneurs, and technology professionals.',
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/pic_16px.ico" sizes="16x16" />
        <link rel="icon" href="/images/pic_32px.ico" sizes="32x32" />
        <link rel="icon" href="/images/pic_48px.ico" sizes="48x48" />
        <link rel="shortcut icon" href="/images/pic_32px.ico" />
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
