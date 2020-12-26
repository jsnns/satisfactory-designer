import classNames from "classnames";
import React from "react";
import { useRecoilState } from "recoil";
import { getRecipeName } from "../../../../data/getRecipeName";
import { getRecipes } from "../../../../data/recipies/alt";
import { roundPerMin } from "../../../../data/round";
import { Select } from "../../../../library";
import { currentModal } from "../../../../state/modal";
import { selectedRecipe } from "../../../../state/recipe";
import {
  Recipe,
  RecipePart,
  recipePartReadable,
} from "../../../../types/Recipe";
import { SelectRecipeModal } from "../../DesignConfiguration/SelectRecipeModal/SelectRecipeModal";
interface Props {
  part: RecipePart;
  perMin: number;
  isOutputPart: boolean;
}

export const ProductionTableRow: React.FC<Props> = ({
  part,
  perMin,
  isOutputPart,
}) => {
  const [recipe, setRecipe] = useRecoilState(selectedRecipe(part));
  const [, setModal] = useRecoilState(currentModal);

  const openModal = () => {
    setModal({
      element: <SelectRecipeModal part={part} />,
      title: "Configure Recipe",
    });
  };

  const recipeOptions = getRecipes(part).map((recipe) => ({
    label: getRecipeName(recipe),
    value: recipe,
  }));

  return (
    <tr className="ProductionTableRow">
      <td
        className={classNames({
          Highlight: isOutputPart,
        })}
      >
        {recipePartReadable(part)}
      </td>
      <td>{roundPerMin(perMin)}/min</td>
      <td>
        <Select
          selected={[recipe]}
          options={recipeOptions}
          onSelectionChange={(recipe: Recipe[]) => setRecipe(recipe[0])}
        />

        {/* <span className="Link" onClick={openModal}>
          {getRecipeName(recipe)}
        </span> */}
      </td>
    </tr>
  );
};
