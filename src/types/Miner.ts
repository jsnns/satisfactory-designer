export const MINER_TYPES = [
  "Miner Mk 1.",
  "Miner Mk. 2",
  "Miner Mk. 3",
] as const;
export type MinerType = typeof MINER_TYPES[number];

export const multipleForMinerType: { [key in MinerType]: number } = {
  "Miner Mk 1.": 1,
  "Miner Mk. 2": 2,
  "Miner Mk. 3": 4,
};
