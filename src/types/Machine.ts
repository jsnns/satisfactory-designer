export const MACHINES_TYPES = [
  "constructor",
  "assembler",
  "foundary",
  "smelter",
  "miner",
  "manufacturer",
  "refinery",
] as const;
export type MachineType = typeof MACHINES_TYPES[number];
