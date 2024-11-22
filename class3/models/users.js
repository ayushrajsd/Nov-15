const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  createdAt: Date,
  updatedAt: Date,
});

userSchema.pre("save", function (next) {
  console.log("Pre save hook called");
  const now = new Date();
  this.updatedAt = now;
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

userSchema.post("save", function (doc, next) {
  console.log("Post save hook called");
  console.log(`User ${doc.name} has been saved`);
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
