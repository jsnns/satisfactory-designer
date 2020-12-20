import React from "react";
import { useRecoilValue } from "recoil";
import { PercentBar } from "../../../../library/PercentBar/PercentBar";
import { requiredInput, totalRawInput } from "../../../../state/input";
import {
  ResourceNode,
  resourceNodeTypeReadable,
} from "../../../../types/ResourceNode";

interface Props {
  type: ResourceNode;
}

export const InputTableRow: React.FC<Props> = ({ type }) => {
  const rawInputTotal = useRecoilValue(totalRawInput(type));
  const required = useRecoilValue(requiredInput(type));

  if (rawInputTotal === 0) return null;

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
