import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { roundPerMin } from "../../../../data/round";
import { factoryInputState } from "../../../../state/factoryInput";
import {
  ResourceNode,
  resourceNodeTypeReadable,
} from "../../../../types/ResourceNode";
import "./SolveInput.scss";

interface Props {
  node: ResourceNode;
}

export const SolveInput: React.FC<Props> = ({ node }) => {
  const required = useRecoilValue(factoryInputState.requiredInput(node));
  const specified = useRecoilValue(factoryInputState.totalRawInput(node));
  const [enabledInputNodes, setEnabedInputNodes] = useRecoilState(
    factoryInputState.enabledInputNodes
  );
  if (specified >= required) return null;

  const enableNode = () => {
    setEnabedInputNodes([...enabledInputNodes, node]);
  };

  return (
    <div className="SolveInput">
      <span className="Warn">
        You have a deficit of {resourceNodeTypeReadable[node]} (
        {roundPerMin(required - specified)}/min)
      </span>

      {!enabledInputNodes.includes(node) && (
        <button className="Button Primary" onClick={enableNode}>
          Add
        </button>
      )}
    </div>
  );
};
