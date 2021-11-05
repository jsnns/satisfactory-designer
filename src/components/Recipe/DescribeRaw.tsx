import React from "react";
import { roundPerMin } from "../../data/round";
import { RecipeChain } from "../../types/Recipe";
import {
  ResourceNode,
  resourceNodeTypeReadable,
} from "../../types/ResourceNode";
import { PerMin } from "../PerMin/PerMin";

export const DescribeRaw: React.FC<{ chain: RecipeChain }> = ({ chain }) => {
  return (
    <div className="DescribeRecipe">
      <div className="RowBody">
        {resourceNodeTypeReadable[chain.recipe.output.part as ResourceNode]}{" "}
        <PerMin perMin={roundPerMin(chain.recipe.output.perMin)} />
      </div>
    </div>
  );
};
