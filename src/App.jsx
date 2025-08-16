import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componets/Home"
import Navbar from "./componets/Navbar";
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;