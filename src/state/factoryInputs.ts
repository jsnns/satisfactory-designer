import { atom, atomFamily, selectorFamily } from "recoil";
import { totalResourcesFromNodeCount } from "../data/inputCalculations";
import { MinerType, multipleForMinerType } from "../types/Miner";
import {
  CountResourceNodePurity,
  ResourceNodeType,
} from "../types/ResourceNode";

export const selectedInputNodes = atomFamily<
  CountResourceNodePurity,
  ResourceNodeType
>({
  key: "InputNodes",
  default: {
    pure: 0,
    normal: 0,
    impure: 0,
  },
});

export const minerTypeState = atom<MinerType>({
  key: "MinerSpeed",
  default: "Miner Mk 1.",
});

export const overclockSpeedState = atom<number>({
  key: "OverclockSpeed",
  default: 1,
});

export const totalRawInput = selectorFamily<number, ResourceNodeType>({
  key: "RawInputValues",
  get: (nodeType) => ({ get }) => {
    const nodeCount = get(selectedInputNodes(nodeType));
    const minerType = get(minerTypeState);
    const overclock = get(overclockSpeedState);

    return totalResourcesFromNodeCount(
      nodeCount,
      overclock,
      multipleForMinerType[minerType]
    );
  },
});
