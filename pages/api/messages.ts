import type { NextApiRequest, NextApiResponse } from "next";
import { getMessages, createMessage } from "../../controllers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      await getMessages(req, res);
    }else if(req.method === "POST"){
        await createMessage(req, res);
    }
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
