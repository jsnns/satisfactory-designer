import classNames from "classnames";
import React from "react";
import { useRecoilValue } from "recoil";
import { Checkbox } from "../../library";
import { recipeChain } from "../../state/recipe";
import { Part } from "../../types/Part";
import { RecipeChain } from "../../types/Recipe";
import { DescribeRaw } from "../Recipe/DescribeRaw";
import { DescribeRecipe } from "../Recipe/DescribeRecipe";
import "./TreeView.scss";

interface Props {
  type: Part;
}

interface RecipeProps {
  level?: number;
  chain: RecipeChain;
}

const colors = ["#6CA8D4", "#FA9549", "#86A294", "#E87D4D", "#BBDE92"];

const Recipe: React.FC<RecipeProps> = ({ chain, level = 0 }) => {
  const [isFinished, setIsFinished] = React.useState(false);
  return (
    <ul>
      <li
        style={{ color: colors[level - 1] }}
        className={classNames({
          finished: isFinished,
        })}
      >
        <>
          {chain.isRaw ? (
            <DescribeRaw chain={chain} />
          ) : (
            <DescribeRecipe chain={chain} />
          )}
          <Checkbox
            checked={isFinished}
            onChange={() => setIsFinished(!isFinished)}
          />
        </>
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
    <div className="TreeView">
      <Recipe chain={chain} />
    </div>
  );
};
