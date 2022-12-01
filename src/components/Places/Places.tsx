import { memo, useRef, useState, useEffect } from "react";
import { PlacesType, UserChoice } from "../../utils/Types";
import ErrorComponent from "../Error/ErrorComponent";
import LoadingStaysComponent from "../Loading/LoadingStaysComponent";
import NoStaysComponent from "../NoStays/NoStaysComponent";
import PlacesComponent from "./PlacesComponent";
import PlacesService from "./PlacesService";

interface IProps {
  userChoice: UserChoice;
  onStaysFound: (staysCount: number) => void;
}

const Places = (props: IProps): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const [fetchError, setFetchError] = useState<boolean>(false);
  const [stays, setStays] = useState<PlacesType>([]);
  const userChoice = useRef<UserChoice>(props.userChoice);

  useEffect(() => {
    setLoading(true);
    setFetchError(false);
    userChoice.current = props.userChoice;

    let didCancel = false;
    (async () => {
      try {
        const placesService = new PlacesService(userChoice.current);
        const places = await placesService.GetPlaces();
        if (didCancel === false) {
          setStays(places);
          props.onStaysFound(places.length);
        }
      } catch (error) {
        setFetchError(true);
      } finally {
        setLoading(false);
      }
    })();

    return () => {
      didCancel = true;
    };
  }, [props.userChoice]);

  if (loading === true) return <LoadingStaysComponent />;
  if (fetchError === true) return <ErrorComponent />;
  if (stays.length === 0) return <NoStaysComponent />;
  return <PlacesComponent stays={stays} />;
};

export default memo(Places);
