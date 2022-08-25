import React, { FC, memo } from "react";

interface IProps {
  isVisible: boolean;
  cancelModal: () => void;
  children: JSX.Element;
}

const Search: FC<IProps> = (props): JSX.Element => {
  const { isVisible, cancelModal, children } = props;
  console.log(isVisible);
  
  return (
    <div className={`overlay ${isVisible ? "show" : ""}`}>
      <div className={`"modal-container  ${isVisible ? "show" : ""}`}>
        <div className="search-container">{children}</div>
        <div className="close-modal">
          <button onClick={cancelModal}>
            <p>x</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Search);
