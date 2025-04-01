import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Students from "./Pages/Students";
import Mentor from "./Pages/Mentor";
import Login from "./Pages/Login";
import Navbar from "./component/Navbar";
import SignUp from "./Pages/SignUp";
function App() {
  return (
    <>
      <Navbar />
      <div style={{ paddingInline: "40px" }}>
        <Routes>
          {/* Here we can defined our all routes */}
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Students />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>Don't show over smartness</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
