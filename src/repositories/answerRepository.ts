import { prisma } from "../config/database";
import { IAnswerData } from "../types/answerTypes";

export async function createAnswer(answer: any, id: number) {
  answer.questionId = id;

  await prisma.answers.create({ data: answer });
}
