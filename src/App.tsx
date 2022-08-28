import "./App.scss";
import InfoView from "./components/InfoView/InfoView";
import InfoLine from "./components/InfoLine/InfoLine";
import Modal from "./components/Modal/Modal";
import SearchItem from "./components/SearchItem/SearchItem";
import EditLocation from "./components/EditLocation/EditLocation";
import EditGuests from "./components/EditGuests/EditGuests";
import { FC, useState, memo } from "react";
import { SearchItemType } from "./utils/Constants";

const App: FC = (): JSX.Element => {
  const [showLocation, setShowLocation] = useState<boolean>(false);
  const [showGuests, setShowGuests] = useState<boolean>(false);
  const [location, setLocation] = useState<string | null>(null);
  const [previousLocation, setPreviousLocation] = useState<string | null>(null);
  const [guests, setGuests] = useState<string | null>(null);
  const [previousGuests, setPreviousGuests] = useState<string | null>(null);

  const modifyLocation = (location: string) => {
    setLocation(location);
  };

  const modifyGuests = (guests: string) => {
    setGuests(guests);
  };

  const modifyShowLocation = () => {
    setShowLocation(prevShowLocation => !prevShowLocation);
  };

  const modifyShowGuests = () => {
    setShowGuests(prevShowGuests => !prevShowGuests);
  };

  const modifyShowInfo = (showLocation: boolean, showGuests: boolean) => {
    setShowLocation(showLocation);
    setShowGuests(showGuests);
  };

  const cancelModal = () => {
    setLocation(previousLocation);
    setGuests(previousGuests ?? null);
    setShowGuests(false);
    setShowLocation(false);
  };

  const searchPlaces = () => {
    setPreviousLocation(location);
    setPreviousGuests(guests ?? null);
    setShowGuests(false);
    setShowLocation(false);
    /**
     * Set key attribute for re-render container
     */
  };

  const isModalVisible = showLocation || showGuests;
  // calculateTotalGuests
  return (
    <>
      <Modal isVisible={isModalVisible} cancelModal={cancelModal}>
        <>
          <div className="search-bar-open">
            <SearchItem
              title={SearchItemType.location}
              content={location ?? "Helsinki"}
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
              <button onSubmit={searchPlaces}>
                <p>&#xf002;&nbsp;&nbsp;&nbsp;Search</p>
              </button>
            </div>
          </div>
          <div className="search-edit">
            <EditLocation isVisible={showLocation} modifyLocation={modifyLocation} />
            <EditGuests isVisible={showGuests} modifyGuests={modifyGuests} />
            <div className="item-bar" id="search-icon" />
          </div>
        </>
      </Modal>
      <div className="App">
        <header>
          <InfoView
            showLocation={modifyShowLocation}
            showGuests={modifyShowGuests}
            location={location}
            guests={guests}
          />
          <InfoLine />
        </header>
        <main></main>
        <footer></footer>
      </div>
    </>
  );
};

export default memo(App);
