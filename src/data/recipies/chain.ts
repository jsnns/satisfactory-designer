import { selectedRecipe } from "../../state/recipe";
import { RecipeChain, RecipeUnit } from "../../types/Recipe";
import { isResourceNodeType } from "../../types/ResourceNode";
import { recipeBook } from "./default";

// Represent chain of all recipies including total required at each step
// steel_beam
//  - steel_ingot
//      - iron
//      - coal
export const getRecipeChain = (
  unit: RecipeUnit,
  requriedOutput: number
): RecipeChain => {
  if (isResourceNodeType(unit.part)) {
    return {
      recipe: {
        ...recipeBook[unit.part],
        output: {
          part: unit.part,
          perMin: requriedOutput,
        },
      },
      isRaw: true,
      outputScalar: 1,
    };
  }

  const recipe = selectedRecipe(unit.part);
  const outputScalar = requriedOutput / recipe.output.perMin;

  return {
    recipe,
    isRaw: false,
    outputScalar,
    nexts: recipe.inputs.map((unit) => {
      return getRecipeChain(unit, unit.perMin * outputScalar);
    }),
  };
};
