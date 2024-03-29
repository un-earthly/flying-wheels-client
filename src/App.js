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
import PurchaseProduct from "./Pages/Purchase/PurchaseProduct";
import Helmet from "react-helmet";
import RequireAuth from "./SharedComponents/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyProfile from "./Pages/Dashboard/MyProfile";
import MyReview from "./Pages/Dashboard/MyReview";
import MyOrder from "./Pages/Dashboard/MyOrder";
import AllUsers from "./Pages/Dashboard/AllUsers";
import AllProducts from "./Pages/Dashboard/AllProducts";
import AddProducts from "./Pages/Dashboard/AddProducts";
import AllOrders from "./Pages/Dashboard/AllOrders";
import Pay from "./Pages/Purchase/Pay";
import Products from "./Pages/Products/Products";
import AboutUs from "./Pages/About";

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
        {/* <Route path='/portfolio' element={<MyPortfolio />} /> */}
        <Route path='/products' element={<RequireAuth><Products /></RequireAuth>} />
        <Route path='/purchase/:id' element={<RequireAuth><PurchaseProduct /></RequireAuth>} />
        <Route path='/pay/:id' element={<RequireAuth><Pay /></RequireAuth>} />
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyProfile />} />
          <Route index path='myprofile' element={<MyProfile />} />
          <Route path='myorders' element={<MyOrder />} />
          <Route path='myreview' element={<MyReview />} />
          <Route path='allusers' element={<AllUsers />} />
          <Route path='allproducts' element={<AllProducts />} />
          <Route path='addproduct' element={<AddProducts />} />
          <Route path='allorders' element={<AllOrders />} />
        </Route>
        {/* <Route path='/blogs' element={<Blogs />} /> */}
        <Route path='/about' element={<AboutUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
