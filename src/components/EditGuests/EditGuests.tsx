import { FC, useCallback } from "react";
import { HasGuestsExceededTheCapacityLimit } from "../../utils/Helpers";
import { Guests } from "../../utils/Types";
import EditGuestsComponent from "./EditGuestsComponent";

interface IProps {
  isVisible: boolean;
  guests: Guests;
  modifyGuests: (guests: Guests) => void;
}

const EditGuests: FC<IProps> = (props: IProps): JSX.Element => {
  const { isVisible, guests, modifyGuests } = props;

  const updateAdults = useCallback((plusNumberValue: number) => {
    const children: number = guests.children;
    const adults: number = guests.adults + plusNumberValue;
    const guestsNumberOffLimit = HasGuestsExceededTheCapacityLimit(adults, children);
    if (guestsNumberOffLimit === true) return;

    const newGuests: Guests = { ...guests, adults: adults };
    modifyGuests(newGuests);
  }, [guests]);

  const updateChildren = useCallback((plusNumberValue: number) => {
    const children: number = guests.children + plusNumberValue;
    const adults: number = guests.adults;
    const guestsNumberExceededLimit = HasGuestsExceededTheCapacityLimit(adults, children);
    if (guestsNumberExceededLimit === true) return;

    const newGuests: Guests = { ...guests, children: children };
    modifyGuests(newGuests);
  }, [guests]);

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
