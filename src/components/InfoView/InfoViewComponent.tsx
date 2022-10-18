import React, { memo } from "react";
import Logo from "../../logo.png";
import "font-awesome/css/font-awesome.min.css";
import infoViewStyles from "./InfoView.module.scss";
import { InitialGuestsTitle } from "../../utils/Constants";

interface IProps {
  locationTitle: string;
  guestsTitle: string;
  handleLocationPress: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleGuestsPress: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const InfoViewComponent = (props: IProps): JSX.Element => {
  const { locationTitle, guestsTitle, handleLocationPress, handleGuestsPress } = props;
  let guestsTextColorEnabled: boolean = true;
  if (guestsTitle === InitialGuestsTitle) {
    guestsTextColorEnabled = false;
  }
  return (
    <div className={infoViewStyles.navBar}>
      <div id={infoViewStyles["icon-container"]}>
        <img id={infoViewStyles["logo"]} src={Logo} alt="logo" />
      </div>
      <div className={infoViewStyles.searchBar}>
        <div id={infoViewStyles["location-item"]} className={infoViewStyles.closedItem}>
          <button onClick={handleLocationPress}>
            <p>{locationTitle}</p>
          </button>
        </div>
        <div id={infoViewStyles["guests-item"]} className={infoViewStyles.closedItem}>
          <button onClick={handleGuestsPress}>
            <p
              id={
                guestsTextColorEnabled
                  ? infoViewStyles["enabled-color"]
                  : infoViewStyles["disabled-color"]
              }
            >
              {guestsTitle}
            </p>
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

export default memo(InfoViewComponent);
