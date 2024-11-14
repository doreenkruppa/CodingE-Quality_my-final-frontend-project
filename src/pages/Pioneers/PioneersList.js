import React, { useContext } from "react";

import { PioneersContext } from "../../context/PioneersContext";
import PioneersCard from "./PioneersCard";
import PioneersForm from "./PioneersForm";

export default function PioneersList() {
  const { pioneers } = useContext(PioneersContext);
  return (
    <>
      <div className="pioneers-list-Container">
        <h2 id="pioneers-list-top">
          {" "}
          Women Pioneers in Programming & Computer Science:
        </h2>
        <div className="mapping-cards">
          {pioneers &&
            pioneers.map((item, i) => <PioneersCard pioneer={item} key={i} />)}
        </div>
        <PioneersForm />

        <div className="ankerlinks-container">
          <a className="ankerlinks" href="#pioneers-list-top">
            back to the top
          </a>
        </div>
      </div>
    </>
  );
}
