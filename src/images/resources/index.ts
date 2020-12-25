import { RecipePart } from "../../types/Recipe";
import coal from "./coal.png";
import industrial_beam from "./encased_industrial_beam.png";
import iron from "./iron.png";
import iron_ingot from "./iron_ingot.png";
import limestone from "./limestone.png";
import steel_beam from "./steel_beam.png";
import steel_ingot from "./steel_ingot.png";
import steel_pipe from "./steel_pipe.png";

export const resourceImage: { [key in RecipePart]?: string } = {
  steel_pipe,
  steel_ingot,
  steel_beam,
  industrial_beam,
  iron_ingot,
  iron,
  coal,
  limestone,
};
