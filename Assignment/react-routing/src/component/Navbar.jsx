import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h2>Squad 77</h2>
      <div style={{ display: "flex", gap: "40px" }}>
        <Link to="/">Home</Link>
        <Link to="/mentor">Mentors</Link>
        <Link to="/team">Team</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Navbar;
