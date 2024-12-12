import { NextApiRequest, NextApiResponse } from "next";
import ConnectToDB from "@/server/config/connect.db";
import userResponse from "@/server/model/userResponses.model";

type Data = {
  message: string;
  result?: any; 
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await ConnectToDB();

    const { userId } = req.query;

    if (!userId || typeof userId !== "string") {
      return res.status(400).json({ message: "Invalid or missing userId" });
    }

    const result = await userResponse.deleteOne({ userId });

    console.log("Data deleted");

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "User response deleted",
      result,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
