import { Route, Routes } from "react-router-dom";
import "./App.css";
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
        <Route path="*" element={<ErrorPage></ErrorPage>} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
