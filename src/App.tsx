import "./App.scss";
import InfoView from "./components/InfoView/InfoView";
import InfoLine from "./components/InfoLine/InfoLine";
import Modal from "./components/Modal/Modal";
import { FC, useState, memo } from "react";
import {
  ModalVisibility,
  InitialPlace,
  InitialAdults,
  InitialChildren,
} from "./utils/Constants";
import { ModalSearchType, UserChoice, Guests } from "./utils/Types";

const App: FC = (): JSX.Element => {
  const [userChoice, setUserChoice] = useState<UserChoice>({
    location: InitialPlace,
    guests: {
      adults: InitialAdults,
      children: InitialChildren,
    },
  });
  const [modalVisibility, setModalVisibility] = useState<ModalSearchType>(
    ModalVisibility.Hidden
  );

  const updateModalVisibility = (visibility: ModalSearchType) => {
    setModalVisibility(visibility);
  };

  const searchPlaces = (location: string, guests: Guests) => {
    const newUserChoice: UserChoice = {
      location: location,
      guests: guests,
    };
    setUserChoice(newUserChoice);
  };

  // calculateTotalGuests
  return (
    <>
      <Modal
        key={modalVisibility}
        setModalVisibility={updateModalVisibility}
        userChoice={userChoice}
        search={searchPlaces}
      />
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
