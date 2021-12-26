const Router = require("express").Router();
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyToken,
} = require("../middleware/verifyToken");
const Cart = require("../models/Cart");

// CREATE CART
Router.post("/", verifyToken, async (req, res) => {
  try {
    let newProduct = new Cart({
      ...req.body,
    });

    newProduct = await newProduct.save();
    console.log(newProduct);
    res.status(201).json(newProduct);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// UPDATE CART
Router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
});

// DELETE PRODUCT
Router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted");
  } catch (err) {
    console.log(err);
    res.satus(500).json({ err });
  }
});

// GET USER CART
Router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    return res.status(200).json(cart);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
});

// GET ALL
Router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const allCarts = await Cart.find();
    return res.status(200).json(allCarts);
  } catch {
    console.log(err);
    return res.status(500).json({ err });
  }
});

module.exports = Router;
