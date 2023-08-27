const express = require("express");
const verifyToken = require("../../middlewares/verify_token");
const userController = require("../../controllers/user/auth");
const router = express.Router();

// register a user
router.post("/register", userController.register);

// login a user
router.post("/login", userController.login);
router.get("/:id", verifyToken, userController.getUser);

module.exports = router;
