import { useState } from "react";
import { ShowModalInfo } from "../../utils/Types";

type ShowInfo = {
  showInfo: ShowModalInfo;
  modifyShowInfo: (showLocation: boolean, showGuests: boolean) => void;
};

const useShowEditInfo = (editLocation: boolean, editGuests: boolean): ShowInfo => {
  const [showInfo, setShowInfo] = useState<ShowModalInfo>({
    showLocation: editLocation,
    showGuests: editGuests,
  });

  const modifyShowInfo = (showLocation: boolean, showGuests: boolean) => {
    setShowInfo({
      showLocation: showLocation,
      showGuests: showGuests,
    });
  };

  return {
    showInfo,
    modifyShowInfo,
  };
};

export default useShowEditInfo;
