import { FC, memo, MouseEvent } from "react";
import modalStyles from "./Modal.module.scss";
import { ModalVisibility, SearchItemType } from "../../utils/Constants";
import { Guests, UserChoice } from "../../utils/Types";
import SearchItem from "../SearchItem/SearchItem";
import EditLocation from "../EditLocation/EditLocation";
import EditGuests from "../EditGuests/EditGuests";
import { useModalVisibility, useLocationInfo, useGuestsInfo } from "../Hooks";

interface IModalProps {
  key: ModalVisibility;
  modalVisibilityType: ModalVisibility;
  userChoice: UserChoice;
  setSearchTerms: (
    location: string,
    guests: Guests,
    updateUserChoice?: boolean
  ) => void;
}

const Modal: FC<IModalProps> = (props): JSX.Element => {
  const { modalVisibilityType, userChoice, setSearchTerms } = props;
  const modalSearchType = modalVisibilityType;

  const [searchType, updateSearchType] = useModalVisibility(modalSearchType);
  const [location, modifyLocation] = useLocationInfo(userChoice.location);
  const [guests, modifyGuests] = useGuestsInfo(userChoice.guests);

  const exitModal = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSearchTerms(location, guests);
  };

  const searchPlace = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSearchTerms(location, guests, true);
  };

  const searchingLocation = searchType === ModalVisibility.EditLocation;
  const searchingGuests = searchType === ModalVisibility.EditGuests;
  return (
    <>
      <div className={modalStyles.searchContainer}>
        <div className="search-bar-open">
          <SearchItem
            title={SearchItemType.location}
            content={location}
            isItBeingProcessed={searchingLocation}
            onSearchItemPress={updateSearchType}
          />
          <SearchItem
            title={SearchItemType.guests}
            content={SearchItemType.guests}
            isItBeingProcessed={searchingGuests}
            onSearchItemPress={updateSearchType}
          />
          <div className="item-bar" id="search-icon">
            <button onClick={searchPlace}>
              <p>&#128269;&nbsp;&nbsp;&nbsp;Search</p>
            </button>
          </div>
        </div>
        <div className="search-edit">
          <EditLocation
            isVisible={searchingLocation}
            modifyLocation={modifyLocation}
            onLocationPress={updateSearchType}
          />
          <EditGuests
            isVisible={searchingGuests}
            guests={guests}
            modifyGuests={modifyGuests}
          />
          <div className="item-bar" id="search-icon" />
        </div>
        <div className="item-bar small-screen" id="search-icon">
          <button onClick={searchPlace}>
            <p>&#xf002;&nbsp;&nbsp;&nbsp;Search</p>
          </button>
        </div>
      </div>
      <div className={modalStyles.closeModal}>
        <button onClick={exitModal}>
          <p>x</p>
        </button>
      </div>
    </>
  );
};

export default memo(Modal);
