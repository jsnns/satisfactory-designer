import React from "react";
import { useRecoilState } from "recoil";
import { Select } from "../../../../library";
import { WithInfo } from "../../../../library/Info/Info";
import { Spacer } from "../../../../library/Spacer";
import { enabledMachineConfigs } from "../../../../state/designConfig";
import { machineReadable, MACHINES_TYPES } from "../../../../types/Machine";
import { SetBaseMachineClock } from "./SetBaseMachineClock";

export const BaseMachineClock: React.FC = () => {
  const [enabledMachines, setEnabledMachines] = useRecoilState(
    enabledMachineConfigs
  );
  return (
    <div>
      <WithInfo infoText="Specify a base clock speed for each machine type.">
        <Select
          multiple
          maxDropdownHeight={200}
          label="Configure Machine Clockspeed"
          selected={enabledMachines}
          onSelectionChange={setEnabledMachines}
          options={MACHINES_TYPES.map((machineType) => ({
            value: machineType,
            label: machineReadable[machineType],
          }))}
        />
      </WithInfo>
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
