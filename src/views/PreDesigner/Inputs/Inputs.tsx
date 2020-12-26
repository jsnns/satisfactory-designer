import React from "react";
import { Spacer } from "../../../library/Spacer";
import { AddInputNode } from "./AddInputNode";
import { NodeList } from "./InputList/InputList";
import "./Inputs.scss";
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
