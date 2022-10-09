import React, { FC } from "react";
import { ModalVisibility, InitialLocations } from "../../utils/Constants";
import { ExtractLocationFromHTMLText } from "../../utils/Helpers";
import EditLocationComponent from "./EditLocationComponent";

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
      <EditLocationComponent
        locations={InitialLocations}
        onLocationClick={updateLocation}
      />
    );
  }
  return (
    <div className={`item-bar editable ${data === null ? "hide-item" : ""}`}>{data}</div>
  );
};

export default EditLocation;
