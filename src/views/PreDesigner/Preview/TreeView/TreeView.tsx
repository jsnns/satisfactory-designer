import React from "react";
import { useRecoilValue } from "recoil";
import { selectedRecipe } from "../../../../state/factoryOutputs";
import { PartType } from "../../../../types/Part";
import { RecipeChain } from "../../../../types/Recipe";

interface Props {
  type: PartType;
}

interface RecipeProps {
  level?: number;
  chain: RecipeChain;
}

// {x/min} x {resource_name}: balanced_machines {name} @ balanced_pct

const DescribeRaw: React.FC<{ chain: RecipeChain }> = ({ chain }) => {
  return (
    <div>
      {chain.recipe.output.part} {chain.recipe.output.perMin}/min
    </div>
  );
};

const DescribeRecipe: React.FC<{ chain: RecipeChain }> = ({ chain }) => {
  // descirbe overproduction
  return (
    <div>
      {chain.recipe.output.part} {chain.recipe.output.perMin}/min:{" "}
      {Math.ceil(chain.outputScalar)} {chain.recipe.machine} @{" "}
      {Math.ceil((chain.outputScalar * 100) / Math.ceil(chain.outputScalar))}%
    </div>
  );
};

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
  return (
    <div>
      <Recipe chain={recipeChain} />
    </div>
  );
};
