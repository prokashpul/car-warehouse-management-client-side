import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../../Spinner/Spinner";
import InventoryItem from "./InventoryItem/InventoryItem";
import "./InventorySection.css";

const InventorySection = () => {
  const [inventories, setInventories] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const url = `http://localhost:5000/cars?limit=6`;
      const { data } = await axios(url);
      if (data?.success) {
        setInventories(data.data);
        setLoading(false);
      } else {
        toast.error(data?.error);
      }
    };
    getData();
  }, []);
  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="container">
      <h2 className="inventory-heading">Inventories</h2>
      <div className="home-inventory">
        {inventories?.map((inventory) => (
          <InventoryItem
            keys={inventory?._id}
            inventory={inventory}
          ></InventoryItem>
        ))}
      </div>
      <div className="inventory-bottom">
        <button
          className="btn"
          onClick={() => navigation("/inventories/all-inventory")}
        >
          Manage all inventory
        </button>
      </div>
    </div>
  );
};

export default InventorySection;
