import {login} from "../.../../../controllers/user.controller";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      await login(req, res);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
