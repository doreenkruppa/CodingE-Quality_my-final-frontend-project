import React, { useContext } from "react";
import "../../App.css";
import { GroupsContext } from "../../context/GroupsContext";
import { PioneersContext } from "../../context/PioneersContext";

import SidebarCard from "./SidebarCard";

export default function Sidebar() {
  const { pioneers } = useContext(PioneersContext);
  const { groups } = useContext(GroupsContext);

  return (
    <div className="sidebar-container">
      <div className="groups-sidebar-container">
        <h5>all activist groups:</h5>
        {groups &&
          groups.map((itemG, i) => (
            <SidebarCard groupName={itemG.name} keyG={i} />
          ))}
      </div>
      <div className="pioneers-sidebar-container">
        <h5>all pioneers:</h5>
        {pioneers &&
          pioneers.map((itemP, i) => (
            <SidebarCard pioneerName={itemP.name} keyP={i} />
          ))}
      </div>
    </div>
  );
}
