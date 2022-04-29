import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import "./Header.css";
const Header = () => {
  const [openMenu, setMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav-menu">
        <h2 className="logo">
          {" "}
          Car<span>Manager</span>
        </h2>
        <div onClick={() => setMenu(!openMenu)} className="humber-menu">
          {!openMenu ? <HiMenuAlt2 /> : <HiX />}
        </div>

        <ul
          onClick={() => setMenu(!openMenu)}
          className={`nav-items ${openMenu ? "open-menu" : ""}`}
        >
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/manage-item"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Manage Items
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/add-item"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Add Items
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/my-item"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              My Items
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Login
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Sin up
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
