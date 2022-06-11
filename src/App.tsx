import "./App.scss";
import SearchBar from "./components/SearchBar/SearchBar";
import InfoBar from "./components/InfoBar/InfoBar";
import SearchModal from "./components/SearchModal/SearchModal";
import Overlay from "./components/OverlayWrapper/Overlay";
import { FC, useState } from "react";

const App: FC = (): JSX.Element => {
  const [showLocation, setShowLocation] = useState<boolean>(true);
  const [showGuests, setShowGuests] = useState<boolean>(false);

  return (
    <>
      <SearchModal showLocations={showLocation} showGuests={showGuests} />
      <div className="App">
        <header>
          <SearchBar />
          <InfoBar />
        </header>
        <main></main>
        <footer></footer>
      </div>
    </>
  );
};

export default App;
