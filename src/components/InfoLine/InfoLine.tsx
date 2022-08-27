import React from "react";
import infoLineStyles from "./InfoLine.module.scss";

const InfoLine = () => {
  return (
    <div id={infoLineStyles["info-bar"]}>
      <div id={infoLineStyles["country-info"]}>
        <p>Stays in Finland</p>
      </div>
      <div id={infoLineStyles["count-info"]}>
        <p>12+ stays</p>
      </div>
    </div>
  );
};

export default InfoLine;
