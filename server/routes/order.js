const Router = require("express").Router();
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyToken,
} = require("../middleware/verifyToken");
const Order = require("../models/Order");

// CREATE ORDER
Router.post("/", verifyToken, async (req, res) => {
  try {
    let newOrder = new Order({
      ...req.body,
    });

    newOrder = await newOrder.save();
    console.log(newOrder);
    res.status(201).json(newOrder);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// UPDATE ORDER
Router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
});

// DELETE PRODUCT
Router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted");
  } catch (err) {
    console.log(err);
    res.satus(500).json({ err });
  }
});

// GET USER ORDERS
Router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const allOrders = await Order.find({ userId: req.params.userId });
    return res.status(200).json(allOrders);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
});

// GET ALL ORDERs by ADMIN
Router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const allOrders = await Order.find();
    return res.status(200).json(allOrders);
  } catch {
    console.log(err);
    return res.status(500).json({ err });
  }
});

// GET MONTHLY INCOME
Router.get("/income", verifyTokenAndAdmin, async (req, res) => {
  try {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(
      new Date().setMonth(lastMonth.getMonth() - 1)
    );

    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);

    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = Router;
