import React from "react";
import { useRecoilState } from "recoil";
import { selectedInputNodes } from "../../../../state/factoryInputs";
import {
  Purity,
  ResourceNode,
  resourceNodeTypeReadable,
} from "../../../../types/ResourceNode";
import "./Node.scss";

interface Props {
  type: ResourceNode;
}

export const Node: React.FC<Props> = ({ type }) => {
  const [nodeCount, setNodeCount] = useRecoilState(selectedInputNodes(type));

  const add = (purity: Purity, change: number) => {
    const newCount = Math.max(nodeCount[purity] + change, 0);
    setNodeCount({ ...nodeCount, [purity]: newCount });
  };

  return (
    <div className="Node">
      <div className="ResourceType">
        <span>{resourceNodeTypeReadable[type]}</span>
      </div>
      <div className="NodeCounts">
        <div className="Count">
          Pure: {nodeCount.pure}
          <div className="Buttons">
            <button onClick={() => add("pure", 1)}>+</button>
            <button
              onClick={() => add("pure", -1)}
              disabled={nodeCount.pure === 0}
            >
              -
            </button>
          </div>
        </div>
        <div className="Count">
          Normal: {nodeCount.normal}
          <div className="Buttons">
            <button onClick={() => add("normal", 1)}>+</button>
            <button
              onClick={() => add("normal", -1)}
              disabled={nodeCount.normal === 0}
            >
              -
            </button>
          </div>
        </div>
        <div className="Count">
          Impure: {nodeCount.impure}
          <div className="Buttons">
            <button onClick={() => add("impure", 1)}>+</button>
            <button
              onClick={() => add("impure", -1)}
              disabled={nodeCount.impure === 0}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
