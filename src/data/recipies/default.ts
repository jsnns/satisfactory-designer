import { Recipe, RecipePart } from "../../types/Recipe";
import { ResourceNodeType } from "../../types/ResourceNode";
import {
  CateriumCircutBoard,
  CateriumComputer,
  CopperAlloyIngot,
  FusedQuickwire,
  PureCateriumIngot,
} from "./alt";

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

const SteelScrew: Recipe = {
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

// TODO: CORRECT RECIPE
const IndustrialBeam: Recipe = {
  machine: "constructor",
  inputs: [{ part: "steel_beam", perMin: 1 }],
  output: {
    part: "industrial_beam",
    perMin: 1,
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

export const RawResource = (nodeType: ResourceNodeType): Recipe => ({
  machine: "miner",
  inputs: [],
  output: {
    part: nodeType,
    perMin: 1,
  },
});

export const recipeFor: RecipeBook = {
  steel_beam: SteelBeam,
  steel_pipe: SteelPipe,
  steel_ingot: SteelIngot,
  iron_ingot: IronIngot,
  modular_frame: ModularFrame,
  recinforced_plate: ReinforcedIronPlate,
  screw: SteelScrew,
  industrial_beam: IndustrialBeam,
  heavy_modular_frame: HeavyModularFrame,
  iron_plate: IronPlate,
  computer: CateriumComputer,
  circut_board: CateriumCircutBoard,
  quick_wire: FusedQuickwire,
  caterium_ingot: PureCateriumIngot,
  copper_ingot: CopperAlloyIngot,
  plastic: Plastic,
  rubber: Rubber,
  oil: RawResource("oil"),
  water: RawResource("water"),
  caterium: RawResource("caterium"),
  coal: RawResource("coal"),
  iron: RawResource("iron"),
  copper: RawResource("copper"),
  limestone: RawResource("limestone"),
};
