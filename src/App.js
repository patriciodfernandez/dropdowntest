import "./App.css";
import Home from "./Components/Dropdown/Index";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
