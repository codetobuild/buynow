const Router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER USER
Router.post("/register", async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: getHashPasword(req.body.password),
    });

    const savedNewUser = await newUser.save();

    res.status(201).json(savedNewUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// LOGIN USER
Router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      throw new Error("User not found");
    }

    const passwordValid = validatePassword(user.password, req.body.password);

    if (passwordValid) {
      const accessToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "3d" }
      );
      const { password, ...others } = user._doc;
      return res.status(200).json({ ...others, accessToken });
    } else {
      throw new Error("Wrong credentials");
    }
  } catch (err) {
    console.log(err);
    return res.status(401).json({ error: err.message });
  }
});

// hash plain password
function getHashPasword(plainPassword) {
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(plainPassword, salt);

  return hashPassword;
}

// validate PASSWORD
function validatePassword(hashPassword, inputedPassword) {
  return bcrypt.compareSync(inputedPassword, hashPassword);
}

module.exports = Router;
