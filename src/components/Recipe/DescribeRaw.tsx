import React from "react";
import { roundPerMin } from "../../data/round";
import { RecipeChain } from "../../types/Recipe";

export const DescribeRaw: React.FC<{ chain: RecipeChain }> = ({ chain }) => {
  return (
    <div>
      {chain.recipe.output.part} {roundPerMin(chain.recipe.output.perMin)}/min
    </div>
  );
};
