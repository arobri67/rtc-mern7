const {
  createUserDB,
  getUserByEmailDB,
  updateUserAvaterDB,
} = require("../repositories/userFunctions");
const {
  hashPassword,
  verifyHashPassword,
} = require("../services/hashServices");
const { verifyPassword } = require("../services/authServices");
const { signToken } = require("../services/tokenServices");

//POST register, create a new user (email, password)
const createUser = async (req, res) => {
  const { email, password } = req.body;
  if (!verifyPassword(password)) {
    res.status(400).json({
      data: "Invalid password. It must be at least 6 characters long with one uppercase, one lowercase, one number, and one special character.",
    });
  } else if (verifyPassword(password)) {
    const hash = await hashPassword(password);
    const newUser = await createUserDB({ email, password: hash });
    if (newUser === null) {
      res.status(409).json({
        data: "An account with this email already exists",
      });
    } else res.status(201).json({ data: newUser });
  }
};

////POST login a user and get a token
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await getUserByEmailDB(email);
  if (!user) {
    res.status(404).json({ data: "User not found" });
    return;
  }
  const isValidHashPassword = await verifyHashPassword(password, user.password);
  if (!isValidHashPassword) {
    res.status(409).json({ data: "Account and password do not match" });
    return;
  }
  const token = signToken({ id: user._id });
  const { password: userPassword, ...restUser } = user;
  res.status(200).json({ data: { token, restUser } });
};

//POST add avater to user account
const addAvatar = async (req, res) => {
  const { path } = req.file;
  const { id } = req.user;
  await updateUserAvaterDB(id, path);
  res.status(201).json({ data: "Sucess" });
};

module.exports = { createUser, loginUser, addAvatar };
