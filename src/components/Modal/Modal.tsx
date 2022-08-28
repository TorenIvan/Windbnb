import React, { FC, memo } from "react";
import modalStyles from "./Modal.module.scss";

interface IProps {
  isVisible: boolean;
  cancelModal: () => void;
  children: JSX.Element;
}

const Search: FC<IProps> = (props): JSX.Element => {
  const { isVisible, cancelModal, children } = props;
  console.log(isVisible);

  return (
    <div className={`${modalStyles.overlay} ${isVisible ? modalStyles.show : ""}`}>
      <div className={`${modalStyles.modalContainer} ${isVisible ? modalStyles.show : ""}`}>
        <div className={modalStyles.searchContainer}>{children}</div>
        <div className={modalStyles.closeModal}>
          <button onClick={cancelModal}>
            <p>x</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Search);
