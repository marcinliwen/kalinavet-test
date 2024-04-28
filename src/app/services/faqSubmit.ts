'use server';
import { GraphQLClient } from "graphql-request";
import {z} from "zod";
import {getTranslations} from 'next-intl/server';

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
export async function postQuestion(prevState: State, formData: FormData) {
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
    const variables = {
        "name": name,
        "question": question,
        "email": email,
    }
    const hygraph = new GraphQLClient(process.env.HYGRAPH_ENDPOINT, {
        headers: {
            authorization: `Bearer ${process.env.HYGRAPH_MUTATION_TOKEN}`,
        },
    });

    try {
        const response = await hygraph.request(`
    mutation SendQuestion($name: String!, $question: String!, $email: String!) {
        createFaqSubmission(
          data: {name: $name, email: $email, question: $question}
        ) {
            name
            email
            question
        }
      }`,
            variables
        );
        return{success: "Wiadomość została wysłana, dziękujemy!"}
    } catch (error) {
        return{message: "Server error!"}
    }    
    
};