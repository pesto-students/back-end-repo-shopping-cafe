require("dotenv").config();
const user_jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // get auth header value
  const bearerHeader = req.headers["authorization"];
  // check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Format of token
    // Authorization: Bearer <access_token>
    try {
      //split at the space
      const bearer = bearerHeader.split(" ");
      // get token from array
      const bearerToken = bearer[1];
      // set the token
      req.token = bearerToken;
      // next middleware

      const decoded = user_jwt.verify(bearerToken, process.env.USER_JWT_SECRET);
      req.user = decoded;
      res.locals.userPayload = req.user;
    } catch (error) {
      res.locals.userPayload = null;
      return res.status(401).send({ error: "Invalid Token" });
    }
  } else {
    //forbidden
    res.locals.userPayload = null;
    return res
      .status(403)
      .send({ message: "A token is required for authentication" });
  }

  return next();
};

module.exports = verifyToken;
