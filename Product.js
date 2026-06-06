const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    // fields
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    category: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);