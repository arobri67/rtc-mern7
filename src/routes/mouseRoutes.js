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
} = require("../controllers/mouseControllers");

//GET ALL mice from the DB
router.get("/", getAllMice);

//GET a mouse by id
router.get("/:id", getMouseById);

//GET the cage of a mouse
router.get("/cage/:id", getCageOfMouse);

//POST create a new mouse
router.post("/", createMouse);

//PUT update a mouse
router.put("/:id", updateMouse);

//PUT update/delete the cage from a mouse
router.put("/update-mouse-cage/:id", updateMouseCage);

//DELETE a mouse
router.delete("/:id", deleteMouse);

module.exports = router;
