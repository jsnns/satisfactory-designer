import React from "react";
import { Spacer } from "../../../../components/Spacer";
import { RESOURCE_NODE_TYPE } from "../../../../types/ResourceNode";
import { Node } from "./Node";
import "./NodeList.scss";

export const NodeList: React.FC = () => {
  return (
    <div className="ListResourceNodes">
      {RESOURCE_NODE_TYPE.map((resourceNodeType, index) => {
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
