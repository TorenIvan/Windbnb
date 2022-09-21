import { useState } from "react";
import { Guests } from "../../../utils/Types";

type ReturnData = {
  location: string;
  guests: Guests;
  modifyLocation: (location: string) => void;
  modifyGuests: (guests: Guests) => void;
};

const updateSearchTerms = (newLocation: string, newGuests: Guests): ReturnData => {
  const [location, setLocation] = useState<string>(newLocation);
  const [guests, setGuests] = useState<Guests>(newGuests);

  const modifyLocation = (newLocation: string) => {
    setLocation(newLocation);
  };

  const modifyGuests = (newGuests: Guests) => {
    const immutableGuests = Object.assign({}, newGuests);
    setGuests(immutableGuests);
  };

  return {
    location,
    guests,
    modifyLocation,
    modifyGuests,
  };
};

export default updateSearchTerms;
