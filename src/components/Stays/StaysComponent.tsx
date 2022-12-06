import { memo } from "react";
import { StaysTypeExtended, StayTypeExtended } from "../../utils/Types";
import Stay from "../Stay/Stay.tsx";
import staysStyles from "./Stays.module.scss";

interface IProps {
  stays: StaysTypeExtended;
}

const StaysComponent = ({ stays }: IProps): JSX.Element => {
  const renderStay = (stay: StayTypeExtended): JSX.Element => {
    const { id, ...otherInfo } = stay;
    return <Stay key={id} stay={otherInfo} />;
  };

  const renderStays = () => {
    return stays.map(renderStay);
  };

  return <div className={staysStyles.StaysContainer}>{renderStays()}</div>;
};

export default memo(StaysComponent);
