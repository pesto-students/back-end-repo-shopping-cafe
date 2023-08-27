const User = require("../../models/User.model");

exports.register = async (req, res, next) => {
  try {
    return res.status(201).json({
      status: "ok",
      message: "User Registered Successfully.",
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    return res.status(200).json({
      status: "ok",
      message: "User Loggedin Successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    return res.status(200).json({
      status: "ok",
      user: {},
    });
  } catch (error) {
    next(error);
  }
};
