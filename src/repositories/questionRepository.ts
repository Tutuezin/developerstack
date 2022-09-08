import { prisma } from "../config/database";
import { IQuestionData } from "../types/questionTypes";

export async function createQuestion(question: IQuestionData) {
  await prisma.questions.create({ data: question });
}

export async function getQuestions() {
  return await prisma.questions.findMany();
}

export async function getQuestionsById(id: number) {
  const questionById: {
    id: number;
    askedBy: string;
    question: string;
    answers: any;
  } = await prisma.questions.findUnique({
    where: { id },
  });

  const answerById = await prisma.questions.findUnique({
    where: { id },
    select: {
      answers: {},
    },
  });

  questionById.answers = answerById;

  return { questionById, answerById };
}
