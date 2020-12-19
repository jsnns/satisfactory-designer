import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { getRecipeName } from "../../../../data/getRecipeName";
import { roundPerMin } from "../../../../data/round";
import { currentModal } from "../../../../state/modal";
import { selectedRecipe } from "../../../../state/recipe";
import { RecipePart, recipePartReadable } from "../../../../types/Recipe";
import { SelectRecipeModal } from "../SelectRecipeModal/SelectRecipeModal";

interface Props {
  part: RecipePart;
  perMin: number;
}

export const ProductionTableRow: React.FC<Props> = ({ part, perMin }) => {
  const recipe = useRecoilValue(selectedRecipe(part));
  const [, setModal] = useRecoilState(currentModal);

  const openModal = () => {
    setModal({
      element: <SelectRecipeModal part={part} />,
      title: "Configure Recipe",
    });
  };

  return (
    <tr className="ProductionTableRow">
      <td>{recipePartReadable(part)}</td>
      <td>{roundPerMin(perMin)}/min</td>
      <td>
        <span className="Link" onClick={openModal}>
          {getRecipeName(recipe)}
        </span>
      </td>
    </tr>
  );
};
