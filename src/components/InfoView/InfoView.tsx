import React, { FC } from "react";
import "./InfoView.scss";
import Logo from "../../logo.png";
import "font-awesome/css/font-awesome.min.css";

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
    <nav className="nav-bar">
      <div id="icon-container">
        <img id="logo" src={Logo} alt="logo" />
      </div>
      <div className="search-bar">
        <div id="location-item" className="closed-item">
          <button onClick={handleLocationPress}>
            <p>Helsinki, Finland</p>
          </button>
        </div>
        <div id="guests-item" className="closed-item">
          <button onClick={handleGuestsPress}>
            <p>Add guests</p>
          </button>
        </div>
        <div id="search-icon-item" className="closed-item">
          <button onClick={handleLocationPress}>
            <i className="fa fa-search" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default InfoView;
