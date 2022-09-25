import "./App.scss";
import modalStyles from "./components/Modal/Modal.module.scss";
import InfoView from "./components/InfoView/InfoView";
import InfoLine from "./components/InfoLine/InfoLine";
import Modal from "./components/Modal/Modal";
import { FC } from "react";
import {
  ModalVisibility,
  InitialPlace,
  InitialAdults,
  InitialChildren,
} from "./utils/Constants";
import { Guests } from "./utils/Types";
import { useGuestsInfo, useLocationInfo, useModalVisibility } from "./components/Hooks";

const App: FC = (): JSX.Element => {
  const [location, updateLocation] = useLocationInfo(InitialPlace);
  const [guests, updateGuests] = useGuestsInfo({
    adults: InitialAdults,
    children: InitialChildren,
  });
  const [modalSearchType, updateModalSearchType] = useModalVisibility(
    ModalVisibility.Hidden
  );

  const searchPlaces = (location: string, guests: Guests, updateUserChoice = false) => {
    if (updateUserChoice === true) {
      updateLocation(location);
      updateGuests(guests);
    }
    updateModalSearchType(ModalVisibility.Hidden);
  };

  const userChoice = { location: location, guests: guests };
  const totalGuests: number = guests.adults + guests.children;
  const isModalVisible = modalSearchType !== ModalVisibility.Hidden;
  return (
    <>
      <div className={`${modalStyles.overlay} ${isModalVisible ? modalStyles.show : ""}`}>
        <Modal
          key={modalSearchType}
          modalVisibilityType={modalSearchType}
          userChoice={userChoice}
          search={searchPlaces}
        />
      </div>
      <div className="App">
        <header>
          <InfoView
            setModalVisibility={updateModalSearchType}
            location={location}
            totalGuests={totalGuests}
          />
          <InfoLine />
        </header>
        <main></main>
        <footer></footer>
      </div>
    </>
  );
};

export default App;
