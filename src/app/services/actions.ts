import { GraphQLClient } from 'graphql-request'
import { FaqList } from "./definitions";
import { GET_QUESTIONS } from "../graphql/GetQuestions";

const hygraph = new GraphQLClient(process.env.HYGRAPH_ENDPOINT);

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