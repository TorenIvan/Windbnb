import { memo } from "react";
import { NoStaysInfo } from "../../utils/Constants";
import ErrorComponent from "../Error/ErrorComponent";

interface IProps {
  location: string;
  adults: number;
  children: number;
}

const NoStaysComponent = (props: IProps): JSX.Element => {
  const { location, adults, children } = props;

  const info = NoStaysInfo(location, adults, children);
  return <ErrorComponent {...info} />;
};

export default memo(NoStaysComponent);
