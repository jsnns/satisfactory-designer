import { atomFamily, selectorFamily } from "recoil";
import { getRecipeChain } from "../data/recipies/chain";
import { RawResource, recipeBook } from "../data/recipies/default";
import { Part } from "../types/Part";
import { Recipe, RecipeChain, RecipePart } from "../types/Recipe";
import { targetOutput } from "./factoryOutput/atoms";

export const selectedRecipe = atomFamily<Recipe, RecipePart>({
  default: (parameter) => recipeBook[parameter] || RawResource(parameter),
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
