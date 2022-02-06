import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/home";
import About from "./screens/about";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
