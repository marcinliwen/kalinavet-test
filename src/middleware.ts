import createMiddleware from 'next-intl/middleware';
import createIntlMiddleware from 'next-intl/middleware';
import { locales, localePrefix, pathnames } from './navigation';
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from '@/app/utils/supabase/middleware'



const i18nMiddleware = createMiddleware({
  locales: ['pl', 'de'],
  defaultLocale: 'pl'
});


export async function middleware(request: NextRequest) {

  const response = i18nMiddleware(request);
 
  // A `response` can now be passed here
  return await updateSession(request, response);
}



export const config = {
  // Match only internationalized pathnames
  matcher: [
      '/',
      '/(de|pl)/:path*',
      '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
