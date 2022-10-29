import { memo } from "react";
import { PlaceType, PlacesType } from "../../utils/Types";

const PlacesComponent = ({ stays }: { stays: PlacesType }): JSX.Element => {
  const renderPlace = (stay: PlaceType): JSX.Element => {
    return <>{stay}</>;
  };

  const renderPlaces = () => {
    return stays.map(renderPlace);
  };

  return <div>{renderPlaces()}</div>;
};

export default memo(PlacesComponent);
