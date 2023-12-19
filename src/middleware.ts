import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix, pathnames } from './navigation';

export default createMiddleware({
  // Used when no locale matches
  defaultLocale: 'pl',
  localePrefix,
  locales,
  pathnames
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/(de|pl)/:path*',
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // However, match all pathnames within `/users`, optionally with a locale prefix
    '/([\\w-]+)?/users/(.+)'
  ]
};