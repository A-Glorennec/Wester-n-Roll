const AbstractManager = require("./AbstractManager");

class LikesManager extends AbstractManager {
  constructor() {
    super({ table: "likes" });
  }

  addLike(userId, imageId) {
    return this.database.query(
      `INSERT INTO ${this.table} (l_user_id, l_image_id, date) VALUES (?, ?, NOW())`,
      [userId, imageId]
    );
  }

  deleteLike(userId, likeId) {
    return this.database.query(
      `DELETE FROM ${this.table} WHERE l_user_id = ? AND l_id = ?`,
      [userId, likeId]
    );
  }

  getLikesByImage(imageId) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE l_image_id = ?`,
      [imageId]
    );
  }
}
module.exports = LikesManager;
