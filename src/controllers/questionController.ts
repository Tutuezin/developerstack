import { Request, Response } from "express";
import * as questionsService from "../services/questionService";
import * as answerService from "../services/answerService";

export async function createQuestion(req: Request, res: Response) {
  const question = req.body;

  await questionsService.createQuestion(question);

  res.status(201).send("created question");
}

export async function createAnswer(req: Request, res: Response) {
  const answer = req.body;
  const { id } = req.params;

  await answerService.createAnswer(answer, Number(id));

  res.status(201).send("created answer");
}

export async function get(req: Request, res: Response) {
  const allQuestions = await questionsService.getQuestions();

  res.status(200).send({ questions: allQuestions });
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;

  const questionById = await questionsService.getQuestionsById(Number(id));

  res.status(200).send(questionById);
}
