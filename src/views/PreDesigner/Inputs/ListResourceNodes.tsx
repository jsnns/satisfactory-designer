import React from "react";
import { useRecoilState } from "recoil";
import { selectedInputNodes } from "../../../state/factoryInputs";
import "./ListResourceNodes.scss";
import { RemoveResourceNode } from "./RemoveResourceNode";
import { InputResourceNode } from "./ResourceNode";

export const ListResourceNodes: React.FC = () => {
  const [inputNodes] = useRecoilState(selectedInputNodes);
  return (
    <div className="ListResourceNodes">
      {inputNodes.map((node, index) => (
        <div
          className="ResourceNodeItem"
          key={`nodeList-node${index}${node.type}${node.purity}`}
        >
          <InputResourceNode {...node} />
          <RemoveResourceNode index={index} />
        </div>
      ))}
    </div>
  );
};
