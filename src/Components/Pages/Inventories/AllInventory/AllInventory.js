import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import title from "../../../../Utilities/dynamicName";
import DataTables from "./DataTable/DataTables";

const AllInventory = () => {
  title("Manage All Inventories");
  const [inventories, setInventories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const runData = async () => {
      setLoading(true);
      const { data } = await axios("http://localhost:5000/cars?limit=20");
      if (data?.success) {
        setInventories(data.data);
        setLoading(false);
      } else {
        toast.error(data?.error);
      }
    };
    runData();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "_id",
      },
      {
        Header: "Name",
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
      <h2>All Inventories ({inventories?.length})</h2>

      <DataTables columns={columns} data={inventories}></DataTables>
    </div>
  );
};

export default AllInventory;
