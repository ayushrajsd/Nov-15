const express = require("express");
const app = express();
require("dotenv").config(); // load environment variables

const connectDB = require("./config/db"); // import DB connection
const userRouter = require("./routes/userRoutes");
const movieRouter = require("./routes/movieRoute");

// console.log("server", process.env);
connectDB(); // connect to DB

/** Routes */
app.use(express.json()); // parse JSON bodies
app.use("/api/users", userRouter);
app.use("/api/movies", movieRouter);

app.listen(8080, () => {
  console.log("Server is running at port 8080");
});
