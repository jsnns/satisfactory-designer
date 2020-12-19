import React from "react";
import { Spacer } from "../../../library/Spacer";
import { AddInputNode } from "./AddInputNode";
import "./Inputs.scss";
import { MinerSpeed } from "./MinerType/MinerType";
import { NodeList } from "./NodeInputs/NodeList";
import { Overclock } from "./Overclock/Overclock";
import { RawInputTable } from "./RawInputTable/RawInputTable";
import { SolveInputs } from "./SolveInputs/SolveInputs";

export const Inputs: React.FC = () => {
  return (
    <div className="Inputs">
      <h2>Factory Inputs</h2>
      <Spacer size="medium" />
      <div className="Body">
        <div className="NodeList">
          <AddInputNode />
          <Spacer size="medium" />
          <NodeList />
          <Spacer size="large" />
        </div>
        <div className="MinerConfiguration">
          <h3>Miner Configuration</h3>
          <Spacer size="small" />
          <MinerSpeed />
          <Spacer size="small" />
          <Overclock />
          <Spacer size="large" />
        </div>
        <div className="RawInputsTable">
          <h3>Raw Inputs</h3>
          <Spacer size="small" />
          <RawInputTable />
          <Spacer size="large" />
        </div>
        <div className="SolveInputs">
          <SolveInputs />
          <Spacer size="large" />
        </div>
      </div>
    </div>
  );
};
