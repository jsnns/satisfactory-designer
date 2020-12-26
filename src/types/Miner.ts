import { NEEDS_PIPE, ResourceNode } from "./ResourceNode";

export const MINER_TYPES = ["Mk. 1", "Mk. 2", "Mk. 3"] as const;
export type MinerType = typeof MINER_TYPES[number];

export const multipleForMinerType: { [key in MinerType]: number } = {
  "Mk. 1": 1,
  "Mk. 2": 2,
  "Mk. 3": 4,
};

export const getMinerOptions = (node: ResourceNode): MinerType[] => {
  return NEEDS_PIPE.includes(node) ? ["Mk. 1"] : ["Mk. 1", "Mk. 2", "Mk. 3"];
};
