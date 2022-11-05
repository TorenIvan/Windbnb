import { memo, useRef, useState, useEffect } from "react";
import { PlacesType, UserChoice } from "../../utils/Types";
import ErrorComponent from "../Error/ErrorComponent";
import LoadingStaysComponent from "../Loading/LoadingStaysComponent";
import NoStaysComponent from "../NoStays/NoStaysComponent";
import PlacesComponent from "./PlacesComponent";
import PlacesService from "./PlacesService";

const Places = (props: { userChoice: UserChoice }): JSX.Element => {
	const [loading, setLoading] = useState<boolean>(false);
	const userChoice = useRef<UserChoice>(props.userChoice);
	const stays = useRef<PlacesType>([]);
	const fetchError = useRef<boolean>(false);

	useEffect(() => {
		setLoading(true);
		fetchError.current = false;
		userChoice.current = props.userChoice;

		let ignore = false;
		(async () => {
			try {
				const placesService = new PlacesService(userChoice.current);
				const places = await placesService.GetPlaces();
				if (ignore === false) {
					stays.current = places;
					setLoading(false);
				}
			} catch (error) {
				console.log("Why Error");
				fetchError.current = true;
				setLoading(false);
			}
		})();

		return () => {
			ignore = true;
		};
	}, [props.userChoice]);

	if (loading === true) return <LoadingStaysComponent />;
	if (fetchError.current === true) return <ErrorComponent />;
	if (stays.current.length === 0) return <NoStaysComponent />;

	return <PlacesComponent stays={stays.current} />;
};

export default memo(Places);
