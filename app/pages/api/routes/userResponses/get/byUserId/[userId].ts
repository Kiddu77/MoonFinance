import { NextApiRequest, NextApiResponse } from "next";
import ConnectToDB from "@/server/config/connect.db";
import userResponse from "@/server/model/userResponses.model";

type Data = {
  message?: string;
  //data?: any;
  data?: object;  
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

    const { userId } = req.query;

    if (!userId || typeof userId !== "string") {
      return res.status(400).json({ message: "Invalid or missing userId" });
    }

    const data = await userResponse.find({ userId });

    return res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
