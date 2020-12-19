import React from "react";
import { RecipeChain } from "../../types/Recipe";

export const DescribeRecipe: React.FC<{ chain: RecipeChain }> = ({ chain }) => {
  return (
    <div>
      {chain.recipe.output.part}{" "}
      {chain.recipe.output.perMin * chain.outputScalar}/min:{" "}
      {Math.ceil(chain.outputScalar)} {chain.recipe.machine} @{" "}
      {Math.ceil((chain.outputScalar * 100) / Math.ceil(chain.outputScalar))}%
    </div>
  );
};
