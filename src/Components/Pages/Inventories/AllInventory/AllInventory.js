import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
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

  useEffect(() => {
    const runData = async () => {
      setLoading(true);
      const { data } = await axios(
        `https://car-manager-server.herokuapp.com/cars?limit=${pageItem}&pageNum=${page}`
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
      const url = `https://car-manager-server.herokuapp.com/cars/${id}`;
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
          <img src={value} alt={value} height="70" width="100%" />
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
          <button onClick={() => deleteItem(value)} className="btn">
            Delete
          </button>
        ),
      },
    ],
    []
  );
  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="inventories-container">
      <h2>All Inventories </h2>

      <DataTables columns={columns} data={inventories}></DataTables>
      <div className="pagination">
        {[...Array(countPage).keys()].map((num) => (
          <div
            onClick={() => setPage(num)}
            keys={num}
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
