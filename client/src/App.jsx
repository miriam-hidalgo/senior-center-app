import React from "react";
import Home from "./pages/Home";
import Activities from "./pages/Activities";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="activities" element={<Activities />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
