import { MachineType } from "./Machine";
import { PartType } from "./Part";
import { ResourceNodeType } from "./ResourceNode";

export type RecipePart = PartType | ResourceNodeType;

export interface RecipeUnit {
  part: RecipePart;
  perMin: number;
}

export interface Recipe {
  machine: MachineType;
  inputs: RecipeUnit[];
  output: RecipeUnit;
}

export type RecipeChain = {
  nexts?: RecipeChain[];
  isRaw: boolean;
  outputScalar: number;
  recipe: Recipe;
};
