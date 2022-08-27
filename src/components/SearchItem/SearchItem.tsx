import React, { FC } from "react";
import searchItemStyles from "./SearchItem.module.scss";

interface IProps {
  title: string;
  content: string;
  editable: boolean;
}

const SearchItem: FC<IProps> = ({ title, content, editable }): JSX.Element => {
  return (
    <div className="item-bar editable">
      <div className={searchItemStyles.itembarText}>
        <p className={searchItemStyles.title}> {title}</p>
        <p className={searchItemStyles.choice}> {content}</p>
      </div>
    </div>
  );
};

export default SearchItem;
