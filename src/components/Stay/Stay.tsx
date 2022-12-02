import React, { memo } from "react";
import { PlaceType } from "../../utils/Types.ts";
import stayStyles from "./Stay.module.scss";

const Stay = ({ stay }: { stay: PlaceType }): JSX.Element => {
  console.log(stay.title);
  return (
    <div className={stayStyles.StayContainer}>
      <div id={stayStyles["image-container"]}>
        <img src={stay.photo} />
      </div>
      <div className={stayStyles.StayItem} id={stayStyles["first-item"]}>
        <span>eee</span>
        <span></span>
        <span></span>
      </div>
      <div className={stayStyles.StayItem}>
        <span id={stayStyles["title-text"]}>{stay.title}</span>
      </div>
    </div>
  );
};

export default Stay;
