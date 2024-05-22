const tables = require("../tables");

const createImage = async (req, res) => {
  try {
    const { caption, galleryId } = req.body;
    const image = req.file.path;
    const [results] = await tables.images.createImage(
      image,
      caption,
      galleryId
    );

    if (results.affectedRows) {
      res.status(201).send("Created");
    } else {
      res.status(401).send("Error during image creation");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllImagesByGallery = async (req, res) => {
  try {
    const { id } = req.params;
    const [results] = await tables.images.getAllImagesByGallery(id);
    if (results.length) {
      res.status(200).json({ message: "List of images by gallery", results });
    } else {
      res.status(404).json({ message: "No images found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllImages = async (req, res) => {
  try {
    const [results] = await tables.images.getAllImages();
    if (results.length) {
      res.status(200).json({ message: "List of all images", results });
    } else {
      res.status(404).send("No images found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateImage = async (req, res) => {
  try {
    const { id } = req.params;
    const { caption } = req.body;
    let image = null;
    if (req.file) {
      image = req.file.path;
    }

    const [result] = image
      ? await tables.images.updateImageWithNewPath(id, image, caption)
      : await tables.images.updateCaptionOnly(id, caption);

    if (result.affectedRows) {
      res.status(201).send("Image updated");
    } else {
      res.status(401).send("Error during image update");
    }
  } catch (error) {
    console.error("Error updating image:", error);
    res.status(500).send(error);
  }
};

const deleteImage = async (req, res) => {
  try {
    const { id } = req.params;
    const [results] = await tables.images.deleteImage(id);

    if (results.affectedRows) {
      res.status(200).send("Image deleted");
    } else {
      res.status(404).send("Error during image delete");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createImage,
  getAllImagesByGallery,
  getAllImages,
  updateImage,
  deleteImage,
};
