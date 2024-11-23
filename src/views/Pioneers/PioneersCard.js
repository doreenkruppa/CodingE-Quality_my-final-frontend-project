import React from "react";

export default function PioneersCard({ pioneer, onDelete }) {
  return (
    <div className="pioneer-card">
      <img className="pioneer-img" src={pioneer.img} alt={pioneer.name} />

      <div className="pioneers-cards-text">
        <h3>{pioneer.name}</h3>
        <p>
          <b> Vita:</b> <br />
          {pioneer.vita}
        </p>
        <p>
          <b>for further information & source look: </b>
          <a href={pioneer.furtherInfo}> here</a>
        </p>
      </div>
      <button className="delete-button" onClick={() => onDelete(pioneer.name)}>
        Delete
      </button>
    </div>
  );
}
