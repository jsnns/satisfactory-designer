import classNames from "classnames";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { getRecipeName } from "../../../../data/getRecipeName";
import { roundPerMin } from "../../../../data/round";
import { currentModal } from "../../../../state/modal";
import { selectedRecipe } from "../../../../state/recipe";
import { RecipePart, recipePartReadable } from "../../../../types/Recipe";
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
      <td
        className={classNames({
          Highlight: isOutputPart,
        })}
      >
        {recipePartReadable(part)}
      </td>
      <td>{roundPerMin(perMin)}/min</td>
      <td>
        <span className="Link" onClick={openModal}>
          {getRecipeName(recipe)}
        </span>
      </td>
    </tr>
  );
};
