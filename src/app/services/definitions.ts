export interface FaqData {
    id: number,
    question: string,
    answer: string
}
export interface FaqList {
    faqs: FaqData[]
};
export type Pet = {
    id: number,
    birth_date: string | null;
    gender: string | null;
    pet_id: number;
    name: string | null;
    breed: string | null;
    species: string | null;
  };