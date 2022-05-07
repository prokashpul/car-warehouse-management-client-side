import React from "react";
import { HiLocationMarker, HiMail, HiPhoneOutgoing } from "react-icons/hi";
import "./FooterMenu.css";
const FooterMenu = () => {
  return (
    <div className="footer-menu">
      <div className="footer-menu-container">
        <div className="contact">
          <h3>CONTACT US</h3>
          <address className="address">
            <ul>
              <li className="address-list">
                <HiLocationMarker /> 31 Segunbagicha Dahaka,1000
              </li>
              <li className="address-list">
                <HiMail />
                <a href="mailto:prokashpul2@gmail.com">
                  {" "}
                  prokashpul2@gmail.com
                </a>
              </li>
              <li className="address-list">
                <HiPhoneOutgoing />
                <a href="tel:+8801642133102">+8801642133102</a>
              </li>
            </ul>
          </address>
        </div>
        <div className="footer-link">
          <h3>USEFUL LINKS</h3>
          <ul>
            <li>Latest vehicles</li>
            <li>Post vehicle</li>
            <li>My vehicles</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="footer-gallery">
          <h3>FEATURED VEHICLES</h3>
          <div className="images-gallery">
            <img src="https://i.ibb.co/G2JRJfP/right-image-search.png" alt="" />
            <img
              src="https://i.ibb.co/3442DkZ/2015-honda-accord-coupe-2-door-i4-cvt-lx-s-angular-front-exterior-view-100484206-l.jpg"
              alt=""
            />
            <img
              src="https://i.ibb.co/f2yTCJ2/2020-Honda-Accord-Hybird-Touring-trim-level.png"
              alt=""
            />
            <img
              src="https://i.ibb.co/mzYdvLc/2015-honda-accord-coupe-pic-1967144347162540121-1600x1200.jpg"
              alt=""
            />
            <img
              src="https://i.ibb.co/N61SSxc/2015-honda-accord-sedan-sport-exterior-side1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMenu;
