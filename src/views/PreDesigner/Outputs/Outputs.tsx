import React from "react";
import { Spacer } from "../../../components/Spacer";
import "./Outputs.scss";
import { PartList } from "./Parts/PartList";

interface Props {}

export const Outputs: React.FC<Props> = () => {
  return (
    <div className="Outputs">
      <h2>Factory Outputs</h2>
      <Spacer size="medium" />
      <div className="Body">
        <PartList />
      </div>
    </div>
  );
};
