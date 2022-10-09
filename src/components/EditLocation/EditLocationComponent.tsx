import React, { memo } from "react";
import editLocationStyles from "./EditLocation.module.scss";

interface IProps {
  locations: string[];
  onLocationClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const EditLocationComponent = (props: IProps): JSX.Element => {
  const { locations, onLocationClick } = props;
  return (
    <div className={editLocationStyles.itembarText}>
      {locations.map(location => (
        <button className={editLocationStyles.multipleChoice} onClick={onLocationClick}>
          &#xf124;&nbsp;&nbsp;&nbsp;{location}
        </button>
      ))}
    </div>
  );
};

export default memo(EditLocationComponent);
