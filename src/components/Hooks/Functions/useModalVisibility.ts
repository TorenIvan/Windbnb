import { useState, useCallback } from "react";
import { ModalVisibility } from "../../../utils/Constants";

type ReturnDataType = [
  searchType: ModalVisibility,
  updateSearchType: (searchType: ModalVisibility) => void
];

const useModalVisibility = (type: ModalVisibility): ReturnDataType => {
  const [searchType, setSearchType] = useState<ModalVisibility>(type);

  const updateSearchType = useCallback(
    (type: ModalVisibility) => {
      setSearchType(type);
    },
    [type]
  );

  return [searchType, updateSearchType];
};

export default useModalVisibility;
