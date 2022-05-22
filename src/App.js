import { Route, Routes } from "react-router-dom";
import Blogs from "./Pages/Blogs.js/Blogs";
import Home from "./Pages/Home/Home";
import MyPortfolio from "./Pages/MyPortFolio/MyPortfolio";
import Error from "./SharedComponents/Error";
import Register from "./Pages/UserAuthentication/Register";
import Login from "./Pages/UserAuthentication/Login";
import { ToastContainer } from "react-toastify";
import 'animate.css';
import { useState } from "react";
import Loading from "./SharedComponents/Loading";
import PurchaseProduct from "./SharedComponents/PurchaseProduct";
import Helmet from "react-helmet";

function App() {
  const [loadin, setLoadin] = useState(true)
  window.addEventListener('load', () => {
    setLoadin(false)
  });
  if (loadin) {
    return <Loading />
  }
  return (
    <div className="App">
      <Helmet>
        <title>Home - Flying Wheels</title>
      </Helmet>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<MyPortfolio />} />
        <Route path='/purchase/:id' element={<PurchaseProduct />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
