// src/components/Navbar.jsx
import React, { useContext, useState } from "react";
import "./Navbar.css";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-text">🏗️ Smart Concrete Monitoring</span>
      </div>

      <div className="navbar-toggle" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <ul className={`navbar-links ${open ? "active" : ""}`}>
        <li><a href="/">Dashboard</a></li>
        <li><a href="/sensors">Sensors</a></li>
        <li><a href="/reports">Reports</a></li>
        <li><a href="/settings">Settings</a></li>

        {/* Show logout only when logged in */}
        {user && (
          <li>
            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
