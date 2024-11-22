const express = require("express");
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} = require("../controllers/productController");

const productRouter = express.Router();

productRouter.post("/", createProduct); // /api/products - POST

productRouter.get("/", getAllProducts);

// get a product by id
productRouter.get("/:id", getProductById); // api/products/1234

// update a product by id
productRouter.put("/:id", updateProductById);

productRouter.delete("/:id", deleteProductById);

module.exports = productRouter;
