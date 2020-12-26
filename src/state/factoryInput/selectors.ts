import { selectorFamily } from "recoil";
import { totalResourcesFromNodeCount } from "../../data/inputCalculations";
import { buildProductionLineItemSum } from "../../data/recipies/chain";
import { multipleForMinerType } from "../../types/Miner";
import { ResourceNode } from "../../types/ResourceNode";
import { productionLineItems } from "../factoryOutput/selectors";
import {
  minerTypeState,
  overclockSpeedState,
  input,
} from "./atoms";

export const totalRawInput = selectorFamily<number, ResourceNode>({
  key: "RawInputValues",
  get: (nodeType) => ({ get }) => {
    const nodeCount = get(input(nodeType));
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
