export type Part = typeof PARTS[number];
export const PARTS = [
  "steel_pipe",
  "steel_beam",
  "industrial_beam",
  "iron_rod",
  "iron_plate",
  "screw",
  "recinforced_plate",
  "modular_frame",
  "heavy_modular_frame",
  "computer",
  "circut_board",
  "rubber",
  "plastic",
  "wire",
  "cable",
  "copper_sheet",
  "quick_wire",
  "concrete",
  "steel_ingot",
  "iron_ingot",
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
  heavy_modular_frame: "Heavy Modular Frame",
  industrial_beam: "Industrial Beam",
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
  concrete: "Concrete",
  cable: "Cable",
  copper_sheet: "Copper Sheet",
  wire: "Wire",
  iron_rod: "Iron Rod",
};

export const isPart = (part: any): part is Part => {
  return PARTS.includes(part);
};
