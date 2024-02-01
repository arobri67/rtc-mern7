const {
  getAllMiceDB,
  getMouseByIdDB,
  createMouseDB,
  updateMouseDB,
  deleteMouseDB,
  getCageOfMouseDB,
  updateMouseCageDB,
} = require("../repositories/mouseFunctions");

//GET ALL mice from the DB
const getAllMice = async (req, res) => {
  const mouse = await getAllMiceDB();
  res.status(200).json({ data: mouse });
};

//GET a mouse by id
const getMouseById = async (req, res) => {
  const { id } = req.params;
  const mouse = await getMouseByIdDB(id);
  res.status(200).json({ data: mouse });
};

//GET the cage of a mouse
const getCageOfMouse = async (req, res) => {
  const { id } = req.params;
  const cage = await getCageOfMouseDB(id);
  res.status(200).json({ data: cage });
};

//POST create a new mouse
const createMouse = async (req, res) => {
  const payload = req.body;
  const newMouse = await createMouseDB(payload);
  res.status(201).json({ data: newMouse });
};

//PUT update a mouse
const updateMouse = async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  const updatedMouse = await updateMouseDB(id, payload);
  res.status(201).json({ data: updatedMouse });
};

//PUT update/delete the cage from a mouse
const updateMouseCage = async (req, res) => {
  const { id } = req.params;
  const { action, cageId } = req.body;
  const updatedMouse = await updateMouseCageDB(id, action, cageId);
  res.status(201).json({ data: updatedMouse });
};

//DELETE a mouse
const deleteMouse = async (req, res) => {
  const { id } = req.params;
  deleteMouseDB(id);
  res.status(204).send("Mouse deleted successfully");
};

module.exports = {
  getAllMice,
  getMouseById,
  createMouse,
  updateMouse,
  deleteMouse,
  getCageOfMouse,
  updateMouseCage,
};
