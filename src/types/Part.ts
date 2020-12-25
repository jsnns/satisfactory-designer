export type Part = typeof PARTS[number];
export const PARTS = [
  "steel_pipe",
  "steel_beam",
  "encased_industrial_beam",
  "iron_rod",
  "iron_plate",
  "screw",
  "reinforced_iron_plate",
  "modular_frame",
  "heavy_modular_frame",
  "computer",
  "circuit_board",
  "rubber",
  "plastic",
  "wire",
  "cable",
  "copper_sheet",
  "quickwire",
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
  encased_industrial_beam: "Encased Industrial Beam",
  iron_plate: "Iron Plate",
  modular_frame: "Modular Frame",
  reinforced_iron_plate: "Reinforced Iron Plate",
  screw: "Screw",
  caterium_ingot: "Caterium Ingot",
  circuit_board: "Circuit Board",
  computer: "Computer",
  copper_ingot: "Copper Ingot",
  plastic: "Plastic",
  quickwire: "Quickwire",
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
