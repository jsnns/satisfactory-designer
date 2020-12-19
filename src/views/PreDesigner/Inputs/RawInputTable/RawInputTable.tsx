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
      <div className="Table">
        <div className="THead">
          <div className="Th">Resource Type</div>
          <div className="Th">Input Total</div>
        </div>
        <div className="TBody">
          {enabledNodes.map((nodeType) => (
            <InputTableRow key={`inputTableRow${nodeType}`} type={nodeType} />
          ))}
        </div>
      </div>
    </div>
  );
};
