import React from "react";
import { useNavigate } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="home-banner ">
      <div className="banner-container container">
        <div className="banner-left">
          <h4>Search Your Dreams Car</h4>
          <h1>WEB CAR MANAGER INVENTORY</h1>
          <button
            onClick={() => navigate("/inventories/all-inventory")}
            className="btn"
          >
            Explore Now
          </button>
        </div>
        <div className="banner-right">
          <img src="https://i.ibb.co/G2JRJfP/right-image-search.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
