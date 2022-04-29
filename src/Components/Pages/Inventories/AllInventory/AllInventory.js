import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import title from "../../../../Utilities/dynamicName";
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
        `http://localhost:5000/cars?limit=${pageItem}&pageNum=${page}`
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

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "_id",
      },
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
        Cell: ({ cell: { value } }) => <button className="btn">Delete</button>,
      },
    ],
    []
  );
  if (loading) {
    return <>Loading...</>;
  }

  return (
    <div className="inventories-container">
      <h2>All Inventories </h2>

      <DataTables columns={columns} data={inventories}></DataTables>
      <div className="pagination">
        {[...Array(countPage).keys()].map((num) => (
          <div
            onClick={() => setPage(num)}
            className="num-pg btn"
            keys={num._id}
          >
            {num + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllInventory;
