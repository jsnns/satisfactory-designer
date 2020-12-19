import React from "react";
import { useRecoilValue } from "recoil";
import { roundPerMin } from "../../../../data/round";
import { requiredInput, totalRawInput } from "../../../../state/input";
import {
  ResourceNode,
  resourceNodeTypeReadable,
} from "../../../../types/ResourceNode";

interface Props {
  node: ResourceNode;
}

export const SolveInput: React.FC<Props> = ({ node }) => {
  const required = useRecoilValue(requiredInput(node));
  const specified = useRecoilValue(totalRawInput(node));
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
