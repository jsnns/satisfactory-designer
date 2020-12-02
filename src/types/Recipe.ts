import { PartType } from "./Part";
import { ResourceNodeType } from "./ResourceNode";

export interface RecipeUnit {
  part: PartType | ResourceNodeType;
  perMin: number;
}

export interface Recipe {
  inputs: RecipeUnit[];
  output: RecipeUnit;
}

export type RecipeChain = RecipeUnit & {
  nexts?: RecipeChain[];
  outputScalar: number;
};
