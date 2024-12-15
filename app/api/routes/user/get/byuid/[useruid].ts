import { NextApiRequest, NextApiResponse } from "next";
import ConnectToDB from "@/server/config/connect.db";
import Users from "@/server/model/users.model";

type Data = any; 

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | { message: string }>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    console.log("Triggered");
    await ConnectToDB();

    const { useruid } = req.query;

    if (!useruid || typeof useruid !== "string") {
      return res.status(400).json({ message: "Invalid userUid" });
    }

    const data = await Users.find({ userUid: useruid });

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
