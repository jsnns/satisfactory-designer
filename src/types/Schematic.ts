import { Part } from "./Part";
import { Recipe } from "./Recipe";
import { PurityCount, ResourceNode } from "./ResourceNode";

export interface Schematic {
  enabledInputResources: ResourceNode[];
  enabledOutputParts: Part[];
  inputs: {
    resource: ResourceNode;
    nodeCount: PurityCount;
  }[];
  outputs: {
    part: Part;
    perMin: number;
    recipe: Recipe;
  }[];
}
