// src/components/Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css"; // CSS for styling

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
       
        <span className="logo-text">  🏗️ Smart Concrete Monitoring</span>
      </div>
      <div className="navbar-toggle" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <ul className={`navbar-links ${open ? "active" : ""}`}>
        <li><a href="/">Dashboard</a></li>
        <li><a href="/sensors">Sensors</a></li>
        <li><a href="/reports">Reports</a></li>
        <li><a href="/settings">Settings</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
