require("dotenv").config();

const Product = require("../models/Product");
const mongoose = require("mongoose");
const { seedProducts } = require("./seedData");

mongoose.connect("mongodb://localhost:27017/buynow", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("DB connected");
});

// populate Product
async function populateProduct(seedProducts) {
  try {
    await Product.insertMany(seedProducts);
  } catch (err) {
    console.log(err);
  }
}
// populateProduct(seedProducts);


 
