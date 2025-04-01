import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "black",
        paddingInline: "40px",
      }}
    >
      <h1 style={{ color: "white" }}>Kalvium</h1>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/student">
          <p>Students</p>
        </Link>
        <Link to="/mentor">
          <p>Mentor</p>
        </Link>
        <Link to="/login">
          <p>Login</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
