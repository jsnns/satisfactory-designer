import React from "react";
import { useRecoilState } from "recoil";
import { PartIcon } from "../../../../components/PartIcon/PartIcon";
import { normalizeOverclockSpeed } from "../../../../data/normalize";
import { Select } from "../../../../library";
import { WithInfo } from "../../../../library/Info/Info";
import { NumberInput } from "../../../../library/NumberInput/NumberInput";
import { Spacer } from "../../../../library/Spacer";
import { factoryInputState } from "../../../../state/factoryInput";
import { getMinerOptions, MinerType } from "../../../../types/Miner";
import {
  PURITY,
  Purity,
  purityReadbable,
  ResourceNode,
  resourceNodeTypeReadable,
} from "../../../../types/ResourceNode";
import { Count } from "./Count";
import "./InputRow.scss";

interface Props {
  type: ResourceNode;
}

export const Node: React.FC<Props> = ({ type }) => {
  const [nodeCount, setNodeCount] = useRecoilState(
    factoryInputState.input(type)
  );
  const [minerType, setMinerType] = useRecoilState(
    factoryInputState.minerType(type)
  );
  const [overclock, setOverclock] = useRecoilState(
    factoryInputState.overclockMultipler(type)
  );

  const add = (purity: Purity, change: number) => () => {
    const newCount = Math.max(nodeCount[purity] + change, 0);
    setNodeCount({ ...nodeCount, [purity]: newCount });
  };

  return (
    <div className="Node">
      <div className="NodeBody">
        <div className="BoxLabel ResourceType">
          <WithInfo
            infoText={`Configure the number nodes and miners used for ${resourceNodeTypeReadable[type]} nodes.`}
          >
            <span>
              {resourceNodeTypeReadable[type]}
              <PartIcon part={type} />
            </span>
          </WithInfo>
        </div>
        <Spacer size="medium" />
        <div className="NodeCounts">
          {PURITY.map((purity) => (
            <Count
              key={`PurityCount${purity}`}
              label={purityReadbable[purity]}
              count={nodeCount[purity]}
              plus={add(purity, 1)}
              minus={add(purity, -1)}
            />
          ))}
        </div>
        <Spacer size="small" />
        <div className="InputConfiguration">
          <Select
            label="Miner Type"
            selected={[minerType]}
            options={getMinerOptions(type).map((minerType) => ({
              label: minerType,
              value: minerType,
            }))}
            onSelectionChange={(newMinerType: MinerType[]) =>
              setMinerType(newMinerType[0])
            }
          />
          <Spacer size="small" />
          <NumberInput
            leftElement={
              <div className="ActionButtons">
                <button onClick={() => setOverclock(2.5)}>250%</button>
              </div>
            }
            label="Miner Overclock Multiple"
            onChange={(newOverclock) =>
              setOverclock(normalizeOverclockSpeed(newOverclock))
            }
            value={overclock}
          />
        </div>
      </div>
    </div>
  );
};
