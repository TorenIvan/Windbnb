import React, { FC } from "react";

interface IProps {
  isModalVisible: boolean;
  children: () => JSX.Element;
}

const Overlay: FC<IProps> = ({ isModalVisible, children }): JSX.Element => {
  if (isModalVisible) return <div className="Overlay">{children()}</div>;
  return children();
};

export default Overlay;
