import React from "react";
import { NavLink } from "react-router-dom";

export default function SidebarCard({ groupName, pioneerName, keyG, keyP }) {
  return (
    <div className="sidebar-card">
      <div className="sidebar-card-groups-list">
        <NavLink className="side-nav-link" to={`/groups`}>
          <p key={keyG}>{groupName}</p>
        </NavLink>
      </div>
      <div className="sidebar-card-pioneers-list">
        <NavLink className="side-nav-link" to={`/pioneers`}>
          <p key={keyP}>{pioneerName}</p>
        </NavLink>
      </div>
    </div>
  );
}
