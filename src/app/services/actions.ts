import { postclient } from '@/../postmark';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';


const schema = z.object({
    message: z.string().min(16),
    name: z.string().min(3),
    mail: z.string().min(1)
  })

  export async function sendQuestionform(prevState: {
    message: string,
  }, formData: FormData) {
  
    const parse = schema.safeParse({
      message: formData.get('message'),
      name: formData.get('name'),
      mail: formData.get('mail')
    })
    if (!parse.success) {
      return {
        message: 'nie udało się wysłać maila'
      }
    }
    const data = parse.data;
  
    try {
      const response = postclient.sendEmailWithTemplate({
        "From": data.mail,
        "To": data.mail,
        "TemplateAlias": "kontakt-form",
        "TemplateModel": {
          "product_url": "https://kalinavet.com",
          "product_name": "Kalina Vet",
          "name": data.name,
          "company_name": "Kalina Vet",
          "company_address": "Zasieki 75, Brody",
          "Subject": "Kontakt",
          "message": data.message,
          "email": data.mail
        }
      })
  
      postclient.sendEmailWithTemplate({
        "From": data.mail,
        "To": data.mail,
        "TemplateAlias": "welcome-1",
        "TemplateModel": {
          "product_url": "https://kalinavet.com",
          "product_name": "Kalina Vet",
          "name": data.name,
          "company_name": "Kalina Vet",
          "company_address": "Zasieki 75, Brody",
         
        }
      })
      //console.log(Response)
      const responseData = await response.then((res: any) => res);
      if (responseData.Message != 'OK') {
        return {
          message: 'nie udało się wysłać maila'
        }
      }
      revalidatePath('/')
      return { message: `Wiadomość wysłana do ${data.mail}` }
    } catch (e) {
      //console.error(e)
      //console.log(Response.error)
      return { message: 'Failed to send email' }
    }
  
  }