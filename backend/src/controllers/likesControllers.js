const tables = require("../tables");

const addLike = async (req, res) => {
  try {
    const userId = req.payload;
    const { imageId } = req.params;

    const [results] = await tables.likes.addLike(userId, imageId);

    if (results.affectedRows) {
      res.status(201).send("Like added");
    } else {
      res.status(401).send("Error to add like");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteLike = async (req, res) => {
  try {
    const userId = req.payload;
    const { likeId } = req.params;

    const [results] = await tables.likes.deleteLike(userId, likeId);

    if (results.affectedRows) {
      res.status(201).send("Like removed");
    } else {
      res.status(401).send("Error to remove like");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getLikeByImage = async (req, res) => {
  try {
    const { imageId } = req.params;

    const [results] = await tables.likes.getLikesByImage(imageId);

    if (results.length) {
      res.status(200).json({ message: "Like by image", results });
    } else {
      res.status(404).send("Any like");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { addLike, deleteLike, getLikeByImage };
