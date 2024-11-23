import React, { useContext } from "react";
import { PioneersContext } from "../../context/PioneersContext";
import PioneersCard from "./PioneersCard";
import PioneersForm from "./PioneersForm";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function PioneersList() {
  const { pioneers, setPioneers } = useContext(PioneersContext);
  const handleDelete = (pioneerName) => {
    const updatedPioneers = pioneers.filter(
      (pioneer) => pioneer.name !== pioneerName
    );
    setPioneers(updatedPioneers); // Aktualisiert die Gruppen im Context
  };

  return (
    <>
      <div className="pioneers-container">
        <Sidebar />
        <main className="pioneers-main">
          <h2 id="pioneers-list-top">
            {" "}
            Women Pioneers in Programming & Computer Science:
          </h2>
          <div className="mapping-cards-container">
            {pioneers &&
              pioneers.map((item, i) => (
                <PioneersCard pioneer={item} key={i} onDelete={handleDelete} />
              ))}
          </div>
          <div className="ankerlinks-container">
            <a className="ankerlinks" href="#pioneers-list-top">
              back to the top
            </a>
          </div>
        </main>
        <PioneersForm />
      </div>
    </>
  );
}
