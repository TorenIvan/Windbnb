import { useState } from "react";
import { ModalSearchType } from "../../../utils/Types";

type ShowInfoType = {
  searchType: ModalSearchType;
  showModalSearchType: (newSearchType: ModalSearchType) => void;
};

const showSearchType = (showInfo: ModalSearchType): ShowInfoType => {
  const [searchType, updateSearchType] = useState<ModalSearchType>(showInfo);

  const showModalSearchType = (newSearchType: ModalSearchType) => {
    updateSearchType(newSearchType);
  };

  return {
    searchType,
    showModalSearchType,
  };
};

export default showSearchType;
