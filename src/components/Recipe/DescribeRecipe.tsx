import React from "react";
import { roundPerMin } from "../../data/round";
import { RecipeChain } from "../../types/Recipe";

export const DescribeRecipe: React.FC<{ chain: RecipeChain }> = ({ chain }) => {
  return (
    <div>
      {chain.recipe.output.part}{" "}
      {roundPerMin(chain.recipe.output.perMin * chain.outputScalar)}/min:{" "}
      {Math.ceil(chain.outputScalar)} {chain.recipe.machine} @{" "}
      {Math.ceil((chain.outputScalar * 100) / Math.ceil(chain.outputScalar))}%
    </div>
  );
};
