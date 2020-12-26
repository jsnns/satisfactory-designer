import { DefaultValue, selector } from "recoil";
import { Schematic } from "../types/Schematic";
import { factoryInputState } from "./factoryInput";
import { factoryOutputState } from "./factoryOutput";
import { selectedRecipe } from "./recipe";

export const schematicState = selector<Schematic>({
  key: "Schematic",
  get: ({ get }) => {
    const outputParts = get(factoryOutputState.enabledOutputParts);
    const inputResources = get(factoryInputState.enabledInputNodes);

    return {
      enabledInputResources: inputResources,
      inputs: inputResources.map((resource) => ({
        resource,
        nodeCount: get(factoryInputState.input(resource)),
      })),
      enabledOutputParts: outputParts,
      outputs: outputParts.map((part) => ({
        part,
        perMin: get(factoryOutputState.targetOutput(part)),
        recipe: get(selectedRecipe(part)),
      })),
    };
  },
  set: ({ set }, newSchematic) => {
    if (newSchematic instanceof DefaultValue) return;

    set(factoryOutputState.enabledOutputParts, newSchematic.enabledOutputParts);
    newSchematic.outputs.forEach(({ part, perMin, recipe }) => {
      set(selectedRecipe(part), recipe);
      set(factoryOutputState.targetOutput(part), perMin);
    });

    set(
      factoryInputState.enabledInputNodes,
      newSchematic.enabledInputResources
    );
    newSchematic.inputs.forEach(({ resource, nodeCount }) => {
      set(factoryInputState.input(resource), nodeCount);
    });
  },
});
