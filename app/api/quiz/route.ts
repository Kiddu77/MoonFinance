"use server";

import connectToDB from "@/server/config/connect.db";
import UserResponse from "@/server/model/userResponses.model";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectToDB();

    const body = await req.json();

    const { userId, questions } = body;

    if (!userId || !questions || Object.keys(questions).length !== 9) {
      return NextResponse.json(
        { error: "Invalid input. Please provide userId and answers for all 9 questions." },
        { status: 400 }
      );
    }

    // Extract answers and calculate scores
    const answers = Object.values(questions) as number[];

    let risk_score = 0,
      diversity_score = 0,
      stability_score = 0;

    if (answers.length === 9) {
      // Risk score calculation
      risk_score =
        answers[0] * 0.3 +
        answers[1] * 0.2 +
        answers[2] * 0.2 +
        answers[4] * 0.15 +
        answers[5] * 0.15;

      // Diversity score calculation
      diversity_score =
        answers[3] * 0.3 +
        answers[4] * 0.25 +
        answers[8] * 0.2 +
        (2 - risk_score) * 0.25;

      // Stability score calculation
      stability_score =
        answers[0] * 0.2 +
        answers[1] * 0.2 +
        answers[5] * 0.3 +
        answers[6] * 0.15 +
        answers[7] * 0.15;
    }

    // Save the calculated scores along with the answers
    const newResponse = new UserResponse({
      userId,
      questions,
      risk: risk_score,
      diversity: diversity_score,
      stability: stability_score,
    });

    await newResponse.save();

    return NextResponse.json(
      {
        message: "Quiz response saved successfully",
        data: {
          userId,
          questions,
          risk: risk_score,
          diversity: diversity_score,
          stability: stability_score,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving quiz response:", error);
    return NextResponse.json(
      { error: "Failed to save quiz response" },
      { status: 500 }
    );
  }
}
