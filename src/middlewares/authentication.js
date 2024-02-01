const { verifyToken } = require("../services/tokenServices");

const hasValidJWTToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const [, token] = authorization.split(" ");
    const payload = verifyToken(token);
    req.user = payload;
    next();
  } catch (err) {
    res.status(401).json({
      data: "Error you are not authenticated. Please login or create an account",
    });
  }
};

module.exports = { hasValidJWTToken };
