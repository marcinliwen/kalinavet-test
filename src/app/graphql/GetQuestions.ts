import { gql } from "graphql-request"

export const GET_QUESTIONS = gql`
      query GetQuestions($locale: Locale!) {
        faqs(locales: [$locale]) {
            answer
            question
          }
      }`