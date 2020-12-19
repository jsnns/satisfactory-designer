import { MachineType } from "./Machine";
import { Part } from "./Part";
import { ResourceNode } from "./ResourceNode";

export type RecipePart = Part | ResourceNode;

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
