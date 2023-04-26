import React from 'react'
import "./CheckoutProduct.css";
function CheckoutProduct({ id, image, info, price, rating }) {
  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct_image' src={image} alt="" />

        <div className='checkoutProduct_info'>
            <p className='checkoutProduct_title'>{info}</p>
            <p className='checkoutProduct_price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct_rating'>
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>🌟</p>
                ))}
            </div>

            <button>Remove from basket</button>

        </div>
      
    </div>
  )
}

export default CheckoutProduct
