import { ModalVisibility } from "../../../utils/Constants";
import { Guests } from "../../../utils/Types";

interface IProps {
  location: string;
  guests: Guests;
  setModalVisibility: (visibility: ModalVisibility) => void;
  search: (location: string, guests: Guests) => void;
}

type ModalLogic = {
  exitModal: () => void;
  searchPlace: () => void;
};

const updateModalVisibility = (props: IProps): ModalLogic => {
  const { location, guests, setModalVisibility, search } = props;

  const exitModal = () => {
    setModalVisibility(ModalVisibility.Hidden);
  };

  const searchPlace = () => {
    search(location, guests);
    exitModal();
  };

  return {
    exitModal,
    searchPlace,
  };
};

export default updateModalVisibility;