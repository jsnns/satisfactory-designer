import { PartType } from "../types/Part";
import { ResourceNodeType } from "../types/ResourceNode";

export const resourceNodeTypeReadable: {
  [key in ResourceNodeType]: string;
} = {
  copper: "Copper",
  iron: "Iron",
  limestone: "Limestone",
  coal: "Coal",
  oil: "Oil",
  caterium: "Caterium",
  water: "Water",
};

export const partTypeReadable: {
  [key in PartType]: string;
} = {
  steel_beam: "Steel Beam",
  steel_pipe: "Steel Pipe",
  steel_ingot: "Steel Ingot",
  iron_ingot: "Iron Ingot",
  heavy_modular_frame: "HMF",
  industrial_beam: "Ind. Beam",
  iron_plate: "Iron Plate",
  modular_frame: "Modular Frame",
  recinforced_plate: "Recinforced Plate",
  screw: "Screw",
  caterium_ingot: "Caterium Ingot",
  circut_board: "Circut Board",
  computer: "Computer",
  copper_ingot: "Copper Ingot",
  plastic: "Plastic",
  quick_wire: "Quick Wire",
  rubber: "Rubber",
};
