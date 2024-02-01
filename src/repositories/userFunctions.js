const { User } = require("../models/users");

const createUserDB = async (payload) => {
  const user = await User.findOne({ email: payload.email });
  if (user) {
    throw new Error("An account with email already exists");
  }
  const newUser = new User(payload);
  await newUser.save();
  const { password, ...rest } = newUser.toObject();
  return rest;
};
module.exports = { createUserDB };
