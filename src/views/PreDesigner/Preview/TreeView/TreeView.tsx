import React from "react";
import { useRecoilValue } from "recoil";
import { DescribeRaw } from "../../../../components/Recipe/DescribeRaw";
import { DescribeRecipe } from "../../../../components/Recipe/DescribeRecipe";
import { recipeChain } from "../../../../state/recipe";
import { Part } from "../../../../types/Part";
import { RecipeChain } from "../../../../types/Recipe";

interface Props {
  type: Part;
}

interface RecipeProps {
  level?: number;
  chain: RecipeChain;
}

const Recipe: React.FC<RecipeProps> = ({ chain, level = 0 }) => {
  return (
    <div style={{ marginLeft: level * 10 }}>
      {chain.isRaw ? (
        <DescribeRaw chain={chain} />
      ) : (
        <DescribeRecipe chain={chain} />
      )}

      {chain.nexts.map((nextChain) => (
        <Recipe chain={nextChain} level={level + 1} />
      ))}
    </div>
  );
};

export const TreeView: React.FC<Props> = ({ type }) => {
  const chain = useRecoilValue(recipeChain(type));

  if (chain.outputScalar === 0) return null;

  return (
    <div>
      <Recipe chain={chain} />
    </div>
  );
};
