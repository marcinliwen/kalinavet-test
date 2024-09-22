import { createClient } from '@/app/utils/supabase/server'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    const cookieStore = cookies()

  
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/reset-password'
  const redirectTo = req.nextUrl.clone()
  redirectTo.pathname = next
  redirectTo.searchParams.delete('code')

  if (code) {
    console.log('code', code)
    const supabase = createClient(cookieStore)
    const {error} = await supabase.auth.exchangeCodeForSession(code)

    console.log('redirectTo', redirectTo)
     if(!error){
        return NextResponse.redirect(redirectTo)

    }
    const errorData = searchParams.get('error');
    if(errorData){
      redirectTo.pathname = '/error'
      return NextResponse.redirect(redirectTo)
    }
   
    redirectTo.pathname = '/error'
    return NextResponse.redirect(redirectTo)

  }

  //redirectTo.pathname = '/error'
  //sreturn NextResponse.redirect(redirectTo)
}