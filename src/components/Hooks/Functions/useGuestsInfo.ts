import { useCallback, useState } from "react";
import { Guests } from "../../../utils/Types";

type ReturnDataType = [guests: Guests, modifyGuests: (guests: Guests) => void];

const useGuestsInfo = (guestsObject: Guests): ReturnDataType => {
  const [guests, setGuests] = useState<Guests>(guestsObject);

  const modifyGuests = useCallback(
    (guests: Guests) => {
      const guestsCopy: Guests = Object.assign({}, guests);
      setGuests(guestsCopy);
    },
    [guests]
  );

  return [guests, modifyGuests];
};

export default useGuestsInfo;
