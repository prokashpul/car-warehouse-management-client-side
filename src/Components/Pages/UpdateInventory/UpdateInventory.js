import axios from "axios";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

import title from "../../../Utilities/dynamicName";
import "./UpdateInventory.css";
const UpdateInventory = () => {
  const [inventory, setInventory] = useState({});
  const { inventoryId } = useParams();
  const [delever ,setDelever] = useState(0)

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
 console.log(inventory.quantity)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
   const add =async ()=>{
   const addQuerry = parseInt(inventory.quantity) + parseInt(data.quantity);
   inventory.quantity = addQuerry;
     
    try {
      const url =`http://localhost:5000/cars/${inventory?._id}`
      const {data}=await axios.put(url,{inventory})
      console.log(data)

    }catch (error) {
        toast(error.message);
      }
   }
   add()
    reset();
  };
const handelDelever =()=>{
  const add =async ()=>{
    if(inventory.quantity > 0){
  const addQuerry = parseInt(inventory.quantity) - 1;
  inventory.quantity = addQuerry;
     
    try {
      const url =`http://localhost:5000/cars/${inventory?._id}`
      const {data} = await axios.put(url,{inventory})
      console.log(data)

    }catch (error) {
        toast(error.message);
      }
   }
  
   setDelever(inventory.quantity)
  }
  add()
}
  return (
    <div className="container">
      <div className="update-inventory">
        <img src={inventory?.img} alt="" />
        <h2>{inventory?.name}</h2>
        <strong>Car ID: {inventory?._id}</strong>
        <p>{inventory?.des}</p>
        <strong>Price: ${inventory?.price}</strong>
        <br />
        <strong>In Stock: {inventory.quantity === 0? "Sold Out"  : inventory.quantity }</strong>
        <br />
        <strong>Supplier: {inventory?.supplier}</strong>
        <div className="update-form">
          <button onClick={handelDelever} className="btn">Deliver</button>
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
