import React from "react";
import posterImg from "./home_poster.jpg";
import "./Home.css";
import Product from "./Product.js";


function Home() {
  return (
    <div className="home">
      <div className="home_container">
        {/**poster */}
        <img src={posterImg} alt="" className="home_poster" />
        {/**rows*/}
        <div className="home_row">
          {/**product */}
          <Product
            id={"0"}
            info="Echo Dot (3rd Gen) - Smart speaker with Alexa (Black)"
            rating={4}
            price={3499}
            image="https://m.media-amazon.com/images/I/61EXU8BuGZL._SX425_.jpg"
          />
          {/**product */}
          <Product
            id={"1"}
            info="Apple iPhone 14 Pro Max (256 GB) - Space Black"
            rating={5}
            price={149990}
            image="https://m.media-amazon.com/images/I/610pghkO81L._SL1500_.jpg"
          />
          {/**product */}
          <Product
            id={"2"}
            info="Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder 2 lbs"
            rating={4}
            price={3199}
            image="https://m.media-amazon.com/images/I/61ojTw0BylS._SL1500_.jpg"
          />
          {/**product */}
          <Product
            id={"3"}
            info="Apple Watch Ultra [GPS + Cellular 49 mm] Smart Watch"
            rating={4}
            price={37700}
            image="https://m.media-amazon.com/images/I/810JR81LIsL._SL1500_.jpg"
          />
        </div>

        <div className="home_row">
          {/**product */}
          <Product
            id={"4"}
            info="Samsung 123.9cm (49inches) Gaming Monitor with 32:9 Aspect Ratio Display and 240Hz Refresh Rate."
            rating={3}
            price={139000}
            image="https://m.media-amazon.com/images/I/51+iB9+5HKL._SL1000_.jpg"
          />
        </div>

        <div className="home_row">
          {/**product */}
          <Product
            id={"5"}
            info="Tata Tea Gold, Black Tea, Pouch, 500g"
            rating={4}
            price={289}
            image="https://m.media-amazon.com/images/I/51kEujuYlpL._SL1000_.jpg"
          />
          {/**product */}
          <Product
            id={"6"}
            info="Drawstring Backpack Bag Women&Men Sport Gym Sack Cinch Bag with Zipper Pockets (navy cartoon shark)"
            rating={5}
            price={4933}
            image="https://m.media-amazon.com/images/I/61nxueE0+jL._UL1000_.jpg"
          />
          {/**product */}
          <Product
            id={"7"}
            info="Pigeon By Stovekraft Oven Toaster Grill (12624) 30 Liters Otg With Rotisserie, Oven Toaster And Grill For Grilling And Baking Cakes (Grey), Standard"
            rating={4}
            price={4500}
            image="https://m.media-amazon.com/images/I/51SHRLSCS0L._SL1000_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
