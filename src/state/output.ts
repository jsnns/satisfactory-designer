import { atom, atomFamily, selector, selectorFamily } from "recoil";
import {
  buildProductionLineItemSum,
  getProductionLineItems,
  getRawInputRequired,
  getRecipeChain,
} from "../data/recipies/chain";
import { roundPerMin } from "../data/round";
import { Part } from "../types/Part";
import { RecipePart } from "../types/Recipe";
import { totalRawInput } from "./input";

export const enabledOutputParts = atom<Part[]>({
  default: [],
  key: "EnabledOutputParts",
});

export const targetOutput = atomFamily<number, Part>({
  key: "TargetOutput",
  default: 0,
});

export const productionLineItems = selector<
  { part: RecipePart; perMin: number }[]
>({
  key: "TotalProduction",
  get: ({ get }) => {
    const endProductProduction = get(enabledOutputParts).map((part) => ({
      part,
      perMin: get(targetOutput(part)),
    }));

    const productionLineItems: { part: RecipePart; perMin: number }[] = [];

    endProductProduction.forEach((unit) => {
      productionLineItems.push(
        ...getProductionLineItems(getRecipeChain({ get })(unit))
      );
    });

    return productionLineItems;
  },
});

export const maxByInput = selectorFamily<number, Part>({
  key: "MaxByInput",
  get: (part) => ({ get }) => {
    const rawFor1 = getRawInputRequired({ get })({
      part,
      perMin: 1,
    });
    const neededLineItems = buildProductionLineItemSum(
      get(productionLineItems)
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

    return roundPerMin(Math.min(...constrainBy) || 0) + get(targetOutput(part));
  },
});
