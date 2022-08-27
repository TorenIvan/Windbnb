import React, { FC } from "react";
import editLocationStyles from "./EditLocation.module.scss";

interface IProps {
  isVisible: boolean;
  modifyLocation: (location: string) => void;
}

const EditLocation: FC<IProps> = ({ isVisible, modifyLocation }): JSX.Element | null => {
  if (isVisible) return null;
  return (
    <div className="item-bar editable">
      <div className={editLocationStyles.itembarText}>
        <p className={editLocationStyles.multipleChoice}>
          &#xf124;&nbsp;&nbsp;&nbsp;Helsinki, Finland
        </p>
        <p className={editLocationStyles.multipleChoice}>
          &#xf124;&nbsp;&nbsp;&nbsp;Turku, Finland
        </p>
        <p className={editLocationStyles.multipleChoice}>
          &#xf124;&nbsp;&nbsp;&nbsp;Oulu, Finland
        </p>
        <p className={editLocationStyles.multipleChoice}>
          &#xf124;&nbsp;&nbsp;&nbsp;Vaasa, Finland
        </p>
      </div>
    </div>
  );
};

export default EditLocation;
