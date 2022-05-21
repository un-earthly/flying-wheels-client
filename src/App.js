import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Error from "./SharedComponents/Error";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
