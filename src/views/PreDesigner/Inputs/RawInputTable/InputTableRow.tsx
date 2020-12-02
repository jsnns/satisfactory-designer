import React from "react";
import { useRecoilValue } from "recoil";
import { resourceNodeTypeReadable } from "../../../../constants/readable";
import { totalRawInput } from "../../../../state/factoryInputs";
import { ResourceNodeType } from "../../../../types/ResourceNode";

interface Props {
  type: ResourceNodeType;
}

export const InputTableRow: React.FC<Props> = ({ type }) => {
  const rawInputTotal = useRecoilValue(totalRawInput(type));

  if (rawInputTotal < 1) return null;

  return (
    <div className="TRow">
      <div className="Cell">{resourceNodeTypeReadable[type]}</div>
      <div className="Cell">{rawInputTotal}/min</div>
    </div>
  );
};
