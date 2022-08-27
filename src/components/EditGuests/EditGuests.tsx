import React, { FC } from "react";
import editGuestsStyles from "./EditGuests.module.scss";

interface IProps {
  isVisible: boolean;
  modifyGuests: (guests: string) => void;
}

const EditGuests: FC<IProps> = ({ isVisible, modifyGuests }): JSX.Element => {
  let data: JSX.Element | null = null;
  if (isVisible)
    data = (
      <div className={editGuestsStyles.itembarText}>
        <button className={editGuestsStyles.multipleChoice}>
          &#xf124;&nbsp;&nbsp;&nbsp;Helsinki, Finland
        </button>
        <button className={editGuestsStyles.multipleChoice}>
          &#xf124;&nbsp;&nbsp;&nbsp;Turku, Finland
        </button>
        <button className={editGuestsStyles.multipleChoice}>
          &#xf124;&nbsp;&nbsp;&nbsp;Oulu, Finland
        </button>
        <button className={editGuestsStyles.multipleChoice}>
          &#xf124;&nbsp;&nbsp;&nbsp;Vaasa, Finland
        </button>
      </div>
    );
  return <div className="item-bar editable">{data}</div>;
};

export default EditGuests;
