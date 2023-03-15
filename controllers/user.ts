import { pool } from "../db/index";
import { User } from "../interfaces/api/user";
import type { NextApiRequest, NextApiResponse } from "next";

interface IUser {
  id   : number;
  name : string;
  password: string;
  email : string;
  role: boolean
}


export const getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  const [rows] = await pool.query("SELECT * FROM user");
  res.json(rows);
};

export const getUserById = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const {
    query: { id },
  } = req;

  const [rows]: any = await pool.query("SELECT * FROM user WHERE id = ?", [id]);

  if (rows?.length <= 0) {
    return res.status(404).json({
      message: "User not found!",
    });
  }
};

export const deleteUserById = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const {
    query: { id },
  } = req;

  const [result]: any = await pool.query("DELETE FROM user WHERE id = ?", [id]);
  console.log(result);

  if (result.affectedRows <= 0) {
    return res.status(404).json({ message: "User not found" });
  }

  res.send({ message: "User deleted successfully" });
};

export const createUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, password, email, role } = req.body;
  const [rows]: any = await pool.query(
    "INSERT INTO user (name, password) VALUES (?, ?)",
    [name, password]
  );
   res.send({
     id: rows.insertId,
     name,
     password,
     email,
     role
   });
};




// export const upadateUs  er = async (
//   req: NextApiRequest,
//   res: NextApiResponse
// ) => {
//   const { id } = req.query;
//   const { name, salary } = req.body;

//   console.log(id, name, salary);

//   const [result]: any = await pool.query(
//     "UPDATE user SET name = IFNULL(?, name) , salary =  IFNULL(?, salary)  WHERE id = ?",
//     [name, salary, id]
//   );

//   if (result.affectedRows <= 0) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   const [rows]: any = await pool.query("SELECT * FROM user WHERE id = ?", [id]);

//   res.json(rows[0]);
// };

/*


alter  table messages drop column projectId;

drop table mensajes;
 

CREATE TABLE projects (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  description VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (id)

);


CREATE TABLE messages (
  id INT(11) NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) DEFAULT NULL,
  description VARCHAR(255) DEFAULT NULL,
  type_of_post ENUM('Image', 'Video', 'File'),
  file VARCHAR(100) DEFAULT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
  userId INT,
  proj_catId INT,
  PRIMARY KEY (id),
  FOREIGN KEY(userId) REFERENCES users(id),
  FOREIGN KEY(proj_catId) REFERENCES project_categories(id)
);


CREATE TABLE categories (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  description VARCHAR(255) DEFAULT NULL,
  subcategoryId INT(11),
  PRIMARY KEY (id),
  FOREIGN KEY(subcategoryId) REFERENCES subcategories(id)
);

CREATE TABLE subcategories (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  description VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (id),
);


CREATE TABLE project_categories (
  id INT(11) NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) DEFAULT NULL,
  categoryId INT(11),
  projectId INT(11),
  PRIMARY KEY (id),
  FOREIGN KEY(categoryId) REFERENCES categories(cat_id),
  FOREIGN KEY(projectId) REFERENCES projects(id)
);

CREATE TABLE users (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  email VARCHAR(45) DEFAULT NULL,
  password VARCHAR(255) DEFAULT NULL,
  role ENUM('User', 'Admin', 'Super'),
  PRIMARY KEY (id)
);


 


ALTER TABLE table_name
DROP column_name;

*/
