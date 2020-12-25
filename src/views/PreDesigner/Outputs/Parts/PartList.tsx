import React from "react";
import { useRecoilValue } from "recoil";
import { PartIcon } from "../../../../components/PartIcon/PartIcon";
import { Spacer } from "../../../../library/Spacer";
import { enabledOutputParts } from "../../../../state/output";
import "./PartList.scss";
import { PartOutputTarget } from "./PartOutputTarget";

export const PartList: React.FC = () => {
  const enabledParts = useRecoilValue(enabledOutputParts);

  return (
    <div className="ListResourceNodes">
      {enabledParts.map((partType, index) => {
        return (
          <React.Fragment key={`output${partType}`}>
            {index !== 0 && <Spacer size="small" />}
            <div className="OutputRow">
              <PartIcon part={partType} />
              <PartOutputTarget type={partType} />
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};
