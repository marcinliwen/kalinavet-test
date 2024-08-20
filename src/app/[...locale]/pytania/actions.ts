'use server';

import { GraphQLClient } from 'graphql-request'
import { FaqList } from "../../services/definitions";
import {postclient} from '@/../postmark';
import {getTranslations} from 'next-intl/server';
import { z } from 'zod';

const hygraph = new GraphQLClient(process.env.HYGRAPH_ENDPOINT);
import { gql } from "graphql-request"

const GET_QUESTIONS = gql`
      query GetQuestions($locale: Locale!) {
        faqs(locales: [$locale]) {
            answer
            question
          }
      }`
export async function GetAllQuestions(locale: string) {
    const variables = { locale: locale }
    try {
        const data = await hygraph.request<FaqList>(
            GET_QUESTIONS,
            variables
        )
        return data.faqs;
    } catch (error) { console.error(error) }
}

export type State = {
    errors?: {
        name?:string[],
        question?: string[],
        email?: string[],
    },
    message?: string | null,
    success?: string | null
}

const FormSchema = z.object({
    name: z.string({invalid_type_error: "Name must be a string"}),
    question: z.string().min(10),
    email: z.string().email({ message: "Invalid email address" }),
})


export async function sendQuestionform(prevState: State, formData: FormData) {

    //console.log('email sended')
    
    const t = await getTranslations('FAQ')
    const validatefields = FormSchema.safeParse({
        name: formData.get('name'),
        question: formData.get('question'),
        email: formData.get('email'),
    })
    if (!validatefields.success) {
        return {
            errors: validatefields.error.flatten().fieldErrors,
            message: t('form_error_message')
        }
    }
    const {name, question, email} = validatefields.data;

    try {
        const response = postclient.sendEmailWithTemplate({
            "From": "kontakt@kalinavet.com",
            "To": "kontakt@kalinavet.com",
            "TemplateAlias": "kontakt-form",
            "TemplateModel": {
                "product_url": "https://kalinavet.com",
                "product_name": "Kalina Vet",
                "name": name,
                "company_name": "Kalina Vet",
                "company_address": "Zasieki 75, Brody",
                "Subject": "Kontakt",
                "message": question,
                "email": email
            }
        })

        /* postclient.sendEmailWithTemplate({
            "From": "kontakt@kalinavet.com",
            "To": email,
            "TemplateAlias": "welcome-1",
            "TemplateModel": {
                "product_url": "https://kalinavet.com",
                "product_name": "Kalina Vet",
                "name": name,
                "company_name": "Kalina Vet",
                "company_address": "Zasieki 75, Brody",

            }
        }) */

        const responseData = await response.then((res: any) => res);
        if (responseData.Message != 'OK') {
            return {
                message: t('email_failed')
            }
        }
        return { success: t('email_success')}

    } catch (e) {
        console.error(e)
        return { message: 'Failed to send email' }
    }  
}

export async function sendEmail() {
    const response = postclient.sendEmail({
      "From": "kontakt@kalinavet.com",
      "To": "kontakt@kalinavet.com",
      "Subject": "Test 2",
      "TextBody": "Hello from Postmark!"
    })
    return response;
  }