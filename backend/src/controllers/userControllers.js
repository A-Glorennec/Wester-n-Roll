const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const tables = require("../tables");

require("dotenv").config();

const create = async (req, res) => {
  try {
    // eslint-disable-next-line prefer-destructuring
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
    const { name, email, hashedPassword } = req.body;
    let role = "user";

    if (email.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
      role = "admin";
    }
    const [results] = await tables.users.addUser(
      name,
      email,
      hashedPassword,
      role
    );

    if (results.affectedRows) {
      res.status(201).json({ message: "Created" });
    } else {
      res.status(401).json({ message: "Error during creation" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

const readByEmail = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(401).json({ message: "Remplir les champs" });
    } else {
      const [user] = await tables.users.getUserByEmail(email);
      if (user.length) {
        const isVerify = await argon2.verify(
          user[0].u_hashedPassword,
          password
        );
        if (typeof isVerify === "boolean" && isVerify) {
          const token = jwt.sign(
            { payload: user[0].u_id },
            process.env.SECRET_KEY_JWT,
            {
              expiresIn: "24h",
            }
          );
          res.status(200).send({ token });
        } else {
          res.status(401).send("Vérifiez vos données");
        }
      } else {
        res.status(401).send("adresse mail n'existe pas");
      }
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const logout = async (req, res) => {
  try {
    const id = req.payload;
    const token = jwt.sign({ payload: id }, process.env.SECRET_KEY_JWT, {
      expiresIn: "0h",
    });
    res.status(200).json({
      message: "Déconnecté",
      token,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const readUserById = async (req, res) => {
  try {
    const id = req.payload;
    const [user] = await tables.users.getUserdById(id);

    if (user.length) {
      res.status(200).json({ message: "Connecté", user: user[0] });
    } else {
      res.status(401).send("Vérifiez vos données");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const read = async (req, res) => {
  try {
    const [users] = await tables.users.getAllUsers();
    if (users.length) {
      res.status(200).json({ message: "List of all users", users });
    } else {
      res.status(204).send("No user");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  create,
  readByEmail,
  logout,
  readUserById,
  read,
};
