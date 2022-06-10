import React, { FC } from "react";
import "./Search.scss";

interface IProps {
  showLocations: boolean;
  showGuests: boolean;
}

const Search: FC<IProps> = ({ showLocations, showGuests }): JSX.Element | null => {
  const isVisible: boolean = showLocations || showGuests;
  if (isVisible) return null;
  return <></>;
};

export default Search;
