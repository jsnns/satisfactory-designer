import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { NumberInput } from "../../../../library/NumberInput/NumberInput";
import { factoryOutputState } from "../../../../state/factoryOutput";
import { selectedRecipe } from "../../../../state/recipe";
import { Part, partTypeReadable } from "../../../../types/Part";

interface Props {
  type: Part;
}

export const PartOutputTarget: React.FC<Props> = ({ type }) => {
  const [output, setOutput] = useRecoilState(
    factoryOutputState.targetOutput(type)
  );
  const recipe = useRecoilValue(selectedRecipe(type));
  const max = useRecoilValue(
    factoryOutputState.maxOutputTargetByInputResources(type)
  );

  const baseFactor = recipe.output.perMin;

  return (
    <NumberInput
      leftElement={
        <div className="ActionButtons">
          {max > 0 && max !== output && max !== Infinity && (
            <button onClick={() => setOutput(max)}>Max ({max})</button>
          )}
          <button onClick={() => setOutput(baseFactor)}>
            Recipe ({baseFactor})
          </button>
          <button onClick={() => setOutput(output / 2)}>½</button>
          <button onClick={() => setOutput(output * 2)}>x2</button>
        </div>
      }
      value={output}
      onChange={setOutput}
      label={`${partTypeReadable[type]} (Factor ${baseFactor}x)`}
    />
  );
};
