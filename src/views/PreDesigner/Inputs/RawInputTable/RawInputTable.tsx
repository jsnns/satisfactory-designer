import React from "react";
import { RESOURCE_NODE_TYPE } from "../../../../types/ResourceNode";
import { InputTableRow } from "./InputTableRow";
import "./RawInputTable.scss";

interface Props {}

export const RawInputTable: React.FC<Props> = () => {
  return (
    <div className="RawInputTable">
      <div className="Table">
        <div className="THead">
          <div className="Th">Resource Type</div>
          <div className="Th">Input Total</div>
        </div>
        <div className="TBody">
          {RESOURCE_NODE_TYPE.map((nodeType) => (
            <InputTableRow key={`inputTableRow${nodeType}`} type={nodeType} />
          ))}
        </div>
      </div>
    </div>
  );
};
