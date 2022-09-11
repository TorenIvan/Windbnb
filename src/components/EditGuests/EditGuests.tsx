import React, { FC } from "react";
import { Guests } from "../../utils/Types";
import editGuestsStyles from "./EditGuests.module.scss";

interface IProps {
  isVisible: boolean;
  modifyGuests: (guests: Guests) => void;
}

const EditGuests: FC<IProps> = ({ isVisible, modifyGuests }): JSX.Element => {
  let data: JSX.Element | null = null;
  if (isVisible)
    data = (
      <div className={editGuestsStyles.itembarText}>
        <div className={editGuestsStyles.guestsCategory}>
          <article>
            <span className={editGuestsStyles.guestsCategoryTitle}>Adults</span>
            <span className={editGuestsStyles.guestsCategoryClarification}>
              Age 13 or above
            </span>
          </article>
          <div
            className={`${editGuestsStyles.buttonContainer} ${editGuestsStyles.withDivider}`}
          >
            <button>-</button>
            <span>0</span>
            <button>+</button>
          </div>
        </div>

        <div className={editGuestsStyles.guestsCategory}>
          <article>
            <span className={editGuestsStyles.guestsCategoryTitle}>Children</span>
            <span className={editGuestsStyles.guestsCategoryClarification}>
              Ages 2-12
            </span>
          </article>
          <div className={editGuestsStyles.buttonContainer}>
            <button>-</button>
            <span>0</span>
            <button>+</button>
          </div>
        </div>
      </div>
    );
  return <div className="item-bar editable">{data}</div>;
};

export default EditGuests;
