import React, { FC } from "react";
import editLocationStyles from "./EditLocation.module.scss";

interface IProps {
  isVisible: boolean;
  modifyLocation: (location: string) => void;
}

const EditLocation: FC<IProps> = ({ isVisible, modifyLocation }): JSX.Element => {
  let data: JSX.Element | null = null;
  if (isVisible)
    data = (
      <div className={editLocationStyles.itembarText}>
        <button className={editLocationStyles.multipleChoice}>
          &#xf124;&nbsp;&nbsp;&nbsp;Helsinki, Finland
        </button>
        <button className={editLocationStyles.multipleChoice}>
          &#xf124;&nbsp;&nbsp;&nbsp;Turku, Finland
        </button>
        <button className={editLocationStyles.multipleChoice}>
          &#xf124;&nbsp;&nbsp;&nbsp;Oulu, Finland
        </button>
        <button className={editLocationStyles.multipleChoice}>
          &#xf124;&nbsp;&nbsp;&nbsp;Vaasa, Finland
        </button>
      </div>
    );
  return <div className="item-bar editable">{data}</div>;
};

export default EditLocation;
