import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { PartIcon } from "../../../../components/PartIcon/PartIcon";
import { Spacer } from "../../../../library/Spacer";
import { factoryInputState } from "../../../../state/factoryInput";
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
      <span className="Purity">{purityReadbable[purity]}</span>
      <div className="Buttons">
        <button onClick={minus} disabled={count === 0}>
          <AiOutlineMinus width={10} height={10} />
        </button>
        <label>{count}</label>
        <button onClick={plus}>
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
};

export const Node: React.FC<Props> = ({ type }) => {
  const [nodeCount, setNodeCount] = useRecoilState(
    factoryInputState.selectedInputNodes(type)
  );

  const add = (purity: Purity, change: number) => () => {
    const newCount = Math.max(nodeCount[purity] + change, 0);
    setNodeCount({ ...nodeCount, [purity]: newCount });
  };

  return (
    <div className="Node">
      <PartIcon part={type} />
      <div className="NodeBody">
        <div className="ResourceType">
          <span>{resourceNodeTypeReadable[type]}</span>
        </div>
        <Spacer size="small" />
        <div className="NodeCounts">
          {PURITY.map((purity) => (
            <Count
              key={`PurityCount${purity}`}
              purity={purity}
              count={nodeCount[purity]}
              plus={add(purity, 1)}
              minus={add(purity, -1)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
