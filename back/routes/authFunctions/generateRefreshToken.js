const jwt = require("jsonwebtoken");

function generateRefreshToken() {
  return jwt.sign({}, process.env.JWT_SECRET, { expiresIn: "7d" });
}

module.exports = generateRefreshToken;
