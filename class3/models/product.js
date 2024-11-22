const mongoose = require("mongoose");

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
      type: [String],
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

productSchema.pre("save", function () {
  this.confirmPassword = undefined;
});

const validCategories = ["electronics", "clothes", "furniture", "stationery"];
productSchema.pre("save", function (next) {
  const invalidCategories = this.category.filter((category) => {
    return !validCategories.includes(category);
  });
  if (invalidCategories.length > 0) {
    // error scenario
    return next(
      new Error(`Invalid categories ${invalidCategories.join(", ")}`)
    );
  } else {
    // success scenario
    next();
  }
});

const ProductModel = mongoose.model("products", productSchema);

module.exports = ProductModel;
