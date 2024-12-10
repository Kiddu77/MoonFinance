import { NextApiRequest, NextApiResponse } from "next";
import ConnectToDB from "@/server/config/connect.db";
import userResponse from "@/server/model/userResponses.model";

type Data = {
  message?: string;
  data?: any; 
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await ConnectToDB();

    const data = await userResponse.find({});

    return res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      error: (error as Error).message,
    });
  }
}
