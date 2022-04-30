import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import auth from "../../../firebase/firebase.init";
import title from "../../../Utilities/dynamicName";
import "./UpdateInventory.css";
const UpdateInventory = () => {
  const [inventory, setInventory] = useState({});
  const { inventoryId } = useParams();

  useEffect(() => {
    const getSingleItem = async () => {
      try {
        const { data } = await axios(
          `https://car-manager-server.herokuapp.com/inventory/${inventoryId}`
        );
        setInventory(data);
      } catch (error) {
        toast(error.message);
      }
    };
    getSingleItem();
  }, [inventoryId]);
  title(inventory.name);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    fetch(`https://car-manager-server.herokuapp.com/cars/${inventory?._id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(
        (data.quantity = inventory.quantity + data.quantity)
      ),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("create successfully");
      });
    reset();
  };

  return (
    <div className="container">
      <div className="update-inventory">
        <img src={inventory?.img} alt="" />
        <h2>{inventory?.name}</h2>
        <strong>Car ID: {inventory?._id}</strong>
        <p>{inventory?.des}</p>
        <strong>Price: ${inventory?.price}</strong>
        <br />
        <strong>In Stock: {inventory?.quantity}</strong>
        <br />
        <strong>Supplier: {inventory?.supplier}</strong>
        <div className="update-form">
          <button className="btn">Deliver</button>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                type="number"
                id="quantity"
                placeholder="Add Quantity"
                min="0"
                {...register("quantity", {
                  required: "You must specify a quantity",
                })}
              />
              <input className="btn" type="submit" value="Update" />
            </div>
            {errors.quantity && (
              <p className="form-error">{errors.quantity.message}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateInventory;
