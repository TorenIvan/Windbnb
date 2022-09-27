import React, { FC } from "react";
import { ModalVisibility, SearchItemType } from "../../utils/Constants";
import SearchItemComponent from "./SearchItemComponent";

interface IProps {
  title: string;
  content: string;
  isItBeingProcessed: boolean;
  onSearchItemPress: (showInfo: ModalVisibility) => void;
}

const SearchItem: FC<IProps> = (props): JSX.Element => {
  const { title, content, isItBeingProcessed, onSearchItemPress } = props;
  const isLocation = title === SearchItemType.location;
  const isGuests = title === SearchItemType.guests;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (isItBeingProcessed) return;
    if (isLocation) onSearchItemPress(ModalVisibility.EditLocation);
    if (isGuests) onSearchItemPress(ModalVisibility.EditGuests);
  }

  return (
    <SearchItemComponent
      title={title}
      content={content}
      isItBeingProcessed={isItBeingProcessed}
      handleClick={handleClick}
    />
  );
};

export default SearchItem;
