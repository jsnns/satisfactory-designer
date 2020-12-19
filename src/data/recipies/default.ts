import { Recipe, RecipePart } from "../../types/Recipe";
import { ResourceNode } from "../../types/ResourceNode";

export type RecipeBook = { [key in RecipePart]: Recipe };
export type OptionalRecipeBook = { [key in RecipePart]?: Recipe };

const IronIngot: Recipe = {
  machine: "smelter",
  inputs: [{ part: "iron", perMin: 30 }],
  output: {
    part: "iron_ingot",
    perMin: 30,
  },
};

const CateriumIngot: Recipe = {
  machine: "smelter",
  inputs: [{ part: "caterium", perMin: 45 }],
  output: {
    part: "caterium_ingot",
    perMin: 15,
  },
};

const CopperIngot: Recipe = {
  machine: "smelter",
  inputs: [{ part: "copper", perMin: 30 }],
  output: {
    part: "copper_ingot",
    perMin: 30,
  },
};

const SteelBeam: Recipe = {
  machine: "constructor",
  inputs: [{ part: "steel_ingot", perMin: 60 }],
  output: {
    part: "steel_beam",
    perMin: 20,
  },
};

const SteelPipe: Recipe = {
  machine: "constructor",
  inputs: [{ part: "steel_ingot", perMin: 30 }],
  output: {
    part: "steel_pipe",
    perMin: 20,
  },
};

const SteelIngot: Recipe = {
  machine: "smelter",
  inputs: [
    { part: "iron", perMin: 45 },
    { part: "coal", perMin: 45 },
  ],
  output: {
    part: "steel_ingot",
    perMin: 45,
  },
};

const ModularFrame: Recipe = {
  machine: "assembler",
  inputs: [
    { part: "steel_pipe", perMin: 10 },
    { part: "recinforced_plate", perMin: 2 },
  ],
  output: {
    part: "modular_frame",
    perMin: 3,
  },
};

const IronPlate: Recipe = {
  machine: "constructor",
  inputs: [{ part: "iron_ingot", perMin: 30 }],
  output: {
    part: "iron_plate",
    perMin: 15,
  },
};

const ReinforcedIronPlate: Recipe = {
  machine: "assembler",
  inputs: [
    { part: "iron_plate", perMin: 30 },
    { part: "screw", perMin: 60 },
  ],
  output: {
    part: "recinforced_plate",
    perMin: 5,
  },
};

const IndustrialBeam: Recipe = {
  machine: "constructor",
  inputs: [
    { part: "steel_beam", perMin: 24 },
    { part: "concrete", perMin: 30 },
  ],
  output: {
    part: "industrial_beam",
    perMin: 6,
  },
};

const HeavyModularFrame: Recipe = {
  machine: "manufacturer",
  inputs: [
    { part: "modular_frame", perMin: 10 },
    { part: "steel_beam", perMin: 30 },
    { part: "industrial_beam", perMin: 10 },
    { part: "screw", perMin: 200 },
  ],
  output: {
    part: "heavy_modular_frame",
    perMin: 2,
  },
};

const Plastic: Recipe = {
  machine: "refinery",
  inputs: [{ part: "oil", perMin: 30 }],
  output: {
    part: "plastic",
    perMin: 20,
  },
};

const Rubber: Recipe = {
  machine: "refinery",
  inputs: [{ part: "oil", perMin: 30 }],
  output: {
    part: "rubber",
    perMin: 20,
  },
};

const Concrete: Recipe = {
  machine: "constructor",
  inputs: [{ part: "limestone", perMin: 45 }],
  output: {
    part: "concrete",
    perMin: 15,
  },
};

const CopperSheet: Recipe = {
  machine: "constructor",
  inputs: [{ part: "copper_ingot", perMin: 20 }],
  output: {
    part: "copper_sheet",
    perMin: 10,
  },
};

const Wire: Recipe = {
  machine: "constructor",
  inputs: [{ part: "copper_ingot", perMin: 15 }],
  output: {
    part: "wire",
    perMin: 30,
  },
};

const Cable: Recipe = {
  machine: "constructor",
  inputs: [{ part: "wire", perMin: 60 }],
  output: {
    part: "cable",
    perMin: 30,
  },
};

const Screw: Recipe = {
  machine: "constructor",
  inputs: [{ part: "iron_rod", perMin: 10 }],
  output: {
    part: "screw",
    perMin: 40,
  },
};

const IronRod: Recipe = {
  machine: "constructor",
  inputs: [{ part: "iron_ingot", perMin: 15 }],
  output: {
    part: "iron_rod",
    perMin: 15,
  },
};

export const Computer: Recipe = {
  machine: "manufacturer",
  inputs: [
    { part: "circut_board", perMin: 25 },
    { part: "cable", perMin: 22.5 },
    { part: "plastic", perMin: 45 },
    { part: "screw", perMin: 130 },
  ],
  output: {
    part: "computer",
    perMin: 2,
  },
};

export const CircutBoard: Recipe = {
  machine: "assembler",
  inputs: [
    { part: "plastic", perMin: 30 },
    { part: "copper_sheet", perMin: 15 },
  ],
  output: {
    part: "circut_board",
    perMin: 7.5,
  },
};

export const Quickwire: Recipe = {
  machine: "constructor",
  inputs: [{ part: "caterium_ingot", perMin: 12 }],
  output: {
    part: "quick_wire",
    perMin: 60,
  },
};

export const RawResource = (nodeType: ResourceNode): Recipe => ({
  machine: "miner",
  inputs: [],
  output: {
    part: nodeType,
    perMin: 1,
  },
});

export const recipeBook: RecipeBook = {
  steel_beam: SteelBeam,
  steel_pipe: SteelPipe,
  steel_ingot: SteelIngot,
  iron_ingot: IronIngot,
  modular_frame: ModularFrame,
  recinforced_plate: ReinforcedIronPlate,
  screw: Screw,
  industrial_beam: IndustrialBeam,
  heavy_modular_frame: HeavyModularFrame,
  iron_plate: IronPlate,
  computer: Computer,
  circut_board: CircutBoard,
  quick_wire: Quickwire,
  caterium_ingot: CateriumIngot,
  copper_ingot: CopperIngot,
  plastic: Plastic,
  rubber: Rubber,
  concrete: Concrete,
  cable: Cable,
  copper_sheet: CopperSheet,
  wire: Wire,
  iron_rod: IronRod,
  oil: RawResource("oil"),
  water: RawResource("water"),
  caterium: RawResource("caterium"),
  coal: RawResource("coal"),
  iron: RawResource("iron"),
  copper: RawResource("copper"),
  limestone: RawResource("limestone"),
};
