import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";
import auth from "../../../../firebase/firebase.init";
import title from "../../../../Utilities/dynamicName";
import Spinner from "../../../Spinner/Spinner";
import DataTables from "../AllInventory/DataTable/DataTables";
import Swal from "sweetalert2";
import "./MyItem.css";

const MyItems = () => {
  title("Manage My Inventories");
  const [inventories, setInventories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    const runData = async () => {
      setLoading(true);
      const { data } = await axios(
        `https://hidden-lake-88703.herokuapp.com/cars?email=${user.email}`
      );
      if (data?.success) {
        const myData = data.data.filter((myInv) => myInv.email === user.email);
        setInventories(myData);
        setLoading(false);
      } else {
        toast.error(data?.error);
      }
    };
    runData();
  }, [user.email]);
  const deleteItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://hidden-lake-88703.herokuapp.com/cars/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const reaming = inventories?.filter((inv) => inv._id !== id);
            setInventories(reaming);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          });
      }
    });
  };
  const columns = useMemo(
    () => [
      {
        Header: "Car Name",
        accessor: "name",
      },
      {
        Header: "Image",
        accessor: "img",
        Cell: ({ cell: { value } }) => (
          <img
            src={value ? value : "https://i.ibb.co/SdvvYNp/no-image.jpg"}
            alt={value}
            height="70"
            width="100%"
          />
        ),
      },
      {
        Header: "$ Price",
        accessor: "price",
      },
      {
        Header: "Quantity",
        accessor: "quantity",
      },
      {
        Header: "Supplier",
        accessor: "supplier",
      },
      {
        Header: "Delete",
        accessor: "_id",
        Cell: ({ cell: { value } }) => (
          <>
            <button
              onClick={() => navigate(`/update/${value}`)}
              className="btn"
            >
              <HiOutlinePencilAlt /> Update
            </button>
            <button onClick={() => deleteItem(value)} className="btn">
              <HiOutlineTrash /> Delete
            </button>
          </>
        ),
      },
    ],
    [deleteItem, navigate]
  );
  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="inventories-container">
      <h2>My Inventories </h2>

      <DataTables columns={columns} data={inventories}></DataTables>
      {inventories?.length === 0 && <p className="not-found">No Item Found</p>}
    </div>
  );
};

export default MyItems;
