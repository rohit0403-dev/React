import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Mentors from "./Pages/Mentors";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Navbar from "./component/Navbar";
function App() {
  return (
    <div style={{ paddingInline: "40px" }}>
      <Navbar />
      <Routes>
        {/* Here we can define our routes */}
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/mentor" element={<Mentors />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Don't show over smartness 🤔🤔</h1>} />
      </Routes>
    </div>
  );
}

export default App;
