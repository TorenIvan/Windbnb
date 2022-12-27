import { memo, useRef, useState, useEffect } from "react";
import { StaysTypeExtended, UserChoice } from "../../utils/Types";
import ErrorComponent from "../Error/ErrorComponent";
import LoadingStaysComponent from "../Loading/LoadingStaysComponent";
import NoStaysComponent from "./NoStaysComponent";
import StaysComponent from "./StaysComponent";
import StaysService from "./StaysService";

interface IProps {
  userChoice: UserChoice;
  onStaysFound: (staysCount: number) => void;
}

const Stays = (props: IProps): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const [fetchError, setFetchError] = useState<boolean>(false);
  const [stays, setStays] = useState<StaysTypeExtended>([]);
  const userChoice = useRef<UserChoice>(props.userChoice);

  const { onStaysFound } = props;

  useEffect(() => {
    setLoading(true);
    setFetchError(false);
    userChoice.current = props.userChoice;

    let didCancel = false;
    (async () => {
      try {
        const staysService = new StaysService(userChoice.current);
        const stays = await staysService.GetStays();
        if (didCancel === false) {
          onStaysFound(stays.length);
          setStays(stays);
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
  return <StaysComponent stays={stays} />;
};

export default memo(Stays);
