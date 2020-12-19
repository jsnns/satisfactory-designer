import React from "react";
import { useRecoilValue } from "recoil";
import { totalRawInput } from "../../../../state/input";
import {
  ResourceNode,
  resourceNodeTypeReadable,
} from "../../../../types/ResourceNode";

interface Props {
  type: ResourceNode;
}

export const InputTableRow: React.FC<Props> = ({ type }) => {
  const rawInputTotal = useRecoilValue(totalRawInput(type));

  if (rawInputTotal === 0) return null;

  return (
    <div className="TRow">
      <div className="Cell">{resourceNodeTypeReadable[type]}</div>
      <div className="Cell">{rawInputTotal}/min</div>
    </div>
  );
};
