import '@/app/ui/global.css'
import { montserrat } from '../ui/fonts'
import type { Metadata } from 'next'
import Header from '../componenets/header'

import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {useLocale} from 'next-intl';
import Footer from '../componenets/footer';

const locales = ['pl', 'de'];
 
export function generateStaticParams() {
  return [{locale: 'pl'}, {locale: 'de'}];
}

export const metadata: Metadata = {
  title:{ 
    template: '%s | Kalina Vet',
    default : 'Home | Kalina Vet'},
  description: 'Gabinet Weterynaryjny małych zwierząt w Zasiekach ',
}

export default async function RootLayout({
  children, params:{locale}
}: {
  children: React.ReactNode, params: any
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

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
