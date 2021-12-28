const Router = require("express").Router();
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

Router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    if (req.body.password) {
      req.body.password = getHashPasword(req.body.password);
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    return res.status(200).json(updatedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
});

// DELETE USER
Router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("user has been deleted");
  } catch (err) {
    console.log(err);
    res.satus(500).json({ err });
  }
});

// GET USER ADMIN
Router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const { password, ...others } = user._doc;
    return res.status(200).json({ ...others });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
});
// GET ALL USER
Router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const newUserQuery = req.query.new;
    const users = newUserQuery
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find({});
    return res.status(200).json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
});

// GET USER STATS
Router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  try {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// hash plain password

function getHashPasword(plainPassword) {
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(plainPassword, salt);

  return hashPassword;
}
module.exports = Router;
