import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import title from "../../../../Utilities/dynamicName";
import Spinner from "../../../Spinner/Spinner";
import DataTables from "./DataTable/DataTables";

const AllInventory = () => {
  title("Manage All Inventories");
  const [inventories, setInventories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [pageItem] = useState(5);
  const [countPage, setCountPage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const runData = async () => {
      setLoading(true);
      const { data } = await axios(
        `https://hidden-lake-88703.herokuapp.com/cars?limit=${pageItem}&pageNum=${page}`
      );
      if (data?.success) {
        setInventories(data.data);
        const count = data.count;
        const pages = Math.ceil(count / 5);
        setCountPage(pages);
        setLoading(false);
      } else {
        toast.error(data?.error);
      }
    };
    runData();
  }, [pageItem, page]);
  const deleteItem = (id) => {
    const proceed = window.confirm("Are you agree to delete ?");
    if (proceed) {
      const url = `https://hidden-lake-88703.herokuapp.com/cars/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const reaming = inventories?.filter((inv) => inv._id !== id);
          setInventories(reaming);
          toast("delete successfully");
        });
    }
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
              update
            </button>
            <button onClick={() => deleteItem(value)} className="btn">
              Delete
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
      <h2>All Inventories </h2>

      <DataTables columns={columns} data={inventories}></DataTables>
      {inventories?.length === 0 && <p className="not-found">No Item Found</p>}
      <div className="pagination">
        {[...Array(countPage).keys()].map((num) => (
          <div
            onClick={() => setPage(num)}
            key={num}
            className={`num-pg btn ${page === num ? "selected" : ""}`}
          >
            {num + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllInventory;
