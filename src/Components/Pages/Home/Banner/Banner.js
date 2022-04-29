import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="home-banner ">
      <div className="banner-container container">
        <div className="banner-left">
          <h4>Search Your Dreams Car</h4>
          <h2>WEB CUR MANAGER INVENTORY</h2>
          <button className="btn">Explore Now</button>
        </div>
        <div className="banner-right">
          <img src="https://i.ibb.co/G2JRJfP/right-image-search.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
