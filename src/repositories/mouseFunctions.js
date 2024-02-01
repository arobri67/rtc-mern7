const { Cage } = require("../models/cages");
const { Mouse } = require("../models/mice");

//GET ALL mice from the DB
const getAllMiceDB = async () => {
  try {
    const mouse = Mouse.find({});
    return mouse;
  } catch (err) {
    console.error("Error in getAllMiceDB", err);
  }
};

//GET a mouse by id
const getMouseByIdDB = async (id) => {
  try {
    const mouse = Mouse.findById(id);
    return mouse;
  } catch (err) {
    console.error("Error in getMouseByIdDB", err);
  }
};

//GET the cage of a mouse
const getCageOfMouseDB = async (id) => {
  try {
    const cage = await Mouse.findById(id).populate("cage_id");
    return cage.cage_id;
  } catch (err) {
    console.error("Error in getCageOfMouseDB", err);
  }
};

//POST create a new mouse
const createMouseDB = async (payload) => {
  try {
    const newMouse = new Mouse(payload);
    await newMouse.save();
    return newMouse;
  } catch (err) {
    console.error("Error in createMouseDB", err);
  }
};

//PUT update a mouse
const updateMouseDB = async (id, payload) => {
  try {
    const updatedMouse = Mouse.findByIdAndUpdate(id, payload, { new: true });
    return updatedMouse;
  } catch (err) {
    console.error("Error in updateMouseDB", err);
  }
};

//PUT update/delete the cage from a mouse
const updateMouseCageDB = async (id, action, cageId) => {
  try {
    const updatedMouse = await Mouse.findById(id);
    const cage = await Cage.findById(cageId);
    if (action === "add") {
      updatedMouse.cage_id = cageId;
      cage.mice.push({ _id: id });
    } else if (action === "delete") {
      updatedMouse.cage_id = null;
      cage.mice = cage.mice.filter(
        (currentMouse) => currentMouse._id.toString() !== id.toString()
      );
    }
    await updatedMouse.save();
    await cage.save();
    return updatedMouse;
  } catch (err) {
    console.error("Error in updateMouseCageDB", err);
  }
};

//DELETE a mouse
const deleteMouseDB = async (id) => {
  try {
    await Mouse.findByIdAndDelete(id);
  } catch (err) {
    console.error("Error in deleteMouseDB", err);
  }
};

module.exports = {
  getAllMiceDB,
  getMouseByIdDB,
  createMouseDB,
  updateMouseDB,
  deleteMouseDB,
  getCageOfMouseDB,
  updateMouseCageDB,
};
