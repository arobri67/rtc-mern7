const { User } = require("../models/users");

const createUserDB = async (payload) => {
  try {
    const user = await User.findOne({ email: payload.email });
    if (user) {
      return null;
    } else if (!user) {
      const newUser = new User(payload);
      await newUser.save();
      const { password, ...rest } = newUser.toObject();
      return rest;
    }
  } catch (err) {
    console.error("Error in getAllMiceDB", err);
  }
};

const getUserByEmailDB = async (email) => {
  const user = await User.findOne({ email }).lean();
  return user;
};
module.exports = { createUserDB, getUserByEmailDB };
