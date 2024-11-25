const express = require("express");
const app = express();
require("dotenv").config(); // load environment variables

const connectDB = require("./config/db"); // import DB connection
const userRouter = require("./routes/userRoutes");

// console.log("server", process.env);
connectDB(); // connect to DB

/** Routes */
app.use(express.json()); // parse JSON bodies
app.use("/api/users", userRouter);

app.listen(8082, () => {
  console.log("Server is running at port 8082");
});
