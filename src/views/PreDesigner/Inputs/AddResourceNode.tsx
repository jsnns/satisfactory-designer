import React from "react";
import { useRecoilState } from "recoil";
import { selectedInputNodes } from "../../../state/factoryInputs";
import { ResourceNode } from "../../../state/types/ResourceNode";

export const AddResourceNode: React.FC = () => {
  const [inputNodes, setInputNodes] = useRecoilState(selectedInputNodes);

  const createNewInputNode = (newNode: ResourceNode) => {
    setInputNodes([newNode].concat(inputNodes));
  };

  return (
    <div>
      <button
        onClick={() =>
          createNewInputNode({
            purity: "pure",
            type: "limestone",
          })
        }
      >
        Add Node
      </button>
    </div>
  );
};
