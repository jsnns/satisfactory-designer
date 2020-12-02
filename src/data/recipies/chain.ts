import { RecipeChain, RecipeUnit } from "../../types/Recipe";
import { isResourceNodeType } from "../../types/ResourceNode";
import { OptionalRecipeBook, recipeFor } from "./default";

// Represent chain of all recipies including total required at each step
// steel_beam
//  - steel_ingot
//      - iron
//      - coal
export const getRecipeChain = (
  unit: RecipeUnit,
  requriedOutput: number,
  altRecipes: OptionalRecipeBook = {}
): RecipeChain => {
  if (isResourceNodeType(unit.part)) {
    return {
      part: unit.part,
      perMin: requriedOutput,
      outputScalar: 1,
    };
  }

  const recipe = altRecipes[unit.part] || recipeFor[unit.part];
  const outputScalar = requriedOutput / recipe.output.perMin;

  return {
    part: unit.part,
    perMin: Math.max(recipe.output.perMin * outputScalar),
    outputScalar,
    nexts: recipe.inputs.map((unit) => {
      return getRecipeChain(unit, unit.perMin * outputScalar, altRecipes);
    }),
  };
};
