import React from "react";
import { useRecoilValue } from "recoil";
import { DescribeRaw } from "../../../../components/Recipe/DescribeRaw";
import { DescribeRecipe } from "../../../../components/Recipe/DescribeRecipe";
import { selectedRecipe } from "../../../../state/output";
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

      {chain.nexts &&
        chain.nexts.map((nextChain) => (
          <Recipe chain={nextChain} level={level + 1} />
        ))}
    </div>
  );
};

export const TreeView: React.FC<Props> = ({ type }) => {
  const recipeChain = useRecoilValue(selectedRecipe(type));

  if (recipeChain.outputScalar === 0) return null;

  return (
    <div>
      <Recipe chain={recipeChain} />
    </div>
  );
};
