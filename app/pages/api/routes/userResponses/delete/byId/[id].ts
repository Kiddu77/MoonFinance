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

    const { id } = req.query;

    if (!id || typeof id !== "string") {
      return res.status(400).json({ message: "Invalid MongoDB ID" });
    }

    const result = await userResponse.deleteOne({ _id: id });
    console.log("Data deleted");

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "MongoDB ID not found" });
    }

    return res.status(200).json({
      message: "User response deleted",
      result: result,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
