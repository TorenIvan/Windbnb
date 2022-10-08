import React, { FC } from "react";
import { ModalVisibility } from "../../utils/Constants";
import { ExtractLocationFromHTMLText } from "../../utils/Helpers";
import editLocationStyles from "./EditLocation.module.scss";

interface IProps {
  isVisible: boolean;
  modifyLocation: (location: string) => void;
  onLocationPress: (modalSearchType: ModalVisibility) => void;
}

const EditLocation: FC<IProps> = (props): JSX.Element => {
  const { isVisible, modifyLocation, onLocationPress } = props;

  const updateLocation = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const location: string = ExtractLocationFromHTMLText(event.currentTarget.innerText);
    modifyLocation(location);
    onLocationPress(ModalVisibility.EditGuests);
  };

  let data: JSX.Element | null = null;
  if (isVisible) {
    data = (
      <div className={editLocationStyles.itembarText}>
        <button className={editLocationStyles.multipleChoice} onClick={updateLocation}>
          &#xf124;&nbsp;&nbsp;&nbsp;Helsinki, Finland
        </button>
        <button className={editLocationStyles.multipleChoice} onClick={updateLocation}>
          &#xf124;&nbsp;&nbsp;&nbsp;Turku, Finland
        </button>
        <button className={editLocationStyles.multipleChoice} onClick={updateLocation}>
          &#xf124;&nbsp;&nbsp;&nbsp;Oulu, Finland
        </button>
        <button className={editLocationStyles.multipleChoice} onClick={updateLocation}>
          &#xf124;&nbsp;&nbsp;&nbsp;Vaasa, Finland
        </button>
      </div>
    );
  }
  return (
    <div className={`item-bar editable ${data === null ? "hide-item" : ""}`}>
      {data}
    </div>
  );
};

export default EditLocation;
