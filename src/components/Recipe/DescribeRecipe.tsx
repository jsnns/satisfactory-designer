import React from "react";
import { RecipeChain, recipePartReadable } from "../../types/Recipe";
import { PartIcon } from "../PartIcon/PartIcon";
import { PerMin } from "../PerMin/PerMin";
import "./Recipe.scss";

export const DescribeRecipe: React.FC<{ chain: RecipeChain }> = ({ chain }) => {
  return (
    <div className="DescribeRecipe">
      <div className="RowBody">
        {recipePartReadable(chain.recipe.output.part)}
        <PerMin perMin={chain.recipe.output.perMin * chain.machinesNeeded} />
        <span className="Machine">
          {Math.ceil(chain.machinesNeeded)} {chain.recipe.machine}
        </span>
        <span className="At">
          @{" "}
          {Math.ceil(
            (chain.machinesNeeded * 100) / Math.ceil(chain.machinesNeeded)
          )}
          %
        </span>
      </div>
      <PartIcon part={chain.recipe.output.part} />
    </div>
  );
};
