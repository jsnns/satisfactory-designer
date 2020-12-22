import React from "react";
import { Spacer } from "../../library/Spacer";
import { Designer3D } from "./Designer3D";

export const FactoryDesigner: React.FC = () => {
  return (
    <div className="Designer">
      <h2>Factory Designer</h2>
      <Spacer size="medium" />
      <Designer3D />
    </div>
  );
};
