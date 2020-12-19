import React from "react";
import { useRecoilState } from "recoil";
import { normalizeBaseClock } from "../../../../data/normalize";
import { NumberInput } from "../../../../library/NumberInput/NumberInput";
import { baseMachineClock } from "../../../../state/designConfig";
import { MachineType } from "../../../../types/Machine";

interface Props {
  machine: MachineType;
}

export const SetBaseMachineClock: React.FC<Props> = ({ machine }) => {
  const [baseClock, setBaseClock] = useRecoilState(baseMachineClock(machine));

  return (
    <NumberInput
      label={machine}
      value={baseClock}
      onChange={(newBaseClock) =>
        setBaseClock(normalizeBaseClock(newBaseClock))
      }
    />
  );
};
