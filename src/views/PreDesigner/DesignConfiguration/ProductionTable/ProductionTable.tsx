import React from "react";
import { useRecoilValue } from "recoil";
import { totalProduction } from "../../../../state/output";
import "./ProductionTable.scss";
import { ProductionTableRow } from "./ProductionTableRow";

interface Props {}

export const ProductionTable: React.FC<Props> = () => {
  const production = useRecoilValue(totalProduction);

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
          {production.map(({ part, perMin }) => (
            <ProductionTableRow part={part} perMin={perMin} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
