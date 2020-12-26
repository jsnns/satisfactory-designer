import React from "react";
import { useRecoilState } from "recoil";
import { Select } from "../../../library";
import { factoryOutputState } from "../../../state/factoryOutput";
import { Part, PARTS, partTypeReadable } from "../../../types/Part";

interface Props {}

export const AddPart: React.FC<Props> = () => {
  const [enabledParts, setEnabledParts] = useRecoilState(
    factoryOutputState.enabledOutputParts
  );

  const addPart = (newEnabledParts: Part[]) => {
    setEnabledParts(newEnabledParts);
  };

  return (
    <Select
      multiple
      search
      selected={enabledParts}
      options={PARTS.map((partType) => ({
        value: partType,
        label: partTypeReadable[partType],
      }))}
      maxDropdownHeight={300}
      onSelectionChange={addPart}
      label="Output Parts"
    />
  );
};
