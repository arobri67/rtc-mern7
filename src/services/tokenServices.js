const jwt = require("jsonwebtoken");

const tokenTimeout = "1hr";

const signToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET_TOKEN, {
    expiresIn: tokenTimeout,
  });
  return token;
};
const verifyToken = (token) => {
  const payload = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
  return payload;
};
module.exports = { signToken, verifyToken };
