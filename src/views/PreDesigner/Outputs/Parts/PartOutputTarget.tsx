import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { NumberInput } from "../../../../library/NumberInput/NumberInput";
import { targetOutput } from "../../../../state/output";
import { selectedRecipe } from "../../../../state/recipe";
import { Part, partTypeReadable } from "../../../../types/Part";

interface Props {
  type: Part;
}

export const PartOutputTarget: React.FC<Props> = ({ type }) => {
  const [output, setOutput] = useRecoilState(targetOutput(type));
  const recipe = useRecoilValue(selectedRecipe(type));

  const baseFactor = recipe.output.perMin;

  return (
    <NumberInput
      leftElement={
        <div className="ActionButtons">
          <button onClick={() => setOutput(baseFactor)}>
            Base ({baseFactor})
          </button>
          <button onClick={() => setOutput(output / 10)}>⅒</button>
          <button onClick={() => setOutput(output * 10)}>x10</button>
        </div>
      }
      value={output}
      onChange={setOutput}
      label={`${partTypeReadable[type]} (Factor ${baseFactor}x)`}
    />
  );
};
