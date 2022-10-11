import { FC, useCallback } from "react";
import { HasGuestsExceededTheCapacityLimit } from "../../utils/Helpers";
import { Guests } from "../../utils/Types";
import EditGuestsComponent from "./EditGuestsComponent";

interface IProps {
  isVisible: boolean;
  guests: Guests;
  modifyGuests: (guests: Guests) => void;
}

const EditGuests: FC<IProps> = ({ isVisible, guests, modifyGuests }): JSX.Element => {
  const updateAdults = (adults: number) => {
    const childrenBeforeUpdating: number = guests.children;
    const adultsBeforeUpdating: number = adults;
    const guestsNumberOffLimit = HasGuestsExceededTheCapacityLimit(
      adultsBeforeUpdating,
      childrenBeforeUpdating
    );
    if (guestsNumberOffLimit === true) return;
    const newGuests: Guests = { ...guests, adults: adults };
    modifyGuests(newGuests);
  };

  const updateChildren = (children: number) => {
    const childrenBeforeUpdating: number = children;
    const adultsBeforeUpdating: number = guests.adults;
    const guestsNumberExceededLimit = HasGuestsExceededTheCapacityLimit(
      adultsBeforeUpdating,
      childrenBeforeUpdating
    );
    
    if (guestsNumberExceededLimit === true) return;
    const newGuests: Guests = { ...guests, children: children };
    modifyGuests(newGuests);
  };

  let data: JSX.Element | null = null;
  if (isVisible) {
    data = (
      <EditGuestsComponent
        guests={guests}
        updateAdults={updateAdults}
        updateChildren={updateChildren}
      />
    );
  }

  return (
    <div className={`item-bar editable ${data === null ? "hide-item" : ""}`}>{data}</div>
  );
};

export default EditGuests;
