import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const viewport: Viewport = {
  themeColor: '#1B1F52',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://tempofamilyrealestate.es'),
  title: 'Tempo Family Real Estate | Inmobiliaria Boutique en Cantabria',
  description:
    'Cada familia tiene su historia, ven y conoce la nuestra. Agencia inmobiliaria boutique de referencia en Cartes, Torrelavega, Santander y toda Cantabria. Compra, venta y alquiler de inmuebles con trato exclusivo y familiar.',
  keywords: [
    'inmobiliaria cantabria',
    'tempo family real estate',
    'casas en venta cartes',
    'chalets torrelavega',
    'pisos santander',
    'villas de lujo cantabria',
    'inmobiliaria de confianza cartes',
  ],
  authors: [{ name: 'Tempo Family Real Estate S.L.' }],
  openGraph: {
    title: 'Tempo Family Real Estate | Inmobiliaria Familiar en Cantabria',
    description: 'Cada familia tiene su historia, ven y conoce la nuestra. Inmuebles exclusivos en venta y alquiler en Cantabria.',
    url: 'https://tempofamilyrealestate.es',
    siteName: 'Tempo Family Real Estate',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
