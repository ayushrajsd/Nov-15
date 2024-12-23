const express = require("express");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const app = express();
require("dotenv").config(); // load environment variables

const connectDB = require("./config/db"); // import DB connection
const userRouter = require("./routes/userRoutes");
const movieRouter = require("./routes/movieRoute");
const theatreRouter = require("./routes/theatreRoute");
const showRouter = require("./routes/showRoutes");
const bookingsRouter = require("./routes/bookingRoute");

// console.log("server", process.env);
connectDB(); // connect to DB

// rate limit middleware
// const apiLimiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // limit each IP to 100 requests per windowMs,
//   message: "Too many requests from this IP, please try again after sometime",
// });

// app.use("/api/", apiLimiter);
// app.use(helmet()); // set security headers
// app.use(mongoSanitize()); // sanitize data

/** Routes */
app.use(express.json()); // parse JSON bodies
app.use("/api/users", userRouter);
app.use("/api/movies", movieRouter);
app.use("/api/theatres", theatreRouter);
app.use("/api/shows", showRouter);
app.use("/api/bookings", bookingsRouter);

app.listen(8080, () => {
  console.log("Server is running at port 8080");
});
