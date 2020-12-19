import { RecipeChain } from "../types/Recipe";
import { ResourceNode } from "../types/ResourceNode";

type Sum = { [key in ResourceNode]: number };

const defaultSum = {
  caterium: 0,
  coal: 0,
  copper: 0,
  iron: 0,
  limestone: 0,
  oil: 0,
  water: 0,
};

export const calculateRawResourceRequirement = (
  recipeChain: RecipeChain,
  sum = { ...defaultSum }
): Sum => {
  if (recipeChain.isRaw) {
  }

  return sum;
};