import React from "react";
import { useRecoilState } from "recoil";
import { normalizeOverclockSpeed } from "../../../../data/normalize";
import { NumberInput } from "../../../../library/NumberInput/NumberInput";
import { factoryInputState } from "../../../../state/factoryInput";
import "./Overclock.scss";

export const Overclock: React.FC = () => {
  const [overclockSpeed, setOverclockSpeed] = useRecoilState(
    factoryInputState.overclockSpeedState
  );

  const updateOverclockSpeed = (newSpeed: number) => {
    setOverclockSpeed(normalizeOverclockSpeed(newSpeed));
  };

  return (
    <div className="OverclockMultipler">
      <NumberInput
        value={overclockSpeed}
        onChange={updateOverclockSpeed}
        label="Overclock Multipler"
      />
    </div>
  );
};
