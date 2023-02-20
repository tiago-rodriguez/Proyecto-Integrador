const jwt = require("jsonwebtoken");
const { SECRET } = require("./envs");
//SECRET es el proceso x el cual vamos a ecriptar la info
const generateToken = (payload) => {
  const token = jwt.sign({ user: payload }, SECRET, { expiresIn: "2d" });
  return token;
};

const validateToken = (token) => {
  return jwt.verify(token, SECRET);
};

module.exports = { generateToken, validateToken };
