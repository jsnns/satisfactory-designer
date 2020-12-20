import React from "react";
import { useRecoilState } from "recoil";
import { ManySelect } from "../../../library";
import { enabledOutputParts } from "../../../state/output";
import { Part, PARTS, partTypeReadable } from "../../../types/Part";

interface Props {}

export const AddPart: React.FC<Props> = () => {
  const [enabledParts, setEnabledParts] = useRecoilState(enabledOutputParts);

  const addPart = (newEnabledParts: Part[]) => {
    setEnabledParts(newEnabledParts);
  };

  return (
    <ManySelect
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
