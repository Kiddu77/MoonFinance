import { NextApiRequest, NextApiResponse } from "next";
import ConnectToDB from "@/server/config/connect.db";
import userResponse from "@/server/model/userResponses.model";
import { calcDiversity } from "@/server/utils/diversity";
import { calcRisk } from "@/server/utils/risk";
import { calcStability } from "@/server/utils/stability";

interface UpdateFields {
  questions?: Record<string, any>;
  risk?: number;
  diversity?: number;
  stablity?: number;
  [key: string]: any;
}

interface ResponseData {
  message: string;
  result?: any; 
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "PUT") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await ConnectToDB();
    const { userId } = req.query as { userId: string };
    const updateFields = req.body as UpdateFields;

    const existingUserResponse = await userResponse.findOne({ userId });

    if (!existingUserResponse) {
      return res.status(404).json({ message: "User not found" });
    }

    if (updateFields.questions) {
      for (const [key, value] of Object.entries(updateFields.questions)) {
        existingUserResponse.questions[key] = value;
      }
      updateFields.risk = calcRisk(existingUserResponse.questions);
      updateFields.diversity = calcDiversity(existingUserResponse.questions);
      updateFields.stablity = calcStability(existingUserResponse.questions);
      updateFields.questions = existingUserResponse.questions;
    }

    const result = await userResponse.updateOne(
      { userId },
      { $set: updateFields }
    );

    return res.status(200).json({
      message: "User response updated successfully",
      result,
    });
  } catch (error) {
    console.error("Error updating user response:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: (error as Error).message,
    });
  }
}
