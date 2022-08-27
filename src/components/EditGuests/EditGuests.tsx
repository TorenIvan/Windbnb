import React, { FC } from "react";
import editGuestsStyles from "./EditGuests.module.scss";

interface IProps {
  isVisible: boolean;
  modifyGuests: (guests: string) => void;
}

const EditGuests: FC<IProps> = ({ isVisible, modifyGuests }): JSX.Element | null => {
  if (isVisible) return null;
  return (
    <div className="item-bar editable">
      <div className={editGuestsStyles.itembarText}>
        <p className={editGuestsStyles.multipleChoice}>
          &#xf124;&nbsp;&nbsp;&nbsp;Helsinki, Finland
        </p>
        <p className={editGuestsStyles.multipleChoice}>
          &#xf124;&nbsp;&nbsp;&nbsp;Turku, Finland
        </p>
        <p className={editGuestsStyles.multipleChoice}>
          &#xf124;&nbsp;&nbsp;&nbsp;Oulu, Finland
        </p>
        <p className={editGuestsStyles.multipleChoice}>
          &#xf124;&nbsp;&nbsp;&nbsp;Vaasa, Finland
        </p>
      </div>
    </div>
  );
};

export default EditGuests;
