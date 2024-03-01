import createMiddleware from 'next-intl/middleware';
import createIntlMiddleware from 'next-intl/middleware';
import { locales, localePrefix, pathnames } from './navigation';
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'


const handleI18nRouting = createIntlMiddleware({
  locales: ['pl', 'de'],
  defaultLocale: 'pl'
});

export async function middleware(request: NextRequest){

  const response = handleI18nRouting(request);

  /* let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  }) */
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({name, value, ...options});
          response.cookies.set({name, value, ...options});
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({name, value: '', ...options});
          response.cookies.set({name, value: '', ...options});
        }
      }
    }
  );

  await supabase.auth.getUser()

  return response
}



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
    '/([\\w-]+)?/users/(.+)',
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
  ]
};
