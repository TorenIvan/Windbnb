import { memo } from "react";
import { Guests } from "../../utils/Types";
import editGuestsStyles from "./EditGuests.module.scss";
import {
  MinusSymbol,
  AddSymbol,
  Children,
  ChildrenClarificationText,
  Adults,
  AdultsClarificationText,
} from "../../utils/Constants";

interface IProps {
  guests: Guests;
  updateAdults: (adults: number) => void;
  updateChildren: (guests: number) => void;
}

const EditGuestsComponent = (props: IProps): JSX.Element => {
  const { guests, updateAdults, updateChildren } = props;
  const { adults, children } = guests;

  return (
    <div className={editGuestsStyles.itembarText}>
      <div className={editGuestsStyles.guestsCategory}>
        <article>
          <span className={editGuestsStyles.guestsCategoryTitle}>{Adults}</span>
          <span className={editGuestsStyles.guestsCategoryClarification}>
            {AdultsClarificationText}
          </span>
        </article>
        <div
          className={`${editGuestsStyles.buttonContainer} ${editGuestsStyles.withDivider}`}
        >
          <button onClick={() => updateAdults(adults - 1)}>
            <span>{MinusSymbol}</span>
          </button>
          <span>{adults}</span>
          <button onClick={() => updateAdults(adults + 1)}>
            <span>{AddSymbol}</span>
          </button>
        </div>
      </div>

      <div className={editGuestsStyles.guestsCategory}>
        <article>
          <span className={editGuestsStyles.guestsCategoryTitle}>{Children}</span>
          <span className={editGuestsStyles.guestsCategoryClarification}>{ChildrenClarificationText}</span>
        </article>
        <div className={editGuestsStyles.buttonContainer}>
          <button onClick={() => updateChildren(children - 1)}>
            <span>{MinusSymbol}</span>
          </button>
          <span>{children}</span>
          <button onClick={() => updateChildren(children + 1)}>
            <span>{AddSymbol}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(EditGuestsComponent);
