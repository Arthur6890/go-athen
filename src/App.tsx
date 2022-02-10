import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/home";
import About from "./screens/about";
import "bootstrap/dist/css/bootstrap.min.css";
import Sports from "./screens/sports";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="sports" element={<Sports />} />
      </Routes>
    </>
  );
}

export default App;
