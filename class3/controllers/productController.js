const ProductModel = require("../models/product");

const getAllProducts = async (req, res) => {
  const products = await ProductModel.find();
  return res
    .status(200)
    .json({ message: "Product fetched successfully", products });
};

const getProductById = async (req, res) => {
  const id = req.params.id;
  const product = await ProductModel.findById(id);
  res.status(200).json({ message: "Product fetched successfully", product });
};

const updateProductById = async (req, res) => {
  await ProductModel.findByIdAndUpdate(req.params.id, req.body);
  return res.status(200).json({ message: "Product updated successfully" });
};

const createProduct = async (req, res) => {
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
};

const deleteProductById = async (req, res) => {
  await ProductModel.findByIdAndDelete(req.params.id);
  return res.status(200).json({ message: "Product deleted successfully" });
};

module.exports = {
  getAllProducts,
  getProductById,
  updateProductById,
  createProduct,
  deleteProductById,
};
