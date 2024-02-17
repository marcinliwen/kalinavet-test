import '@/app/ui/global.css'
import { montserrat } from '../ui/fonts'
import type { Metadata } from 'next'
import Header from '../componenets/header'

import { NextIntlClientProvider, useMessages } from 'next-intl';
import { notFound } from 'next/navigation';
import { useLocale } from 'next-intl';
import Script from 'next/script';
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
  name: "Kalina Adamkiewicz | Gabinet Weterynaryjny",
  "image": [
    "https://www.kalinavet.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgabinet-front.182c3e95.png&w=3840&q=75",
    "https://www.kalinavet.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FQACXa1M3TEKIGW5F0XST&w=1080&q=75"
  ],
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
      <Script defer src="https://www.googletagmanager.com/gtag/js?id=G-HHTPFKNR69"></Script>
      <Script id="google-analytics">
        {` window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-HHTPFKNR69');`}
      </Script>
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
