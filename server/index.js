require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

// Routes
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");
const paymentRoute = require("./routes/stripe");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("DB connected");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello, world");
});

app.use("/api/users/", authRoute);
app.use("/api/users/", userRoute);
app.use("/api/products/", productRoute);
app.use("/api/orders/", orderRoute);
app.use("/api/carts/", cartRoute);
app.use("/api/checkout/", paymentRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server- ${PORT}`);
});
