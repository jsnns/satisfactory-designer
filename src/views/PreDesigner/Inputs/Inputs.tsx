import React from "react";
import { Spacer } from "../../../library/Spacer";
import { AddInputNode } from "./AddInputNode";
import "./Inputs.scss";
import { MinerSpeed } from "./MinerType/MinerType";
import { NodeList } from "./NodeInputs/NodeList";
import { Overclock } from "./Overclock/Overclock";
import { RawInputTable } from "./RawInputTable/RawInputTable";

export const Inputs: React.FC = () => {
  return (
    <div className="Inputs">
      <h2>Factory Inputs</h2>
      <Spacer size="medium" />
      <div className="Body">
        <AddInputNode />
        <Spacer size="large" />
        <NodeList />
        <Spacer size="medium" />
        <MinerSpeed />
        <Spacer size="medium" />
        <Overclock />
        <Spacer size="large" />
        <RawInputTable />
      </div>
    </div>
  );
};
