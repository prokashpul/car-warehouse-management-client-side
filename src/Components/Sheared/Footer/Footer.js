import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright">
        Copyright by &copy; {new Date().getFullYear()}{" "}
        <Link to="/">
          <span>car-manager</span>
        </Link>{" "}
      </div>
    </footer>
  );
};

export default Footer;
