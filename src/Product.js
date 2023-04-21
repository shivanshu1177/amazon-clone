import React from 'react';
import "./Product.css";


function Product({key, info, rating, price, image}) {
  return (
    <div className="product">
      <div className="product_info">
        <p>{info}</p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        
        <div className="{product_price}">
          <small>₹</small>
          <strong>{price}/-</strong>
        </div>
      </div>

      <img src={image} alt="" className="product_image" />
      <button className="product_submit">Add to basket</button>
    </div>
  );
}

export default Product
