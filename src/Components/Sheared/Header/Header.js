import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import { signOut } from "firebase/auth";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase/firebase.init";

const Header = () => {
  const [openMenu, setMenu] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  // sticky nav
  window.addEventListener("scroll", () => {
    document
      .querySelector("nav")
      .classList.toggle("window-scroll", window.scrollY > 100);
  });
  return (
    <header className="header">
      <nav className="nav-menu">
        <h2 onClick={() => navigate("/")} className="logo">
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
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/blog"
            >
              Blog
            </NavLink>
          </li>

          {user ? (
            <>
              <li className="nav-item">
                <NavLink
                  to="/inventories/all-inventory"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Manage Items
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/inventories/add-inventory"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Add Items
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/inventories/my-items"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  My Items
                </NavLink>
              </li>

              <li onClick={() => signOut(auth)} className="nav-item ">
                <NavLink to="/login">
                  Log Out (
                  {user?.displayName.length >= 3
                    ? user?.displayName.slice(0, 3)
                    : user?.displayName}
                  )
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
