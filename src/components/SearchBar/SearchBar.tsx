import React, { useState, FC } from "react";
import "./SearchBar.scss";
import Logo from "../../logo.png";
import "font-awesome/css/font-awesome.min.css";

const SearchBar: FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [editGuests, setEditGuests] = useState<boolean>(false);
  const [editLocation, setEditLocation] = useState<boolean>(false);

  let searchBar: JSX.Element = (
    <>
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
    </>
  );
  if (editGuests) {
    searchBar = <div className="search-bar open"></div>;
  }
  if (editLocation) {
    searchBar = <div className="search-bar open"></div>;
  }

  return <nav className="nav-bar">{searchBar}</nav>;
};

export default SearchBar;
