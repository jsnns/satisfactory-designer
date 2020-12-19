import React from "react";
import { Spacer } from "../../../library/Spacer";
import { BaseMachineClock } from "./BaseMachineClock/BaseMachineClock";
import "./DesignConfiguration.scss";

interface Props {}

export const DesignConfiguration: React.FC<Props> = () => {
  return (
    <div className="DesignConfiguration">
      <h2>Design Configuration</h2>
      <Spacer size="medium" />
      <BaseMachineClock />
    </div>
  );
};
