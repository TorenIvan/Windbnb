import { useCallback, useState } from "react";

type ReturnDataType = [Location: string, modifyLocation: (location: string) => void];

const useLocationInfo = (searchLocation: string): ReturnDataType => {
  const [location, setLocation] = useState<string>(searchLocation);

  const modifyLocation = useCallback(
    (location: string) => {
      setLocation(location);
    },
    [searchLocation]
  );

  return [location, modifyLocation];
};

export default useLocationInfo;
