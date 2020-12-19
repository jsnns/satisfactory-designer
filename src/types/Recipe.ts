import { MachineType } from "./Machine";
import { Part, partTypeReadable } from "./Part";
import {
  isResourceNodeType,
  ResourceNode,
  resourceNodeTypeReadable,
} from "./ResourceNode";

export type RecipePart = Part | ResourceNode;

export const recipePartReadable = (part: RecipePart): string =>
  isResourceNodeType(part)
    ? resourceNodeTypeReadable[part]
    : partTypeReadable[part];

export interface RecipeUnit {
  part: RecipePart;
  perMin: number;
}

export interface Recipe {
  name?: string; // used for alt recipes
  machine: MachineType;
  inputs: RecipeUnit[];
  output: RecipeUnit;
}

export type RecipeChain = {
  nexts: RecipeChain[];
  isRaw: boolean;
  outputScalar: number;
  recipe: Recipe;
};
