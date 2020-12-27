import React from "react";
import { useRecoilValue } from "recoil";
import { PercentBar } from "../../../../library/PercentBar/PercentBar";
import { factoryInputState } from "../../../../state/factoryInput";
import {
  ResourceNode,
  resourceNodeTypeReadable,
} from "../../../../types/ResourceNode";

interface Props {
  type: ResourceNode;
}

export const InputTableRow: React.FC<Props> = ({ type }) => {
  const rawInputTotal = useRecoilValue(factoryInputState.totalRawInput(type));
  const required = useRecoilValue(factoryInputState.requiredInput(type));

  return (
    <tr>
      <td className="Cell">{resourceNodeTypeReadable[type]}</td>
      <td className="Cell">{rawInputTotal}/min</td>
      <td className="Cell">
        <PercentBar max={rawInputTotal} fill={required} />
      </td>
    </tr>
  );
};
