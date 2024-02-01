const express = require("express");
const router = express.Router();

//GET welcome message
router.get("/", (req, res) => {
  res.status(200).send("Welcome to MERN7 API Project");
});
//GENERAL error handeling
router.use("*", (req, res) => {
  res.status(404).send("Error 404, wrong URL request");
});
router.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).send("500 Internal server error");
});

module.exports = router;
