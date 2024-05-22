const AbstractManager = require("./AbstractManager");

class ImageManager extends AbstractManager {
  constructor() {
    super({ table: "images" });
  }

  createImage(imgPath, caption, galleryIg) {
    return this.database.query(
      `INSERT INTO ${this.table} (i_path, i_caption, i_gallery_id, date) VALUES (?, ?, ?, NOW())`,
      [imgPath, caption, galleryIg]
    );
  }

  getAllImagesByGallery(galleryId) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE i_gallery_id = ?`,
      [galleryId]
    );
  }

  getAllImages() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }

  updateImageWithNewPath(id, imgPath, caption) {
    return this.database.query(
      `UPDATE ${this.table} SET i_path = ?, i_caption = ? WHERE i_id = ? `,
      [imgPath, caption, id]
    );
  }

  updateCaptionOnly(id, caption) {
    return this.database.query(
      `UPDATE ${this.table} SET i_caption = ? WHERE i_id = ? `,
      [caption, id]
    );
  }

  deleteImage(id) {
    return this.database.query(` DELETE FROM ${this.table} WHERE i_id = ?`, [
      id,
    ]);
  }
}

module.exports = ImageManager;
