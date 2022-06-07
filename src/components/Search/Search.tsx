import React, { FC } from "react";
import "./Search.scss";

interface IProps {
  showLocations: boolean;
  showGuests: boolean;
}

type returnType = JSX.Element | null;

const Search: FC<IProps> = ({ showLocations, showGuests }): returnType => {
  const isHidden: boolean = !(showLocations || showGuests);
  if (isHidden) return null;
  return <></>;
};

export default Search;
