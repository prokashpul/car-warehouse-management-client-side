import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiTruck, HiPencilAlt } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

import title from "../../../Utilities/dynamicName";
import "./UpdateInventory.css";
import Spinner from "../../Spinner/Spinner";
const UpdateInventory = () => {
  const [inventory, setInventory] = useState({});
  const { inventoryId } = useParams();
  const [delever, setDelever] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getSingleItem = async () => {
      setLoading(true);
      try {
        const { data } = await axios(
          `https://hidden-lake-88703.herokuapp.com/inventory/${inventoryId}`
        );
        setInventory(data);
        setLoading(false);
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
    const add = async () => {
      const addQuantity =
        parseInt(inventory.quantity) + parseInt(data.quantity);
      inventory.quantity = addQuantity;

      try {
        const url = `https://hidden-lake-88703.herokuapp.com/cars/${inventory?._id}`;
        await axios.put(url, { inventory });
        // console.log(data);
      } catch (error) {
        toast(error.message);
      }
    };
    add();
    reset();
  };
  const handelDelever = () => {
    const add = async () => {
      if (inventory.quantity > 0) {
        const addQuantity = parseInt(inventory.quantity) - 1;
        inventory.quantity = addQuantity;
        setDelever(inventory.quantity);
        try {
          const url = `https://hidden-lake-88703.herokuapp.com/cars/${inventory?._id}`;
          await axios.put(url, { inventory });
        } catch (error) {
          toast(error.message);
        }
      }
    };
    add();
  };

  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="container">
      <div className="update-inventory">
        <img src={inventory?.img} alt="" />
        <h2>{inventory?.name}</h2>
        <strong>Car ID: {inventory?._id}</strong>
        <p>{inventory?.des}</p>
        <strong>
          Price: $
          {inventory?.price
            ? inventory?.price
            : "https://i.ibb.co/SdvvYNp/no-image.jpg"}
        </strong>
        <br />
        <strong>
          In Stock: {inventory.quantity === 0 ? "Sold Out" : inventory.quantity}
        </strong>
        <br />
        <strong>Supplier: {inventory?.supplier}</strong>
        <div className="update-form">
          <button onClick={handelDelever} className="btn">
            <HiTruck /> Deliver
          </button>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                type="number"
                id="quantity"
                name="quantity"
                placeholder="Add Quantity"
                min="0"
                {...register("quantity", {
                  required: "You must specify a quantity",
                })}
              />

              <button className="btn" type="submit">
                <HiPencilAlt /> Add
              </button>
            </div>
            {errors.quantity && (
              <p className="form-error">{errors.quantity.message}</p>
            )}
          </form>
        </div>
        <div className="inventory-bottom">
          <button
            className="btn"
            onClick={() => navigate("/inventories/all-inventory")}
          >
            Manage all inventory
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateInventory;
