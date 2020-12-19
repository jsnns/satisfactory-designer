import { GetRecoilValue } from "recoil";
import { selectedRecipe } from "../../state/recipe";
import { RecipeChain, RecipeUnit } from "../../types/Recipe";
import { isResourceNodeType } from "../../types/ResourceNode";
import { recipeBook } from "./default";

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
      outputScalar: 1,
      nexts: [],
    };
  }

  const recipe = get(selectedRecipe(unit.part));
  const outputScalar = unit.perMin / recipe.output.perMin;

  return {
    recipe,
    isRaw: false,
    outputScalar,
    nexts: recipe.inputs.map((unit) =>
      getRecipeChain({ get })({
        part: unit.part,
        perMin: unit.perMin * outputScalar,
      })
    ),
  };
};
