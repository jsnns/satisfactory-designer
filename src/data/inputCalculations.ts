import {
  CountResourceNodePurity,
  multiplierForPurity,
  ResourceNodePurity,
} from "../types/ResourceNode";

export const calclateNodeOutput = (
  purity: ResourceNodePurity,
  overclock: number,
  minerMultilier: number
): number => {
  return Math.min(
    780,
    multiplierForPurity[purity] * overclock * minerMultilier * 60
  );
};

export const totalResourcesFromNodeCount = (
  nodeCount: CountResourceNodePurity,
  overclock: number,
  minerMultilier: number
): number => {
  return (
    nodeCount.impure * calclateNodeOutput("impure", overclock, minerMultilier) +
    nodeCount.normal * calclateNodeOutput("normal", overclock, minerMultilier) +
    nodeCount.pure * calclateNodeOutput("pure", overclock, minerMultilier)
  );
};
