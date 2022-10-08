import { FC, useCallback } from "react";
import { Guests } from "../../utils/Types";
import EditGuestsComponent from "./EditGuestsComponent";

interface IProps {
  isVisible: boolean;
  guests: Guests;
  modifyGuests: (guests: Guests) => void;
}

const EditGuests: FC<IProps> = ({ isVisible, guests, modifyGuests }): JSX.Element => {
  const updateAdults = useCallback((adults: number) => {
    const newGuests: Guests = { ...guests, adults: adults };
    modifyGuests(newGuests);
  }, []);

  const updateChildren = useCallback((children: number) => {
    const newGuests: Guests = { ...guests, children: children };
    modifyGuests(newGuests);
  }, []);

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
    <div className={`item-bar editable ${data === null ? "hide-item" : ""}`}>
      {data}
    </div>
  );
};

export default EditGuests;
