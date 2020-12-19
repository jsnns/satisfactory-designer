import { GetRecoilValue } from "recoil";
import { baseMachineClock } from "../../state/designConfig";
import { selectedRecipe } from "../../state/recipe";
import { PARTS } from "../../types/Part";
import { RecipeChain, RecipePart, RecipeUnit } from "../../types/Recipe";
import { isResourceNodeType, RESOURCE_NODE } from "../../types/ResourceNode";
import { recipeBook } from "./default";

export const buildProductionLineItemSum = (
  productionLineItems: { part: RecipePart; perMin: number }[]
): { [key in RecipePart]?: number } => {
  const sum: { [key in RecipePart]?: number } = {};

  productionLineItems.forEach(({ part, perMin }) => {
    sum[part] = (sum[part] || 0) + perMin;
  });

  return sum;
};

export const sumProductionLineItems = (
  productionLineItems: { part: RecipePart; perMin: number }[]
): { part: RecipePart; perMin: number }[] => {
  const sum = buildProductionLineItemSum(productionLineItems);
  const summedProductionLineItems: { part: RecipePart; perMin: number }[] = [];

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

export const getProductionLineItems = (
  chain: RecipeChain
): { part: RecipePart; perMin: number }[] => {
  const productionLineItems: { part: RecipePart; perMin: number }[] = [];

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
        ...recipeBook[unit.part],
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
