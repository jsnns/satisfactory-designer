import { DefaultValue, selector } from "recoil";
import { Schematic } from "../types/Schematic";
import { enabledOutputParts, targetOutput } from "./output";
import { selectedRecipe } from "./recipe";

export const schematicState = selector<Schematic>({
  key: "Schematic",
  get: ({ get }) => {
    const outputParts = get(enabledOutputParts);

    return {
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
  },
});
