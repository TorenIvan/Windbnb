import { useState } from "react";
import { Guests } from "../../utils/Types";

type TempInfo = {
  tempLocation: string;
  tempGuests: Guests;
  modifyTempLocation: (location: string) => void;
  modifyTempGuests: (guests: Guests) => void;
};

const useTempUserChoice = (location: string, guests: Guests): TempInfo => {
  const [tempLocation, setTempLocation] = useState<string>(location);
  const [tempGuests, setTempGuests] = useState<Guests>(guests);

  const modifyTempLocation = (location: string) => {
    setTempLocation(location);
  };

  const modifyTempGuests = (guests: Guests) => {
    setTempGuests(guests);
  };

  return {
    tempLocation,
    tempGuests,
    modifyTempLocation,
    modifyTempGuests,
  };
};

export default useTempUserChoice;
