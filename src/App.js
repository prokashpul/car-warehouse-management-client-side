import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Login from "./Components/Pages/Authentication/Login/Login/Login";
import Registration from "./Components/Pages/Authentication/Registration/Authentication";
import AddBlog from "./Components/Pages/Blog/addBlog/AddBlog";
import Blog from "./Components/Pages/Blog/Blog";
import ErrorPage from "./Components/Pages/Error/ErrorPage";
import Home from "./Components/Pages/Home/Home/Home";
import AddInventory from "./Components/Pages/Inventories/AddInventory/AddInventory";
import AllInventory from "./Components/Pages/Inventories/AllInventory/AllInventory";
import Inventories from "./Components/Pages/Inventories/Inventories/Inventories";
import MyItems from "./Components/Pages/Inventories/MyItems/MyItems";
import UpdateInventory from "./Components/Pages/UpdateInventory/UpdateInventory";
import RequireAuth from "./Components/RequirAuth/RequirAuth";
import Footer from "./Components/Sheared/Footer/Footer";
import Header from "./Components/Sheared/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Registration />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/update/:inventoryId"
          element={
            <RequireAuth>
              <UpdateInventory></UpdateInventory>
            </RequireAuth>
          }
        />
        <Route path="/inventories" element={<Inventories></Inventories>}>
          <Route
            path="/inventories/add-inventory"
            element={
              <RequireAuth>
                <AddInventory />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/inventories/add-blog"
            element={
              <RequireAuth>
                <AddBlog />
              </RequireAuth>
            }
          ></Route>
          <Route path="/inventories/" element={<AllInventory />}></Route>
          <Route
            path="/inventories/all-inventory"
            element={<AllInventory />}
          ></Route>
          <Route
            path="/inventories/my-items"
            element={
              <RequireAuth>
                <MyItems />
              </RequireAuth>
            }
          ></Route>
        </Route>
        <Route path="*" element={<ErrorPage></ErrorPage>} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
