import React, { FC, useCallback } from "react";
import { ModalSearchType } from "../../utils/Types";
import {
  InitialAdults,
  InitialChildren,
  InitialGuestsTitle,
  InitialLocationTitle,
  InitialPlace,
  ModalVisibility,
} from "../../utils/Constants";
import InfoViewComponent from "./InfoViewComponent";

type clickEvent = React.MouseEvent<HTMLButtonElement>;

interface IProps {
  setModalVisibility: (visibility: ModalSearchType) => void;
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
  if (location === InitialPlace) locationTitle = InitialLocationTitle;

  let guestsTitle: string = totalGuests.toString();
  if (totalGuests === InitialAdults + InitialChildren) guestsTitle = InitialGuestsTitle;

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
