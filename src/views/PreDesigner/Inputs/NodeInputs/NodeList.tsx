import React from "react";
import { useRecoilValue } from "recoil";
import { Spacer } from "../../../../library/Spacer";
import { enabledInputNodes } from "../../../../state/input";
import { Node } from "./Node";
import "./NodeList.scss";

export const NodeList: React.FC = () => {
  const inputNodes = useRecoilValue(enabledInputNodes);

  if (inputNodes.length === 0) return null;

  return (
    <div className="ListResourceNodes">
      {inputNodes.map((resourceNodeType, index) => {
        return (
          <React.Fragment key={resourceNodeType}>
            {index !== 0 && <Spacer size="small" />}
            <Node type={resourceNodeType} />
          </React.Fragment>
        );
      })}
    </div>
  );
};
