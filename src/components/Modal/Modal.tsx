import React, { FC, memo } from "react";
import "./SearchModal.scss";

interface IProps {
  showLocations: boolean;
  showGuests: boolean;
  location: null | string;
  guests: null | string;
  cancelModal: () => void;
}

const Search: FC<IProps> = (props): JSX.Element => {
  const { showLocations, showGuests, cancelModal } = props;
  const isVisible: boolean = showLocations || showGuests;

  return (
    <div className={`overlay ${isVisible ? "show" : ""}`}>
      <div className="modal-container">
        <div className="search-container">
          <div className="search-bar-open">
            <div className="item-bar editable">
              <div className="item-bar-text">
                <p className="title"> Location</p>
                <p className="choice"> Helsinki, Finland</p>
              </div>
            </div>
            <div className="item-bar editable">
              <div className="item-bar-text">
                <p className="title">Guests</p>
                <p className="choice">Add guests</p>
              </div>
            </div>
            <div className="item-bar" id="search-icon">
              <button>
                <p>&#xf002;&nbsp;&nbsp;&nbsp;Search</p>
              </button>
            </div>
          </div>
          <div className="search-bar-items">
            <div className="item-bar editable">
              {showLocations && (
                <div className="item-bar-text">
                  <p className="multiple-choice">
                    &#xf124;&nbsp;&nbsp;&nbsp;Helsinki, Finland
                  </p>
                  <p className="multiple-choice">
                    &#xf124;&nbsp;&nbsp;&nbsp;Turku, Finland
                  </p>
                  <p className="multiple-choice">
                    &#xf124;&nbsp;&nbsp;&nbsp;Oulu, Finland
                  </p>
                  <p className="multiple-choice">
                    &#xf124;&nbsp;&nbsp;&nbsp;Vaasa, Finland
                  </p>
                </div>
              )}
            </div>
            <div className="item-bar editable">
              {showGuests && (
                <div className="item-bar-text">
                  <p className="multiple-choice">
                    &#xf124;&nbsp;&nbsp;&nbsp;Helsinki, Finland
                  </p>
                  <p className="multiple-choice">
                    &#xf124;&nbsp;&nbsp;&nbsp;Turku, Finland
                  </p>
                  <p className="multiple-choice">
                    &#xf124;&nbsp;&nbsp;&nbsp;Oulu, Finland
                  </p>
                  <p className="multiple-choice">
                    &#xf124;&nbsp;&nbsp;&nbsp;Vaasa, Finland
                  </p>
                </div>
              )}
            </div>
            <div className="item-bar" id="search-icon" />
          </div>
        </div>
        <div className="close-modal">
          <button onClick={cancelModal}>
            <p>x</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Search);
