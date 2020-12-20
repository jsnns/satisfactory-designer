import React from "react";
import { roundPerMin } from "../../data/round";
import { RecipeChain, recipePartReadable } from "../../types/Recipe";

export const DescribeRecipe: React.FC<{ chain: RecipeChain }> = ({ chain }) => {
  return (
    <div>
      {recipePartReadable(chain.recipe.output.part)}{" "}
      {roundPerMin(chain.recipe.output.perMin * chain.machinesNeeded)}/min:{" "}
      {Math.ceil(chain.machinesNeeded)} {chain.recipe.machine}
      {/* {Math.ceil((chain.machinesNeeded * 100) / Math.ceil(chain.machinesNeeded))}% */}
    </div>
  );
};
