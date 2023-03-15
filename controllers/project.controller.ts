import type { NextApiRequest, NextApiResponse } from "next";
import { pool } from "../db/index";

export const getProjects = async (req: NextApiRequest, res: NextApiResponse) => {
    const [rows] = await pool.query("SELECT * FROM projects");
    res.json(rows);
  };
  