import { StayType } from "../../utils/Types";
import { SuperHost, Dot, Beds } from "../../utils/Constants";
import stayStyles from "./Stay.module.scss";

interface IProps {
  stay: StayType;
}

const Stay = ({ stay }: IProps): JSX.Element => {
  const renderSuperHost = (): JSX.Element | null => {
    if (stay.superHost === true) {
      return (
        <div id={stayStyles["super-host"]}>
          <span>{SuperHost.toUpperCase()}</span>
        </div>
      );
    }
    return null;
  };

  const renderTypeBeds = (): JSX.Element => {
    let infoString = `${stay.type}`;
    if (stay.beds !== null) infoString += `${Dot} ${stay.beds} ${Beds}`;
    return <span id={stayStyles["info-string"]}>{infoString}</span>;
  };

  const renderRating = (): JSX.Element => {
    return (
      <div id={stayStyles["rating-container"]}>
        <span id={stayStyles["star"]}>&#9733;</span>
        <span>&nbsp;&nbsp;{stay.rating}</span>
      </div>
    );
  };

  return (
    <div className={stayStyles.StayContainer}>
      <div id={stayStyles["image-container"]}>
        <img src={stay.photo} alt={stay.title} loading="lazy" />
      </div>
      <div className={stayStyles.StayItem} id={stayStyles["first-item"]}>
        {renderSuperHost()}
        {renderTypeBeds()}
        {renderRating()}
      </div>
      <div className={stayStyles.StayItem}>
        <span id={stayStyles["title-text"]}>{stay.title}</span>
      </div>
    </div>
  );
};

export default Stay;
