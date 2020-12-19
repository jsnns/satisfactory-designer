import React from "react";
import { Spacer } from "../../library/Spacer";
import { Modal as ModalType } from "../../state/modal";
import "./Modal.scss";

interface Props {
  modal: ModalType | null;
  dismissModal: () => void;
}

export const Modal: React.FC<Props> = ({ modal, dismissModal }) => {
  if (!modal) {
    return null;
  }

  return (
    <div className="ModalContainer">
      <div className="Modal">
        <div className="ModalHeader">
          <h3 className="Title">{modal.title}</h3>
          <Spacer size="medium" />
          <button onClick={dismissModal}>X</button>
        </div>
        <Spacer size="small" />
        <div className="ModalBody">{modal.element}</div>
      </div>
    </div>
  );
};
