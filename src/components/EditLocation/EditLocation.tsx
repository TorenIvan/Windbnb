import React, { FC } from "react";

interface IProps {
  isVisible: boolean;
  modifyLocation: (location: string) => void;
}

const EditLocation: FC<IProps> = ({ isVisible, modifyLocation }): JSX.Element | null => {
  if(isVisible) return null;
  return (
    <div className="item-bar editable">
      <div className="item-bar-text">
        <p className="multiple-choice">&#xf124;&nbsp;&nbsp;&nbsp;Helsinki, Finland</p>
        <p className="multiple-choice">&#xf124;&nbsp;&nbsp;&nbsp;Turku, Finland</p>
        <p className="multiple-choice">&#xf124;&nbsp;&nbsp;&nbsp;Oulu, Finland</p>
        <p className="multiple-choice">&#xf124;&nbsp;&nbsp;&nbsp;Vaasa, Finland</p>
      </div>
    </div>
  );
};

export default EditLocation;
