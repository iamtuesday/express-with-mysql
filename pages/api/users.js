// import type { NextApiRequest, NextApiResponse } from "next";
import { register, getUsers } from "../../controllers/user.controller";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      await getUsers(req, res);
    } else if (req.method === "POST") {
      await register(req, res);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
