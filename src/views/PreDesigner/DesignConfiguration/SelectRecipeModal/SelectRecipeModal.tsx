import React from "react";
import { useRecoilState } from "recoil";
import { getRecipeName } from "../../../../data/getRecipeName";
import { altRecipesFor } from "../../../../data/recipies/alt";
import { recipeBook } from "../../../../data/recipies/default";
import { Checkbox } from "../../../../library";
import { Spacer } from "../../../../library/Spacer";
import { selectedRecipe } from "../../../../state/recipe";
import { RecipePart } from "../../../../types/Recipe";

interface Props {
  part: RecipePart;
}

export const SelectRecipeModal: React.FC<Props> = ({ part }) => {
  const [recipe, setRecipe] = useRecoilState(selectedRecipe(part));

  return (
    <div className="SelectRecipeModal">
      <p>Current Recipe: {getRecipeName(recipe)}</p>
      <Spacer size="medium" />
      {[recipeBook[part]].concat(altRecipesFor[part] || []).map((altRecipe) => (
        <Checkbox
          onChange={() => setRecipe(altRecipe)}
          label={getRecipeName(altRecipe)}
          checked={getRecipeName(recipe) === getRecipeName(altRecipe)}
        />
      ))}
    </div>
  );
};
