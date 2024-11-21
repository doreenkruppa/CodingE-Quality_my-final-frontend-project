import React, { useContext } from "react";

import GroupsCard from "./GroupsCard";
import { GroupsContext } from "../../context/GroupsContext";
import GroupsForm from "./GroupsForm";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function GroupsList() {
  const { groups } = useContext(GroupsContext);

  return (
    <>
      <div className="groups-container">
        <Sidebar />
        <main className="groups-main">
          <h2 id="groups-list-top">
            {" "}
            activist groups and networks working on the topic of feminist
            programming:
          </h2>

          <div className="mapping-cards-container">
            {groups &&
              groups.map((item, i) => <GroupsCard group={item} key={i} />)}
          </div>

          <div className="ankerlinks-container">
            <a className="ankerlinks" href="#groups-list-top">
              back to the top
            </a>
          </div>
        </main>
        <GroupsForm />
      </div>
    </>
  );
}
