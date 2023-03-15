import { pool } from "../db/index";

const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

export const register = async (req, res) => {
  const { name, password, email, role } = req.body;

  const [currentEmail] = await pool.query(
    "SELECT email FROM users WHERE email = ?",
    [email]
  );

  const salt = genSaltSync(10);
  let hashedPassword = hashSync(password, salt);

  if (!currentEmail[0]) {
    const [rows] = await pool.query(
      "INSERT INTO users (name, password, email, role) VALUES (?, ?, ?, ?)",
      [name, hashedPassword, email, role]
    );

    const data = {
      id: rows.insertId,
      name,
      password: hashedPassword,
      email,
      role,
    };

    res.json({
      success: 1,
      message: data,
    });
  } else {
    return res.json({
      success: 0,
      message: "The email is already in use",
    });
  }
  console.log(currentEmail);
  console.log(email);
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const [rows] = await pool.query(`SELECT * FROM  users WHERE email = ?`, [
    email,
  ]);

  const result = compareSync(password, rows[0].password);
  if (result) {
    rows[0].password = undefined;
    const jsontoken = sign({ result: rows[0] }, "qwe1234", {
      expiresIn: "1h",
    });
    return res.json({
      success: 1,
      message: "Login successfully",
      data: {
        id: rows[0].id,
        name: rows[0].name,
        token: jsontoken,
        role: rows[0].role,
      },
    });
  } else {
    return res.json({
      success: 0,
      message: "Invalid password.",
    });
  }
};

export const deleteUser = async (req, res) => {
  const {
    query: { id },
  } = req;

  const [rows] = await pool.query("DELETE FROM users WHERE id = ?", [id]);
  console.log(rows);

  if (rows.affectedRows <= 0) {
    return res.status(404).json({ message: "User not found" });
  }

  res.send({ message: "User deleted successfully" });
};

export const getUser = async (req, res) => {
  const {
    query: { id },
  } = req;

  const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [id]);

  if (rows?.length <= 0) {
    return res.status(404).json({
      message: "User not found!",
    });
  }

  res.send(rows[0]);
};

export const getUsers = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM users");
  res.json(rows);
};
