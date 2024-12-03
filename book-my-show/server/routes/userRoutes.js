const express = require("express");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const cookies = require("cookie-parser");
const auth = require("../middlewares/authMiddleware");

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
    console.log("secret", process.env.JWT_SECRET);
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    console.log("token", token);
    res.cookie("token", token, {
      expires: new Date(Date.now() + 86400000),
      httpOnly: true,
    });
    res.send({
      success: true,
      message: "Login Successful",
      data: token,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

userRouter.get("/get-current-user", auth, async (req, res) => {
  const user = await User.findById(req.body.userId).select("-password");
  res.send({
    success: true,
    data: user,
    message: "You are authorized to go to the protected route",
  });
});

module.exports = userRouter;
