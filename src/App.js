import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Login from "./Components/Pages/Authontication/Login/Login/Login";
import Registration from "./Components/Pages/Authontication/Registration/Registration";

import ErrorPage from "./Components/Pages/Error/ErrorPage";
import Home from "./Components/Pages/Home/Home/Home";
import Footer from "./Components/Sheared/Footer/Footer";
import Header from "./Components/Sheared/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Registration />} />
        <Route path="*" element={<ErrorPage></ErrorPage>} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
