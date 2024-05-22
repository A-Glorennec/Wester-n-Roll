const tables = require("../tables");

const createComment = async (req, res) => {
  try {
    const { text } = req.body;
    const { imageId } = req.params;
    const userId = req.payload;
    const [results] = await tables.comments.createComment(
      text,
      userId,
      imageId
    );
    if (results.affectedRows) {
      res.status(201).json({ message: "Comment created" });
    } else {
      res.status(401).send("Error during comment creation");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getCommentsByImage = async (req, res) => {
  try {
    const { imageId } = req.params;

    const [results] = await tables.comments.getAllCommentsByImage(imageId);

    if (results.length) {
      res.status(200).json({ message: "List of comments by image", results });
    } else {
      res.status(404).send("No comments found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateComment = async (req, res) => {
  try {
    const { text } = req.body;
    const userId = req.payload;
    const { id } = req.params;
    const [results] = await tables.comments.updateComment(text, userId, id);

    if (results.affectedRows) {
      res.status(201).json({ message: "Comment updated" });
    } else {
      res.status(401).send("Error during comment creation");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteComment = async (req, res) => {
  try {
    const userId = req.payload;
    const { id } = req.params;
    const [results] = await tables.comments.deleteComment(userId, id);

    if (results.affectedRows) {
      res.status(201).json({ message: "Comment deleted" });
    } else {
      res.status(401).send("Error during comment delete");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  createComment,
  getCommentsByImage,
  updateComment,
  deleteComment,
};
