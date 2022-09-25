import { FC, memo } from "react";
import modalStyles from "./Modal.module.scss";
import { ModalVisibility, SearchItemType } from "../../utils/Constants";
import { Guests, UserChoice, ModalSearchType } from "../../utils/Types";
import SearchItem from "../SearchItem/SearchItem";
import EditLocation from "../EditLocation/EditLocation";
import EditGuests from "../EditGuests/EditGuests";
import { useModalVisibility, useLocationInfo, useGuestsInfo } from "../Hooks";

interface IModalProps {
  key: ModalSearchType;
  userChoice: UserChoice;
  setModalVisibility: (visibility: ModalSearchType) => void;
  search: (location: string, guests: Guests) => void;
}

/**
 *
 */
const Modal: FC<IModalProps> = (props): JSX.Element => {
  const { key, userChoice, setModalVisibility, search } = props;
  const modalSearchType = key;

  const [searchType, updateSearchType] = useModalVisibility(modalSearchType);
  const [location, modifyLocation] = useLocationInfo(userChoice.location);
  const [guests, modifyGuests] = useGuestsInfo(userChoice.guests);

  const exitModal = () => {
    setModalVisibility(ModalVisibility.Hidden);
  };

  const searchPlace = () => {
    search(location, guests);
    exitModal();
  };

  const searchingLocation = searchType === ModalVisibility.EditLocation;
  const searchingGuests = searchType === ModalVisibility.EditGuests;
  const isModalVisible = searchingLocation || searchingGuests;
  return (
    <div className={`${modalStyles.overlay} ${isModalVisible ? modalStyles.show : ""}`}>
      <div
        className={`${modalStyles.modalContainer} ${
          isModalVisible ? modalStyles.show : ""
        }`}
      >
        <div className={modalStyles.searchContainer}>
          <div className="search-bar-open">
            <SearchItem
              title={SearchItemType.location}
              content={location}
              isItBeingProcessed={searchingLocation}
              onClickType={updateSearchType}
            />
            <SearchItem
              title={SearchItemType.guests}
              content={"guests"}
              isItBeingProcessed={searchingGuests}
              onClickType={updateSearchType}
            />
            <div className="item-bar" id="search-icon">
              <button onSubmit={searchPlace}>
                <p>&#xf002;&nbsp;&nbsp;&nbsp;Search</p>
              </button>
            </div>
          </div>
          <div className="search-edit">
            <EditLocation isVisible={searchingLocation} modifyLocation={modifyLocation} />
            <EditGuests
              isVisible={searchingGuests}
              guests={guests}
              modifyGuests={modifyGuests}
            />
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
