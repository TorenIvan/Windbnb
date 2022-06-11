import React, { FC } from "react";
import "./SearchModal.scss";

interface IProps {
  showLocations: boolean;
  showGuests: boolean;
}

const Search: FC<IProps> = ({ showLocations, showGuests }): JSX.Element | null => {
  const isVisible: boolean = showLocations || showGuests;
console.log(isVisible);

  return (
    <div className={`overlay ${isVisible ? "show" : ""}`}>
      <div className="search-container">
        <div className="search-bar-open">
          <div className="item-bar editable" id="location-bar">
            <div className="item-bar-text">
              <p>Location</p>
              <p>Helsinki, Finland</p>
            </div>
          </div>
          <div className="item-bar editable" id="guests-bar">
            <div className="item-bar-text">
              <p>Guests</p>
              <p>Add guests</p>
            </div>
          </div>
          <div className="item-bar" id="search-icon">
            <button>
              <p>Search</p>
            </button>
          </div>
        </div>
        <div className="search-items">
          <div id="location-items"></div>
          <div id="guests-items"></div>
          <div id="search-items"></div>
        </div>
      </div>
    </div>
  );
};

export default Search;
