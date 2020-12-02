import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { partTypeReadable } from "../../../../constants/readable";
import {
  selectedRecipe,
  targetOutputs,
} from "../../../../state/factoryOutputs";
import { PartType } from "../../../../types/Part";
import "./Part.scss";

interface Props {
  type: PartType;
}

export const Part: React.FC<Props> = ({ type }) => {
  const [targetOutput, setTargetOutput] = useRecoilState(targetOutputs(type));
  const recipeChain = useRecoilValue(selectedRecipe(type));

  return (
    <div className="Part">
      <div className="PartType">
        <span>{partTypeReadable[type]}</span>
      </div>
      {targetOutput > 0 && console.log(recipeChain)}

      <div className="Options">
        <input
          className="TargetOutput"
          value={targetOutput}
          onChange={(e) => setTargetOutput(Number(e.target.value))}
        />
      </div>
    </div>
  );
};
