import '@/app/ui/global.css'
import { montserrat } from '../ui/fonts'
import type { Metadata } from 'next'
import Header from '../componenets/header'

import { NextIntlClientProvider, useMessages } from 'next-intl';
import { notFound } from 'next/navigation';
import { useLocale } from 'next-intl';
import Footer from '../componenets/footer';

const locales = ['pl', 'de'];

export const metadata: Metadata = {
  title: {
    template: '%s | Kalina Vet',
    default: 'Home | Kalina Vet'
  },
  description: 'Gabinet Weterynaryjny małych zwierząt w Zasiekach',
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: "Kalina Adamkiewicz | Gabinet Weterynaryjny",
  alternateName: "Kalina Vet",
  url: "https://kalinavet.com",
  "logo": "",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+48506109445",
    contactType: "reservations",
    areaServed: "PL",
    availableLanguage: ["German", "Polish"]
  }
}
export default function RootLayout({
  children, params: { locale }
}: {
  children: React.ReactNode, params: any
}) {


  if (!locales.includes(locale as any)) notFound();
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={`${montserrat.className} antialiased grid grid-rows-[auto_1fr_auto] min-h-screen`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
