import "./App.scss";
import SearchBar from "./components/SearchBar/SearchBar";
import InfoBar from "./components/InfoBar/InfoBar";
import Search from "./components/Search/Search";
import { FC, useState } from "react";

const App: FC = () => {
  const [showLocation, setShowLocation] = useState<boolean>(false);
  const [showGuests, setShowGuests] = useState<boolean>(false);

  return (
    <div className="App">
      {/* <Search showLocations={showLocation} showGuests={showGuests} /> */}
      {/* <div className="MainScreen"> */}
        <header>
          <SearchBar />
          <InfoBar />
        </header>
        <main></main>
        <footer></footer>
      {/* </div> */}
    </div>
  );
};

export default App;
