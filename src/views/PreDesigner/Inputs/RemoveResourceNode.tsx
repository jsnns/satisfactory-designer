import React from "react";
import { useRecoilState } from "recoil";
import { selectedInputNodes } from "../../../state/factoryInputs";

interface Props {
  index: number;
}

export const RemoveResourceNode: React.FC<Props> = ({ index }) => {
  const [inputNodes, setInputNodes] = useRecoilState(selectedInputNodes);

  const removeResourceNode = (indexToRemove: number) => {
    setInputNodes(inputNodes.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <button onClick={() => removeResourceNode(index)}>X</button>
    </div>
  );
};
