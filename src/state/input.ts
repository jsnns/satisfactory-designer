import { atom, atomFamily, selectorFamily } from "recoil";
import { totalResourcesFromNodeCount } from "../data/inputCalculations";
import { buildProductionLineItemSum } from "../data/recipies/chain";
import { MinerType, multipleForMinerType } from "../types/Miner";
import { PurityCount, ResourceNode } from "../types/ResourceNode";
import { productionLineItems } from "./output";

export const enabledInputNodes = atom<ResourceNode[]>({
  default: [],
  key: "EnabledResourceNodes",
});

export const selectedInputNodes = atomFamily<PurityCount, ResourceNode>({
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

export const totalRawInput = selectorFamily<number, ResourceNode>({
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

export const requiredInput = selectorFamily<number, ResourceNode>({
  key: "RequiredInputValues",
  get: (nodeType) => ({ get }) => {
    const sum = buildProductionLineItemSum(get(productionLineItems));

    return sum[nodeType] || 0;
  },
});
