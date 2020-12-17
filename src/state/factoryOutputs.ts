import { atomFamily, selector, selectorFamily } from "recoil";
import { SolidSteelIngot } from "../data/recipies/alt";
import { getRecipeChain } from "../data/recipies/chain";
import { OptionalRecipeBook } from "../data/recipies/default";
import { PARTS, PartType } from "../types/Part";
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

export const selectedOutputs = selector<PartType[]>({
  key: "SelectedOutputs",
  get: ({ get }) => {
    const outputTypes: PartType[] = [];

    PARTS.forEach((partType) => {
      const targetOuput = get(targetOutputs(partType));
      if (targetOuput > 0) {
        outputTypes.push(partType);
      }
    });

    return outputTypes;
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
