const jwt = require("jsonwebtoken");
const HttpError = require("../models/errorModel");

const authMiddleware = async (req, res, next) => {
  const authorization = req.headers.authorization;

  if (authorization && authorization.startsWith("Bearer ")) {
    const token = authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, info) => {
      if (err) {
        return next(new HttpError("Unauthorised. Invalid token.", 403));
      }

      req.user = info;
      next();
    });
  } else {
    return next(new HttpError("Unauthorised. No token", 402));
  }
};

module.exports = authMiddleware;
