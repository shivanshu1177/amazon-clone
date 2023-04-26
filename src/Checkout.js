import React from 'react'
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/audio/CITI/citi_pc.JPEG.jpg"
          alt=""
          className="checkout_add"
        />
        <div className="checkout_title">
          <h2>Your Shopping Basket</h2>
        </div>
      </div>

      <div className="checkout_right">
        <h2>Sub total will go here</h2>
        <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout
