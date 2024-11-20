/**
 *
 * URL - mongodb+srv://ayushrajsd:LR2x3RQjHraKHQC4@cluster0.coplr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
 */
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
const dbURL = `mongodb+srv://ayushrajsd:LR2x3RQjHraKHQC4@cluster0.coplr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(dbURL)
  .then(function (connection) {
    console.log("Connected to DB");
  })
  .catch(function (err) {
    console.log(err);
  });

const productSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      required: true,
    },
    product_price: {
      type: String,
      required: true,
    },
    isInStock: {
      type: Boolean,
      default: true,
    },
    category: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
    },
    confirmPassword: {
      type: String,
      required: true,
      minLength: 8,
      validate: {
        validator: function () {
          return this.password === this.confirmPassword;
        },
        message: "Password and Confirm Password should be same",
      },
    },
  },
  { timestamps: true }
);

const ProductModel = mongoose.model("products", productSchema);

// create a route to create a product
app.post("/api/products", async (req, res) => {
  const body = req.body;
  try {
    const product = await ProductModel.create({
      product_name: body.product_name,
      product_price: body.product_price,
      category: body.category,
      isInStock: body.isInStock,
      password: body.password,
      confirmPassword: body.confirmPassword,
    });
    console.log(product);
    return res
      .status(201)
      .json({ message: "Product created successfully", product });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ message: "Error in creating product", err: err.message });
  }
});

app.get("/api/products", async (req, res) => {
  const products = await ProductModel.find();
  return res
    .status(200)
    .json({ message: "Product fetched successfully", products });
});

// get a product by id
app.get("/api/products/:id", async (req, res) => {
  const id = req.params.id;
  const product = await ProductModel.findById(id);
  res.status(200).json({ message: "Product fetched successfully", product });
});

// update a product by id
app.put("/api/products/:id", async (req, res) => {
  await ProductModel.findByIdAndUpdate(req.params.id, req.body);
  return res.status(200).json({ message: "Product updated successfully" });
});

app.delete("/api/products/:id", async (req, res) => {
  await ProductModel.findByIdAndDelete(req.params.id);
  return res.status(200).json({ message: "Product deleted successfully" });
});

// create a route to get all products
app.listen(3000, () => {
  console.log("Server is running");
});
