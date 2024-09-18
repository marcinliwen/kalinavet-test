import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server';



type User_Roles = {
  user_roles:{
  role: 'admin' | 'user'
  }[]
}
const PUBLIK_ROUT = ['/login', '/sign-up', '/password', '/reset-password', '/uslugi', '/porady', '/o-nas', '/kontakt', '/pytania']
const ROOT = ['/', '/pl', '/de'];
const AUTH_ROUT = ['/login', '/sign-up', '/reset-password']
const ADMIN = ['/admin']
export async function updateSession(
  request: NextRequest,
  response: NextResponse) {


  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: '',
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )

  const {
    data: { user }
  } = await supabase.auth.getUser();

  const { nextUrl } = request;
  const isAuthenticated = !!user;


  
  const isPublicRout = (PUBLIK_ROUT.find((item) => nextUrl.pathname.includes(item)))
    || ROOT.find(item => nextUrl.pathname === item)
  const isAuthRout = (AUTH_ROUT.find(item => nextUrl.pathname.includes(item)));

  const isAdminRout = (ADMIN.find(rout=> nextUrl.pathname.includes(rout)))

  if (!isAuthenticated && !isPublicRout || !isAuthenticated && isAdminRout) {
    return NextResponse.redirect(new URL('/', nextUrl));
  }
  if (isAuthenticated && isAuthRout ) {
    return NextResponse.redirect(new URL('/dashboard', nextUrl))
  } 
  return response;
}