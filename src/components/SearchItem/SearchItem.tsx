import React, { FC } from "react";

interface IProps {
  title: string;
  content: string;
  editable: boolean;
}

const SearchItem: FC<IProps> = ({ title, content, editable }): JSX.Element => {
  return (
    <div className="item-bar editable">
      <div className="item-bar-text">
        <p className="title"> {title}</p>
        <p className="choice"> {content}</p>
      </div>
    </div>
  );
};

export default SearchItem;
