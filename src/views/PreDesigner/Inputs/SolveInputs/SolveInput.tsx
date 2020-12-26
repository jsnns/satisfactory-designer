import React from "react";
import { useRecoilValue } from "recoil";
import { roundPerMin } from "../../../../data/round";
import { factoryInputState } from "../../../../state/factoryInput";
import {
  ResourceNode,
  resourceNodeTypeReadable,
} from "../../../../types/ResourceNode";

interface Props {
  node: ResourceNode;
}

export const SolveInput: React.FC<Props> = ({ node }) => {
  const required = useRecoilValue(factoryInputState.requiredInput(node));
  const specified = useRecoilValue(factoryInputState.totalRawInput(node));
  if (specified >= required) return null;

  return (
    <div className="SolveInput">
      <span className="Warn">
        You have a deficit of {resourceNodeTypeReadable[node]} (
        {roundPerMin(required - specified)}/min)
      </span>
    </div>
  );
};
