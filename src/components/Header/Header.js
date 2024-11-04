import React from "react";
import { FaAlignJustify } from "react-icons/fa";

import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div id="header">
      <div id="navbar">
        <div id="nav-icon">
          <FaAlignJustify />
        </div>
        <div id="nav-link-list">
          <NavLink className="nav-link" to="/">
            home
          </NavLink>
          <NavLink className="nav-link" to="/groups">
            activist groups & networks
          </NavLink>
          <NavLink className="nav-link" to="/pioneers">
            pioneers
          </NavLink>
          <NavLink className="nav-link" to="/events">
            events
          </NavLink>
        </div>
      </div>
      <h1>Women in Coding</h1>
    </div>
  );
}
