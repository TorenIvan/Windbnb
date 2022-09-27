import { MouseEvent, memo } from "react";
import searchItemStyles from "./SearchItem.module.scss";

interface IProps {
  title: string;
  content: string;
  isItBeingProcessed: boolean;
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const SearchItemComponent = (props: IProps) => {
  const { title, content, isItBeingProcessed, handleClick } = props;
  const processedStyles: string = isItBeingProcessed ? searchItemStyles.processed : "";

  return (
    <div className={`item-bar editable ${processedStyles}`}>
      <button className={searchItemStyles.itembarText} onClick={handleClick}>
        <p className={searchItemStyles.title}> {title}</p>
        <p className={searchItemStyles.choice}> {content}</p>
      </button>
    </div>
  );
};

export default memo(SearchItemComponent);
