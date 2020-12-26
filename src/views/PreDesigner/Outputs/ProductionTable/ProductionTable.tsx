import React from "react";
import { useRecoilValue } from "recoil";
import { sumProductionLineItems } from "../../../../data/recipies/chain";
import { factoryOutputState } from "../../../../state/factoryOutput";
import { isPart } from "../../../../types/Part";
import { RecipePart } from "../../../../types/Recipe";
import "./ProductionTable.scss";
import { ProductionTableRow } from "./ProductionTableRow";

interface Props {}

export const ProductionTable: React.FC<Props> = () => {
  const enabledOutputParts = useRecoilValue(
    factoryOutputState.enabledOutputParts
  ) as RecipePart[];
  const lineItems = useRecoilValue(factoryOutputState.allProductionLineItems);
  const summedLineItems = sumProductionLineItems(lineItems)
    .filter(({ part }) => isPart(part))
    .sort((a, b) => b.perMin - a.perMin)
    .sort(
      (a, b) =>
        Number(enabledOutputParts.includes(b.part)) -
        Number(enabledOutputParts.includes(a.part))
    );

  if (summedLineItems.length < 1)
    return <p className="Info">No Production Specified</p>;

  return (
    <div className="ProductionTable">
      <table>
        <thead>
          <tr>
            <th>Part</th>
            <th>Production</th>
            <th>Recipe</th>
          </tr>
        </thead>
        <tbody>
          {summedLineItems.map(({ part, perMin }) => (
            <ProductionTableRow
              isOutputPart={enabledOutputParts.includes(part)}
              key={`productionTableRow${part}`}
              part={part}
              perMin={perMin}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
