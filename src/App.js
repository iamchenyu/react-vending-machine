import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Ramen from "./snacks/Ramen";
import Pancake from "./snacks/Pancake";
import Pizza from "./snacks/Pizza";
import Taco from "./snacks/Taco";
import Home from "./Home";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <h1>Vending Machine</h1>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ramen" element={<Ramen />} />
          <Route path="/pancake" element={<Pancake />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/taco" element={<Taco />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
