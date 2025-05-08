const { jwt } = require("../libs/index");
const { JWT_SECRET } = require("../config/");

const generateToken = async (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "4h" });
};

const verifyToken = async (token) => {
  return jwt.verify(token, JWT_SECRET);
};

module.exports = { generateToken, verifyToken };
