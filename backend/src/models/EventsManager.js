const AbstractManager = require("./AbstractManager");

class EventsManager extends AbstractManager {
  constructor() {
    super({ table: "events" });
  }

  createEvent(title, description, date, location) {
    return this.database.query(
      `INSERT INTO ${this.table} (e_title, e_description, e_date, e_location) VALUES (?, ?, ?, ?)`,
      [title, description, date, location]
    );
  }

  getAllEvents() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }

  getEventById(id) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE e_id = ?`, [
      id,
    ]);
  }

  updateEvent(id, { title, description, date, location }) {
    const updates = [];
    const params = [];

    if (title) {
      updates.push("`e_title` = ?");
      params.push(title);
    }
    if (description) {
      updates.push("`e_description` = ?");
      params.push(description);
    }
    if (date) {
      updates.push("`e_date` = ?");
      params.push(date);
    }
    if (location) {
      updates.push("`e_location` = ?");
      params.push(location);
    }
    params.push(id);
    const sql = `UPDATE ${this.table} SET ${updates.join(", ")} WHERE e_id = ?`;
    return this.database.query(sql, params);
  }

  deleteEvent(id) {
    return this.database.query(`DELETE FROM ${this.table} WHERE e_id = ?`, [
      id,
    ]);
  }
}

module.exports = EventsManager;
