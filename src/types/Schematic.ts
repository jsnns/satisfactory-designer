import {
  InputConfiguration,
  PurityCount,
} from "../state/factoryInput/inputTypes";
import { Part } from "./Part";
import { Recipe } from "./Recipe";
import { ResourceNode } from "./ResourceNode";

export interface Schematic {
  enabledInputResources: ResourceNode[];
  enabledOutputParts: Part[];
  inputs: {
    resource: ResourceNode;
    nodeCount: PurityCount;
    inputConfiguration: InputConfiguration;
  }[];
  outputs: {
    part: Part;
    perMin: number;
    recipe: Recipe;
  }[];
}
