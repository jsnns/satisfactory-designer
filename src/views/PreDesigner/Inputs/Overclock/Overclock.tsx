import React from "react";
import { useRecoilState } from "recoil";
import { normalizeOverclockSpeed } from "../../../../data/normalize";
import { overclockSpeedState } from "../../../../state/factoryInputs";

export const Overclock: React.FC = () => {
  const [overclockSpeed, setOverclockSpeed] = useRecoilState(
    overclockSpeedState
  );

  const updateOverclockSpeed = (newSpeed: number) => {
    setOverclockSpeed(normalizeOverclockSpeed(newSpeed));
  };

  return (
    <div>
      <input
        type="number"
        value={overclockSpeed || ""}
        onChange={(e) => {
          updateOverclockSpeed(Number(e.target.value));
        }}
        placeholder="Overclock Speed"
      />
    </div>
  );
};
