import { DefaultValue, selectorFamily } from "recoil";
import { totalResourcesFromNodeCount } from "../../data/inputCalculations";
import { buildProductionLineItemSum } from "../../data/recipies/chain";
import { multipleForMinerType } from "../../types/Miner";
import { ResourceNode } from "../../types/ResourceNode";
import { allProductionLineItems } from "../factoryOutput/selectors";
import { input, minerType, overclockMultipler } from "./atoms";
import { InputConfiguration } from "./inputTypes";

export const totalRawInput = selectorFamily<number, ResourceNode>({
  key: "RawInputValues",
  get: (nodeType) => ({ get }) => {
    const nodeCount = get(input(nodeType));
    const { minerType, overclockMultipler } = get(inputConfiguration(nodeType));

    return totalResourcesFromNodeCount(
      nodeCount,
      overclockMultipler,
      multipleForMinerType[minerType]
    );
  },
});

export const requiredInput = selectorFamily<number, ResourceNode>({
  key: "RequiredInputValues",
  get: (nodeType) => ({ get }) => {
    const sum = buildProductionLineItemSum(get(allProductionLineItems));

    return sum[nodeType] || 0;
  },
});

export const inputConfiguration = selectorFamily<
  InputConfiguration,
  ResourceNode
>({
  key: "InputConfiguration",
  get: (nodeType) => ({ get }) => {
    return {
      minerType: get(minerType(nodeType)),
      overclockMultipler: get(overclockMultipler(nodeType)),
    };
  },
  set: (nodeType) => ({ get, set }, newValue) => {
    if (newValue instanceof DefaultValue) return;
    set(minerType(nodeType), newValue.minerType);
    set(overclockMultipler(nodeType), newValue.overclockMultipler);
  },
});
