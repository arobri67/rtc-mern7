const mongoose = require("mongoose");

const cageSchema = new mongoose.Schema({
  name: String,
  location: String,
  rack: String,
  type: String,
  diet: String,
  enrichment: String,
  mice: [{ type: mongoose.Schema.Types.ObjectId, ref: "Mouse" }],
});

const Cage = mongoose.model("Cage", cageSchema);

module.exports = { Cage };
