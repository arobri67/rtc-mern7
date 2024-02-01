const mongoose = require("mongoose");

const mouseSchema = new mongoose.Schema({
  identifier: Number,
  earPunch: String,
  strain: String,
  sex: String,
  dateOfBirth: String,
  genotype: String,
  fatherId: Number,
  motherId: Number,
  cage_id: { type: mongoose.Schema.Types.ObjectId, ref: "Cage" },
});

const Mouse = mongoose.model("Mouse", mouseSchema);

module.exports = { Mouse };
