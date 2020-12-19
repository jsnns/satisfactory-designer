import React from "react";
import { useRecoilState } from "recoil";
import { ManySelect } from "../../../library";
import { enabledInputNodes } from "../../../state/factoryInputs";
import {
  ResourceNode,
  resourceNodeTypeReadable,
  RESOURCE_NODE,
} from "../../../types/ResourceNode";

interface Props {}

export const AddInputNode: React.FC<Props> = () => {
  const [enabledNodes, setEnabledNodes] = useRecoilState(enabledInputNodes);

  const addPart = (newEnabledNodes: ResourceNode[]) => {
    setEnabledNodes(newEnabledNodes);
  };

  return (
    <ManySelect
      selected={enabledNodes}
      options={RESOURCE_NODE.map((nodeType) => ({
        label: resourceNodeTypeReadable[nodeType],
        value: nodeType,
      }))}
      maxDropdownHeight={300}
      onSelectionChange={addPart}
    />
  );
};
