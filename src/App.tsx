import "./App.scss";
import { useState, useMemo } from "react";
import modalStyles from "./components/Modal/Modal.module.scss";
import InfoView from "./components/InfoView/InfoView";
import InfoLine from "./components/InfoLine/InfoLine";
import Modal from "./components/Modal/Modal";
import {
  useGuestsInfo,
  useLocationInfo,
  useModalVisibility,
} from "./components/Hooks";
import { FC } from "react";
import {
  ModalVisibility,
  InitialStay,
  InitialAdults,
  InitialChildren,
} from "./utils/Constants";
import { Guests } from "./utils/Types";
import Stays from "./components/Stays/Stays";

const App: FC = (): JSX.Element => {
  const [totalStays, setTotalStays] = useState<number>(0);
  const [location, updateLocation] = useLocationInfo(InitialStay);
  const [guests, updateGuests] = useGuestsInfo({
    adults: InitialAdults,
    children: InitialChildren,
  });
  const [modalSearchType, updateModalSearchType] = useModalVisibility(
    ModalVisibility.Hidden
  );

  const calculateTotalStays = (staysCount: number) => {
    setTotalStays(staysCount);
  };

  const searchStays = (
    location: string,
    guests: Guests,
    updateUserChoice = false
  ) => {
    if (updateUserChoice === true) {
      updateLocation(location);
      updateGuests(guests);
    }
    updateModalSearchType(ModalVisibility.Hidden);
  };

  const userChoice = useMemo(
    () => ({ location: location, guests: guests }),
    [location, guests]
  );
  const totalGuests: number = guests.adults + guests.children;
  const isModalVisible = modalSearchType !== ModalVisibility.Hidden;

  return (
    <div className={`App ${isModalVisible ? "fixedBackground" : ""}`}>
      <div
        className={`${modalStyles.overlay} ${
          isModalVisible ? modalStyles.show : ""
        }`}
      >
        <div
          className={`${modalStyles.modalContainer} ${
            isModalVisible ? modalStyles.show : ""
          }`}
        >
          <Modal
            key={modalSearchType}
            modalVisibilityType={modalSearchType}
            userChoice={userChoice}
            setSearchTerms={searchStays}
          />
        </div>
      </div>
      <div className="MainApp">
        <header>
          <InfoView
            setModalVisibility={updateModalSearchType}
            location={location}
            totalGuests={totalGuests}
          />
          <InfoLine totalStays={totalStays} />
        </header>
        <main>
          <Stays userChoice={userChoice} onStaysFound={calculateTotalStays} />
        </main>
        <footer></footer>
      </div>
    </div>
  );
};

export default App;
