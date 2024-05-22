const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  addUser(userName, email, hashedPassword, role) {
    return this.database.query(
      `INSERT INTO ${this.table} (u_name, u_email, u_hashedPassword, u_role) VALUES (?, ?, ?, ?)`,
      [userName, email, hashedPassword, role]
    );
  }

  getUserByEmail(email) {
    return this.database.query(
      `SELECT * from ${this.table} WHERE u_email = ?`,
      [email]
    );
  }

  getUserdById(id) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE u_id = ?`, [
      id,
    ]);
  }

  getAllUsers() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }
}

module.exports = UserManager;
