import { PartType } from "../types/Part";
import { ResourceNodeType } from "../types/ResourceNode";

export const resourceNodeTypeReadable: {
  [key in ResourceNodeType]: string;
} = {
  copper: "Copper",
  iron: "Iron",
  limestone: "Limestone",
  coal: "Coal",
};

export const partTypeReadable: {
  [key in PartType]: string;
} = {
  steel_beam: "Steel Beam",
  steel_pipe: "Steel Pipe",
  steel_ingot: "Steel Ingot",
  iron_ingot: "Iron Ingot",
};
