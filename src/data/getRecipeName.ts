import { Recipe, recipePartReadable } from "../types/Recipe";

export const getRecipeName = (recipe: Recipe): string => {
  return recipe.name || recipePartReadable(recipe.output.part);
};
