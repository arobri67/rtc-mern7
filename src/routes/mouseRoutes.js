const express = require("express");
const router = express.Router();
const {
  getAllMice,
  getMouseById,
  createMouse,
  updateMouse,
  deleteMouse,
  getCageOfMouse,
  updateMouseCage,
  addMousePicture,
} = require("../controllers/mouseControllers");
const { hasValidJWTToken } = require("../middlewares/authentication");
const { uploadFile } = require("../middlewares/upload");

//GET ALL mice from the DB
router.get("/", getAllMice);

//GET a mouse by id
router.get("/:id", getMouseById);

//GET the cage of a mouse
router.get("/cage/:id", getCageOfMouse);

//POST create a new mouse
router.post("/", hasValidJWTToken, createMouse);

//POST add a picture to a mouse
router.post(
  "/add-picture/:id",
  hasValidJWTToken,
  uploadFile("mice"),
  addMousePicture
);

//PUT update a mouse
router.put("/:id", hasValidJWTToken, updateMouse);

//PUT update/delete the cage from a mouse
router.put("/update-mouse-cage/:id", hasValidJWTToken, updateMouseCage);

//DELETE a mouse
router.delete("/:id", hasValidJWTToken, deleteMouse);

module.exports = router;
