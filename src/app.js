import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Exercise1 from "./pages/exercise1";
import Exercise2 from "./pages/exercise2";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise1" element={<Exercise1 />} />
        <Route path="/exercise2" element={<Exercise2 />} />
      </Routes>
    </Router>
  );
}

export default App;
