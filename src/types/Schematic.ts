import { Part } from "./Part";
import { Recipe } from "./Recipe";

export interface Schematic {
  enabledOutputParts: Part[];
  outputs: {
    part: Part;
    perMin: number;
    recipe: Recipe;
  }[];
}
