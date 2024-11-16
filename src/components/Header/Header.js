import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="header">
      <div className="navbar">
        <div className="nav-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`nav-side-menu ${menuOpen ? "in" : "out"}`}>
          <NavLink className="nav-link" to="/">
            home
          </NavLink>

          <NavLink className="nav-link" to="/groups">
            activist groups
          </NavLink>

          <NavLink className="nav-link" to="/pioneers">
            pioneers
          </NavLink>

          <NavLink className="nav-link" to="/events">
            events
          </NavLink>
        </div>
        <div className="nav-top-menu">
          <NavLink className="nav-link" to="/">
            home
          </NavLink>

          <NavLink className="nav-link" to="/groups">
            activist groups
          </NavLink>

          <NavLink className="nav-link" to="/pioneers">
            pioneers
          </NavLink>

          <NavLink className="nav-link" to="/events">
            events
          </NavLink>
        </div>
      </div>
      <h1>Coding E-Quality</h1>
    </div>
  );
}
