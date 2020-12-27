import { selector, selectorFamily } from "recoil";
import {
  buildProductionLineItemSum,
  getProductionLineItems,
  getRawInputRequired,
  getRecipeChain,
} from "../../data/recipies/chain";
import { roundPerMin } from "../../data/round";
import { Part } from "../../types/Part";
import { RecipeChain, RecipePart } from "../../types/Recipe";
import { totalRawInput } from "../factoryInput/selectors";
import { recipeChain } from "../recipe";
import { enabledOutputParts, targetOutput } from "./atoms";
import { LineItem } from "./outputTypes";

export const productionLineItems = selectorFamily<LineItem[], Part>({
  key: "LineItems",
  get: (part) => ({ get }) => {
    const productionLineItems: {
      part: RecipePart;
      perMin: number;
    }[] = getProductionLineItems(
      getRecipeChain({ get })({
        part,
        perMin: get(targetOutput(part)),
      })
    );

    return productionLineItems;
  },
});

export const allProductionLineItems = selector<LineItem[]>({
  key: "AllLineItems",
  get: ({ get }) => {
    return get(enabledOutputParts)
      .map((part) => get(productionLineItems(part)))
      .flat();
  },
});

export const maxOutputTargetByInputResources = selectorFamily<number, Part>({
  key: "MaxByInput",
  get: (part) => ({ get }) => {
    const rawFor1 = getRawInputRequired({ get })({
      part,
      perMin: 1,
    });

    const neededLineItems = buildProductionLineItemSum(
      get(productionLineItems(part))
    );

    const constrainBy: number[] = rawFor1
      .map(({ node, perMin }) => {
        let avaliable = get(totalRawInput(node));
        if (neededLineItems[node]) {
          avaliable -= neededLineItems[node] || 0;
        }
        return avaliable / perMin;
      })
      .filter((num) => !isNaN(num));

    return roundPerMin(Math.min(...constrainBy) || 0 + get(targetOutput(part)));
  },
});

export const fullOutputChain = selector<RecipeChain[]>({
  key: "FullOutputChain",
  get: ({ get }) => {
    const parts = get(enabledOutputParts);
    return parts.map((part) => get(recipeChain(part)));
  },
});
