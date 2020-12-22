import React from "react";
import { useRecoilState } from "recoil";
import { Modal } from "../../components/Modal/Modal";
import { Spacer } from "../../library/Spacer";
import { currentModal } from "../../state/modal";
import { DesignConfiguration } from "./DesignConfiguration/DesignConfiguration";
import { Inputs } from "./Inputs/Inputs";
import { Outputs } from "./Outputs/Outputs";
import "./PreDesigner.scss";
import { Preview } from "./Preview/Preview";

interface Props {}

export const PreDesigner: React.FC<Props> = () => {
  const [modal, setModal] = useRecoilState(currentModal);

  return (
    <div className="Designer--">
      <Modal modal={modal} dismissModal={() => setModal(null)} />
      <div className="Inputs-Container">
        <Inputs />
      </div>
      <div className="Center--">
        <div className="DesignConfig-Container">
          <DesignConfiguration />
        </div>
        <Spacer size="medium" />
        <div className="Preview-Container">
          <Preview />
        </div>
      </div>
      <div className="Outputs-Container">
        <Outputs />
      </div>
    </div>
  );
};
