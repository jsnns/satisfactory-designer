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

export const machineReadable: { [key in MachineType]: string } = {
  assembler: "Assembler",
  constructor: "Constructor",
  foundary: "Foundary",
  manufacturer: "Manufacturer",
  miner: "Miner",
  refinery: "Refinery",
  smelter: "Smelter",
};
