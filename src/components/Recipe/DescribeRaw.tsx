import React from "react";
import { RecipeChain } from "../../types/Recipe";

export const DescribeRaw: React.FC<{ chain: RecipeChain }> = ({ chain }) => {
  return (
    <div>
      {chain.recipe.output.part} {chain.recipe.output.perMin}/min
    </div>
  );
};
