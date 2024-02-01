const { hashPassword } = require("../services/hashServices");
const { createUserDB } = require("../repositories/userFunctions");
const { verifyPassword } = require("../services/authServices");

//POST register, create a new user (email, password)
const createUser = async (req, res) => {
  // const { email, password } = req.body;
  // console.log(verifyPassword(password));
  try {
    const { email, password } = req.body;
    if (!verifyPassword(password)) {
      res.status(400).json({
        data: "Invalid password. It must be at least 6 characters long with one uppercase, one lowercase, one number, and one special character.",
      });
    } else if (verifyPassword(password)) {
      const hash = await hashPassword(password);
      const newUser = await createUserDB({ email, password: hash });
      res.status(201).json({ data: newUser });
    }
  } catch (err) {
    console.error("Error in createUser", err);
    res.status(500).json({ data: "Error in createUser" });
  }
};

////POST login a user and get a token
// const loginUser = async;

module.exports = createUser;
