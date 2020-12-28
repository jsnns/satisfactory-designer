import classNames from "classnames";
import React from "react";
import { useRecoilState } from "recoil";
import { PerMin } from "../../../../components/PerMin/PerMin";
import { getRecipeName } from "../../../../data/getRecipeName";
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
  const [recipe] = useRecoilState(selectedRecipe(part));
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
      <td>
        <PerMin perMin={perMin} />
      </td>
      <td>
        <span className="Link" onClick={openModal}>
          {getRecipeName(recipe)}
        </span>
      </td>
    </tr>
  );
};
