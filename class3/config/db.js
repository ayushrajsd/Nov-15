const mongoose = require("mongoose");

const dbURL = `mongodb+srv://ayushrajsd:LR2x3RQjHraKHQC4@cluster0.coplr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const connectDB = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
