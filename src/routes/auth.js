const express = require("express");
const createUser = require("../controllers/usersControllers");
const router = express.Router();

//POST register, create a new user (email, password)
router.post("/register", createUser);

//router.post("/login", loginUser);

module.exports = router;
