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
  logo: "",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+48506109445",
    contactType: "reservations",
    areaServed: "PL",
    availableLanguage: ["German", "Polish"]
  },
  address: {
		"@type": "PostalAddress",
	  streetAddress: "Zasieki 75",
		addressLocality: "Zasieki",
		addressRegion: "Lubuskie",
		addressCountry: "Poland"
	},
}

const localBussiness =
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Kalina Adamkiweicz | Gabinet Weterynaryjny",
  "image": "",
  "@id": "",
  url: "https://kalinavet.com",
  priceRange:"€zł",
  telephone: "+48506109445",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Zasieki 75",
    addressLocality: "Zasieki",
    postalCode: "68-343",
    addressCountry: "Poland"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.753250876557246,
    longitude: 14.668577915343366
  },
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Monday",
    opens: "09:30",
    closes: "13:30"
  },{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Wednesday",
    opens: "09:30",
    closes: "13:30"
  },{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Friday",
    opens: "09:30",
    closes: "13:30"
  }] 
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
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBussiness) }}
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
