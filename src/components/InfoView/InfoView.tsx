import React, { FC } from "react";
import Logo from "../../logo.png";
import "font-awesome/css/font-awesome.min.css";
import infoViewStyles from "./InfoView.module.scss";

type clickEvent = React.MouseEvent<HTMLButtonElement>;

interface IProps {
  showLocation: () => void;
  showGuests: () => void;
  location: string | null;
  guests: string | null;
}

const InfoView: FC<IProps> = ({ showLocation, showGuests }): JSX.Element => {
  const handleLocationPress = (event: clickEvent) => {
    event.preventDefault();
    showLocation();
  };

  const handleGuestsPress = (event: clickEvent) => {
    event.preventDefault();
    showGuests();
  };

  return (
    <div className={infoViewStyles.navBar}>
      <div id={infoViewStyles["icon-container"]}>
        <img id={infoViewStyles["logo"]} src={Logo} alt="logo" />
      </div>
      <div className={infoViewStyles.searchBar}>
        <div id={infoViewStyles["location-item"]} className={infoViewStyles.closedItem}>
          <button onClick={handleLocationPress}>
            <p>Helsinki, Finland</p>
          </button>
        </div>
        <div id={infoViewStyles["guests-item"]} className={infoViewStyles.closedItem}>
          <button onClick={handleGuestsPress}>
            <p>Add guests</p>
          </button>
        </div>
        <div
          id={infoViewStyles["search-icon-item"]}
          className={infoViewStyles.closedItem}
        >
          <button onClick={handleLocationPress}>
            <i className="fa fa-search" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoView;
