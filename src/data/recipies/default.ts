import { PartType } from "../../types/Part";
import { Recipe } from "../../types/Recipe";

export type RecipeBook = { [key in PartType]: Recipe };
export type OptionalRecipeBook = { [key in PartType]?: Recipe };

const IronIngot: Recipe = {
  inputs: [{ part: "iron", perMin: 30 }],
  output: {
    part: "iron_ingot",
    perMin: 30,
  },
};

const SteelBeam: Recipe = {
  inputs: [{ part: "steel_ingot", perMin: 60 }],
  output: {
    part: "steel_beam",
    perMin: 20,
  },
};

const SteelPipe: Recipe = {
  inputs: [{ part: "steel_ingot", perMin: 30 }],
  output: {
    part: "steel_pipe",
    perMin: 20,
  },
};

const SteelIngot: Recipe = {
  inputs: [
    { part: "iron", perMin: 45 },
    { part: "coal", perMin: 45 },
  ],
  output: {
    part: "steel_ingot",
    perMin: 45,
  },
};

export const recipeFor: RecipeBook = {
  steel_beam: SteelBeam,
  steel_pipe: SteelPipe,
  steel_ingot: SteelIngot,
  iron_ingot: IronIngot,
};
