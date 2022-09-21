import { FC, memo } from "react";
import modalStyles from "./Modal.module.scss";
import { ModalVisibility, SearchItemType } from "../../utils/Constants";
import { Guests, UserChoice, ModalSearchType } from "../../utils/Types";
import SearchItem from "../SearchItem/SearchItem";
import EditLocation from "../EditLocation/EditLocation";
import EditGuests from "../EditGuests/EditGuests";
import { showSearchType, updateModalVisibility, updateSearchTerms } from "../Hooks";

interface IModalProps {
  key: ModalSearchType;
  setModalVisibility: (visibility: ModalSearchType) => void;
  userChoice: UserChoice;
  search: (location: string, guests: Guests) => void;
}

/**
 * 
 */
const Modal: FC<IModalProps> = (props): JSX.Element => {
  const { key, setModalVisibility, userChoice, search } = props;
  const modalSearchType = key;

  const { searchType, showModalSearchType } = showSearchType(modalSearchType);

  const { location, guests, modifyLocation, modifyGuests } = updateSearchTerms(
    userChoice.location,
    userChoice.guests
  );

  const { searchPlace, exitModal } = updateModalVisibility({
    location,
    guests,
    setModalVisibility,
    search,
  });

  const editLocation = searchType === ModalVisibility.EditLocation;
  const editGuests = searchType === ModalVisibility.EditGuests;
  const isVisible = editLocation || editGuests;
  return (
    <div className={`${modalStyles.overlay} ${isVisible ? modalStyles.show : ""}`}>
      <div
        className={`${modalStyles.modalContainer} ${isVisible ? modalStyles.show : ""}`}
      >
        <div className={modalStyles.searchContainer}>
          <div className="search-bar-open">
            <SearchItem
              title={SearchItemType.location}
              content={location}
              isItBeingProcessed={editLocation}
              onClickType={showModalSearchType}
            />
            <SearchItem
              title={SearchItemType.guests}
              content={"guests"}
              isItBeingProcessed={editGuests}
              onClickType={showModalSearchType}
            />
            <div className="item-bar" id="search-icon">
              <button onSubmit={searchPlace}>
                <p>&#xf002;&nbsp;&nbsp;&nbsp;Search</p>
              </button>
            </div>
          </div>
          <div className="search-edit">
            <EditLocation isVisible={editLocation} modifyLocation={modifyLocation} />
            <EditGuests isVisible={editGuests} modifyGuests={modifyGuests} />
            <div className="item-bar" id="search-icon" />
          </div>
        </div>
        <div className={modalStyles.closeModal}>
          <button onClick={exitModal}>
            <p>x</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Modal);
