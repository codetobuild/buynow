import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import StripeCheckout from "react-stripe-checkout";
import styled from "styled-components";
import axios from "axios";

const STRIPE_KEY =
  "pk_test_51KAu18SJX0szYplOIM5PvaxKjqgIDyi6Kz2Oe5oRC2Hf8UgUCdQhEZCLrJSkcq2uBxLOAKcuPT3hraTj6KH3lw1T00ujIKpACk";
const Pay = (props) => {
  const [stripeToken, setStripeToken] = useState(null);

  let navigate = useNavigate();

  const onToken = (token) => {
    console.log(token);
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const URL = "http://localhost:4000/api/checkout/payment";

        const { data } = await axios.post(URL, {
          tokenId: stripeToken.id,
          amount: 100,
          description: "payment description",
        });

        // console.log(data);
        navigate("/success");
      } catch (error) {
        console.log(error);
      }
    };
    if (stripeToken) {
      makeRequest();
    }
  }, [stripeToken]);

  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `;
  const PayButton = styled.button`
    padding: 10px 20px;
    font-weight: 500;
    font-size: 18px;
    background-color: black;
    color: white;
    border-radius: 7px;
    cursor: pointer;
  `;

  return (
    <Container>
      <StripeCheckout
        name="Three Comma Co." // the pop-in header title
        description="your total is $100.00"
        image="https://png.pngtree.com/png-vector/20210628/ourlarge/pngtree-eye-glass-emoji-png-image_3506045.jpg"
        amount={1000} // cents
        currency="USD"
        stripeKey={STRIPE_KEY}
        email="example@email.co"
        shippingAddress
        billingAddress
        token={onToken} // submit callback
      >
        <PayButton className="btn btn-primary">Pay Now $20.00</PayButton>
      </StripeCheckout>
    </Container>
  );
};

export default Pay;
