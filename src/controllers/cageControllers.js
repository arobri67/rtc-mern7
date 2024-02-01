const {
  getAllCagesDB,
  getCageByIdDB,
  createCageDB,
  updateCageDB,
  deleteCageDB,
  getAllMiceInACageDB,
  addMouseToCageDB,
} = require("../repositories/cageFunctions");

//GET ALL cages from the DB
const getAllCages = async (req, res) => {
  const cage = await getAllCagesDB();
  res.status(200).json({ data: cage });
};

//GET a cage by ID from DB
const getCageById = async (req, res) => {
  const { id } = req.params;
  const cage = await getCageByIdDB(id);
  res.status(200).json({ data: cage });
};

//GET all mice from on cage grabbed by ID
const getAllMiceInACage = async (req, res) => {
  const { id } = req.params;
  const mice = await getAllMiceInACageDB(id);
  res.status(200).json({ data: mice });
};

//POST create a cage
const createCage = async (req, res) => {
  const payload = req.body;
  const newCage = await createCageDB(payload);
  res.status(201).json({ data: newCage });
};

//PUT update a cage
const updateCage = async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  const updatedCage = await updateCageDB(id, payload);
  res.status(201).json({ data: updatedCage });
};
//PUT add a mouse to a cage grabbed by ID (if it is already in the cage it will be removed). It will also change the cage_id in the corresponding mouse in the Mouse document
const addMouseToCage = async (req, res) => {
  const { id } = req.params;
  const { mouseId } = req.body;
  const updatedCage = await addMouseToCageDB(id, mouseId);
  const { mice, rest } = updatedCage;
  res.status(201).json({ data: mice });
};

//DELETE remove a cage
const deleteCage = async (req, res) => {
  const { id } = req.params;
  deleteCageDB(id);
  res.status(204).send("Cage deleted successfully");
};

module.exports = {
  getAllCages,
  getCageById,
  createCage,
  updateCage,
  deleteCage,
  getAllMiceInACage,
  addMouseToCage,
};
