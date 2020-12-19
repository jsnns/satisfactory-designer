import { Recipe } from "../../types/Recipe";

export const SolidSteelIngot: Recipe = {
  machine: "foundary",
  inputs: [
    {
      part: "iron_ingot",
      perMin: 40,
    },
    {
      part: "coal",
      perMin: 40,
    },
  ],
  output: {
    part: "steel_ingot",
    perMin: 60,
  },
};

export const CateriumComputer: Recipe = {
  machine: "manufacturer",
  inputs: [
    { part: "circut_board", perMin: 26.25 },
    { part: "quick_wire", perMin: 150 },
    { part: "rubber", perMin: 45 },
  ],
  output: {
    part: "computer",
    perMin: 3.75,
  },
};

export const CateriumCircutBoard: Recipe = {
  machine: "assembler",
  inputs: [
    { part: "plastic", perMin: 12.5 },
    { part: "quick_wire", perMin: 37.5 },
  ],
  output: {
    part: "circut_board",
    perMin: 8.75,
  },
};

export const FusedQuickwire: Recipe = {
  machine: "assembler",
  inputs: [
    { part: "caterium_ingot", perMin: 7.5 },
    { part: "copper_ingot", perMin: 37.5 },
  ],
  output: {
    part: "quick_wire",
    perMin: 90,
  },
};

export const PureCateriumIngot: Recipe = {
  machine: "refinery",
  inputs: [
    { part: "caterium", perMin: 24 },
    { part: "water", perMin: 24 },
  ],
  output: {
    part: "caterium_ingot",
    perMin: 12,
  },
};

export const CopperAlloyIngot: Recipe = {
  machine: "foundary",
  inputs: [
    { part: "copper", perMin: 50 },
    { part: "iron", perMin: 25 },
  ],
  output: {
    part: "copper_ingot",
    perMin: 100,
  },
};

export const SteelScrew: Recipe = {
  machine: "constructor",
  inputs: [
    {
      part: "steel_beam",
      perMin: 5,
    },
  ],
  output: {
    part: "screw",
    perMin: 260,
  },
};
