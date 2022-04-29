import React from "react";
import { useNavigate } from "react-router-dom";
import "./ErrorPage.css";
import { HiArrowLeft } from "react-icons/hi";
import title from "../../../Utilities/dynamicName";
const ErrorPage = () => {
  const navigate = useNavigate();
  title("Page not found | carManager");
  return (
    <div className="error-page container">
      <img src="https://i.ibb.co/99rfyWh/errorpage.png" alt="" />
      <button onClick={() => navigate("/")} className="btn">
        <HiArrowLeft /> Back To Home
      </button>
    </div>
  );
};

export default ErrorPage;
