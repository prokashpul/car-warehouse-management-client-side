import React from "react";
import "./Services.css";
import { HiOutlineSearch, HiBell, HiOutlineSupport } from "react-icons/hi";
const Services = () => {
  return (
    <div className="services container">
      <div className="service-item">
        <HiOutlineSearch className="service-icon" />
        <h4>Search your dream car</h4>
      </div>
      <div className="service-item">
        <HiBell className="service-icon" />
        <h4>Suggested email alerts</h4>
      </div>
      <div className="service-item">
        <HiOutlineSupport className="service-icon" />
        <h4>Support 24/7</h4>
      </div>
    </div>
  );
};

export default Services;
