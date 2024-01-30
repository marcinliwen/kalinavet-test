'use server';

import { GraphQLClient } from 'graphql-request'
import { FaqList } from "../../services/definitions";

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