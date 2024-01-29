'use server';
import { GraphQLClient } from "graphql-request";

export type State = {
    errors?: {
        question?: string,
        email?: string,
    },
    message?: string | null,
    success?: string | null
}

export async function PostQuestion(prevState: State, formData: FormData) {


    const variables = {
        "name": formData.get('name'),
        "question": formData.get('question'),
        "email": formData.get('email')
    }
    console.log('variables', variables)
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
        return {
            success: 'Wysłano wiadomość, dziękujemy'
        }
    } catch ({ message }: any) {
        console.log('message', message)
    }
};