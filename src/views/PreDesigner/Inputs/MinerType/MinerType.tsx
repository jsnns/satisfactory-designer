import React from "react";
import { useRecoilState } from "recoil";
import { minerTypeState } from "../../../../state/input";
import { MINER_TYPES } from "../../../../types/Miner";

interface Props {}

export const MinerSpeed: React.FC<Props> = () => {
  const [selectedMinerType, setMinerType] = useRecoilState(minerTypeState);

  return (
    <div>
      {MINER_TYPES.map((minerType) => {
        return (
          <button
            key={`minerType${minerType}`}
            disabled={selectedMinerType === minerType}
            onClick={() => setMinerType(minerType)}
          >
            {minerType}
          </button>
        );
      })}
    </div>
  );
};
