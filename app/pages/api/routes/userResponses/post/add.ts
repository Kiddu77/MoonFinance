import { NextApiRequest, NextApiResponse } from "next";
import ConnectToDB from "@/server/config/connect.db";
import userResponse from "@/server/model/userResponses.model";
import { calcDiversity } from "@/server/utils/diversity";
import { calcRisk } from "@/server/utils/risk";
import { calcStability } from "@/server/utils/stability";

interface RequestBody {
  userId: string;
  questions: Record<string, number>;
  maxQuestions: number;
}

interface ResponseData {
  message: string;
  result?: object; 
  warning?: string;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { userId, questions, maxQuestions } = req.body as RequestBody;

  try {
    await ConnectToDB();

    const existingUserResponse = await userResponse.findOne({ userId });

    if (existingUserResponse) {
      return res.status(409).json({
        message:
          "User already exists: please use the update API if you want to update the database",
      });
    }

    if (!userId || !questions) {
      return res
        .status(400)
        .json({ message: "userId and questions are required" });
    }

    const questionsLength = Object.keys(questions).length;
    let risk = -1;
    let stability = -1;
    let diversity = -1;

    if (questionsLength === maxQuestions) {
      risk = calcRisk(questions);
      stability = calcStability(questions);
      diversity = calcDiversity(questions);
    }

    const data = await userResponse.create({
      userId,
      questions,
      risk,
      stability,
      diversity,
    });

    if (questionsLength === maxQuestions) {
      return res.status(201).json({
        message: "User response added",
        result: data,
      });
    } else {
      return res.status(201).json({
        message: "User response added",
        result: data,
        warning:
          "User has not answered all the questions. Risk, Stability, and Diversity will not be calculated.",
      });
    }
  } catch (error) {
    console.error("Error in posting data:", error);

    return res.status(500).json({
      message: "Internal server error",
      error: (error as Error).message,
    });
  }
}
