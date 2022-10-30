import { memo, useRef, useState } from "react";
import { PlacesType, UserChoice } from "../../utils/Types";
import LoadingStaysComponent from "../Loading/LoadingStaysComponent";
import PlacesComponent from "./PlacesComponent";
import PlacesService from "./PlacesService";

const Places = (props: { userChoice: UserChoice }): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const userChoice = useRef<UserChoice>(props.userChoice);
  const stays = useRef<PlacesType>([]);

  console.log("Mpika");

  if (props.userChoice !== userChoice.current) {
    setLoading(true);
    userChoice.current = props.userChoice;

    (async () => {
      try {
        const placesService = new PlacesService(userChoice.current);
        const places = await placesService.GetPlaces();
        stays.current = places;
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    })();
  }

  if (loading === true) return <LoadingStaysComponent />;
  return <PlacesComponent stays={stays.current} />;
};

export default memo(Places);
