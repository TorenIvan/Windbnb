import React, { memo } from "react";
import { PlaceType } from "../../utils/Types.ts";
import stayStyles from "./Stay.module.scss";

const Stay = ({ stay }: { stay: PlaceType }): JSX.Element => {
  console.log(stay.title);
  return (
    <div className={stayStyles.StayContainer}>
      <div id={stayStyles["image-container"]}>
        {/*<img src={stay.photo} />*/}
      </div>
      <div className={stayStyles.StayItem}>
        <div>eee</div>
        <div></div>
        <div></div>
      </div>
      <div className={stayStyles.StayItem}>
        <p>{stay.title}</p>
      </div>
    </div>
  );
};

export default Stay;
