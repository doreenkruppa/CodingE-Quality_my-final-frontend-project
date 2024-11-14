import React, { useContext } from "react";

import GroupsCard from "./GroupsCard";
import { GroupsContext } from "../../context/GroupsContext";
import GroupsForm from "./GroupsForm";

export default function GroupsList() {
  const { groups } = useContext(GroupsContext);

  return (
    <>
      <div className="groups-list-Container">
        <h2 id="groups-list-top">
          {" "}
          activist groups and networks working on the topic of feminist
          programming:
        </h2>

        <div className="mapping-cards-container">
          {groups &&
            groups.map((item, i) => <GroupsCard group={item} key={i} />)}
        </div>
        <GroupsForm />
        <div className="ankerlinks-container">
          <a className="ankerlinks" href="#groups-list-top">
            back to the top
          </a>
        </div>
      </div>
    </>
  );
}
