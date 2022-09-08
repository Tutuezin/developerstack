import * as questionsRepository from "../repositories/questionRepository";
import { IQuestionData } from "../types/questionTypes";

export async function createQuestion(question: IQuestionData) {
  await questionsRepository.createQuestion(question);
}

export async function getQuestions() {
  return await questionsRepository.getQuestions();
}

export async function getQuestionsById(id: number) {
  return await questionsRepository.getQuestionsById(id);
}
