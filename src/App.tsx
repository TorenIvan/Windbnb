import "./App.scss";
import SearchBar from "./components/SearchBar/SearchBar";
import InfoBar from "./components/InfoBar/InfoBar";
import SearchModal from "./components/SearchModal/SearchModal";
import { FC, useState, memo, useCallback } from "react";

const App: FC = (): JSX.Element => {
  const [showLocation, setShowLocation] = useState<boolean>(false);
  const [showGuests, setShowGuests] = useState<boolean>(false);
  const [location, setLocation] = useState<null | string>(null);
  const [guests, setGuests] = useState<null | string>(null);

  const handleShowLocation = useCallback(() => {
    setShowLocation(currentShowLocation => !currentShowLocation);
  }, []);

  const handleShowGuests = useCallback(() => {
    setShowGuests(currentShowGuests => !currentShowGuests);
  }, []);

  const cancelModal = useCallback(() => {
    setShowLocation(false);
    setShowGuests(false);
  }, []);

  return (
    <>
      <SearchModal
        showLocations={showLocation}
        showGuests={showGuests}
        location={location}
        guests={guests}
        cancelModal={cancelModal}
      />
      <div className="App">
        <header>
          <SearchBar
            showLocation={handleShowLocation}
            showGuests={handleShowGuests}
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
