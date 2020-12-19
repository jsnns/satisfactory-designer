import React from "react";
import { Spacer } from "../../../library/Spacer";
import { AddPart } from "./AddPart";
import "./Outputs.scss";
import { PartList } from "./Parts/PartList";

interface Props {}

export const Outputs: React.FC<Props> = () => {
  return (
    <div className="Outputs">
      <h2>Factory Outputs</h2>
      <Spacer size="medium" />
      <div className="Body">
        <AddPart />
        <Spacer size="large" />
        <PartList />
      </div>
    </div>
  );
};
