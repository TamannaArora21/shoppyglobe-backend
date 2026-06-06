const Cart = require("../models/Cart");
// Add product to cart

const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const item = await Cart.create({
      productId,
      quantity,
      userId: req.user.id,
    });

    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// Update cart item quantity

const updateCart = async (req, res) => {
  try {
    const item = await Cart.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        message: "Cart item not found",
      });
    }

    item.quantity = req.body.quantity;

    await item.save();

    res.json(item);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// Remove item from cart

const deleteCart = async (req, res) => {
  try {
    const item = await Cart.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        message: "Cart item not found",
      });
    }

    await item.deleteOne();

    res.json({
      message: "Item removed from cart",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addToCart,
  updateCart,
  deleteCart,
};