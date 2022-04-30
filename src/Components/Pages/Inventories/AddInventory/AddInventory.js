import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../firebase/firebase.init";
import title from "../../../../Utilities/dynamicName";
import "./AddInventory.css";
const AddInventory = () => {
  title("Create new inventory");
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (inventory) => {
    inventory.email = user.email;
    const { data } = await axios.post(
      "https://car-manager-server.herokuapp.com/cars",
      inventory
    );
    if (data.success) {
      toast.success(data?.message);
    } else {
      toast.error(data?.error);
    }
    reset();
  };
  return (
    <div className="add-form">
      <h2> Create new inventory</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-container">
          <div className="left">
            <div className="form-group">
              <input
                type="email"
                id="email"
                defaultValue={user?.email}
                {...register("email")}
                disabled
              />

              {errors.email && (
                <p className="form-error">{errors.email.message}</p>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                id="name"
                placeholder="Inventory Name"
                {...register("name", {
                  required: "You must specify a Name",
                })}
              />

              {errors.des && <p className="form-error">{errors.des.message}</p>}
            </div>
            <div className="form-group">
              <textarea
                type="text"
                id="name"
                placeholder=" Short Description"
                {...register("des", {
                  required: "You must specify a short Description",
                })}
              />

              {errors.des && <p className="form-error">{errors.des.message}</p>}
            </div>
          </div>
          <div className="right">
            <div className="form-group">
              <input
                type="number"
                id="price"
                placeholder="Price"
                {...register("price", {
                  required: "You must specify a price and only input number",
                })}
              />

              {errors.price && (
                <p className="form-error">{errors.price.message}</p>
              )}
            </div>
            <div className="form-group">
              <input
                type="number"
                id="quantity"
                placeholder="Quantity"
                {...register("quantity", {
                  required: "You must specify a Quantity and only input number",
                })}
              />

              {errors.quantity && (
                <p className="form-error">{errors.quantity.message}</p>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                id="supplier"
                placeholder="supplier name"
                {...register("supplier", {
                  required: "You must specify a supplier name",
                })}
              />

              {errors.supplier && (
                <p className="form-error">{errors.supplier.message}</p>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                id="image"
                placeholder="Image Url"
                {...register("img", {
                  required: "You must specify a image url",
                })}
              />

              {errors.img && <p className="form-error">{errors.img.message}</p>}
            </div>
          </div>
        </div>
        <input className="btn" type="submit" value="ADD Inventory" />
      </form>
      <p className="form-link">
        <Link to="/">Back to Home</Link>{" "}
      </p>
    </div>
  );
};

export default AddInventory;
