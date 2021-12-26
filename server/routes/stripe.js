const Router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

Router.post("/payment", (req, res) => {
  console.log(req.body);

  stripe.charges.create(
    {
      currency: "usd",
      source: req.body.tokenId,
      amount: req.body.amount,
      description: req.body.description,
    },
    (stripeError, stripeResponse) => {
      if (stripeError) {
        console.log(stripeError);
        return res.status(500).json(stripeError);
      } else {
        console.log("success", stripeResponse);
        return res.status(200).json(stripeResponse);
      }
    }
  );
});

module.exports = Router;
