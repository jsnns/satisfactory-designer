import React from "react";
import { useRecoilState } from "recoil";
import { ManySelect } from "../../../../library";
import { Spacer } from "../../../../library/Spacer";
import { enabledMachineConfigs } from "../../../../state/designConfig";
import { MACHINES_TYPES } from "../../../../types/Machine";
import { SetBaseMachineClock } from "./SetBaseMachineClock";

export const BaseMachineClock: React.FC = () => {
  const [enabledMachines, setEnabledMachines] = useRecoilState(
    enabledMachineConfigs
  );
  return (
    <div>
      <ManySelect
        includeSelectAll
        maxDropdownHeight={200}
        label="Machine Configuration"
        selected={enabledMachines}
        onSelectionChange={setEnabledMachines}
        options={MACHINES_TYPES.map((machineType) => ({
          value: machineType,
          label: machineType,
        }))}
      />
      <Spacer size="large" />
      {enabledMachines.map((machine, index) => (
        <React.Fragment key={`baseClock${machine}`}>
          {index !== 0 && <Spacer size="small" />}
          <SetBaseMachineClock machine={machine} />
        </React.Fragment>
      ))}
    </div>
  );
};
