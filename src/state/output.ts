import { atom, atomFamily, selector } from "recoil";
import {
  getProductionLineItems,
  getRecipeChain,
  sumProductionLineItems,
} from "../data/recipies/chain";
import { Part } from "../types/Part";
import { RecipePart } from "../types/Recipe";

export const enabledOutputParts = atom<Part[]>({
  default: [],
  key: "EnabledOutputParts",
});

export const targetOutput = atomFamily<number, Part>({
  key: "TargetOutput",
  default: 0,
});

export const totalProduction = selector<{ part: RecipePart; perMin: number }[]>(
  {
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

      return sumProductionLineItems(productionLineItems);
    },
  }
);
