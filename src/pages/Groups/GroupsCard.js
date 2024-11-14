import React from "react";

export default function GroupsCard({ group }) {
  return (
    <div className="group-card">
      <img
        className="image-group-card"
        src={group.img}
        alt="Logo of the group"
      />
      <div className="groups-card-text">
        <h3>{group.name}</h3>
        <p>
          <b> Description:</b> <br />
          {group.description}
        </p>
        <p>
          <b>Contact:</b> <br />
          <a href={group.contact}>{group.contact}</a>
        </p>
      </div>
    </div>
  );
}
