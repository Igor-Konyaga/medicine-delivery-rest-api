const jwt = require("jsonwebtoken");
const { HttpError } = require("../utils/httpError");

exports.userToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });

exports.checkToken = (token) => {
  try {
    if (!token) throw new HttpError(401, "Not authorized");
    const { id } = jwt.verify(token, process.env.JWT_SECRET);

    return id;
  } catch (error) {
    throw new HttpError(401, "Not authorized");
  }
};
