const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticate = (req, res, next) => {
  const bearerToken = req.headers.authorization;
  if (bearerToken) {
    const token = bearerToken.split("Bearer ")[1];
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY, "HS512");
      next();
    } catch (error) {
      next({
        status: 400,
        errorContent: error,
        message: "Invalid Token",
      });
    }
  } else {
    next({
      status: 400,
      errorContent: "No token provided",
      message: "No token provided",
    });
  }
};

const authorizationOwner = (req, res, next) => {
  const bearerToken = req.headers.authorization;
  if (bearerToken) {
    const token = bearerToken.split("Bearer ")[1];
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY, "HS512");
      if(decoded.email === 'corporationglya@gmail.com') {
        next();
      } else {
        next({status: 401, errorContent: "Only Alpha owner can update company status", message: "Unauthorized"})
      }
    } catch (error) {
      next({
        status: 401,
        errorContent: error,
        message: "Invalid Token",
      });
    }
  } else {
    next({
      status: 400,
      errorContent: "No token provided",
      message: "No token provided",
    });
  }
};

module.exports = {
  authenticate,
  authorizationOwner
};