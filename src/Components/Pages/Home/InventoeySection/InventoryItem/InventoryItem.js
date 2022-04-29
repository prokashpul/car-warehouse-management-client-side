import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import "./InventoryItem.css";

const InventoryItem = ({ inventory }) => {
  const { name, img, price, quantity, des, supplier, _id } = inventory || {};
  console.log(inventory);
  return (
    <div className="inventory-item ">
      <div className="inventory-header">
        <img src={img} alt={name} />
      </div>
      <div className="inventory-body">
        <h3>{name}</h3>
        <p>{des.length >= 30 ? des.slice(0, 30) : des}</p>
        <h4>
          Price:<span>${price}</span>{" "}
        </h4>
        <strong>
          Stock: <span>{quantity} </span>
        </strong>
        <p>Supplier : {supplier}</p>
      </div>
      <button className="btn">
        <HiOutlineArrowSmRight /> Update
      </button>
    </div>
  );
};

export default InventoryItem;
