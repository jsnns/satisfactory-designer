import { atomFamily, selectorFamily } from "recoil";
import { getRecipeChain } from "../data/recipies/chain";
import { recipeBook } from "../data/recipies/default";
import { Part } from "../types/Part";
import { Recipe, RecipeChain } from "../types/Recipe";
import { targetOutput } from "./output";

export const selectedRecipe = atomFamily<Recipe, Part>({
  default: (parameter) => recipeBook[parameter],
  key: "SelectedRecipe",
});

export const recipeChain = selectorFamily<RecipeChain, Part>({
  key: "SelectedRecipeChain",
  get: (part) => ({ get }) => {
    const output = get(targetOutput(part));
    return getRecipeChain({ get })({
      part: part,
      perMin: output,
    });
  },
});