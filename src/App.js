import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Login from "./Components/Pages/Authentication/Login/Login/Authentication";
import Registration from "./Components/Pages/Authentication/Registration/Authentication";

import ErrorPage from "./Components/Pages/Error/ErrorPage";
import Home from "./Components/Pages/Home/Home/Home";
import AddInventory from "./Components/Pages/Inventories/AddInventory/AddInventory";
import AllInventory from "./Components/Pages/Inventories/AllInventory/AllInventory";

import Inventories from "./Components/Pages/Inventories/Inventories/Inventories";
import MyItems from "./Components/Pages/Inventories/MyItems/MyItems";
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
        <Route path="/inventories" element={<Inventories></Inventories>}>
          <Route
            path="/inventories/add-inventory"
            element={<AddInventory></AddInventory>}
          ></Route>
          <Route path="/inventories/" element={<AllInventory />}></Route>
          <Route
            path="/inventories/all-inventory"
            element={<AllInventory />}
          ></Route>
          <Route path="/inventories/my-items" element={<MyItems />}></Route>
        </Route>
        <Route path="*" element={<ErrorPage></ErrorPage>} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
