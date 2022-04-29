import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import title from "../../../../Utilitis/dynamicName";
import { HiOutlineViewGrid, HiPencilAlt, HiCloud } from "react-icons/hi";
import "./Inventories.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase/firebase.init";
const Inventories = () => {
  title("Manage Inventories");
  const [user] = useAuthState(auth);
  return (
    <div className="inventories">
      <aside className="inventories-bar">
        <nav className="menu">
          <ul>
            <li className="item-item">
              <NavLink
                className={`nav-link ${({ isActive }) =>
                  isActive ? "active" : ""}`}
                to="/inventories/all-inventory"
              >
                <span>
                  <HiOutlineViewGrid /> All Inventory
                </span>
              </NavLink>
            </li>

            {user && (
              <>
                {" "}
                <li className="item-item">
                  <NavLink
                    className={`nav-link ${({ isActive }) =>
                      isActive ? "active" : ""}`}
                    to="/inventories/add-inventory"
                  >
                    <span>
                      <HiPencilAlt /> Add Inventory
                    </span>
                  </NavLink>
                </li>
                <li className="item-item">
                  <NavLink
                    className={`nav-link ${({ isActive }) =>
                      isActive ? "active" : ""}`}
                    to="/inventories/my-items"
                  >
                    <span>
                      <HiCloud /> My Items
                    </span>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </aside>

      <div className="inventories-main">
        <Outlet />
      </div>
    </div>
  );
};

export default Inventories;
