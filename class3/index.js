const express = require("express");
const productRouter = require("./routes/productRoutes");
const connectDB = require("./config/db");
const userRouter = require("./routes/userRoutes");

const app = express();
app.use(express.json());
connectDB();
/**
 * Routes
 */
app.use("/api/products", productRouter); // /api/products/1234 = GET
app.use("/api/users", userRouter); // /api/products/1234 = GET

// create a route to get all products
app.listen(3000, () => {
  console.log("Server is running");
});
