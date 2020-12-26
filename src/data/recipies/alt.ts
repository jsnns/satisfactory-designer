import { Recipe, RecipePart } from "../../types/Recipe";
import { RawResource, recipeBook } from "./default";

const SolidSteelIngot: Recipe = {
  name: "Solid Steel Ingot",
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

const CateriumComputer: Recipe = {
  name: "Caterium Computer",
  machine: "manufacturer",
  inputs: [
    { part: "circuit_board", perMin: 26.25 },
    { part: "quickwire", perMin: 150 },
    { part: "rubber", perMin: 45 },
  ],
  output: {
    part: "computer",
    perMin: 3.75,
  },
};

const CateriumCircutBoard: Recipe = {
  name: "Caterium Circut Board",
  machine: "assembler",
  inputs: [
    { part: "plastic", perMin: 12.5 },
    { part: "quickwire", perMin: 37.5 },
  ],
  output: {
    part: "circuit_board",
    perMin: 8.75,
  },
};

const FusedQuickwire: Recipe = {
  name: "Fused Quickwire",
  machine: "assembler",
  inputs: [
    { part: "caterium_ingot", perMin: 7.5 },
    { part: "copper_ingot", perMin: 37.5 },
  ],
  output: {
    part: "quickwire",
    perMin: 90,
  },
};

const PureCateriumIngot: Recipe = {
  name: "Pure Caterium Ingot",
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

const CopperAlloyIngot: Recipe = {
  name: "Copper Alloy Ingot",
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

const SteelScrew: Recipe = {
  name: "Steel Screw",
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

export const altRecipesFor: { [key in RecipePart]?: Recipe[] } = {
  screw: [SteelScrew],
  computer: [CateriumComputer],
  circuit_board: [CateriumCircutBoard],
  caterium_ingot: [PureCateriumIngot],
  steel_ingot: [SolidSteelIngot],
  copper_ingot: [CopperAlloyIngot],
  quickwire: [FusedQuickwire],
};

export const getRecipes = (part: RecipePart): Recipe[] =>
  [recipeBook[part] || RawResource(part)].concat(altRecipesFor[part] || []);
