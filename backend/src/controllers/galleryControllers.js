const tables = require("../tables");

const createGallery = async (req, res) => {
  try {
    const { title, description, type } = req.body;
    const image = req.file ? req.file.path : null;

    const [results] = await tables.galleries.createGallery(
      title,
      description,
      type,
      image
    );
    if (results.affectedRows) {
      res.status(201).send("Created");
    } else {
      res.status(401).send("Error during gallery creation");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getGalleries = async (req, res) => {
  try {
    const [results] = await tables.galleries.getAllGalleries();

    if (results.length) {
      res.status(200).json({ message: "List of all galleries", results });
    } else {
      res.status(401).send("No galleries");
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching galleries", error: error.message });
  }
};

const getGalleryById = async (req, res) => {
  try {
    const { id } = req.params;
    const [results] = await tables.galleries.getGalleryById(id);

    if (results.length) {
      res.status(200).json({ message: "Gallery found", results });
    } else {
      res.status(404).send("No gallery found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateGallery = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, type } = req.body;

    let imagePath;
    if (req.file) {
      imagePath = req.file.path;
    }

    const [result] = await tables.galleries.updateGallery(id, {
      title,
      description,
      type,
      imagePath,
    });

    if (result.affectedRows) {
      res.status(201).send("Gallery updated");
    } else {
      res.status(404).send("Error during the update");
    }
  } catch (error) {
    res.status(500).send("An error occurred during the update");
  }
};

const deleteGallery = async (req, res) => {
  try {
    const { id } = req.params;
    const [results] = await tables.galleries.deleteGallery(id);
    if (results.affectedRows) {
      res.status(200).send("Gallery deleted");
    } else {
      res.status(401).send("Error during deleting gallery");
    }
  } catch (error) {
    res.status(500).send("An error occurred during the delete");
  }
};

module.exports = {
  createGallery,
  getGalleries,
  getGalleryById,
  updateGallery,
  deleteGallery,
};
