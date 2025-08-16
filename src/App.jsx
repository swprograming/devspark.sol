import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componets/Home"
import Navbar from "./componets/Navbar";
import Pro from "./componets/ProjectsPage"
import About from "./componets/About";
import Contact from "./componets/Contact";
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pro" element={<Pro/>}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;