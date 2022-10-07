import { memo } from "react";
import { Guests } from "../../utils/Types";
import editGuestsStyles from "./EditGuests.module.scss";

interface IProps {
  guests: Guests;
  updateAdults: (adults: number) => void;
  updateChildren: (guests: number) => void;
}

const EditGuestsComponent = (props: IProps): JSX.Element => {
  return (
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
          <button><span>-</span></button>
          <span>0</span>
          <button><span>+</span></button>
        </div>
      </div>

      <div className={editGuestsStyles.guestsCategory}>
        <article>
          <span className={editGuestsStyles.guestsCategoryTitle}>Children</span>
          <span className={editGuestsStyles.guestsCategoryClarification}>Ages 2-12</span>
        </article>
        <div className={editGuestsStyles.buttonContainer}>
          <button><span>-</span></button>
          <span>0</span>
          <button><span>+</span></button>
        </div>
      </div>
    </div>
  );
};

export default memo(EditGuestsComponent);
