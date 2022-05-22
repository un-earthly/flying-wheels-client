import { Route, Routes } from "react-router-dom";
import Blogs from "./Pages/Blogs.js/Blogs";
import Home from "./Pages/Home/Home";
import MyPortfolio from "./Pages/MyPortFolio/MyPortfolio";
import Error from "./SharedComponents/Error";
import 'react-toastify/dist/ReactToastify.css';
import Register from "./Pages/UserAuthentication/Register";
import Login from "./Pages/UserAuthentication/Login";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<MyPortfolio />} />
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
