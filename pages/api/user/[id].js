// import type { NextApiRequest, NextApiResponse } from "next";
import { getUserById, deleteUserById } from "../../../controllers";
import { deleteUser, getUser } from "../../../controllers/user.controller";

export default async function handler(req, res) {
  const {
    query: { id, name },
    method,
  } = req;

  switch (method) {
    case "GET":
      // Get data from your database
      await getUser(req, res);
      break;

    case "PATCH":
      // Update or create data in your database
      // await upadateUser(req, res);
      break;

    case "DELETE":
      // Delete data in your database
      await deleteUser(req, res);
      break;

    default:
      res.setHeader("Allow", ["GET", "PATCH", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
