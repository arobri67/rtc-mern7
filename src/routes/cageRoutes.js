const express = require("express");
const {
  getAllCages,
  getCageById,
  createCage,
  updateCage,
  deleteCage,
  getAllMiceInACage,
  addMouseToCage,
} = require("../controllers/cageControllers");
const { hasValidJWTToken } = require("../middlewares/authentication");
const router = express.Router();

//GET ALL cages from the DB
router.get("/", getAllCages);

//GET a cage by ID from DB
router.get("/:id", getCageById);

//GET all mice from on cage grabbed by ID
router.get("/mice-list/:id", getAllMiceInACage);

//POST create a cage
router.post("/", hasValidJWTToken, createCage);

//PUT update a cage
router.put("/:id", hasValidJWTToken, updateCage);

//PUT add a mouse to a cage grabbed by ID (if it is already in the cage it will be removed). It will also change the cage_id in the corresponding mouse in the Mouse document
router.put("/add-mouse-to-cage/:id", hasValidJWTToken, addMouseToCage);

//DELETE remove a cage
router.delete("/:id", hasValidJWTToken, deleteCage);

module.exports = router;
