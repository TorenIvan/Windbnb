import { memo } from "react";
import { DefaultErrorType } from "../../utils/Types.ts";
import { DefaultError } from "../../utils/Constants.ts";
import errorStyles from "./ErrorComponent.module.scss";

interface IProps extends DefaultErrorType {}

const ErrorComponent = (props: IProps) => {
  const { image, title, body } = props;
  return (
    <div className={errorStyles.ErrorContainer}>
      <div id={errorStyles["image-container"]}>
        <img id={errorStyles["image"]} src={image} alt="ErrorInfoImage" />
      </div>
      <div id={errorStyles["text-container"]}>
        <h2 id={errorStyles["title"]}>{title}</h2>
        <p id={errorStyles["body"]}>{body}</p>
      </div>
    </div>
  );
};

ErrorComponent.defaultProps = { ...DefaultError };

export default memo(ErrorComponent);
