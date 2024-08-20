'use server'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createClient } from '@/app/utils/supabase/server'
import { z } from 'zod';

const emailSchema = z.object({
  email: z.string().trim().email({ message: "Podaj prawidłowy adres email" })
})

type EmailState = {
  error: {
    email?: string[] | undefined;
  };
} | {
  error: string;
} | undefined;

export async function resetPassword(prevState: EmailState, formData: FormData) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const emailValidation = emailSchema.safeParse({ email: formData.get('email') as string })
  if (!emailValidation.success) {
    return {
      error: emailValidation.error.flatten().fieldErrors
    }
  }
  let email = formData.get('email') as string;

  //let currentEmail = formData.get('email') as string;
  const { count } = await supabase.from('person').select('*', { count: 'exact', head: true }).eq('email', email)
  //console.log('count', count)
  if (count === 0) {
    //console.log('in count return')
    return {
      error: "Ten email nie jest przypisany do żadnego konta"
    }
  }

  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: 'http://localhost:3000/reset-password',
  })
  if (error) {
    return {
      error: "Sorry! Something wrong, try again."
    }
  }

  //revalidatePath('/', 'layout')
  //redirect('/')
}