import React from "react";
import { useRecoilState } from "recoil";
import { Select } from "../../../library";
import { factoryInputState } from "../../../state/factoryInput";
import {
  ResourceNode,
  resourceNodeTypeReadable,
  RESOURCE_NODE,
} from "../../../types/ResourceNode";

interface Props {}

export const AddInputNode: React.FC<Props> = () => {
  const [enabledNodes, setEnabledNodes] = useRecoilState(
    factoryInputState.enabledInputNodes
  );

  const addPart = (newEnabledNodes: ResourceNode[]) => {
    setEnabledNodes(newEnabledNodes);
  };

  return (
    <Select
      multiple
      search
      label="Factory Inputs"
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
