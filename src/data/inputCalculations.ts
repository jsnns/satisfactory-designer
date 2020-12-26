import { sum } from "lodash";
import { PurityCount } from "../state/factoryInput/inputTypes";
import {
  multiplierForPurity,
  NEEDS_PIPE,
  Purity,
  ResourceNode,
} from "../types/ResourceNode";

export const calclateNodeOutput = (
  purity: Purity,
  overclock: number,
  minerMultilier: number,
  nodeType: ResourceNode
): number => {
  return Math.min(
    NEEDS_PIPE.includes(nodeType) ? 600 : 780,
    multiplierForPurity[purity] * overclock * minerMultilier * 60
  );
};

export const totalResourcesFromNodeCount = (
  nodeCount: PurityCount,
  overclock: number,
  minerMultilier: number,
  nodeType: ResourceNode
): number => {
  return sum([
    nodeCount.impure *
      calclateNodeOutput("impure", overclock, minerMultilier, nodeType),
    nodeCount.normal *
      calclateNodeOutput("normal", overclock, minerMultilier, nodeType),
    nodeCount.pure *
      calclateNodeOutput("pure", overclock, minerMultilier, nodeType),
  ]);
};
