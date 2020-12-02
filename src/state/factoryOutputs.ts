import { atomFamily, selectorFamily } from "recoil";
import { SolidSteelIngot } from "../data/recipies/alt";
import { getRecipeChain } from "../data/recipies/chain";
import { OptionalRecipeBook } from "../data/recipies/default";
import { PartType } from "../types/Part";
import { RecipeChain } from "../types/Recipe";

export const targetOutputs = atomFamily<number, PartType>({
  key: "TargetOutputs",
  default: 0,
});

export const selectedAltRecipes = atomFamily<OptionalRecipeBook, PartType>({
  key: "SelectedAltRecipes",
  default: {
    steel_ingot: SolidSteelIngot,
  },
});

export const selectedRecipe = selectorFamily<RecipeChain, PartType>({
  key: "SelectedRecipeChain",
  get: (part) => ({ get }) => {
    return getRecipeChain(
      {
        part: part,
        perMin: get(targetOutputs(part)),
      },
      get(targetOutputs(part)),
      get(selectedAltRecipes(part))
    );
  },
});
