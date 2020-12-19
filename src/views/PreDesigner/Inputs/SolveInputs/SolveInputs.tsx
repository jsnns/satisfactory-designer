import React from "react";
import { RESOURCE_NODE } from "../../../../types/ResourceNode";
import { SolveInput } from "./SolveInput";

export const SolveInputs: React.FC = () => {
  return (
    <div className="SolveInputs">
      {RESOURCE_NODE.map((nodeType) => (
        <SolveInput node={nodeType} />
      ))}
    </div>
  );
};
