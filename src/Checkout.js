import React from 'react'
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./Stateprovider"
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {

  const [{ basket, user }, dispatch] = useStateValue();

  return (
      <div className="checkout">
        <div className="checkout_left">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/audio/CITI/citi_pc.JPEG.jpg"
            alt=""
            className="checkout_add"
          />
          <div className="checkout_title">
            <h3>Hello, {user?.email}</h3>
            <h2>Your Shopping Basket</h2>

            {basket.map(item => (
              <CheckoutProduct
                id={item.id}
                info={item.info}
                rating={item.rating}
                price={item.price}
                image={item.image}
              />
            ))}
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
