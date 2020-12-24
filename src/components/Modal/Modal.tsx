import React from "react";
import HandleClickOutside from "../../library/HandleClickOutside";
import { ListenForKeyPress } from "../../library/ListenForKeyPress";
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
    <ListenForKeyPress handlers={{ Escape: dismissModal }}>
      <div className="ModalContainer">
        <HandleClickOutside handler={dismissModal}>
          <div className="Modal">
            <div className="ModalHeader">
              <h3 className="Title">{modal.title}</h3>
              <Spacer size="medium" />
              <button onClick={dismissModal}>X</button>
            </div>
            <Spacer size="small" />
            <div className="ModalBody">{modal.element}</div>
          </div>
        </HandleClickOutside>
      </div>
    </ListenForKeyPress>
  );
};
