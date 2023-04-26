import React from 'react';
import "./Product.css";
import { useStateValue } from './Stateprovider';


function Product({id, info, rating, price, image}) {
  const [{ basket }, dispatch] = useStateValue();
  
  console.log("This is basket >>>", basket);
  
  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        info: info,
        rating: rating,
        price: price,
        image: image,
      },
    });

  };
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

      <button className="product_submit" onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product
