import { pool } from "../db/index";

interface Data{
    id: number,
    name: string,
    title: string,
    message: string,
    file: string,
    date: string
}

import type { NextApiRequest, NextApiResponse } from "next";

export const getMessages = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const [rows]: any = await pool.query("SELECT * FROM form");
  res.json(rows);
};

export const createMessage = async (req: NextApiRequest, res: NextApiResponse) => {
    const { name, title, message, file } = req.body;
    const [rows]: any = await pool.query(
      "INSERT INTO form (name, title, message, file) VALUES (?, ?, ?, ?)",
      [name, title, message, file]
    );
    
    res.send({
      id: rows.insertId,
      name,
      title,
      message,
      file
    });
  };

