import { memo } from "react";
import { PlacesTypeExtended, PlaceTypeExtended } from "../../utils/Types";
import Stay from "../Stay/Stay.tsx";
import placesStyles from "./Places.module.scss";

interface IProps {
  stays: PlacesTypeExtended;
}

const PlacesComponent = ({ stays }: IProps): JSX.Element => {
  const renderPlace = (stay: PlaceTypeExtended): JSX.Element => {
    const { id, ...otherInfo } = stay;
    return <Stay key={id} stay={otherInfo} />;
  };

  const renderPlaces = () => {
    return stays.map(renderPlace);
  };

  return <div className={placesStyles.StaysContainer}>{renderPlaces()}</div>;
};

export default memo(PlacesComponent);
