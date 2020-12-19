import React from "react";
import { useRecoilState } from "recoil";
import { NumberInput } from "../../../../library/NumberInput/NumberInput";
import { normalizeOverclockSpeed } from "../../../../data/normalize";
import { overclockSpeedState } from "../../../../state/input";
import "./Overclock.scss";

export const Overclock: React.FC = () => {
  const [overclockSpeed, setOverclockSpeed] = useRecoilState(
    overclockSpeedState
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
