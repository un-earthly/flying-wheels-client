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
import RequireAdmin from "./SharedComponents/RequireAdmin";
import AllProducts from "./Pages/Dashboard/AllProducts";
import AddProducts from "./Pages/Dashboard/AddProducts";
import AllOrders from "./Pages/Dashboard/AllOrders";

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
        <Route path='/purchase/:id' element={<RequireAuth><PurchaseProduct /></RequireAuth>} />
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyProfile />} />
          <Route index path='myprofile' element={<MyProfile />} />
          <Route path='myorders' element={<MyOrder />} />
          <Route path='myreview' element={<MyReview />} />
          <Route path='allusers' element={<RequireAdmin><AllUsers /></RequireAdmin>} />
          <Route path='allproducts' element={<RequireAdmin><AllProducts /></RequireAdmin>} />
          <Route path='addproduct' element={<RequireAdmin><AddProducts /></RequireAdmin>} />
          <Route path='allorders' element={<RequireAdmin><AllOrders /></RequireAdmin>} />
        </Route>
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
