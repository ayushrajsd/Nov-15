const express = require("express");
const User = require("../models/userModel");

const userRouter = express.Router();

// register a user

userRouter.post("/register", async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      return res.send({
        success: false,
        message: "User already exists",
      });
    }
    const newUser = new User(req.body);
    await newUser.save();
    res.send({
      success: true,
      message: "Registration Successfull. Please login to continue",
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.send({
        success: false,
        message: "User not found. Please register first",
      });
    }
    if (req.body.password !== user.password) {
      return res.send({
        success: false,
        message: "Password is incorrect",
      });
    }
    res.send({
      success: true,
      message: "Login Successful",
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = userRouter;
