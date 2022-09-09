import { answers } from "@prisma/client";

export type IAnswerData = Omit<answers, "id">;
