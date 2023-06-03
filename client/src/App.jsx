import React from "react";
import Home from "./pages/Home";
import Activities from "./pages/Activities";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="activities" element={<Activities />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
