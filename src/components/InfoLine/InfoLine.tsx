import { InfoLineTitle, Stay, Stays } from "../../utils/Constants";
import infoLineStyles from "./InfoLine.module.scss";

const InfoLine = () => {
  return (
    <div id={infoLineStyles["info-bar"]}>
      <div id={infoLineStyles["country-info"]}>
        <p>{InfoLineTitle}</p>
      </div>
      <div id={infoLineStyles["count-info"]}>
        <p>12+ stays</p>
      </div>
    </div>
  );
};

export default InfoLine;
