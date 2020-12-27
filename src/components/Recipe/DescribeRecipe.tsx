import React from "react";
import { roundPerMin } from "../../data/round";
import { RecipeChain, recipePartReadable } from "../../types/Recipe";
import { PartIcon } from "../PartIcon/PartIcon";
import "./Recipe.scss";

export const DescribeRecipe: React.FC<{ chain: RecipeChain }> = ({ chain }) => {
  return (
    <div className="DescribeRecipe">
      <div className="RowBody">
        {recipePartReadable(chain.recipe.output.part)}{" "}
        {roundPerMin(chain.recipe.output.perMin * chain.machinesNeeded)}/min:{" "}
        <span className="Machine">
          {Math.ceil(chain.machinesNeeded)} {chain.recipe.machine}
        </span>
        <span className="At">
          {" "}
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
