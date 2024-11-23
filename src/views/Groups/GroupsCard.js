import React from "react";

export default function GroupsCard({ group, onDelete }) {
  return (
    <div className="group-card">
      <img className="group-img" src={group.img} alt="Logo of the group" />
      <div className="groups-cards-text">
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
      <button className="delete-button" onClick={() => onDelete(group.name)}>
        Delete
      </button>
    </div>
  );
}
