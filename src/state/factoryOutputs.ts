import { atom, atomFamily, selectorFamily } from "recoil";
import { SolidSteelIngot } from "../data/recipies/alt";
import { getRecipeChain } from "../data/recipies/chain";
import { OptionalRecipeBook } from "../data/recipies/default";
import { Part } from "../types/Part";
import { RecipeChain } from "../types/Recipe";

export const enabledOutputParts = atom<Part[]>({
  default: [],
  key: "EnabledOutputParts",
});

export const targetOutput = atomFamily<number, Part>({
  key: "TargetOutput",
  default: 0,
});

export const selectedAltRecipes = atomFamily<OptionalRecipeBook, Part>({
  key: "SelectedAltRecipes",
  default: {
    steel_ingot: SolidSteelIngot,
  },
});

export const selectedRecipe = selectorFamily<RecipeChain, Part>({
  key: "SelectedRecipeChain",
  get: (part) => ({ get }) => {
    return getRecipeChain(
      {
        part: part,
        perMin: get(targetOutput(part)),
      },
      get(targetOutput(part)),
      get(selectedAltRecipes(part))
    );
  },
});
