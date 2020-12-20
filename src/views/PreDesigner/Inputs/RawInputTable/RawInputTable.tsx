import React from "react";
import { useRecoilValue } from "recoil";
import { enabledInputNodes } from "../../../../state/input";
import { InputTableRow } from "./InputTableRow";
import "./RawInputTable.scss";

interface Props {}

export const RawInputTable: React.FC<Props> = () => {
  const enabledNodes = useRecoilValue(enabledInputNodes);

  if (enabledNodes.length === 0) {
    return <span className="Info">No Inputs Specified</span>;
  }

  return (
    <div className="RawInputTable">
      <table>
        <thead>
          <th>Resource Type</th>
          <th className="Th">Input Total</th>
          <th className="Th">Utilization</th>
        </thead>
        <tbody>
          {enabledNodes.map((nodeType) => (
            <InputTableRow key={`inputTableRow${nodeType}`} type={nodeType} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
