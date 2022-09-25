import { useState, useCallback } from "react";
import { ModalSearchType } from "../../../utils/Types";

type ReturnDataType = [
  searchType: ModalSearchType,
  updateSearchType: (searchType: ModalSearchType) => void
];

const useModalVisibility = (type: ModalSearchType): ReturnDataType => {
  const [searchType, setSearchType] = useState<ModalSearchType>(type);

  const updateSearchType = useCallback(
    (type: ModalSearchType) => {
      setSearchType(type);
    },
    [type]
  );

  return [searchType, updateSearchType];
};

export default useModalVisibility;
