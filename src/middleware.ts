import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix} from './navigation';

export default createMiddleware({
  // A list of all locales that are supported
  //locales: ['pl', 'de'],
 
  // Used when no locale matches
  defaultLocale: 'pl',
  localePrefix,
  locales
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|pl)/:path*']
};