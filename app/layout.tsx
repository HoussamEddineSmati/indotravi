import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'INDOTRAVI - Explore Indonesian Tourism',
  description: 'Discover extraordinary natural beauty and cultural charm across Indonesia.',
};

import { LanguageProvider } from '@/context/LanguageContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <html>
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </LanguageProvider>
  );
}
