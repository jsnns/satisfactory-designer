import React from "react";
import { useRecoilValue } from "recoil";
import { recipeChain } from "../../state/recipe";
import { Part } from "../../types/Part";
import { RecipeChain } from "../../types/Recipe";
import { DescribeRaw } from "../Recipe/DescribeRaw";
import { DescribeRecipe } from "../Recipe/DescribeRecipe";

interface Props {
  type: Part;
}

interface RecipeProps {
  level?: number;
  chain: RecipeChain;
}

const colors = ["#FA9549", "#6CA8D4", "#E87D4D", "#86A294", "#BBDE92"];

const Recipe: React.FC<RecipeProps> = ({ chain, level = 0 }) => {
  return (
    <ul>
      <li style={{ color: colors[level - 1] }}>
        {chain.isRaw ? (
          <DescribeRaw chain={chain} />
        ) : (
          <DescribeRecipe chain={chain} />
        )}
      </li>

      {chain.nexts.map((nextChain) => (
        <Recipe
          key={`recipe${level}${JSON.stringify(nextChain)}`}
          chain={nextChain}
          level={level + 1}
        />
      ))}
    </ul>
  );
};

export const TreeView: React.FC<Props> = ({ type }) => {
  const chain = useRecoilValue(recipeChain(type));

  if (chain.machinesNeeded === 0) return null;

  return (
    <div>
      <Recipe chain={chain} />
    </div>
  );
};
