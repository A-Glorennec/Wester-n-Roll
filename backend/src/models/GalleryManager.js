const AbstractManager = require("./AbstractManager");

class GalleryManager extends AbstractManager {
  constructor() {
    super({ table: "galleries" });
  }

  createGallery(title, description, type, image) {
    return this.database.query(
      `INSERT INTO ${this.table} (g_title, g_description, g_type, g_image) VALUES (?, ?, ?, ?)`,
      [title, description, type, image]
    );
  }

  getAllGalleries() {
    return this.database.query(`SELECT * FROM ${this.table}`, []);
  }

  getGalleryById(id) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE g_id = ?`, [
      id,
    ]);
  }

  updateGallery(id, { title, description, type, imagePath }) {
    const updates = [];
    const params = [];

    if (title) {
      updates.push("g_title = ?");
      params.push(title);
    }
    if (description) {
      updates.push("g_description = ?");
      params.push(description);
    }
    if (type) {
      updates.push("g_type = ?");
      params.push(type);
    }
    if (imagePath) {
      updates.push("g_image = ?");
      params.push(imagePath);
    }

    if (updates.length === 0) {
      throw new Error("No fields specified for update");
    }

    params.push(id);
    const sql = `UPDATE ${this.table} SET ${updates.join(", ")} WHERE g_id = ?`;
    return this.database.query(sql, params);
  }

  deleteGallery(id) {
    return this.database.query(`DELETE from ${this.table} where g_id = ?`, [
      id,
    ]);
  }
}

module.exports = GalleryManager;
