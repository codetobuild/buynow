const Router = require("express").Router();
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");
const Product = require("../models/Product");

// CREATE PRODUCT
Router.post("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    let newProduct = new Product({
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

// UPDATE PRODUCT
Router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
});

// DELETE PRODUCT
Router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted");
  } catch (err) {
    console.log(err);
    res.satus(500).json({ err });
  }
});

// GET ONE PRODUCT
Router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    return res.status(200).json(product);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
});

// GET ALL PRODUCTS
Router.get("/", async (req, res) => {
  try {
    const newQuery = req.query.new;
    const categoryQuery = req.query.category;


    let products = [];

    if (newQuery) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (categoryQuery) {
      products = await Product.find({
        categories: { $in: [categoryQuery] },
      });
    } else {
<<<<<<< HEAD
      products = await Product.find();
    }
    // console.log(products);

=======
      console.log("products");

      products = await Product.find();
    }
>>>>>>> 783c20030809a80e3f2d8c4e20f65ca5f7f3f2d1
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
});

module.exports = Router;
