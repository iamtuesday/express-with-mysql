import type { NextApiRequest, NextApiResponse } from "next";
import { getProjects } from "../../controllers/project.controller";

// import { getMessages, createMessage } from "../../controllers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      await getProjects(req, res);
    res.json({
        message: "Projects"
    })
    }
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
