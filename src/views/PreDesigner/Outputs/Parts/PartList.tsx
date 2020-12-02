import React from "react";
import { Spacer } from "../../../../components/Spacer";
import { PARTS } from "../../../../types/Part";
import { Part } from "./Part";

export const PartList: React.FC = () => {
  return (
    <div className="ListResourceNodes">
      {PARTS.map((partType, index) => {
        return (
          <React.Fragment key={`output${partType}`}>
            {index !== 0 && <Spacer size="small" />}
            <Part type={partType} />
          </React.Fragment>
        );
      })}
    </div>
  );
};
