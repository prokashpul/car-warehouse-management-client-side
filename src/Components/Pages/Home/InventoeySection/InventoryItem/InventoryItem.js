import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import "./InventoryItem.css";

const InventoryItem = ({ inventory }) => {
  const navigate = useNavigate();
  const { name, img, price, quantity, des, supplier, _id } = inventory || {};
  const updateButton = (id) => {
    navigate(`/update/${id}`);
  };
  return (
    <div data-aos="fade-up" className="inventory-item ">
      <div className="inventory-header">
        <img src={img} alt={name} />
      </div>
      <div className="inventory-body">
        <h3>{name}</h3>
        <p>{des.length >= 30 ? des.slice(0, 30) : des}</p>
        <h4>
          Price:
          <span>
            ${price ? price : "https://i.ibb.co/SdvvYNp/no-image.jpg"}
          </span>{" "}
        </h4>
        <strong>
          Stock: <span>{quantity} </span>
        </strong>
        <p>Supplier : {supplier}</p>
      </div>
      <button onClick={() => updateButton(_id)} className="btn">
        <HiOutlineArrowSmRight /> Update
      </button>
    </div>
  );
};

export default InventoryItem;
