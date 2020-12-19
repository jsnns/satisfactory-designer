import React from "react";
import { useRecoilState } from "recoil";
import { Spacer } from "../../../../library/Spacer";
import { selectedInputNodes } from "../../../../state/input";
import {
  PURITY,
  Purity,
  purityReadbable,
  ResourceNode,
  resourceNodeTypeReadable,
} from "../../../../types/ResourceNode";
import "./Node.scss";

interface Props {
  type: ResourceNode;
}

export const Count: React.FC<{
  purity: Purity;
  count: number;
  plus: () => void;
  minus: () => void;
}> = ({ purity, count, plus, minus }) => {
  return (
    <div className="Count">
      {purityReadbable[purity]}
      <div className="Buttons">
        <button onClick={minus} disabled={count === 0}>
          -
        </button>
        <label>{count}</label>
        <button onClick={plus}>+</button>
      </div>
    </div>
  );
};

export const Node: React.FC<Props> = ({ type }) => {
  const [nodeCount, setNodeCount] = useRecoilState(selectedInputNodes(type));

  const add = (purity: Purity, change: number) => () => {
    const newCount = Math.max(nodeCount[purity] + change, 0);
    setNodeCount({ ...nodeCount, [purity]: newCount });
  };

  return (
    <div className="Node">
      <div className="ResourceType">
        <span>{resourceNodeTypeReadable[type]}</span>
      </div>
      <Spacer size="small" />
      <div className="NodeCounts">
        {PURITY.map((purity) => (
          <Count
            purity={purity}
            count={nodeCount[purity]}
            plus={add(purity, 1)}
            minus={add(purity, -1)}
          />
        ))}
      </div>
    </div>
  );
};
