import '@/app/ui/global.css'
import { montserrat } from '../ui/fonts'
import type { Metadata } from 'next'
import Header from '../componenets/header'

import {NextIntlClientProvider, useMessages} from 'next-intl';
import {notFound} from 'next/navigation';
import {useLocale} from 'next-intl';
import Footer from '../componenets/footer';

const locales = ['pl', 'de'];


export const metadata: Metadata = {
  title:{ 
    template: '%s | Kalina Vet',
    default : 'Home | Kalina Vet'},
  description: 'Gabinet Weterynaryjny małych zwierząt w Zasiekach ',
}

export default function RootLayout({
  children, params:{locale}
}: {
  children: React.ReactNode, params: any
}) {
  if (!locales.includes(locale as any)) notFound();
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={`${montserrat.className} antialiased`}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Header />
        {children}
        <Footer />
       </NextIntlClientProvider>
      </body>
    </html>
  )
}
