import React from "react";
import { useRecoilState } from "recoil";
import { minerTypeState } from "../../../../state/input";
import { MINER_TYPES } from "../../../../types/Miner";
import "./MinerType.scss";

interface Props {}

export const MinerSpeed: React.FC<Props> = () => {
  const [selectedMinerType, setMinerType] = useRecoilState(minerTypeState);

  return (
    <div className="MinerType">
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
