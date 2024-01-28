export interface FaqData {
    id: number,
    question: string,
    answer: string
}
export interface FaqList {
    faqs: FaqData[]
};