import { InfoLineTitle, Stay, Stays } from "../../utils/Constants";
import infoLineStyles from "./InfoLine.module.scss";

const InfoLine = ({totalStays}: {totalStays: number}) => {
  const retrieveCountInfo: string = () => {
    if (totalStays > 12) return "12+ stays";
    return totalStays + " stays";
  };

  return (
    <div id={infoLineStyles["info-bar"]}>
      <div id={infoLineStyles["country-info"]}>
        <p>{InfoLineTitle}</p>
      </div>
      <div id={infoLineStyles["count-info"]}>
        <p>{retrieveCountInfo()}</p>
      </div>
    </div>
  );
};

export default InfoLine;
