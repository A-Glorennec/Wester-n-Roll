const tables = require("../tables");

const isAdmin = async (req, res, next) => {
  try {
    const id = req.payload;
    const [users] = await tables.users.getUserdById(id);
    if (users && users[0].u_role === "admin") {
      next();
    } else {
      res.status(403).send("You are not admin");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = isAdmin;
