import { GetRecoilValue } from "recoil";
import { baseMachineClock } from "../../state/designConfig";
import { LineItem } from "../../state/factoryOutput/outputTypes";
import { selectedRecipe } from "../../state/recipe";
import { PARTS } from "../../types/Part";
import { RecipeChain, RecipePart, RecipeUnit } from "../../types/Recipe";
import {
  isResourceNodeType,
  ResourceNode,
  RESOURCE_NODE,
} from "../../types/ResourceNode";
import { RawResource, recipeBook } from "./default";

export const getRawInputRequired = ({ get }: { get: GetRecoilValue }) => (
  unit: RecipeUnit
): { node: ResourceNode; perMin: number }[] => {
  const lineItems = buildProductionLineItemSum(
    getProductionLineItems(getRecipeChain({ get })(unit))
  );

  return RESOURCE_NODE.map((node) => ({
    node,
    perMin: lineItems[node] || 0,
  }));
};

export const buildProductionLineItemSum = (
  productionLineItems: LineItem[]
): { [key in RecipePart]?: number } => {
  const sum: { [key in RecipePart]?: number } = {};

  productionLineItems.forEach(({ part, perMin }) => {
    sum[part] = (sum[part] || 0) + perMin;
  });

  return sum;
};

export const sumProductionLineItems = (
  productionLineItems: LineItem[]
): LineItem[] => {
  const sum = buildProductionLineItemSum(productionLineItems);
  const summedProductionLineItems: LineItem[] = [];

  const addItem = (part: RecipePart) => {
    if (sum[part]) {
      summedProductionLineItems.push({
        part,
        perMin: sum[part] || 0,
      });
    }
  };

  PARTS.forEach(addItem);
  RESOURCE_NODE.forEach(addItem);

  return summedProductionLineItems;
};

export const getProductionLineItems = (chain: RecipeChain): LineItem[] => {
  const productionLineItems: LineItem[] = [];

  productionLineItems.push({
    part: chain.recipe.output.part,
    perMin: chain.recipe.output.perMin * chain.machinesNeeded,
  });

  chain.nexts.forEach((nextChain) => {
    productionLineItems.push(...getProductionLineItems(nextChain));
  });

  return productionLineItems;
};

export const getRecipeChain = ({ get }: { get: GetRecoilValue }) => (
  unit: RecipeUnit
): RecipeChain => {
  if (isResourceNodeType(unit.part)) {
    return {
      recipe: {
        ...(recipeBook[unit.part] || RawResource(unit.part)),
        output: {
          part: unit.part,
          perMin: unit.perMin,
        },
      },
      isRaw: true,
      machinesNeeded: 1,
      nexts: [],
    };
  }

  const recipe = get(selectedRecipe(unit.part));
  const machinesNeeded =
    unit.perMin / get(baseMachineClock(recipe.machine)) / recipe.output.perMin;

  return {
    recipe,
    isRaw: false,
    machinesNeeded,
    nexts: recipe.inputs.map((unit) =>
      getRecipeChain({ get })({
        part: unit.part,
        perMin: unit.perMin * machinesNeeded,
      })
    ),
  };
};
