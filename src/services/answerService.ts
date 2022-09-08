import * as answerRepository from "../repositories/answerRepository";
import { IAnswerData } from "../types/answerTypes";

export async function createAnswer(answer: IAnswerData, id: number) {
  await answerRepository.createAnswer(answer, id);
}
