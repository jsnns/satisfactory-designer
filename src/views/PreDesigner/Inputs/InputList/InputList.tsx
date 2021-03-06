import React from "react";
import { useRecoilValue } from "recoil";
import { Spacer } from "../../../../library/Spacer";
import { factoryInputState } from "../../../../state/factoryInput";
import "./InputList.scss";
import { Node } from "./InputRow";

export const NodeList: React.FC = () => {
  const inputNodes = useRecoilValue(factoryInputState.enabledInputNodes);

  if (inputNodes.length === 0) return null;

  return (
    <div className="ListResourceNodes">
      {inputNodes.map((resourceNodeType, index) => {
        return (
          <React.Fragment key={resourceNodeType}>
            {index !== 0 && <Spacer size="large" />}
            <Node type={resourceNodeType} />
          </React.Fragment>
        );
      })}
    </div>
  );
};
