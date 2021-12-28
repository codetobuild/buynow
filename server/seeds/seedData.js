const RandomString = require("randomstring");

const getRandomString = (len = 32) => {
  return RandomString.generate(len);
};

// generate array of products
let seedProducts = [];
for (let i = 1; i <= 10; i++) {
  let newProduct = {
    title: "Product name" + getRandomString(10),
    desc: "Product description" + getRandomString(40),
    img: "https://image.freepik.com/free-photo/pink-sweater-front_125540-746.jpg",
    categories: ["tshirt", "shirt", "pants", "shoe", "coat"],
    size: ["XS", "S", "M", "L", "XL"],
    color: ["white", "black", "red", "blue", "green", "yellow"],
    price: 500,
  };

  seedProducts.push(newProduct);
}

module.exports = { seedProducts };
