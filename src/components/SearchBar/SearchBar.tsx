import React, { useState, useCallback, FC } from "react";
import "./SearchBar.scss";
import Logo from "../../logo.png";
import "font-awesome/css/font-awesome.min.css";

type clickEvent = React.MouseEvent<HTMLButtonElement>;

const SearchBar: FC = (): JSX.Element => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [editGuests, setEditGuests] = useState<boolean>(false);
  const [editLocation, setEditLocation] = useState<boolean>(false);

  const handleLocationPress = useCallback((event: clickEvent) => {
    event.preventDefault();
    console.log("Handle location press");
  }, []);

  const handleGuestsPress = useCallback((event: clickEvent) => {
    event.preventDefault();
    console.log("Handle guests press");
  }, []);

  let searchBar: JSX.Element = (
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
  // if (editGuests) {
  //   searchBar = (
  //     <nav className="nav-bar centralize">
  //       <div className="search-bar open">
  //         <div id="location-item" className="open-item">
  //           <p>Location</p>
  //           <p>Helsinki, Finland</p>
  //         </div>
  //         <div id="guests-item" className="open-item">
  //           <p>Add guests</p>
  //         </div>
  //         <div id="search-icon-item" className="open-item">
  //           <i className="fa fa-search" />
  //         </div>
  //       </div>
  //     </nav>
  //   );
  // }
  // if (editLocation) {
  //   searchBar = <div className="search-bar open"></div>;
  // }

  return searchBar;
};

export default SearchBar;
