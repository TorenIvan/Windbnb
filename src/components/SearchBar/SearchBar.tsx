import React, { useState, FC } from "react";
import "./SearchBar.scss";
import Logo from "../../logo.png";
import "font-awesome/css/font-awesome.min.css";

const SearchBar: FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [editGuests, setEditGuests] = useState<boolean>(true);
  const [editLocation, setEditLocation] = useState<boolean>(false);

  let searchBar: JSX.Element = (
    <nav className="nav-bar">
      <div id="icon-container">
        <img id="logo" src={Logo} alt="logo" />
      </div>
      <div className="search-bar closed">
        <div id="location-item" className="closed-item">
          <p>Helsinki, Finland</p>
        </div>
        <div id="guests-item" className="closed-item">
          <p>Add guests</p>
        </div>
        <div id="search-icon-item" className="closed-item">
          <i className="fa fa-search" />
        </div>
      </div>
    </nav>
  );
  if (editGuests) {
    searchBar = (
      <nav className="nav-bar centralize">
        <div className="search-bar open">
          <div id="location-item" className="open-item">
            <p>Location</p>
            <p>Helsinki, Finland</p>
          </div>
          <div id="guests-item" className="open-item">
            <p>Add guests</p>
          </div>
          <div id="search-icon-item" className="open-item">
            <i className="fa fa-search" />
          </div>
        </div>
      </nav>
    );
  }
  if (editLocation) {
    searchBar = <div className="search-bar open"></div>;
  }

  return searchBar;
};

export default SearchBar;
