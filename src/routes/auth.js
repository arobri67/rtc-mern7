const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  addAvatar,
} = require("../controllers/usersControllers");
const { hasValidJWTToken } = require("../middlewares/authentication");
const { uploadFile } = require("../middlewares/upload");

//POST register, create a new user (email, password)
router.post("/register", createUser);

//POST login a user and get a jwtoken
router.post("/login", loginUser);

//POST add avatar to user account
router.post("/add-avatar", hasValidJWTToken, uploadFile("users"), addAvatar);

module.exports = router;
