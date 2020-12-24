import { DefaultValue, selector } from "recoil";
import { Schematic } from "../types/Schematic";
import { enabledInputNodes, selectedInputNodes } from "./input";
import { enabledOutputParts, targetOutput } from "./output";
import { selectedRecipe } from "./recipe";

export const schematicState = selector<Schematic>({
  key: "Schematic",
  get: ({ get }) => {
    const outputParts = get(enabledOutputParts);
    const inputResources = get(enabledInputNodes);

    return {
      enabledInputResources: inputResources,
      inputs: inputResources.map((resource) => ({
        resource,
        nodeCount: get(selectedInputNodes(resource)),
      })),
      enabledOutputParts: outputParts,
      outputs: outputParts.map((part) => ({
        part,
        perMin: get(targetOutput(part)),
        recipe: get(selectedRecipe(part)),
      })),
    };
  },
  set: ({ get, set }, newSchematic) => {
    if (newSchematic instanceof DefaultValue) return;

    set(enabledOutputParts, newSchematic.enabledOutputParts);
    newSchematic.outputs.forEach(({ part, perMin, recipe }) => {
      set(selectedRecipe(part), recipe);
      set(targetOutput(part), perMin);
    });

    set(enabledInputNodes, newSchematic.enabledInputResources);
    newSchematic.inputs.forEach(({ resource, nodeCount }) => {
      set(selectedInputNodes(resource), nodeCount);
    });
  },
});
