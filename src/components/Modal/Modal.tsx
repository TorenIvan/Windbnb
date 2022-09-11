import React, { FC, memo, useState } from "react";
import modalStyles from "./Modal.module.scss";
import { ModalVisibility, SearchItemType } from "../../utils/Constants";
import { Guests, UserChoice, ShowModal, ShowModalInfo } from "../../utils/Types";
import SearchItem from "../SearchItem/SearchItem";
import EditLocation from "../EditLocation/EditLocation";
import EditGuests from "../EditGuests/EditGuests";

interface IProps {
  key: ShowModal;
  setModalVisibility: (visibility: ShowModal) => void;
  userChoice: UserChoice;
  search: (location: string, guests: Guests) => void;
}

const Search: FC<IProps> = (props): JSX.Element => {
  const { key, setModalVisibility, userChoice, search } = props;
  const editLocation = key === ModalVisibility.EditLocation;
  const editGuests = key === ModalVisibility.EditGuests;
  const { location, guests } = userChoice;

  const [showInfo, setShowInfo] = useState<ShowModalInfo>({
    showLocation: editLocation,
    showGuests: editGuests,
  });
  const [tempLocation, setTempLocation] = useState<string>(location);
  const [tempGuests, setTempGuests] = useState<Guests>(guests);

  const modifyShowInfo = (showLocation: boolean, showGuests: boolean) => {
    setShowInfo({
      showLocation: showLocation,
      showGuests: showGuests,
    });
  };

  const modifyTempLocation = (location: string) => {
    setTempLocation(location);
  };

  const modifyTempGuests = (guests: Guests) => {
    setTempGuests(guests);
  };

  const exitModal = () => {
    setModalVisibility(ModalVisibility.Hidden);
  };

  const searchPlace = () => {
    search(tempLocation, tempGuests);
    exitModal();
  };

  const { showLocation, showGuests } = showInfo;
  const isVisible = showLocation || showGuests;
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
              isItBeingProcessed={showLocation}
              onClickType={modifyShowInfo}
            />
            <SearchItem
              title={SearchItemType.guests}
              content={"guests"}
              isItBeingProcessed={showGuests}
              onClickType={modifyShowInfo}
            />
            <div className="item-bar" id="search-icon">
              <button onSubmit={searchPlace}>
                <p>&#xf002;&nbsp;&nbsp;&nbsp;Search</p>
              </button>
            </div>
          </div>
          <div className="search-edit">
            <EditLocation isVisible={showLocation} modifyLocation={modifyTempLocation} />
            <EditGuests isVisible={showGuests} modifyGuests={modifyTempGuests} />
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

export default memo(Search);
