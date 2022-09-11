import React, { FC, memo } from "react";
import modalStyles from "./Modal.module.scss";
import { ModalVisibility} from "../../utils/Constants";
import { Guests, UserChoice, ShowModal } from "../../utils/Types";
import SearchItem from "../SearchItem/SearchItem";
import EditLocation from "../EditLocation/EditLocation";
import EditGuests from "../EditGuests/EditGuests";

interface IProps {
  key: ShowModal,
  setModalVisibility: (visibility: ShowModal) => void,
  userChoice: UserChoice,
  search: (location: string, guests: Guests) => void,
}

const Search: FC<IProps> = (props): JSX.Element => {
  const { key, setModalVisibility, userChoice, search } = props;

  const cancelModal = () => {
    setModalVisibility(ModalVisibility.Hidden);
  }

  const editLocation = key === ModalVisibility.EditLocation;
  const editGuests = key === ModalVisibility.EditGuests;
  const isVisible = editLocation || editGuests;
  return (
    <div className={`${modalStyles.overlay} ${isVisible ? modalStyles.show : ""}`}>
      <div
        className={`${modalStyles.modalContainer} ${isVisible ? modalStyles.show : ""}`}
      >
        {/* <div className={modalStyles.searchContainer}>{children}</div> */}
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
