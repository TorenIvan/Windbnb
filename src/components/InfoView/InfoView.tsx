import React, { FC, useCallback } from "react";
import {
  InitialAdults,
  InitialChildren,
  InitialGuestsTitle,
  InitialLocationTitle,
  InitialStay,
  ModalVisibility,
  SearchItemType,
} from "../../utils/Constants";
import { CapitalizeFirstLetterOfString } from "../../utils/Helpers";
import InfoViewComponent from "./InfoViewComponent";

type clickEvent = React.MouseEvent<HTMLButtonElement>;

interface IProps {
  setModalVisibility: (visibility: ModalVisibility) => void;
  location: string;
  totalGuests: number;
}

const InfoView: FC<IProps> = (props): JSX.Element => {
  const { setModalVisibility, location, totalGuests } = props;

  const handleLocationPress = useCallback((event: clickEvent) => {
    event.preventDefault();
    setModalVisibility(ModalVisibility.EditLocation);
  }, []);

  const handleGuestsPress = useCallback((event: clickEvent) => {
    event.preventDefault();
    setModalVisibility(ModalVisibility.EditGuests);
  }, []);

  let locationTitle: string = location;
  if (location === InitialStay) locationTitle = InitialLocationTitle;

  let guestsTitle: string = `${totalGuests.toString()} ${CapitalizeFirstLetterOfString(
    SearchItemType.guests
  )}`;
  if (totalGuests === InitialAdults + InitialChildren)
    guestsTitle = InitialGuestsTitle;

  return (
    <InfoViewComponent
      locationTitle={locationTitle}
      guestsTitle={guestsTitle}
      handleLocationPress={handleLocationPress}
      handleGuestsPress={handleGuestsPress}
    />
  );
};

export default InfoView;
