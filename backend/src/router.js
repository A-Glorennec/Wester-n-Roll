const express = require("express");

const router = express.Router();

// Controllers

const userControllers = require("./controllers/userControllers");
const galleryControllers = require("./controllers/galleryControllers");
const imageControllers = require("./controllers/imageControllers");
const eventsControllers = require("./controllers/eventsControllers");
const commentsControllers = require("./controllers/commentsControllers");
const likesControllers = require("./controllers/likesControllers");

// Midlewares
const hashPassword = require("./services/hashedPassword");
const verifyToken = require("./services/verifyToken");
const isAdmin = require("./services/isAdmin");
const upload = require("./services/upload");

/* ************************************************************************* */
// Define Your API Routes Here

/* ************************************************************************* */
// USERS ENTITY
/* ************************************************************************* */

// Add user
router.post("/signup", hashPassword, userControllers.create);
// login
router.post("/login", userControllers.readByEmail);
// Logout
router.post("/logout", userControllers.logout);
// Get user by id
router.get("/me", verifyToken, userControllers.readUserById);
// Get all users
router.get("/users", verifyToken, userControllers.read);

/* ************************************************************************* */
// GALLERIES ENTITY
/* ************************************************************************* */

// Create gallery
router.post(
  "/gallery",
  verifyToken,
  isAdmin,
  upload,
  galleryControllers.createGallery
);

// Get list of all galleries
router.get("/galleries", verifyToken, galleryControllers.getGalleries);

// get gallery by id
router.get("/galleries/:id", verifyToken, galleryControllers.getGalleryById);

// Update Gallery
router.patch(
  "/gallery/:id",
  verifyToken,
  isAdmin,
  upload,
  galleryControllers.updateGallery
);

// Delete gallery
router.delete(
  "/gallery/:id",
  verifyToken,
  isAdmin,
  galleryControllers.deleteGallery
);

/* ************************************************************************* */
// IMAGES ENTITY
/* ************************************************************************* */

// Create image
router.post(
  "/images",
  verifyToken,
  isAdmin,
  upload,
  imageControllers.createImage
);

// Get images by gallery
router.get(
  "/images/gallery/:id",
  verifyToken,
  imageControllers.getAllImagesByGallery
);

// get all images
router.get("/images", verifyToken, imageControllers.getAllImages);

// update image
router.patch(
  "/images/:id",
  verifyToken,
  isAdmin,
  upload,
  imageControllers.updateImage
);

// delete image
router.delete(
  "/images/:id",
  verifyToken,
  isAdmin,
  imageControllers.deleteImage
);

/* ************************************************************************* */
// EVENTS ENTITY
/* ************************************************************************* */

// Create event
router.post("/events", verifyToken, isAdmin, eventsControllers.createEvent);

// get all events
router.get("/events", eventsControllers.getAllEvents);

// get event by id
router.get("/events/:id", eventsControllers.getEventById);

// update event
router.patch(
  "/events/:id",
  verifyToken,
  isAdmin,
  eventsControllers.updateEvent
);

// Delete event
router.delete(
  "/events/:id",
  verifyToken,
  isAdmin,
  eventsControllers.deleteEvent
);

/* ************************************************************************* */
// COMMENTS ENTITY
/* ************************************************************************* */

// create comment
router.post(
  "/images/:imageId/comments",
  verifyToken,
  commentsControllers.createComment
);

// get all comments by image
router.get(
  "/images/:imageId/comments",
  verifyToken,
  commentsControllers.getCommentsByImage
);

// update comment
router.patch("/comments/:id", verifyToken, commentsControllers.updateComment);

// delete comment
router.delete("/comments/:id", verifyToken, commentsControllers.deleteComment);

/* ************************************************************************* */
// LIKES
/* ************************************************************************* */

// Add like
router.post("/images/:imageId/likes", verifyToken, likesControllers.addLike);

// delete like
router.delete(
  "/images/likes/:likeId",
  verifyToken,
  likesControllers.deleteLike
);

// get all like by image
router.get(
  "/images/:imageId/likes",
  verifyToken,
  likesControllers.getLikeByImage
);
module.exports = router;
