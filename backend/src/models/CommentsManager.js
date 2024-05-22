const AbstractManager = require("./AbstractManager");

class CommentsManager extends AbstractManager {
  constructor() {
    super({ table: "comments" });
  }

  createComment(text, userId, imageId) {
    return this.database.query(
      `INSERT INTO ${this.table} (c_text, c_user_id, c_image_id, date) VALUES (?, ?, ?,NOW())`,
      [text, userId, imageId]
    );
  }

  getAllCommentsByImage(imageId) {
    return this.database.query(
      `SELECT * FROM ${this.table} JOIN images ON comments.c_image_id = images.i_id WHERE images.i_id = ? ORDER BY comments.date DESC`,
      [imageId]
    );
  }

  updateComment(text, userId, commentId) {
    return this.database.query(
      `UPDATE ${this.table} SET c_text = ? WHERE c_user_id = ? AND c_id = ?`,
      [text, userId, commentId]
    );
  }

  deleteComment(userId, commentId) {
    return this.database.query(
      `DELETE FROM ${this.table} WHERE c_user_id = ? AND c_id = ?`,
      [userId, commentId]
    );
  }
}

module.exports = CommentsManager;
