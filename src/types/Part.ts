export type Part = typeof PARTS[number];
export const PARTS = [
  "steel_pipe",
  "steel_beam",
  "steel_ingot",
  "iron_ingot",
  "recinforced_plate",
  "screw",
  "industrial_beam",
  "iron_plate",
  "modular_frame",
  "heavy_modular_frame",
  "computer",
  "rubber",
  "quick_wire",
  "circut_board",
  "plastic",
  "caterium_ingot",
  "copper_ingot",
] as const;

export const partTypeReadable: {
  [key in Part]: string;
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
