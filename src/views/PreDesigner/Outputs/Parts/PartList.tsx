import React from "react";
import { useRecoilValue } from "recoil";
import { Spacer } from "../../../../library/Spacer";
import { enabledOutputParts } from "../../../../state/factoryOutputs";
import { PartOutputTarget } from "./PartOutputTarget";

export const PartList: React.FC = () => {
  const enabledParts = useRecoilValue(enabledOutputParts);

  return (
    <div className="ListResourceNodes">
      {enabledParts.map((partType, index) => {
        return (
          <React.Fragment key={`output${partType}`}>
            {index !== 0 && <Spacer size="small" />}
            <PartOutputTarget type={partType} />
          </React.Fragment>
        );
      })}
    </div>
  );
};
