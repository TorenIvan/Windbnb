import React, { FC } from "react";
import { SearchItemType } from "../../utils/Constants";
import searchItemStyles from "./SearchItem.module.scss";

interface IProps {
  title: string;
  content: string;
  isItBeingProcessed: boolean;
  onClickType: (showLocation: boolean, showGuests: boolean) => void;
}

const SearchItem: FC<IProps> = (props): JSX.Element => {
  const { title, content, isItBeingProcessed, onClickType } = props;
  const isLocation = title === SearchItemType.location;
  const isGuests = title === SearchItemType.guests;

  const handleClick = () => {
    onClickType(isLocation, isGuests);
  };

  return (
    <div
      className={`item-bar editable ${
        isItBeingProcessed ? searchItemStyles.processed : ""
      }`}
    >
      <button className={searchItemStyles.itembarText} onClick={handleClick}>
        <p className={searchItemStyles.title}> {title}</p>
        <p className={searchItemStyles.choice}> {content}</p>
      </button>
    </div>
  );
};

export default SearchItem;
