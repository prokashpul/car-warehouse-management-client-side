import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateInventory = () => {
  const [inventory, setInventory] = useState({});
  const { inventoryId } = useParams();

  useEffect(() => {
    const getSingleItem = async () => {
      try {
        const { data } = await axios(
          `http://localhost:5000/inventory/${inventoryId}`
        );
        setInventory(data);
      } catch (error) {
        toast(error.message);
      }
    };
    getSingleItem();
  }, [inventoryId]);

  return (
    <div>
      update {inventory.name}
      <button className="btn">Deliver</button>
    </div>
  );
};

export default UpdateInventory;
