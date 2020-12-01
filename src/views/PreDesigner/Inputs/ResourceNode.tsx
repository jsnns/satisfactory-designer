import React from "react";
import { resourceNodeTypeReadable } from "../../../constants/readable";
import { imageForNodeType } from "../../../constants/resourceImage";
import { ResourceNode } from "../../../state/types/ResourceNode";
import "./ResourceNode.scss";

export const InputResourceNode: React.FC<ResourceNode> = ({ type, purity }) => {
  return (
    <div className="ResourceNode">
      <div className="label">{resourceNodeTypeReadable[type]}</div>
      <div className="ResourceIcon">
        <img src={imageForNodeType[type]} alt="" className="ResourceImage" />
      </div>
    </div>
  );
};
