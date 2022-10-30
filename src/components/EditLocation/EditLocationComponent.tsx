import React, { memo } from "react";
import editLocationStyles from "./EditLocation.module.scss";

interface IProps {
  locations: string[];
  onLocationClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const EditLocationComponent = (props: IProps): JSX.Element => {
  const { locations, onLocationClick } = props;

  const renderLocation = (location: string) => {
    return (
      <button
        className={editLocationStyles.multipleChoice}
        onClick={onLocationClick}
        key={location}
      >
        &#xf124;&nbsp;&nbsp;&nbsp;{location}
      </button>
    );
  };

  const renderLocations = () => {
    return locations.map(renderLocation);
  };

  return <div className={editLocationStyles.itembarText}>{renderLocations()}</div>;
};

export default memo(EditLocationComponent);
