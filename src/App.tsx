import "./App.scss";
import SearchBar from "./components/SearchBar/SearchBar";
import InfoBar from "./components/InfoBar/InfoBar";
import SearchModal from "./components/SearchModal/SearchModal";
import { FC, useState, memo } from "react";
import { SearchItemType } from "./utils/Constants";

type EditInfo = {
  editLocation: boolean;
  editGuests: boolean;
};

const App: FC = (): JSX.Element => {
  const [showLocation, setShowLocation] = useState<boolean>(false);
  const [showGuests, setShowGuests] = useState<boolean>(false);
  const [editInfo, setEditInfo] = useState<EditInfo>({
    editLocation: false,
    editGuests: false,
  });
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

  const cancelModal = () => {
    setLocation(previousLocation);
    setGuests(previousGuests ?? null);
    setShowGuests(false);
    setShowLocation(false);
  };

  const searchPlaces = () => {
    setPreviousLocation(location);
    setPreviousGuests(guests ?? null);
    /**
     * Set key attribute for re-render container
     */
  };

  const isModalVisible = showLocation || showGuests;
  // calculateTotalGuests
  return (
    <>
      <Modal isVisible={isModalVisible} cancelModal={cancelModal}>
        <ModalSearchBar search={searchPlaces}>
          <ModalSearchBarItem title={SearchItemType.location} data={location} />
          <ModalSearchBarItem title={SearchItemType.guests} data={"guests"} />
        </ModalSearchBar>
        <SearchLocation isVisible={showLocation} modifyLocation={modifyLocation} />
        <SearchGuests isVisible={showGuests} modifyGuests={modifyGuests} />
      </Modal>
      <div className="App">
        <header>
          <SearchBar
            showLocation={modifyShowLocation}
            showGuests={modifyShowGuests}
            location={location}
            guests={guests}
          />
          <InfoBar />
        </header>
        <main></main>
        <footer></footer>
      </div>
    </>
  );
};

export default memo(App);
